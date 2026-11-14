import { createFileRoute } from "@tanstack/react-router";

// Текст одобрен Викторией 14.11.2026 (specs/2026-11-14-vikey-agenty/sajt-teksty.md, блок 2в)
const PAGE_URL = "https://chelovek-neiroset.ru/ii-agenty-dlya-biznesa/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const PAGE_TITLE = "ИИ-агенты для бизнеса: команда помощников под ваши задачи | Vikey AI";
const PAGE_DESC =
  "Собираю команду ИИ-агентов под задачи бизнеса: поиск клиентов, контент, общение с клиентами, продажи, отчёты, контроль задач и документы. Данные ваших клиентов остаются у вас.";

export const Route = createFileRoute("/ii-agenty-dlya-biznesa")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: AiAgentsBusinessPage,
});

const agents = [
  ["Агент-разведчик", "Смотрит рынок, конкурентов и тренды, приносит идеи, которые уже сработали у других"],
  ["Агент контента", "Контент-план, тексты постов, сценарии роликов, рекламные материалы"],
  ["Агент публикаций", "Выкладывает согласованные посты по расписанию"],
  ["Агент общения с клиентами", "Отвечает на частые вопросы, принимает обращения, записывает"],
  ["Агент продаж", "Разбирает заявки, отмечает, кто готов купить, ведёт человека по шагам и следит, чтобы никто не завис на полпути"],
  ["Агент аналитики", "Собирает цифры и присылает отчёт с подсказками, что поправить"],
  ["Агент контроля задач", "Следит за сроками и поручениями и напоминает, пока задача не закрыта"],
  ["Агент документов", "Читает договоры, достаёт из них нужное и готовит черновики"],
];

const steps = [
  ["Разбираю бизнес", "Как идут процессы, какими программами вы пользуетесь, где уходит больше всего времени"],
  ["Нахожу места для ИИ", "Где ИИ сэкономит время или даст результат лучше, и где лучше оставить как есть"],
  ["Продумываю систему", "Каких агентов берём и как они передают друг другу работу"],
  ["Настраиваю и проверяю на ваших данных", "Подключаю сервисы, задаю правила, что агент делает сам, а что только после вашего «да»"],
  ["Дальше развиваем", "Добавляем функции и новых агентов, когда понадобится"],
];

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        {eyebrow ? <div className="mb-2 text-xs font-medium uppercase tracking-widest text-neon">{eyebrow}</div> : null}
        <h2 className="max-w-4xl text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}

function AiAgentsBusinessPage() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="На главную Vikey AI">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">Студия Vikey AI</span>
          </a>
          <a href="/#contact" className="shrink-0 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow sm:px-4 sm:text-sm">
            Обсудить задачу
          </a>
        </div>
      </header>

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> ИИ-агенты · Vikey AI
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                ИИ-агенты для бизнеса: команда помощников под ваши задачи
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Готового комплекта «для всех» у меня нет. Одному бизнесу нужно, чтобы приходили новые клиенты, другому - чтобы заявки не терялись, третьему - чтобы были видны задачи сотрудников, сроки подрядчиков и где работа встала
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Поэтому сначала я разбираюсь в ваших задачах, а потом собираю под них команду ИИ-агентов
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                  Обсудить задачу
                </a>
                <a href="#komanda" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">
                  Кто может войти в команду
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section eyebrow="Как это устроено" title="У каждого агента свой участок">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Это похоже на небольшую команду, где у каждого свой участок: маркетинг, поиск клиентов, контент, общение с клиентами, продажи, отчёты, внутренние дела. Агенты работают каждый сам по себе или передают друг другу результат (тогда получается одна система)
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
            Я создаю только тех агентов, которые нужны вам. Можно начать с одного-двух и добавлять новых, когда задач станет больше
          </p>
        </Section>

        <Section id="komanda" eyebrow="Примеры" title="Кто может войти в вашу команду">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Это примеры, а не готовый набор. Состав собираем под вас
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {agents.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-neon/25 bg-card p-6 sm:p-8">
            <p className="max-w-4xl leading-relaxed text-muted-foreground">
              Что умеет каждый агент и как они связаны, решаем вместе. Это зависит от того, какими сервисами вы пользуетесь, что к ним можно подключить и какие данные нельзя отдавать наружу (данные ваших клиентов остаются у вас)
            </p>
          </div>
        </Section>

        <Section eyebrow="Этапы" title="Как я работаю">
          <div className="grid gap-4 lg:grid-cols-5">
            {steps.map(([title, text], i) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold">{i + 1}. {title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Нужен один помощник, который отвечает клиентам по вашей базе? →{" "}
            <a href="/ii-assistent-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">ИИ-ассистент для бизнеса</a>
          </p>
        </Section>

        <section className="border-t border-border bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">С каких агентов начать</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Когда хочется понять, с каких агентов начать именно вам, напишите о своих задачах. Подскажу, что можно передать ИИ и с чего начать
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/#calc" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Оценить задачу</a>
              <a href="https://t.me/Vikey_shel" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold">Telegram</a>
              <a href="https://wa.me/79081747077" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold">WhatsApp</a>
              <a href="https://max.ru/u/f9LHodD0cOKqFcs6UZJNI7fMntxJ8xCv4X4bwued0XRebPD3LFvJ6CgS3cA" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold">MAX</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} Vikey AI. Все права защищены.</span>
          <a href="/" className="transition hover:text-foreground">Вернуться на главную</a>
        </div>
      </footer>
    </div>
  );
}
