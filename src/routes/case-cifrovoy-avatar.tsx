import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import avatarPoster from "@/assets/digital-avatar-poster.webp";
import avatarVideo from "@/assets/digital-avatar.mp4";

const PAGE_URL = "https://chelovek-neiroset.ru/case-cifrovoy-avatar/";
const PAGE_TITLE = "Создание цифрового аватара для личного бренда — кейс Vikey AI";
const PAGE_DESC = "Кейс Vikey AI: создание цифрового аватара для личного бренда — идея образа, визуальный стиль, голос, AI-видео и подготовка ролика для сайта и контента.";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";

export const Route = createFileRoute("/case-cifrovoy-avatar")({
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
  component: AvatarCasePage,
});

const sections: [string, string][] = [["Задача проекта","Для личного бренда Vikey AI нужно было создать современный видеоформат с цифровым аватаром без необходимости полноценной съёмки для каждого ролика. Важно было соединить узнаваемую визуальную подачу, цифровой образ, голос, короткий формат и эстетику AI-бренда."],["От идеи к цифровому образу","Сначала была определена задача ролика, характер образа, стиль, атмосфера и способ использования. Цифровой аватар должен соответствовать личному бренду, а не выглядеть случайным AI-персонажем."],["Визуальный стиль аватара","Для кейса подготовлен визуальный образ, соответствующий Vikey AI. Проработаны стилистика, композиция, свет и подача — чтобы цифровой персонаж органично воспринимался в видеоролике."],["Голос и подача","В проекте проработана голосовая часть и подача цифрового аватара. Задача — соединить визуальный образ и звучание в цельном коротком видео, не заявляя о точном копировании внешности или голоса человека."],["Создание видео с цифровым аватаром","Работа над роликом прошла путь от идеи и визуального направления до подготовки материалов, цифрового аватара, голоса и сборки короткого AI-видео. Готовый результат проверен и подготовлен для использования в контенте личного бренда."],["Что получилось в результате","В результате получился короткий AI-видеоформат с цифровым аватаром для Vikey AI. Он сочетает визуальный образ, голос и подачу личного бренда и может использоваться на сайте, в социальных сетях, презентациях и другом цифровом контенте."],["Где можно использовать цифрового аватара","Подобный формат может использоваться на сайте и в социальных сетях, в приветственных роликах, презентациях, экспертном контенте, обучающих материалах, объясняющих видео и анонсах. Это возможные сценарии, а не перечень выполненных работ в данном проекте."],["Цифровой аватар или обычная съёмка?","Цифровой аватар не обязан заменять классическую съёмку. Реальная съёмка подходит, когда важны человек, место или событие; цифровой образ может быть полезен для экспериментальных концепций и коротких объясняющих роликов, где полноценная съёмка не требуется."],["Что нужно для создания цифрового аватара","Состав материалов зависит от задачи: цель ролика, площадка размещения, желаемый образ, референсы, бренд-материалы, текст или тезисы, пожелания к голосу. Исходные фото или видео нужны не всегда. Внешность, голос и материалы другого человека можно использовать только с соответствующим разрешением."]];
const completed = ["Определена идея цифрового образа","Подготовлен визуальный стиль","Создан цифровой аватар","Проработана голосовая подача","Собран короткий AI-видеоролик","Подача адаптирована под Vikey AI","Подготовлен формат для сайта","Подготовлен формат для контента","Проведена финальная проверка ролика"];
const faqs: [string, string][] = [["Что такое цифровой аватар?","Это созданный с помощью цифровых и AI-инструментов образ человека или персонажа, который может использоваться в видео, презентациях и другом контенте."],["Можно ли создать видео с цифровым аватаром?","Да. Цифровой аватар может быть героем или ведущим короткого видео. Конкретный формат зависит от задачи и исходных материалов."],["Нужно ли сниматься самому?","Не всегда. Для некоторых форматов можно использовать цифровой образ и AI-инструменты, но требования к исходным материалам зависят от выбранной технологии."],["Можно ли использовать свою внешность?","Да, если материалы человека используются с его разрешения. Степень сходства зависит от исходных данных и выбранного подхода."],["Можно ли использовать цифрового аватара для бизнеса?","Да. Такой формат может применяться в презентациях, на сайте, в контенте, обучающих материалах и других коммуникациях."],["Заменяет ли цифровой аватар обычную съёмку?","Не обязательно. Цифровой аватар и классическая видеосъёмка решают разные задачи и могут сочетаться."]];

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <h2 className="max-w-4xl text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}

function AvatarCasePage() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="/" className="text-base font-bold sm:text-lg">Студия Vikey AI</a>
          <a href="/#contact" className="rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground sm:text-sm">Обсудить AI-видео</a>
        </div>
      </header>
      <main>
        <section className="bg-hero">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-w-0">
              <p className="mb-4 text-sm font-semibold text-neon">Реальный кейс · Цифровой аватар</p>
              <h1 className="max-w-3xl break-words font-display text-4xl font-bold leading-tight sm:text-5xl">Создание цифрового аватара для личного бренда</h1>
              <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">Кейс Vikey AI: от идеи цифрового образа и визуального стиля до короткого AI-видео с голосом, подготовленного для сайта и контента личного бренда.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#result-video" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Посмотреть результат</a>
                <a href="/#contact" className="rounded-lg border border-border bg-card/60 px-5 py-3 text-sm font-semibold">Обсудить AI-видео</a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img src={avatarPoster} width={720} height={1280} decoding="async" fetchPriority="high" alt="Цифровой аватар для личного бренда Vikey AI — кадр из готового AI-видео" className="block h-auto w-full object-contain" />
            </div>
          </div>
        </section>
        <Section id="result-video" title="Готовый цифровой аватар">
          <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">Посмотрите готовый короткий видеоролик, созданный для личного бренда Vikey AI. Видео загружается только после нажатия на кнопку.</p>
          <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <div className="aspect-[9/16] w-full bg-black">
              {showVideo ? (
                <video src={avatarVideo} poster={avatarPoster} controls playsInline autoPlay preload="metadata" className="block h-full w-full object-contain" />
              ) : (
                <img src={avatarPoster} width={720} height={1280} loading="lazy" decoding="async" alt="Превью ролика с цифровым аватаром Vikey AI" className="block h-full w-full object-contain" />
              )}
            </div>
            <div className="p-4">
              <button type="button" onClick={() => setShowVideo(v => !v)} className="min-h-11 w-full rounded-lg border border-neon/40 bg-neon/10 px-4 py-2.5 text-sm font-semibold text-neon transition hover:bg-neon/20">
                {showVideo ? "Скрыть видео" : "Посмотреть видео"}
              </button>
            </div>
          </div>
        </Section>
        {sections.slice(0,5).map(([title,body]) => <Section key={title} title={title}><p className="max-w-4xl leading-relaxed text-muted-foreground">{body}</p></Section>)}
        <Section title="Что было сделано">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{completed.map(item => <div key={item} className="rounded-xl border border-border bg-card/60 p-4 text-sm">{item}</div>)}</div>
        </Section>
        {sections.slice(5).map(([title,body]) => <Section key={title} title={title}><p className="max-w-4xl leading-relaxed text-muted-foreground">{body}</p></Section>)}
        <Section title="Нужно AI-видео или цифровой аватар?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">Если нужен цифровой аватар, короткий AI-ролик, рекламное или презентационное видео, формат можно подобрать под конкретную задачу и площадку.</p>
          <a href="/ai-video-dlya-biznesa/" className="mt-5 inline-flex min-h-11 items-center font-semibold text-neon">AI-видео для бизнеса →</a>
        </Section>
        <Section title="Частые вопросы о цифровых аватарах">
          <div className="max-w-4xl space-y-3">{faqs.map(([q,a]) => <details key={q} className="rounded-xl border border-border bg-card/60 p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div>
        </Section>
        <Section title="Обсудим ваш цифровой аватар?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">Расскажите, для какой задачи нужен аватар, где планируется использовать видео и какие материалы уже есть. Помогу определить подходящий формат.</p>
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
