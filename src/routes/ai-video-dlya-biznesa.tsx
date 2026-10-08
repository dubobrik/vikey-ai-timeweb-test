import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import avatarPoster from "@/assets/digital-avatar-poster.webp";
import avatarVideo from "@/assets/digital-avatar.mp4";

const PAGE_URL = "https://chelovek-neiroset.ru/ai-video-dlya-biznesa/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const PAGE_TITLE = "Создание AI-видео для бизнеса и цифровых аватаров | Vikey AI";
const PAGE_DESC =
  "Создаю AI-видео для бизнеса, рекламы и контента: сценарий, нейросетевые сцены, цифровые аватары, озвучка и сборка ролика под задачу проекта.";

export const Route = createFileRoute("/ai-video-dlya-biznesa")({
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
  component: AiVideoBusinessPage,
});

const videoFormats = [
  ["Рекламные ролики", "Короткие видео для продвижения продукта, услуги или проекта."],
  ["Видео для соцсетей", "Контент для публикаций, Reels, Shorts и других коротких форматов."],
  ["Имиджевые видео", "Ролики, которые помогают передать стиль, атмосферу и позиционирование проекта."],
  ["Презентация услуги или продукта", "Видео, которое помогает визуально объяснить предложение."],
  ["AI-сцены", "Кадры и визуальные эпизоды, которые сложно или дорого организовать обычной съёмкой."],
  ["Видео с цифровым аватаром", "Говорящий цифровой персонаж или аватар эксперта для презентаций, объяснений и контента."],
];

const creationSteps = [
  "Определяем задачу.",
  "Определяем аудиторию и площадку.",
  "Формируем идею.",
  "Готовим сценарий.",
  "Продумываем визуальный стиль.",
  "Создаём необходимые AI-сцены или материалы.",
  "При необходимости создаём цифрового аватара.",
  "Работаем с озвучкой.",
  "Собираем ролик.",
  "Проверяем результат и корректируем детали.",
];

const usage = [
  "Сайт",
  "Социальные сети",
  "Реклама",
  "Презентации",
  "Карточки услуг",
  "Обучающие материалы",
  "Анонсы",
  "Экспертный контент",
  "Демонстрация продукта",
  "Контент личного бренда",
];

const clientMaterials = [
  "Описание бизнеса или продукта",
  "Цель ролика",
  "Площадка публикации",
  "Примерная длительность",
  "Референсы, если они есть",
  "Фирменный стиль",
  "Логотип",
  "Фото или видео",
  "Текст или основные тезисы",
  "Материалы для аватара, если он нужен",
];

const workItems = [
  "Разбор задачи",
  "Идея и формат",
  "Сценарная структура",
  "Подбор визуального подхода",
  "Подготовка промптов",
  "Генерация визуальных сцен",
  "Работа с персонажами",
  "Создание цифрового аватара при необходимости",
  "Работа с голосом и озвучкой",
  "Монтаж и сборка",
  "Текстовые элементы",
  "Адаптация под формат публикации",
  "Финальная проверка",
];

const faqs = [
  [
    "Что такое AI-видео?",
    "Это видео, при создании которого используются инструменты искусственного интеллекта: для генерации сцен, персонажей, движения, озвучки или других элементов. Конкретный набор технологий зависит от задачи.",
  ],
  [
    "Можно ли создать рекламное видео с помощью ИИ?",
    "Да. AI можно использовать для рекламных и презентационных роликов, если формат подходит задаче и площадке размещения.",
  ],
  [
    "Можно ли сделать видео с цифровым аватаром?",
    "Да. Цифровой аватар может выступать виртуальным ведущим и использоваться для презентаций, объясняющего или регулярного контента.",
  ],
  [
    "Обязательно ли сниматься самому?",
    "Нет. Формат можно построить на AI-сценах, графике, цифровом персонаже или комбинации разных материалов.",
  ],
  [
    "Можно ли использовать мой голос и внешность?",
    "Да, если для проекта предоставлены необходимые материалы и есть право на их использование. Возможности и качество зависят от выбранной технологии и исходных данных.",
  ],
  [
    "Можно ли сделать короткое видео для соцсетей?",
    "Да. Формат ролика можно адаптировать под конкретную площадку, длительность и способ просмотра.",
  ],
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

function AiVideoBusinessPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="На главную Vikey AI">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">Студия Vikey AI</span>
          </a>
          <a href="/#contact" className="shrink-0 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow sm:px-4 sm:text-sm">
            Обсудить видео
          </a>
        </div>
      </header>

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> AI-видео · Vikey AI
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                Создание AI-видео для бизнеса
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Создаю видео с помощью нейросетей под конкретную задачу: рекламные и имиджевые ролики, контент для соцсетей, визуальные сцены и цифровые аватары. Помогаю пройти путь от идеи и сценария до готового материала.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                  Обсудить видео
                </a>
                <a href="#formats" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">
                  Какие видео можно создать
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section eyebrow="Другие форматы" title="Нужны статичные AI-креативы?"><p className="max-w-4xl leading-relaxed text-muted-foreground">Если нужны не ролики, а изображения для рекламы, сайта, социальных сетей или презентации, это отдельное направление работы.</p><a href="/ai-kreativy-dlya-biznesa/" className="mt-5 inline-flex min-h-11 items-center font-semibold text-neon">AI-креативы для бизнеса →</a></Section>

        <Section id="formats" eyebrow="Форматы" title="Какие AI-видео можно создать для бизнеса">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Формат зависит от задачи, площадки и исходных материалов. Нейросети можно использовать как для отдельных сцен, так и для создания большей части визуального ряда.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {videoFormats.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Процесс" title="Как создаётся AI-видео">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Создание AI-видео — это не одна кнопка «сгенерировать». Качество результата зависит от сценария, исходных материалов, последовательности сцен и того, насколько хорошо выбран визуальный подход.
          </p>
          <ol className="mt-6 grid gap-3 md:grid-cols-2">
            {creationSteps.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-xl border border-border bg-card/50 p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#8B7BC8]/10 text-sm font-bold text-[#8B7BC8]">{index + 1}</span>
                <span className="pt-1 text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section eyebrow="Цифровой аватар" title="Цифровой аватар для бизнеса и контента">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Цифровой аватар может использоваться как виртуальный ведущий: рассказывать об услуге, представлять материал, записывать регулярный контент или использоваться в презентационных роликах.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
            В зависимости от задачи это может быть аватар реального человека, созданный персонаж, виртуальный эксперт или ведущий для серии видеоматериалов.
          </p>
          <div className="mt-6 rounded-2xl border border-neon/25 bg-card p-6">
            <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground">
              Если используется внешность или голос реального человека, работаю только с материалами, на использование которых есть разрешение. Технология и качество зависят от исходных данных и выбранного способа создания, поэтому абсолютная идентичность живому человеку не обещается.
            </p>
          </div>
        </Section>

        <Section eyebrow="Применение" title="Где бизнес может использовать AI-видео">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {usage.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Один и тот же материал не обязательно подходит для всех площадок. Формат, длительность и подача должны учитывать место публикации и поведение аудитории.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Если для видео нужна отдельная посадочная страница или новый сайт —{" "}
            <a href="/sayty-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">Сайты для бизнеса →</a>
          </p>
        </Section>

        <Section eyebrow="Выбор подхода" title="AI-видео или обычная съёмка — что выбрать">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            AI-видео не обязательно заменяет классическую съёмку. Эти подходы могут решать разные задачи и сочетаться. Обычная съёмка полезна, когда важны реальные люди, помещение, продукт или событие.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
            AI подходит, когда нужно создать необычную визуальную сцену, быстро протестировать концепцию, сделать ролик без сложной локации, создать цифрового персонажа, дополнить реальные материалы или подготовить несколько визуальных вариантов.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            AI не всегда дешевле обычной съёмки: стоимость зависит от конкретной задачи и количества этапов работы.
          </p>
        </Section>

        <Section eyebrow="Старт проекта" title="Что нужно для начала работы">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Точный формат можно определить после обсуждения задачи. Если идея ещё не сформулирована до деталей, это не мешает начать: сначала разбираем, что нужно показать и кому, а затем выбираем подходящий формат.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clientMaterials.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Реальный кейс" title="Пример AI-видео и цифрового аватара">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              {showVideo ? (
                <video
                  src={avatarVideo}
                  poster={avatarPoster}
                  controls
                  playsInline
                  autoPlay
                  preload="metadata"
                  className="mx-auto block max-h-[72vh] w-full bg-black object-contain"
                />
              ) : (
                <img
                  src={avatarPoster}
                  width={720}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                  alt="Пример цифрового аватара Vikey AI для AI-видео"
                  className="mx-auto block h-auto w-full max-w-md object-cover"
                />
              )}
              <div className="p-4">
                <button
                  type="button"
                  onClick={() => setShowVideo((value) => !value)}
                  className="min-h-11 rounded-lg border border-neon/40 bg-neon/10 px-4 py-2.5 text-sm font-semibold text-neon transition hover:bg-neon/20"
                >
                  {showVideo ? "Скрыть видео" : "Посмотреть видео"}
                </button>
              </div>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-neon">AI-видео / Цифровой аватар / Личный бренд</div>
              <h3 className="mt-2 text-2xl font-semibold">Цифровой аватар Vikey AI</h3>
              <a href="/case-cifrovoy-avatar/" className="mt-4 inline-flex min-h-11 items-center font-semibold text-neon">Подробнее о кейсе →</a>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Реальный кейс по созданию цифрового аватара для личного бренда Vikey AI. В проекте была разработана идея цифрового образа, подготовлен визуальный стиль аватара и собран короткий AI-видеоролик.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {[
                  "Создана идея цифрового образа",
                  "Подготовлен визуальный стиль аватара",
                  "Собран короткий видеоролик",
                  "Адаптирована подача под личный AI-бренд",
                  "Подготовлен формат для использования на сайте и в соцсетях",
                ].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-neon">—</span><span>{item}</span></li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Превью загружается сразу, а сам видеофайл — только после действия пользователя, чтобы не ухудшать скорость страницы на мобильных устройствах.
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Состав работы" title="Что входит в создание AI-видео">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Набор этапов зависит от задачи: не каждый проект требует цифрового аватара, озвучки или большого количества уникальных сцен.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workItems.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Смысл ролика" title="Почему AI-видео начинается со сценария">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Даже красивое видео не решает задачу бизнеса, если зрителю непонятно, что ему показывают и зачем. Поэтому перед генерацией важно определить главную мысль, первые секунды ролика, последовательность сцен, что должен понять зритель и какое действие ожидается после просмотра.
          </p>
        </Section>

        <Section eyebrow="Визуальная целостность" title="Визуальный стиль и последовательность сцен">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            При создании серии кадров важно сохранять общую стилистику, персонажей, атмосферу и логику переходов. Для этого может потребоваться несколько этапов генерации и отбора материала.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Результат зависит от используемой модели, исходных материалов и сложности сцены. Идеальная идентичность персонажа во всех кадрах заранее не гарантируется.
          </p>
        </Section>

        <Section eyebrow="Стоимость" title="Сколько стоит создание AI-видео">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Стоимость зависит от длительности ролика, количества сцен, сложности визуала, наличия цифрового аватара, озвучки, исходных материалов и количества этапов работы. Небольшой ролик и проект с большим количеством уникальных сцен — разные по объёму задачи.
          </p>
          <a href="/#calc" className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
            Оценить задачу
          </a>
        </Section>

        <Section eyebrow="FAQ" title="Частые вопросы">
          <div className="max-w-4xl space-y-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-xl border border-border bg-card/50 p-5">
                <summary className="cursor-pointer list-none font-semibold marker:hidden">{question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section eyebrow="Связаться" title="Обсудим ваше AI-видео?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Расскажите, что нужно показать, кому предназначено видео и где оно будет опубликовано. Помогу определить формат и понять, какие AI-инструменты действительно нужны для задачи.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://t.me/Vikey_shel" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">Telegram</a>
            <a href="https://wa.me/79081747077" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">WhatsApp</a>
            <a href="https://max.ru/u/f9LHodD0cOKqFcs6UZJNI7fMntxJ8xCv4X4bwued0XRebPD3LFvJ6CgS3cA" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">MAX</a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
          <span>© Vikey AI — нейросети для бизнеса и контента</span>
          <a href="/" className="transition hover:text-foreground">На главную</a>
        </div>
      </footer>
    </div>
  );
}
