import { createFileRoute } from "@tanstack/react-router";

const PAGE_URL = "https://chelovek-neiroset.ru/avtomatizaciya-biznesa-ai/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const PAGE_TITLE = "Автоматизация бизнес-процессов с ИИ | Vikey AI";
const PAGE_DESC =
  "Автоматизирую процессы бизнеса с помощью AI, n8n, Make, API и интеграций: заявки, CRM, уведомления, данные и повторяющиеся рабочие задачи.";

export const Route = createFileRoute("/avtomatizaciya-biznesa-ai")({
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
  component: AutomationBusinessPage,
});

const capabilities = [
  ["Обработка заявок", "Получение заявки с сайта или другого канала, сохранение данных и передача ответственному сотруднику."],
  ["CRM и клиентские данные", "Создание и обновление карточек, передача информации и запуск действий после изменения статуса."],
  ["Уведомления", "Автоматические сообщения сотрудникам или клиентам при наступлении заданного события."],
  ["Работа с таблицами и данными", "Добавление, обновление и передача информации между рабочими таблицами и другими системами."],
  ["Отчёты", "Сбор данных из нескольких источников и подготовка информации для дальнейшего анализа."],
  ["Повторяющиеся рабочие действия", "Создание задач, перемещение данных, проверка условий и запуск следующего этапа процесса."],
];

const aiExamples = [
  "Классификация входящих обращений",
  "Разбор текста заявки",
  "Извлечение информации из сообщения",
  "Подготовка черновика ответа",
  "Краткое резюме большого текста",
  "Распределение обращений по категориям",
];

const integrations = [
  "Сайт",
  "CRM",
  "Telegram",
  "Электронная почта",
  "Таблицы",
  "Базы данных",
  "Формы",
  "Календарь",
  "Внешние API",
  "AI-модели",
  "Сервисы автоматизации",
];

const scenarios = [
  ["Заявка с сайта", "Заявка → проверка данных → CRM → уведомление менеджеру → задача."],
  ["Новый клиент", "Создание записи → уведомление → сохранение данных → запуск следующего рабочего этапа."],
  ["Входящее обращение", "Сообщение → AI-классификация → определение категории → передача нужному сотруднику."],
  ["Рабочий отчёт", "Получение данных из источников → объединение → подготовка структурированной информации."],
];

const development = [
  "Разбор текущего процесса.",
  "Определение ручных повторяющихся действий.",
  "Определение сервисов и источников данных.",
  "Проектирование будущей логики.",
  "Выбор подходящего способа интеграции.",
  "Настройка workflow.",
  "Подключение API или готовых интеграций.",
  "Подключение AI-функций при необходимости.",
  "Обработка ошибок и исключений.",
  "Тестирование на реальных сценариях.",
  "Проверка передачи данных.",
  "Подготовка к запуску.",
];

const faqs = [
  [
    "Что можно автоматизировать в бизнесе?",
    "В первую очередь повторяющиеся действия, которые выполняются по понятным правилам: передачу данных, обработку заявок, уведомления, создание задач, обновление CRM и другие регулярные операции.",
  ],
  [
    "Для автоматизации обязательно нужен ИИ?",
    "Нет. Многие процессы надёжнее решаются обычными правилами и интеграциями. ИИ имеет смысл добавлять там, где нужно анализировать или обрабатывать неструктурированную информацию.",
  ],
  [
    "Что лучше — n8n или Make?",
    "Выбор зависит от конкретной задачи, интеграций и требований к системе. Перед разработкой нужно определить, какие сервисы используются и какая логика требуется.",
  ],
  [
    "Можно ли подключить автоматизацию к CRM?",
    "Во многих случаях да, если CRM предоставляет API или другой поддерживаемый способ интеграции.",
  ],
  [
    "Можно ли связать сайт и Telegram?",
    "Да. Например, заявка с сайта может запускать процесс и отправлять уведомление в Telegram. Конкретная схема зависит от задачи.",
  ],
  [
    "Можно ли автоматизировать только один процесс?",
    "Да. Часто это лучший способ начать: выбрать понятный повторяющийся процесс, запустить автоматизацию и только затем расширять систему.",
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

function AutomationBusinessPage() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="На главную Vikey AI">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">Студия Vikey AI</span>
          </a>
          <a href="/#contact" className="shrink-0 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow sm:px-4 sm:text-sm">
            Обсудить автоматизацию
          </a>
        </div>
      </header>

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Автоматизация · Vikey AI
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                Автоматизация бизнес-процессов с ИИ
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Помогаю убрать повторяющиеся ручные действия: связать сайт, CRM, таблицы, мессенджеры и другие сервисы, настроить передачу данных и подключить AI там, где он действительно полезен.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                  Обсудить автоматизацию
                </a>
                <a href="#capabilities" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">
                  Что можно автоматизировать
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section id="capabilities" eyebrow="Возможности" title="Что можно автоматизировать в бизнесе">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Автоматизация полезна там, где сотрудники регулярно повторяют одни и те же действия: переносят данные между сервисами, проверяют заявки, отправляют уведомления, обновляют таблицы или создают задачи вручную.
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

        <Section eyebrow="Логика процесса" title="Как работает автоматизация бизнес-процессов">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Автоматизация строится как последовательность событий и действий. Одно событие запускает следующий шаг: например, новая заявка может автоматически создать запись в CRM, уведомить менеджера и передать данные в рабочую таблицу.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-2 text-sm font-medium">
            {["Заявка", "Проверка данных", "CRM", "Уведомление", "Задача сотруднику", "Следующее автоматическое действие"].map((item, index, all) => (
              <div key={item} className="contents">
                <div className="rounded-xl border border-border bg-card px-4 py-3">{item}</div>
                {index < all.length - 1 ? <span className="px-1 text-neon" aria-hidden="true">→</span> : null}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Если требуется, между этапами можно использовать ИИ — например для классификации обращения, обработки текста или подготовки черновика.
          </p>
        </Section>

        <Section eyebrow="AI при необходимости" title="Где в автоматизации нужен ИИ">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            ИИ нужен не каждому процессу. Если задача сводится к передаче данных по понятным правилам, обычной автоматизации часто достаточно.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
            AI имеет смысл подключать там, где нужно работать с неструктурированным текстом, определять смысл обращения, классифицировать информацию, извлекать данные или формировать черновой результат.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aiExamples.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Если нужен именно помощник, который общается с человеком —{" "}
            <a href="/ii-assistent-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">ИИ-ассистенты для бизнеса →</a>
          </p>
        </Section>

        <Section eyebrow="Инструменты под задачу" title="Автоматизация с n8n и Make">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Для соединения сервисов и построения рабочих сценариев можно использовать инструменты автоматизации, например n8n или Make. Выбор зависит от задачи, доступных интеграций, требований к данным и дальнейшему развитию системы.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-xl font-semibold">n8n</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Подходит для построения гибких workflow, интеграций через API и более сложной логики, если это соответствует задаче проекта.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-xl font-semibold">Make</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Подходит для визуального соединения сервисов и построения последовательностей автоматических действий.
              </p>
            </article>
          </div>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Также возможна работа напрямую через API, если это технически целесообразнее.
          </p>
        </Section>

        <Section eyebrow="Связи между системами" title="Интеграция сервисов и данных">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Автоматизация может связывать несколько инструментов бизнеса в один процесс. Возможность конкретной интеграции зависит от API и технических возможностей каждого сервиса.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Сценарии" title="Примеры сценариев автоматизации">
          <div className="grid gap-5 md:grid-cols-2">
            {scenarios.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Разделение задач" title="Telegram-бот как часть автоматизации">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Telegram-бот может быть интерфейсом автоматизированного процесса: принимать данные, отправлять уведомления или запускать определённые действия. Но бот и автоматизация — не одно и то же.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            Если задача прежде всего связана с работой пользователя внутри Telegram —{" "}
            <a href="/telegram-boty-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">Telegram-боты для бизнеса →</a>
          </p>
        </Section>

        <Section eyebrow="Работа над проектом" title="Что входит в автоматизацию бизнес-процесса">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Внедрение ИИ в бизнес-процессы начинается не с выбора инструмента, а с разбора текущей логики. Автоматизация бизнеса с ИИ или без него должна убирать конкретные повторяющиеся действия и сохранять понятный контроль над процессом.
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

        <Section eyebrow="Старт с малого" title="С чего начать автоматизацию бизнеса">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Не обязательно начинать с большого проекта. Часто полезнее выбрать один повторяющийся процесс, который занимает время или требует постоянного ручного переноса данных, автоматизировать его и проверить результат.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["Обработка заявки", "Создание задачи", "Уведомление менеджера", "Обновление CRM", "Перенос данных между системами", "Подготовка регулярной информации"].map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Надёжность" title="Контроль и надёжность автоматизации">
          <div className="rounded-2xl border border-neon/25 bg-card p-6 sm:p-8">
            <p className="max-w-4xl leading-relaxed text-muted-foreground">
              Автоматический процесс нужно проектировать не только для штатного сценария, но и для ошибок: недоступного API, некорректных данных, отсутствующего поля или сбоя внешнего сервиса.
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
              Перед запуском проверяются основные сценарии, исключения и передача данных между системами. Если процесс выполняет важное действие, должна быть предусмотрена понятная логика контроля или уведомления человека. Если используется ИИ, отдельно определяются его инструкции и границы применения.
            </p>
          </div>
        </Section>

        <Section eyebrow="Стоимость" title="Сколько стоит автоматизация бизнес-процесса">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Стоимость зависит от количества этапов, сервисов, интеграций, API, объёма данных и необходимости подключать AI. Часто разумнее сначала автоматизировать один конкретный процесс, а затем постепенно расширять систему.
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

        <Section eyebrow="Связаться" title="Обсудим, что можно автоматизировать?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Расскажите, какой процесс сейчас приходится выполнять вручную. Помогу разобрать его на этапы и понять, что можно автоматизировать и нужен ли для этого ИИ.
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
