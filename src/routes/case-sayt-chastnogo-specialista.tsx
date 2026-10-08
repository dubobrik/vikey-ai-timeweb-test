import { createFileRoute } from "@tanstack/react-router";
import stonePreview from "@/assets/stone-master-preview.webp";

const PAGE_URL = "https://chelovek-neiroset.ru/case-sayt-chastnogo-specialista/";
const PROJECT_URL = "https://dubobrik-ruslan-stone-water-art-16db.twc1.net/";
const PAGE_TITLE = "Создание сайта для частного специалиста — кейс Vikey AI";
const PAGE_DESC = "Кейс Vikey AI: создание сайта для частного специалиста на примере мастера по камню. Структура, портфолио работ, визуальная подача, мобильная версия и контакты.";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";

export const Route = createFileRoute("/case-sayt-chastnogo-specialista")({
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
  component: PrivateSpecialistCase,
});

const sections: [string, string][] = [
  ["Задача проекта", "Для частного специалиста важно не только перечислить услуги, но и показать реальные работы, стиль и подход. В проекте мастера по камню требовалось представить авторские изделия, передать характер ручной работы и организовать понятный путь от просмотра портфолио к контакту."],
  ["Сайт как цифровое портфолио специалиста", "Сайт для частного специалиста может одновременно знакомить посетителя с мастером, показывать выполненные работы, объяснять направление деятельности и собирать в одном месте портфолио и контакты."],
  ["Структура сайта вокруг работ специалиста", "Была разработана структура, в которой работы мастера занимают важное место. Оформлены разделы с примерами изделий, усилена подача авторских работ и добавлены контактные точки для обращения."],
  ["Визуальный стиль под характер работы", "Для сайта подобрана атмосферная подача, связанная с природной фактурой камня, формой, материалом и ручной работой. Визуальное оформление помогает показать характер изделий, а не использовать универсальный шаблон."],
  ["Работы как основа сайта-портфолио", "Фотографии и примеры выполненных работ стали значимой частью презентации специалиста. Они дают посетителю возможность познакомиться с изделиями и оценить особенности авторского подхода."],
  ["Как показать ценность авторской работы", "Визуальная подача показывает материал, природную фактуру, форму и индивидуальный характер ручной работы. Задача сайта — дать изделиям пространство и представить их в цельном контексте."],
  ["Сайт для просмотра с телефона", "Для проекта выполнена мобильная адаптация. На небольшом экране посетителю важно удобно просматривать работы, читать информацию, пользоваться навигацией и переходить к контакту со специалистом."],
  ["Что получилось", "Получился визуально выразительный сайт-портфолио, который передаёт характер специалиста, показывает его работы и помогает представить авторские изделия в цельной цифровой подаче. Посетитель может посмотреть работы и перейти к контакту со специалистом."],
  ["Кому подходит сайт-портфолио", "Подобный формат может подойти частным специалистам, самозанятым, экспертам, мастерам ручной работы, фотографам, дизайнерам, художникам и другим профессионалам, которым важно показать портфолио. Это примеры применения формата, а не перечень реализованных нами проектов."]
];
const completed = [
  "Разработана структура сайта",
  "Подобран атмосферный визуальный стиль",
  "Оформлены разделы с работами",
  "Усилена подача авторских изделий",
  "Добавлены контактные точки",
  "Выполнена мобильная адаптация"
];
const faqs: [string, string][] = [
  ["Нужен ли сайт частному специалисту?", "Сайт особенно полезен, когда нужно в одном месте представить услуги, работы, информацию о специалисте и контакты."],
  ["Можно ли сделать сайт как портфолио?", "Да. Для специалистов, чья работа лучше всего показывается на примерах, портфолио может стать основой структуры сайта."],
  ["Подходит ли сайт для самозанятого?", "Да. Формат сайта зависит не от организационной формы, а от задачи: представить услуги, работы и дать клиенту понятный способ связаться."],
  ["Можно ли сделать сайт без интернет-магазина?", "Да. Если задача — представить специалиста и его работы, достаточно сайта-портфолио с контактными точками."],
  ["Будет ли сайт работать на телефоне?", "Да. Мобильная адаптация должна учитываться при разработке, поскольку многие посетители открывают сайты со смартфонов."],
  ["Можно ли сделать сайт под стиль конкретного специалиста?", "Да. Визуальное оформление можно строить вокруг характера работ, материалов, бренда и аудитории специалиста."]
];

function Section({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="max-w-4xl text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function PrivateSpecialistCase() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="/" className="font-display text-base font-bold sm:text-lg">Студия Vikey AI</a>
          <a href="/#contact" className="rounded-lg bg-gradient-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground sm:text-sm">Заказать сайт</a>
        </div>
      </header>
      <main>
        <section className="bg-hero">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1fr_1fr]">
            <div className="min-w-0">
              <p className="mb-4 text-sm font-semibold text-neon">Реальный кейс · Сайт частного специалиста</p>
              <h1 className="break-words font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Создание сайта для частного специалиста</h1>
              <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">Сайт-портфолио для мастера по камню и авторским изделиям: структура, визуальная подача работ, мобильная версия и понятный путь к контакту.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Посмотреть сайт</a>
                <a href="/#contact" className="rounded-lg border border-border bg-card/60 px-5 py-3 text-sm font-semibold">Заказать сайт</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img src={stonePreview} width={1600} height={900} decoding="async" fetchPriority="high" alt="Сайт-портфолио мастера по камню — выполненный кейс Vikey AI" className="block h-auto w-full object-cover" />
            </div>
          </div>
        </section>
        {sections.slice(0,7).map(([title,body]) => <Section key={title} title={title}><p className="max-w-4xl leading-relaxed text-muted-foreground">{body}</p></Section>)}
        <Section title="Что было сделано в проекте">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {completed.map(item => <div key={item} className="rounded-xl border border-border bg-card/60 p-4 text-sm">{item}</div>)}
          </div>
        </Section>
        {sections.slice(7).map(([title,body]) => <Section key={title} title={title}><p className="max-w-4xl leading-relaxed text-muted-foreground">{body}</p></Section>)}
        <Section title="Нужен сайт для ваших услуг?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">Если нужно представить услуги, работы или экспертность в одном понятном цифровом формате, можно собрать сайт под конкретную задачу — от структуры до мобильной версии.</p>
          <a href="/sayty-dlya-biznesa/" className="mt-5 inline-flex min-h-11 items-center font-semibold text-neon">Создание сайтов для бизнеса →</a>
        </Section>
        <Section title="Частые вопросы о сайте для частного специалиста">
          <div className="max-w-4xl space-y-3">
            {faqs.map(([q,a]) => <details key={q} className="rounded-xl border border-border bg-card/60 p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}
          </div>
        </Section>
        <Section title="Нужен сайт для вашей работы или услуг?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">Расскажите, чем вы занимаетесь, что нужно показать и какие материалы уже есть. Помогу определить структуру и подходящий формат сайта.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/#calc" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Оценить задачу</a>
            <a href="https://t.me/Vikey_shel" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold">Telegram</a>
            <a href="https://wa.me/79081747077" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold">WhatsApp</a>
            <a href="https://max.ru/u/f9LHodD0cOKqFcs6UZJNI7fMntxJ8xCv4X4bwued0XRebPD3LFvJ6CgS3cA" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold">MAX</a>
          </div>
        </Section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground"><a href="/">На главную Vikey AI →</a></div></footer>
    </div>
  );
}
