import { useState, useEffect } from "react";
import certReactor from "@/assets/cert-reactor.png.asset.json";
import certNeuromaker from "@/assets/cert-neuromaker.png.asset.json";
import certTsu from "@/assets/cert-tsu.png.asset.json";

type Cert = {
  title: string;
  desc: string;
  extra?: string;
  date: string;
  src: string;
  alt: string;
};

const certificates: Cert[] = [
  {
    title: "РЕАКТОР — вайбкодинг и AI-инструменты",
    desc: "Онлайн-курс по созданию цифровых продуктов с помощью нейросетей и AI-инструментов.",
    date: "24.03.2026",
    src: certReactor.url,
    alt: "Сертификат РЕАКТОР Виктория Шелих",
  },
  {
    title: "НейроМейкер — нейросети для маркетинга, контента и автоматизации",
    desc: "Программа по работе с нейросетями для маркетинга, контента, визуала, видео и построения систем продаж с помощью ИИ.",
    date: "13.08.2026",
    src: certNeuromaker.url,
    alt: "Сертификат НейроМейкер Виктория Шелих",
  },
  {
    title: "Томский государственный университет — повышение квалификации",
    desc: "Удостоверение о повышении квалификации по программе «Внедрение и использование нейросетей в организации».",
    extra: "72 часа",
    date: "28.04.2026",
    src: certTsu.url,
    alt: "Удостоверение Томского государственного университета Виктория Шелих",
  },
];

export default function Certificates() {
  const [active, setActive] = useState<Cert | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="certificates" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-2 text-xs font-medium uppercase tracking-widest text-neon">
          Образование
        </div>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
          Образование и сертификаты
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Подтверждённое обучение в AI, нейросетях, вайбкодинге и практическом
          внедрении цифровых решений.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card/50 shadow-card transition hover:border-neon/50"
            >
              <button
                type="button"
                onClick={() => setActive(c)}
                className="block w-full bg-[#12141f] p-3"
                aria-label={`Открыть: ${c.alt}`}
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full rounded-lg object-contain"
                />
              </button>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-snug">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  {c.extra && (
                    <span className="rounded-md border border-border px-2 py-1">{c.extra}</span>
                  )}
                  <span className="rounded-md border border-border px-2 py-1">{c.date}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  className="mt-4 w-full rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  Посмотреть
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(6,8,16,0.9)] p-4"
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl border border-border bg-card p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <p className="text-sm text-muted-foreground">{active.title}</p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="shrink-0 rounded-md border border-border px-3 py-1 text-sm"
              >
                Закрыть
              </button>
            </div>
            <img src={active.src} alt={active.alt} className="w-full rounded-lg" />
            <a
              href={active.src}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-neon underline"
            >
              Открыть оригинал в новой вкладке
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
