import { createFileRoute } from "@tanstack/react-router";

const PAGE_URL = "https://chelovek-neiroset.ru/ii-assistent-dlya-biznesa/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const PAGE_TITLE = "ИИ-ассистент для бизнеса и сайта | Vikey AI";
const PAGE_DESC =
  "Создаю ИИ-ассистентов и AI-консультантов для бизнеса и сайта: база знаний, ответы клиентам, рабочие сценарии и помощь в автоматизации.";

export const Route = createFileRoute("/ii-assistent-dlya-biznesa")({
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
  component: AiAssistantBusinessPage,
});

const capabilities = [
  ["Ответы клиентам", "Помощь с типовыми вопросами об услугах, условиях работы и продукте."],
  ["Работа с базой знаний", "Поиск и объяснение информации из материалов компании."],
  ["Помощь сотрудникам", "Быстрый доступ к инструкциям, правилам, продуктовой информации и внутренним материалам."],
  ["Первичная квалификация обращения", "Уточнение задачи клиента и сбор информации перед передачей человеку."],
  ["Навигация по услугам", "Помощь посетителю выбрать подходящую услугу или следующий шаг."],
  ["Повторяющиеся рабочие сценарии", "Помощь в операциях, которые можно формализовать и автоматизировать."],
];

const development = [
  "Разбор задачи бизнеса.",
  "Определение пользователей и сценариев.",
  "Определение функций ассистента.",
  "Подготовка или структурирование базы знаний.",
  "Проектирование диалогов и ограничений.",
  "Выбор подходящей модели и архитектуры.",
  "Настройка инструкций для ассистента.",
  "Подключение необходимых инструментов или интерфейса.",
  "Тестирование на реальных вопросах.",
  "Корректировка после тестирования.",
];

const process = [
  ["1. Определяем задачу", "Что ассистент должен делать и кому помогать."],
  ["2. Проектируем сценарии", "Какие вопросы, данные и действия должны поддерживаться."],
  ["3. Подготавливаем информацию", "База знаний, инструкции и материалы бизнеса."],
  ["4. Собираем и тестируем", "Проверяем реальные диалоги и пограничные ситуации."],
  ["5. Запускаем и корректируем", "После запуска оцениваем работу и при необходимости уточняем настройки."],
];

const scenarios = [
  ["Консультант на сайте", "Отвечает на вопросы о компании и услугах, помогает посетителю понять варианты и перейти к обращению."],
  ["Ассистент по базе знаний", "Помогает быстро находить и объяснять информацию из инструкций, регламентов, FAQ и других материалов бизнеса."],
  ["Помощник для отдела продаж", "Собирает первичную информацию по обращению и помогает сотруднику быстрее понять задачу клиента."],
  ["Внутренний помощник сотрудникам", "Подсказывает правила, инструкции и продуктовую информацию по подготовленной базе знаний компании."],
];

const faqs = [
  [
    "Чем ИИ-ассистент отличается от чат-бота?",
    "Обычный сценарный чат-бот чаще работает по заранее заданным кнопкам, веткам и правилам. ИИ-ассистент может обрабатывать свободно сформулированный вопрос и формировать ответ на основе предоставленной информации и заданных инструкций. В одном проекте эти подходы могут сочетаться.",
  ],
  [
    "Можно ли подключить ИИ-ассистента к сайту?",
    "Да. ИИ-консультант для сайта может отвечать на вопросы посетителей, объяснять услуги, помогать выбрать подходящий вариант и направлять к обращению. Конкретная реализация зависит от задач проекта.",
  ],
  [
    "Может ли ассистент отвечать по материалам моей компании?",
    "Да. Для этого подготавливается база знаний: описания услуг, инструкции, регламенты, FAQ, каталоги и другие материалы, которые действительно нужны для работы ассистента.",
  ],
  [
    "Можно ли использовать его для клиентов и сотрудников?",
    "Да. Сценарии могут быть клиентскими, внутренними или комбинированными. Важно заранее определить, кому помогает ассистент и какие данные ему нужны.",
  ],
  [
    "Всегда ли ответы ИИ будут правильными?",
    "Нет. ИИ-система может ошибаться, поэтому для проекта определяются источники информации, ограничения и ситуации, когда вопрос нужно передать человеку. Ответы тестируются и корректируются.",
  ],
  [
    "Можно ли сначала сделать небольшую версию и потом расширить её?",
    "Да. Часто разумно начать с минимальной рабочей версии с ограниченным набором сценариев, проверить её на реальных вопросах и затем расширять функции и базу знаний.",
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

function AiAssistantBusinessPage() {
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
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> ИИ-ассистенты · Vikey AI
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                ИИ-ассистент для бизнеса под вашу задачу
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Создаю ИИ-ассистентов и AI-консультантов, которые помогают отвечать клиентам, работать с базой знаний, подсказывать сотрудникам и решать повторяющиеся задачи бизнеса.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                  Обсудить задачу
                </a>
                <a href="#capabilities" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">
                  Что может ассистент
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section eyebrow="О технологии" title="Что такое ИИ-ассистент для бизнеса">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            ИИ-ассистент — это цифровой помощник, который работает с заданной информацией и сценариями бизнеса. Он может отвечать на вопросы, помогать клиентам или сотрудникам находить нужную информацию и выполнять часть повторяющихся операций. Конкретные функции определяются задачей проекта.
          </p>
        </Section>

        <Section id="capabilities" eyebrow="Возможности" title="Какие задачи может решать ИИ-ассистент">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            ИИ-ассистент для бизнеса может быть настроен как ИИ-помощник для бизнеса, ИИ-ассистент для клиентов или ИИ-ассистент для отдела продаж — в зависимости от того, кому он помогает и какие сценарии нужны.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Для сайта" title="ИИ-консультант для сайта">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            На сайте ИИ-консультант может отвечать на вопросы посетителя, объяснять услуги, помогать выбрать подходящий вариант и направлять к обращению. Для проекта заранее определяется база информации, сценарии взаимодействия и ситуации, в которых вопрос лучше передать человеку. Такой ИИ-консультант для сайта или AI-ассистент для сайта настраивается под конкретную структуру и задачи проекта.
          </p>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Если проекту нужен новый сайт или отдельная посадочная страница, посмотреть услугу{" "}
            <a href="/sayty-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">«Сайты для бизнеса»</a>.
          </p>
        </Section>

        <Section eyebrow="База знаний" title="ИИ-ассистент по базе знаний компании">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Ассистент может работать не только с общей моделью, но и с подготовленными материалами бизнеса: описаниями услуг, инструкциями, регламентами, FAQ, каталогами и другими данными. Чем качественнее подготовлена база знаний, тем понятнее и полезнее могут быть ответы.
          </p>
        </Section>

        <Section eyebrow="Подходы" title="Чем ИИ-ассистент отличается от обычного чат-бота">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold">Сценарный чат-бот</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Обычный сценарный чат-бот чаще работает по заранее заданным кнопкам, веткам и правилам.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold">ИИ-ассистент</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                ИИ-ассистент может обрабатывать свободно сформулированный вопрос и формировать ответ на основе предоставленной информации и заданных инструкций.
              </p>
            </article>
          </div>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            При этом в одном проекте эти подходы могут сочетаться.
          </p>
        </Section>

        <Section eyebrow="Разработка" title="Что входит в создание ИИ-ассистента">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Создание ИИ-ассистента для бизнеса начинается с разбора реальной задачи. Разработка и настройка ИИ-ассистента для бизнеса включают сценарии, базу знаний, ограничения, тестирование и подготовку к внедрению ИИ-ассистента в бизнес.
          </p>
          <ol className="mt-6 grid gap-3 md:grid-cols-2">
            {development.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-xl border border-border bg-card/50 p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#8B7BC8]/10 text-sm font-bold text-[#8B7BC8]">{index + 1}</span>
                <span className="pt-1 text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section eyebrow="Надёжность" title="Контроль ответов и ограничения">
          <div className="rounded-2xl border border-neon/25 bg-card p-6 sm:p-8">
            <p className="max-w-4xl leading-relaxed text-muted-foreground">
              ИИ-система требует настройки и проверки. Для проекта заранее определяются источники информации, допустимые сценарии, ограничения и ситуации, когда ассистент должен направить пользователя к человеку. Ответы тестируются до запуска и могут корректироваться по результатам работы.
            </p>
          </div>
        </Section>

        <Section eyebrow="Этапы" title="Как проходит работа">
          <div className="grid gap-4 lg:grid-cols-5">
            {process.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Применение" title="Примеры сценариев применения">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Ниже не коммерческие кейсы, а типовые сценарии, которые можно адаптировать под конкретную задачу и процессы бизнеса.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {scenarios.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Стоимость" title="Сколько стоит ИИ-ассистент для бизнеса">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="max-w-4xl leading-relaxed text-muted-foreground">
              Стоимость зависит от задачи, количества сценариев, объёма базы знаний, выбранной AI-модели, интеграций и предполагаемой нагрузки. Сначала можно определить минимальную рабочую версию и оценить её отдельно.
            </p>
            <a href="/#calc" className="mt-6 inline-flex rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
              Оценить задачу
            </a>
          </div>
        </Section>

        <Section eyebrow="FAQ" title="Частые вопросы">
          <div className="space-y-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-xl border border-border bg-card/60 p-5">
                <summary className="cursor-pointer list-none pr-6 font-semibold marker:hidden">{question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="border-t border-border bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">Обсудим задачу для ИИ-ассистента?</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Расскажите, кому должен помогать ассистент и какие задачи он должен решать. Помогу определить подходящий сценарий и понять, с какой версии лучше начать.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://t.me/Vikey_shel" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Telegram</a>
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
