import { useEffect, useRef, useState } from "react";
import botAvatar from "@/assets/vikey-bot-avatar.jpg";

type Msg = {
  id: number;
  role: "bot" | "user";
  text: string;
  quick?: { label: string; action: string }[];
  links?: { label: string; href: string }[];
};

const STORAGE_KEY = "vikey_ai_chat_v1";

const safeGet = (k: string) => {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
};
const safeSet = (k: string, v: string) => {
  try {
    localStorage.setItem(k, v);
  } catch {
    /* noop */
  }
};

const quickAll = [
  { label: "Нужен сайт", action: "site" },
  { label: "Нужен AI-бот", action: "bot" },
  { label: "Нужна автоматизация", action: "auto" },
  { label: "Нужен визуал", action: "visual" },
  { label: "Хочу консультацию", action: "consult" },
  { label: "Оставить контакты", action: "lead" },
];

const serviceReply: Record<string, string> = {
  site: "Собираю сайты и лендинги с AI: быстрая структура, тексты, визуал и адаптив. Обычно 3–7 дней.",
  bot: "Делаю AI-консультантов и чат-ботов для Telegram, сайта и мессенджеров — с сценариями и передачей заявок.",
  auto: "Автоматизирую рутину через n8n / Make / Zapier + AI-агенты: заявки, рассылки, отчёты, обработка данных.",
  visual: "AI-визуал: обложки, баннеры, посты, промо-материалы и графика для сайта и соцсетей.",
  consult: "Консультация — разбираем задачу и подбираем AI-инструменты под ваш случай.",
};

const contactsBlock =
  "Telegram: https://t.me/Vikey_shel\nWhatsApp: https://wa.me/79081747077\nVK: https://vk.com/id867298362\nMAX: https://max.ru/u/f9LHodD0cOKqFcs6UZJNI7fMntxJ8xCv4X4bwued0XRebPD3LFvJ6CgS3cA";

export default function AiConsultantWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [userTurns, setUserTurns] = useState(0);
  const [leadMode, setLeadMode] = useState(false);
  const [lead, setLead] = useState({ name: "", task: "", channel: "", contact: "" });
  const [leadStep, setLeadStep] = useState(0);
  const [done, setDone] = useState(false);
  const idRef = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Deferred mount to keep initial render light
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open || messages.length > 0) return;
    pushBot(
      "Здравствуйте! Я AI-консультант Vikey. Помогу разобраться, какая AI-задача вам нужна: сайт, визуал, чат-бот, автоматизация или внедрение нейросетей.",
      quickAll,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const pushBot = (text: string, quick?: Msg["quick"], links?: Msg["links"]) => {
    setMessages((m) => [...m, { id: idRef.current++, role: "bot", text, quick, links }]);
  };
  const pushUser = (text: string) => {
    setMessages((m) => [...m, { id: idRef.current++, role: "user", text }]);
  };

  const startLead = () => {
    setLeadMode(true);
    setLeadStep(0);
    pushBot("Отлично! Как вас зовут?");
  };

  const buildLeadMessage = (l: typeof lead) =>
    [
      "Заявка с сайта Vikey AI (AI-консультант)",
      `Имя: ${l.name}`,
      `Задача: ${l.task}`,
      `Способ связи: ${l.channel}`,
      `Контакт: ${l.contact}`,
    ].join("\n");

  const finalizeLead = (finalLead: typeof lead) => {
    setLeadMode(false);
    setDone(true);
    safeSet(
      STORAGE_KEY,
      JSON.stringify({ ...finalLead, consent: true, at: new Date().toISOString() }),
    );
    const text = encodeURIComponent(buildLeadMessage(finalLead));
    setTimeout(() => {
      pushBot(
        "Заявка готова. Отправьте её Виктории удобным способом:",
        undefined,
        [
          { label: "Отправить заявку в Telegram", href: `https://t.me/Vikey_shel?text=${text}` },
          { label: "Отправить заявку в WhatsApp", href: `https://wa.me/79081747077?text=${text}` },
          { label: "Отправить заявку в MAX", href: "https://max.ru/u/f9LHodD0cOKqFcs6UZJNI7fMntxJ8xCv4X4bwued0XRebPD3LFvJ6CgS3cA" },
        ],
      );
      setTimeout(
        () => pushBot("Или напишите напрямую:\n" + contactsBlock),
        400,
      );
    }, 250);
  };


  const handleAction = (action: string) => {
    if (action === "consent") {
      pushUser("Согласен");
      finalizeLead(lead);
      return;
    }
    if (action === "lead") {
      pushUser("Оставить контакты");
      startLead();
      return;
    }
    const label = quickAll.find((q) => q.action === action)?.label ?? action;
    pushUser(label);
    const reply = serviceReply[action];
    if (reply) {
      setTimeout(() => {
        pushBot(reply);
        const turns = userTurns + 1;
        setUserTurns(turns);
        if (turns >= 2 && !leadMode && !done) {
          setTimeout(
            () =>
              pushBot(
                "Могу передать ваш запрос Виктории. Оставьте, пожалуйста, имя и удобный способ связи: Telegram, WhatsApp, VK или телефон.",
                [{ label: "Оставить контакты", action: "lead" }],
              ),
            500,
          );
        } else {
          setTimeout(
            () =>
              pushBot("Для бизнеса, личного бренда или конкретного проекта? Есть ли уже материалы: текст, фото, сайт, соцсети?"),
            400,
          );
        }
      }, 300);
    }
  };

  const submitInput = () => {
    const val = input.trim();
    if (!val) return;
    setInput("");
    pushUser(val);

    if (leadMode) {
      const nextLead = { ...lead };
      if (leadStep === 0) {
        nextLead.name = val;
        setLead(nextLead);
        setLeadStep(1);
        setTimeout(() => pushBot("Опишите коротко задачу: сайт, бот, визуал, автоматизация или консультация?"), 250);
      } else if (leadStep === 1) {
        nextLead.task = val;
        setLead(nextLead);
        setLeadStep(2);
        setTimeout(() => pushBot("Удобный способ связи: Telegram, WhatsApp, VK или телефон?"), 250);
      } else if (leadStep === 2) {
        nextLead.channel = val;
        setLead(nextLead);
        setLeadStep(3);
        setTimeout(() => pushBot("Оставьте, пожалуйста, контакт (ник или номер)."), 250);
      } else if (leadStep === 3) {
        nextLead.contact = val;
        setLead(nextLead);
        setLeadStep(4);
        setTimeout(
          () =>
            pushBot(
              'Подтвердите, пожалуйста, согласие на обработку персональных данных и Политику: /privacy — ответьте «Согласен», чтобы отправить заявку.',
              [{ label: "Согласен", action: "consent" }],
            ),
          250,
        );
      } else if (leadStep === 4) {
        const ok = /соглас|да|ok|ок|yes/i.test(val);
        if (!ok) {
          setTimeout(
            () =>
              pushBot(
                'Чтобы передать заявку, нужно согласие. Нажмите кнопку «Согласен» или ответьте «Согласен».',
                [{ label: "Согласен", action: "consent" }],
              ),
            250,
          );
          return;
        }
        finalizeLead(nextLead);
      }
      return;
    }

    const turns = userTurns + 1;
    setUserTurns(turns);
    setTimeout(() => {
      pushBot(
        "Поняла. Расскажите чуть больше: это для бизнеса, личного бренда или конкретного проекта? Есть ли уже материалы?",
      );
      if (turns >= 2 && !done) {
        setTimeout(
          () =>
            pushBot(
              "Могу передать ваш запрос Виктории — оставьте имя и удобный способ связи.",
              [{ label: "Оставить контакты", action: "lead" }],
            ),
          500,
        );
      }
    }, 300);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        aria-label="Открыть AI-консультанта Vikey"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-neon/40 bg-gradient-primary shadow-glow transition hover:scale-105 sm:bottom-6 sm:right-6"
      >
        {open ? (
          <span className="text-2xl leading-none text-primary-foreground">×</span>
        ) : (
          <img
            src={botAvatar}
            alt=""
            className="h-12 w-12 rounded-full object-cover"
            loading="lazy"
          />
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="AI-консультант Vikey"
          className="fixed inset-x-2 bottom-20 z-[59] flex max-h-[80vh] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 shadow-glow backdrop-blur-xl sm:inset-x-auto sm:bottom-24 sm:right-6 sm:w-96"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border bg-background/60 px-4 py-3">
            <img src={botAvatar} alt="" className="h-10 w-10 rounded-full object-cover" />
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">AI-консультант Vikey</div>
              <div className="text-xs text-neon">онлайн</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Закрыть"
              className="ml-auto rounded-md px-2 py-1 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
            {messages.map((m) => (
              <div key={m.id}>
                <div
                  className={
                    m.role === "bot"
                      ? "max-w-[85%] whitespace-pre-line rounded-2xl rounded-tl-sm border border-border bg-background/70 px-3 py-2 text-sm"
                      : "ml-auto max-w-[85%] whitespace-pre-line rounded-2xl rounded-tr-sm bg-gradient-primary px-3 py-2 text-sm text-primary-foreground"
                  }
                >
                  {m.text}
                </div>
                {m.quick && m.quick.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {m.quick.map((q) => (
                      <button
                        key={q.action}
                        type="button"
                        onClick={() => handleAction(q.action)}
                        className="rounded-full border border-neon/40 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-neon hover:shadow-glow"
                      >
                        {q.label}
                      </button>
                    ))}
                  </div>
                )}
                {m.links && m.links.length > 0 && (
                  <div className="mt-2 flex flex-col gap-2">
                    {m.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-gradient-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground shadow-glow"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitInput();
            }}
            className="flex items-end gap-2 border-t border-border bg-background/60 p-3"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submitInput();
                }
              }}
              rows={1}
              placeholder={leadMode ? "Введите ответ..." : "Напишите сообщение..."}
              className="max-h-32 min-h-[40px] flex-1 resize-none rounded-lg border border-border bg-background/70 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-neon"
            />
            <button
              type="submit"
              className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              →
            </button>
          </form>
          <div className="border-t border-border bg-background/60 px-3 py-2 text-[11px] text-muted-foreground">
            Отправляя сообщения, вы принимаете{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">
              Политику обработки персональных данных
            </a>
            .
          </div>
        </div>
      )}
    </>
  );
}
