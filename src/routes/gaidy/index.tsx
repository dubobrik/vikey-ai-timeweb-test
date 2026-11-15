import { createFileRoute } from "@tanstack/react-router";

// Раздел гайдов (SEO-портал), 14.11.2026. Новую статью добавлять в массив guides
const PAGE_URL = "https://chelovek-neiroset.ru/gaidy/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const PAGE_TITLE = "Гайды по ИИ для бизнеса: пошагово и на примерах | Vikey AI";
const PAGE_DESC =
  "Гайды Виктории Шелих о том, как внедрять ИИ в бизнес: с какой задачи начать, как посчитать окупаемость, что отдать ИИ в бухгалтерии и что делать с данными клиентов";

const guides = [
  {
    href: "/gaidy/ii-dlya-buhgalterii/",
    title: "ИИ для бухгалтерии: что отдать нейросети и не слить данные",
    desc: "Письма-запросы документов, разбор выписки и черновики пояснений в бесплатной нейросети, распознавание первички в 1С, таблица замен для обезличивания и где нейросеть ошибается",
    date: "15 ноября 2026",
  },
  {
    href: "/gaidy/vnedrenie-ii-v-biznes/",
    title: "Внедрение ИИ в бизнес: с какой задачи начать, чтобы был результат",
    desc: "Таблица повторяющихся дел, выбор первой задачи по цене ошибки, готовый запрос для бесплатной нейросети и что делать с данными клиентов",
    date: "14 ноября 2026",
  },
];

export const Route = createFileRoute("/gaidy/")({
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
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="На главную Vikey AI">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">Студия Vikey AI</span>
          </a>
          <a href="https://t.me/vikey_ai" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow sm:px-4 sm:text-sm">
            Канал в Telegram
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-20">
        <nav aria-label="Хлебные крошки" className="text-xs text-muted-foreground">
          <a href="/" className="hover:text-foreground">Главная</a> / <span>Гайды</span>
        </nav>
        <h1 className="mt-5 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Гайды по ИИ для бизнеса</h1>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Пишу, как внедрять ИИ в бизнес по шагам: что считать до старта, с какой задачи начать и где лучше оставить человека. В каждом гайде есть то, что можно сделать самим сегодня
        </p>
        <div className="mt-10 space-y-5">
          {guides.map((g) => (
            <a key={g.href} href={g.href} className="block rounded-2xl border border-border bg-card p-6 shadow-card transition hover:border-neon/40">
              <div className="text-xs text-muted-foreground">{g.date}</div>
              <h2 className="mt-2 text-xl font-semibold">{g.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
            </a>
          ))}
        </div>
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
