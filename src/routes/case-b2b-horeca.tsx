import { createFileRoute } from "@tanstack/react-router";
import horecaCaseImage from "@/assets/b2b-horeca-modal.webp";

const PAGE_URL = "https://chelovek-neiroset.ru/case-b2b-horeca/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const PAGE_TITLE = "Позиционирование B2B-услуги для HoReCa — кейс Vikey AI";
const PAGE_DESC =
  "Кейс Vikey AI: исследование HoReCa, позиционирование B2B-услуги, сегментация ЛПР, презентационные материалы, карта продаж и база компаний для первичного выхода.";

export const Route = createFileRoute("/case-b2b-horeca")({
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
  component: B2BHorecaCasePage,
});

const b2bFactors = [
  "Контекст бизнеса",
  "Сегмент компании",
  "Задача компании",
  "ЛПР",
  "Ценность для разных участников решения",
  "Формат услуги",
  "Аргументация",
  "Сценарий первого контакта",
];

const researchItems = [
  "Понять контекст сегмента HoReCa",
  "Структурировать потенциальную аудиторию",
  "Выделить группы компаний",
  "Определить, кому и как может быть адресовано предложение",
  "Подготовить основу для дальнейшей B2B-коммуникации",
];

const lprGroups = [
  ["Собственник", "Смотрит на предложение с позиции бизнеса, формата и общей целесообразности."],
  ["Управляющий", "Оценивает, как услуга может быть встроена в рабочий контекст компании."],
  ["HR", "Рассматривает предложение с позиции работы с сотрудниками и внутренних процессов."],
  ["Операционный директор", "Оценивает применимость услуги в операционной логике бизнеса."],
];

const productLogic = [
  "Что именно получает компания",
  "Как объясняется формат услуги",
  "Как структурируется предложение",
  "Что необходимо донести на первом этапе",
  "Как отделить основную ценность от второстепенных деталей",
];

const offerFlow = [
  "Исходная профессиональная услуга",
  "Контекст HoReCa",
  "Сегменты",
  "ЛПР",
  "Ценность",
  "Структура предложения",
  "Аргументы",
  "Презентационные материалы",
  "Первичный выход",
];

const workDone = [
  "Исследование сегмента",
  "Структурирование проекта",
  "Продуктовая логика",
  "Сегментация аудитории",
  "Сегментация ЛПР",
  "Позиционирование",
  "Структура B2B-предложения",
  "Аргументация",
  "Презентационные материалы",
  "Карта продаж",
  "База потенциальных компаний и контактов для первичного выхода",
];

const faqs = [
  [
    "Что такое позиционирование B2B-услуги?",
    "Это работа над тем, чтобы корпоративному клиенту было понятно, кому адресована услуга, какую задачу она помогает решать, в каком формате предоставляется и почему её стоит рассматривать.",
  ],
  [
    "Чем B2B-предложение отличается от предложения для частного клиента?",
    "В B2B обычно участвуют несколько сторон принятия решения, поэтому важно учитывать сегмент компании, ЛПР, аргументацию и внутреннюю логику согласования.",
  ],
  [
    "Нужно ли сначала исследовать рынок?",
    "Это зависит от проекта, но для нового B2B-направления исследование помогает проверить контекст, сегменты и гипотезы до подготовки финальных материалов.",
  ],
  [
    "Что входит в упаковку B2B-услуги?",
    "Состав зависит от задачи. Это могут быть исследование, позиционирование, структура предложения, сегментация ЛПР, презентационные материалы, карта продаж и подготовка к первичному выходу.",
  ],
  [
    "Можно ли подготовить базу потенциальных компаний?",
    "Да, если это входит в задачу проекта. В данном кейсе такая база компаний и контактов для первичного выхода была собрана.",
  ],
  [
    "Гарантирует ли упаковка B2B-продажи?",
    "Нет. Она помогает подготовить предложение и коммуникацию, но итог зависит от самой услуги, спроса, работы с потенциальными клиентами и процесса продаж.",
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

function B2BHorecaCasePage() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="На главную Vikey AI">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">Студия Vikey AI</span>
          </a>
          <a href="/#contact" className="shrink-0 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow sm:px-4 sm:text-sm">
            Обсудить B2B-задачу
          </a>
        </div>
      </header>

      <main>
        <section className="bg-hero">
          <div className="mx-auto grid max-w-6xl gap-9 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
            <div className="min-w-0">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Реальный B2B-кейс · HoReCa
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                Позиционирование B2B-услуги для HoReCa
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Кейс по упаковке профессиональной услуги психолога со стажем более 20 лет для корпоративного сегмента HoReCa: исследование, продуктовая логика, ЛПР, презентационные материалы и подготовка к первичному выходу на компании.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                  Что было сделано
                </a>
                <a href="/#contact" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">
                  Обсудить похожую задачу
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img
                src={horecaCaseImage}
                width={1400}
                height={788}
                decoding="async"
                fetchPriority="high"
                alt="B2B-упаковка услуги психологической поддержки для HoReCa — кейс Vikey AI"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <Section eyebrow="Контекст" title="Исходная задача">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            На входе была профессиональная услуга психолога со стажем более 20 лет. Задача заключалась не в создании новой психологической методики, а в том, чтобы адаптировать существующую профессиональную услугу для B2B-аудитории HoReCa.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
            Нужно было понять, как представить услугу компаниям, определить целевые сегменты и участников принятия решения, структурировать предложение, подготовить аргументацию и собрать материалы для первого выхода на потенциальных клиентов.
          </p>
        </Section>

        <Section eyebrow="B2B-логика" title="Почему B2B-услугу нельзя просто описать как услугу для частного клиента">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            В B2B решение принимает не один конечный пользователь. Предложение должно быть понятно компании и людям, которые рассматривают, согласуют или оценивают услугу. Поэтому разработка предложения для B2B требует другой логики коммуникации.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {b2bFactors.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Исследование" title="Исследование сегмента HoReCa">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            До подготовки презентационных материалов была проведена исследовательская работа. Её задача — понять контекст сегмента, структурировать потенциальную аудиторию и подготовить основу для дальнейшей B2B-коммуникации.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {researchItems.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Лица, принимающие решение" title="Сегментация ЛПР">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Для B2B-предложения недостаточно определить только отрасль. Нужно понять, какие участники со стороны компании могут рассматривать предложение и какие аргументы для них важны. В проекте была проведена сегментация ЛПР.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {lprGroups.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-5">
            {["Компания", "Группа ЛПР", "Интерес / задача", "Аргумент", "Следующий шаг"].map((item, index) => (
              <div key={item} className="rounded-xl border border-neon/20 bg-card/50 p-4 text-center text-sm">
                <div className="mb-1 text-xs font-semibold text-neon">{index + 1}</div>
                {item}
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Продукт" title="Продуктовая логика B2B-услуги">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Профессиональную услугу нужно было перевести в понятную для компании продуктовую логику: что получает корпоративный клиент, как устроен формат и какие элементы важно вынести в первый разговор.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {productLogic.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Позиционирование" title="Позиционирование B2B-услуги">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Задача позиционирования B2B-услуги — сделать профессиональное предложение понятным корпоративной аудитории: кому оно адресовано, в каком формате предлагается и как его обсуждать внутри B2B-коммуникации.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Приоритетом стали понятность предложения, соответствие контексту HoReCa, логичная структура и аргументация для корпоративной аудитории.
          </p>
        </Section>

        <Section eyebrow="Предложение" title="Как было выстроено B2B-предложение">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Разработка B2B-предложения шла последовательно: от исходной экспертной услуги и контекста HoReCa к сегментам, ЛПР, ценности и аргументам. Такая структура B2B-предложения помогает не смешивать аналитику, смысл и презентационную подачу.
          </p>
          <ol className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {offerFlow.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-xl border border-border bg-card/50 p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#8B7BC8]/10 text-sm font-bold text-[#8B7BC8]">{index + 1}</span>
                <span className="pt-1 text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section eyebrow="Материалы" title="Презентационные материалы">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Презентация B2B-услуги не была отдельной декоративной задачей. Сначала были проработаны исследование, структура проекта, аудитория, позиционирование и аргументы — и только затем подготовлена визуальная и презентационная упаковка.
          </p>
          <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="grid gap-4 sm:grid-cols-5">
              {["Исследование", "Структура", "Аудитория", "Позиционирование", "Аргументы"].map((item, index) => (
                <div key={item} className="rounded-xl border border-border bg-background/40 p-4 text-center text-sm">
                  <div className="mb-1 text-xs text-neon">Этап {index + 1}</div>
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Результат этой аналитической части — презентационные материалы, которые можно использовать в B2B-коммуникации.
            </p>
          </div>
        </Section>

        <Section eyebrow="Продажи" title="Карта продаж и логика первого контакта">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            В проекте была разработана карта продаж. Без раскрытия конфиденциальных данных она связывает сегмент потенциального клиента, ЛПР, содержание первого контакта и дальнейшие шаги коммуникации.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Карта продаж — это рабочая структура для коммуникации, а не гарантия сделки.
          </p>
        </Section>

        <Section eyebrow="Практический выход" title="База компаний для первичного выхода">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            В рамках проекта была собрана база потенциальных компаний и контактов для первичного выхода. Она подготовлена как практическое продолжение упаковки, чтобы работа не заканчивалась только презентацией.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Сама база, названия компаний и персональные контактные данные здесь не публикуются.
          </p>
        </Section>

        <Section id="work" eyebrow="Выполненная работа" title="Что было сделано">
          <div className="grid gap-3 md:grid-cols-2">
            {workDone.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-border bg-card/50 p-4">
                <span className="text-neon">—</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Результат" title="Что получилось в результате">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            В результате профессиональная услуга была структурирована для B2B-коммуникации: сформирована продуктовая логика, определены сегменты и ЛПР, подготовлены презентационные материалы, карта продаж и база потенциальных компаний для первичного выхода.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Проект получил готовую основу для начала B2B-коммуникации с потенциальными корпоративными клиентами.
          </p>
        </Section>

        <Section eyebrow="Честные границы" title="Что такая упаковка не гарантирует">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Даже качественно подготовленное B2B-предложение не гарантирует сделку. Результат зависит от самой услуги, спроса, качества коммуникации, работы с потенциальными клиентами и процесса продаж.
          </p>
        </Section>

        <Section eyebrow="Связь с услугой" title="Нужно упаковать B2B-услугу или проект?">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Если у вас есть профессиональная услуга, но её нужно адаптировать под корпоративных клиентов, можно начать с исследования аудитории, позиционирования и структуры предложения.
          </p>
          <a href="/upakovka-proekta/" className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-neon transition hover:text-neon/80">
            Упаковка проекта под ключ →
          </a>
        </Section>

        <Section eyebrow="FAQ" title="Частые вопросы о позиционировании B2B-услуг">
          <div className="max-w-4xl space-y-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-xl border border-border bg-card/50 p-5">
                <summary className="cursor-pointer list-none font-semibold marker:hidden">{question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section eyebrow="Связаться" title="Обсудим вашу B2B-задачу?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Если есть услуга или проект, который нужно сделать понятным для корпоративных клиентов, расскажите, что уже существует и к какому результату нужно прийти.
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
