import { createFileRoute } from "@tanstack/react-router";
import tarhankutPreview from "@/assets/tarhankut-preview.webp";

const PAGE_URL = "https://chelovek-neiroset.ru/case-sayt-gostevye-domiki/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const PAGE_TITLE = "Создание сайта для гостевого дома — кейс Vikey AI";
const PAGE_DESC =
  "Кейс Vikey AI: создание сайта для гостевых домиков в Оленевке на Тарханкуте. Структура, мобильная версия, визуальная подача и понятный путь к контакту.";

export const Route = createFileRoute("/case-sayt-gostevye-domiki")({
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
  component: GuestHousesCasePage,
});

const importantItems = [
  ["Понятное первое впечатление", "Посетителю важно сразу понять, что за место ему предлагают и где находится объект."],
  ["Реальные фотографии", "В туристическом проекте фотографии помогают оценить сами домики, территорию и атмосферу места."],
  ["Варианты размещения", "Информация о домиках должна быть собрана так, чтобы посетителю было удобно ориентироваться в предложении."],
  ["Основные условия", "Ключевая информация не должна теряться среди декоративных элементов."],
  ["Локация", "Для поездки важен контекст места — Оленевка и Тарханкут становятся частью презентации проекта."],
  ["Понятный контакт", "На сайте должен быть заметный следующий шаг, чтобы посетитель мог перейти к связи и уточнению свободных дат."],
];

const siteStructure = [
  ["Главный экран", "Знакомство с проектом и заметный призыв узнать свободные даты."],
  ["Домики", "Отдельный смысловой раздел о вариантах размещения."],
  ["Территория", "Представление пространства вокруг домиков и атмосферы объекта."],
  ["Тарханкут", "Контекст локации и самого направления отдыха."],
  ["О хозяине", "Личный блок, который помогает показать, кто стоит за проектом."],
  ["Контакты", "Финальная точка для перехода к связи."],
];

const projectWork = [
  "Разработана структура сайта под туристический объект.",
  "Оформлен первый экран с акцентом на отдых в Оленевке и Тарханкуте.",
  "Собраны смысловые разделы о домиках, территории, локации и владельце.",
  "Подготовлена визуальная подача на основе реальных материалов проекта.",
  "Выстроена навигация между основными разделами.",
  "Добавлены контакты и заметный переход к уточнению свободных дат.",
  "Сайт адаптирован под мобильную версию.",
  "Проект опубликован и доступен как живой сайт.",
];

const suitableFor = [
  "Гостевые дома",
  "Домики для отдыха",
  "Небольшие объекты размещения",
  "Мини-отели",
  "Апартаменты",
  "Небольшие туристические проекты",
];

const faqs = [
  [
    "Что должно быть на сайте гостевого дома?",
    "Зависит от формата объекта, но посетителю обычно важно быстро увидеть варианты размещения, фотографии, основные условия, расположение и способ связаться или перейти к бронированию.",
  ],
  [
    "Нужен ли гостевому дому отдельный сайт?",
    "Сайт позволяет собрать информацию об объекте в одном месте и не зависеть только от карточек на сторонних площадках. При этом необходимость сайта зависит от модели привлечения гостей.",
  ],
  [
    "Можно ли сделать сайт для нескольких домиков?",
    "Да. Структуру можно построить так, чтобы показать несколько вариантов размещения и дать посетителю возможность сравнить их.",
  ],
  [
    "Можно ли сделать сайт удобным для телефона?",
    "Да. Адаптивная мобильная версия является обязательной частью современного сайта, особенно для туристических проектов.",
  ],
  [
    "Можно ли подключить бронирование?",
    "Возможность зависит от выбранного сценария: это может быть форма, переход в мессенджер, внешний сервис или более сложная интеграция. Конкретный вариант выбирается под проект.",
  ],
  [
    "Сколько стоит сайт для гостевого дома?",
    "Стоимость зависит от количества страниц, объектов, материалов, необходимых функций и способа взаимодействия с посетителем. Предварительную оценку можно получить через калькулятор Vikey AI.",
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

function GuestHousesCasePage() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="На главную Vikey AI">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">Студия Vikey AI</span>
          </a>
          <a href="https://tarhankut.space/" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow sm:px-4 sm:text-sm">
            Живой сайт
          </a>
        </div>
      </header>

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Реальный кейс · Сайт для объекта размещения
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                Создание сайта для гостевых домиков в Оленевке
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Реальный проект Vikey AI для гостевых домиков на Тарханкуте: структура сайта, визуальная подача объекта, мобильная версия и понятный путь посетителя к следующему действию.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://tarhankut.space/" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                  Посмотреть живой сайт
                </a>
                <a href="#task" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">
                  Как создавался проект
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section eyebrow="Превью проекта" title="Реальный сайт гостевых домиков">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <img
              src={tarhankutPreview}
              width={1280}
              height={800}
              loading="lazy"
              decoding="async"
              alt="Сайт гостевых домиков в Оленевке на Тарханкуте — кейс Vikey AI"
              className="h-auto w-full"
            />
          </div>
        </Section>

        <Section eyebrow="О проекте" title="О проекте">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Это реальный сайт гостевых домиков в Оленевке, в районе Тарханкута. Задача проекта связана с представлением объекта размещения в интернете: показать место, помочь посетителю разобраться в предложении и привести его к понятному следующему действию.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Живой проект опубликован по адресу{" "}
            <a href="https://tarhankut.space/" target="_blank" rel="noopener noreferrer" className="font-semibold text-neon transition hover:text-neon/80">tarhankut.space</a>.
          </p>
        </Section>

        <Section id="task" eyebrow="Задача" title="Какая была задача">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Нужно было собрать сайт, который показывает гостевые домики и атмосферу места, структурирует информацию об объекте и локации, остаётся удобным на телефоне и делает заметным переход к связи для уточнения свободных дат.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            На сайте нет отдельной системы онлайн-бронирования: основной сценарий — перейти к контакту и уточнить свободные даты.
          </p>
        </Section>

        <Section eyebrow="Логика" title="Что важно на сайте гостевого дома">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Сайт для гостевого дома или аренды домиков должен быстро давать человеку базовое понимание места и не заставлять искать ключевую информацию. Для объекта размещения особенно важны реальные материалы, ясная структура и понятный следующий шаг.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {importantItems.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Структура" title="Как была выстроена структура сайта">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            На сайте используются отдельные смысловые разделы, которые ведут посетителя от знакомства с объектом к более подробной информации и контакту.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {siteStructure.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card/60 p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Путь посетителя" title="Путь посетителя от первого экрана до обращения">
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
            {["Знакомство с объектом", "Домики", "Территория", "Тарханкут", "О хозяине", "Контакты / свободные даты"].map((item, index, all) => (
              <div key={item} className="contents">
                <div className="rounded-xl border border-border bg-card px-4 py-3">{item}</div>
                {index < all.length - 1 ? <span className="px-1 text-neon" aria-hidden="true">→</span> : null}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Такая последовательность помогает сначала показать сам объект и место отдыха, а затем дать посетителю понятный способ перейти к контакту.
          </p>
        </Section>

        <Section eyebrow="Мобильная версия" title="Почему мобильная версия особенно важна">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Сайт объекта размещения часто смотрят с телефона — во время выбора поездки, переписки или сравнения вариантов. Поэтому ключевая информация, изображения, навигация и кнопки должны оставаться понятными на небольшом экране.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Для проекта была подготовлена адаптивная версия, чтобы структура сайта и основные действия сохранялись на мобильных устройствах.
          </p>
        </Section>

        <Section eyebrow="Визуальная подача" title="Визуальная подача проекта">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Для туристического объекта фотографии и атмосфера являются частью выбора. Поэтому интерфейс не должен спорить с самим местом: задача визуальной системы — поддержать реальные материалы, дать им достаточно пространства и сохранить понятную навигацию.
          </p>
        </Section>

        <Section eyebrow="Выполненная работа" title="Что было сделано в проекте">
          <ul className="grid gap-3 md:grid-cols-2">
            {projectWork.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-border bg-card/50 p-4">
                <span className="text-neon">—</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Готовый результат" title="Готовый сайт">
          <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img
                src={tarhankutPreview}
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                alt="Домики в Оленевке — опубликованный сайт tarhankut.space"
                className="h-auto w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Домики в Оленевке · Тарханкут</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Результат кейса — реальный опубликованный сайт для гостевых домиков. Проект можно посмотреть в работе, а не только на скриншоте.
              </p>
              <a href="https://tarhankut.space/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                Открыть сайт →
              </a>
            </div>
          </div>
        </Section>

        <Section eyebrow="Похожие задачи" title="Кому может подойти такой сайт">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Подобная структура может использоваться как отправная точка для разных небольших туристических проектов. Это не список выполненных кейсов Vikey AI, а примеры задач, где похожая логика сайта может быть полезна.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {suitableFor.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Основная услуга" title="Нужен сайт для вашего бизнеса?">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Если вам нужен не только сайт для объекта размещения, а сайт или лендинг для другой услуги или бизнеса, посмотреть основной формат работы можно на странице «Сайты для бизнеса».
          </p>
          <a href="/sayty-dlya-biznesa/" className="mt-5 inline-flex text-sm font-semibold text-neon transition hover:text-neon/80">
            Сайты для бизнеса →
          </a>
        </Section>

        <Section eyebrow="FAQ" title="Частые вопросы о сайтах для гостевых домов">
          <div className="max-w-4xl space-y-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-xl border border-border bg-card/50 p-5">
                <summary className="cursor-pointer list-none font-semibold marker:hidden">{question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section eyebrow="Связаться" title="Нужен сайт для гостевого дома или другого проекта?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Расскажите, что нужно показать посетителю, какие материалы уже есть и какое действие должен совершить человек на сайте. Помогу определить структуру и формат.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/#calc" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">Оценить задачу</a>
            <a href="https://t.me/Vikey_shel" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">Telegram</a>
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
