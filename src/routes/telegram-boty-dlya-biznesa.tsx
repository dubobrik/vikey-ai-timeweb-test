import { createFileRoute } from "@tanstack/react-router";

const PAGE_URL = "https://chelovek-neiroset.ru/telegram-boty-dlya-biznesa/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const PAGE_TITLE = "Разработка Telegram-ботов для бизнеса под ключ | Vikey AI";
const PAGE_DESC =
  "Создаю Telegram-ботов для бизнеса: заявки, запись клиентов, оплаты, уведомления, сценарии, интеграции и AI-функции при необходимости.";

export const Route = createFileRoute("/telegram-boty-dlya-biznesa")({
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
  component: TelegramBotsBusinessPage,
});

const capabilities = [
  ["Приём заявок", "Собирает контактные данные и информацию о запросе клиента и передаёт её по заданному сценарию."],
  ["Запись клиентов", "Помогает выбрать услугу, дату или другой доступный вариант и сохранить данные пользователя."],
  ["Анкеты и опросы", "Последовательно задаёт вопросы и собирает необходимые данные."],
  ["Продажи и оформление заказа", "Показывает предложения и ведёт пользователя по заранее разработанному сценарию."],
  ["Оплата", "При необходимости можно подключить подходящий платёжный сценарий."],
  ["Уведомления", "Отправляет сервисные сообщения, напоминания и другие уведомления по заданной логике."],
];

const botTypes = [
  ["Бот для услуг", "Информация об услугах, ответы на типовые вопросы, заявки, запись и переход к контакту."],
  ["Бот для продаж", "Каталог или предложения, сбор заказа, передача заявки и при необходимости платёжный сценарий."],
  ["Бот для записи клиентов", "Выбор услуги и последовательный сбор информации для записи."],
  ["Информационный бот", "Материалы, инструкции, ответы на частые вопросы и уведомления."],
  ["Внутренний бот компании", "Рабочие сценарии для сотрудников, уведомления, получение информации и выполнение повторяющихся действий."],
  ["Telegram-бот с AI-функциями", "Если задача требует обработки свободных вопросов, работы с базой знаний или генерации ответа, Telegram-бот можно дополнить искусственным интеллектом."],
];

const development = [
  "Разбор задачи бизнеса.",
  "Определение пользователей бота.",
  "Проектирование пользовательских сценариев.",
  "Структура меню, кнопок и переходов.",
  "Формирование вопросов и собираемых данных.",
  "Разработка основной логики.",
  "Подключение хранения данных при необходимости.",
  "Интеграции с внешними сервисами, если они нужны.",
  "Подключение оплаты, если она предусмотрена задачей.",
  "Подключение AI-функций, если они действительно требуются.",
  "Тестирование нормальных и ошибочных сценариев.",
  "Подготовка к запуску.",
];

const integrations = [
  "CRM",
  "Платёжные системы",
  "Таблицы",
  "Базы данных",
  "Сайт",
  "Внешние API",
  "Сервисы автоматизации",
  "AI-модели",
  "Уведомления администратора",
];

const process = [
  ["1. Разбираем задачу", "Определяем, что пользователь должен получить и какие действия бизнеса имеет смысл перенести в бота."],
  ["2. Проектируем сценарий", "Продумываем меню, переходы, вопросы, действия пользователя и возможные исключения."],
  ["3. Собираем первую рабочую версию", "Создаём основную логику без лишних функций."],
  ["4. Тестируем", "Проверяем нормальные сценарии, ошибки и нестандартные действия пользователя."],
  ["5. Запускаем и развиваем", "После запуска при необходимости добавляем новые функции, интеграции и сценарии."],
];

const faqs = [
  [
    "Можно ли сделать Telegram-бота без ИИ?",
    "Да. Для многих задач сценарная логика будет проще, дешевле и надёжнее. Искусственный интеллект нужен только там, где он действительно помогает решить задачу.",
  ],
  [
    "Можно ли подключить к Telegram-боту искусственный интеллект?",
    "Да. AI можно использовать для обработки свободных вопросов, генерации ответа или работы с базой знаний. Конкретная схема зависит от задачи.",
  ],
  [
    "Может ли бот принимать заявки?",
    "Да. Можно определить нужные поля, последовательность вопросов и способ передачи заявки.",
  ],
  [
    "Можно ли принимать оплату через Telegram-бота?",
    "Да, если выбранная платёжная система и бизнес-сценарий позволяют такую интеграцию.",
  ],
  [
    "Можно ли подключить Telegram-бота к CRM?",
    "Во многих случаях да, если CRM предоставляет подходящий API или другой поддерживаемый способ интеграции. Возможность нужно проверять для конкретной системы.",
  ],
  [
    "Можно ли сначала сделать небольшого бота и потом расширить?",
    "Да. Для многих проектов разумно начать с минимальной рабочей версии, проверить сценарии и затем добавлять новые функции.",
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

function TelegramBotsBusinessPage() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="На главную Vikey AI">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">Студия Vikey AI</span>
          </a>
          <a href="/#contact" className="shrink-0 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow sm:px-4 sm:text-sm">
            Обсудить бота
          </a>
        </div>
      </header>

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Telegram-боты · Vikey AI
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                Разработка Telegram-ботов для бизнеса
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Создаю Telegram-ботов под конкретные задачи бизнеса: приём заявок, запись клиентов, анкеты, оплаты, уведомления, работа со сценариями и интеграциями. При необходимости бот можно дополнить AI-функциями.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                  Обсудить бота
                </a>
                <a href="#capabilities" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">
                  Что может бот
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section id="capabilities" eyebrow="Возможности" title="Что может Telegram-бот для бизнеса">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Telegram-бот помогает перенести повторяющиеся действия в понятный сценарий внутри мессенджера. Его функции зависят от задачи: от простой формы заявки до сервиса с оплатой, личным кабинетом, уведомлениями и подключением внешних систем.
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

        <Section eyebrow="Форматы" title="Telegram-бот под задачу бизнеса">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {botTypes.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="AI при необходимости" title="Telegram-бот с ИИ или обычный сценарный бот?">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Не каждой задаче нужен искусственный интеллект. Если пользователь выбирает команды, заполняет форму, записывается или оплачивает услугу, часто достаточно надёжного сценарного бота.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
            Если требуется понимать свободно сформулированные вопросы, работать с базой знаний или формировать ответы, к Telegram-боту можно подключить ИИ.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            <a href="/ii-assistent-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">Подробнее об ИИ-ассистентах для бизнеса →</a>
          </p>
        </Section>

        <Section eyebrow="Разработка" title="Что входит в создание Telegram-бота">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Разработка Telegram-ботов для бизнеса начинается с конкретной задачи и сценария пользователя. Создание Telegram-бота под ключ может включать простую логику, хранение данных, интеграции, оплату и AI-функции — в зависимости от проекта.
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

        <Section eyebrow="Связи с сервисами" title="Интеграции Telegram-бота">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Бот может работать самостоятельно или быть частью более крупного процесса. При необходимости можно передавать данные во внешние системы и получать их обратно через доступные API и интеграции. Например, Telegram-бот с CRM возможен, если конкретная система предоставляет подходящий API или другой поддерживаемый способ подключения.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Если бот должен быть частью более крупного процесса между CRM, сайтом и другими сервисами —{" "}
            <a href="/avtomatizaciya-biznesa-ai/" className="font-semibold text-neon transition hover:text-neon/80">автоматизация бизнеса с AI</a>.
          </p>
        </Section>

        <Section eyebrow="Платежи" title="Telegram-бот с оплатой">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Если бизнес-сценарий предполагает оплату, её можно встроить в работу бота через подходящую платёжную систему. Конкретная схема зависит от продукта, юридической модели бизнеса и возможностей выбранного платёжного сервиса.
          </p>
        </Section>

        <Section eyebrow="Выбор формата" title="Telegram-бот или сайт — что выбрать">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Сайт и Telegram-бот решают разные задачи и могут работать вместе. Сайт удобен для представления бизнеса, услуг, поиска и первого знакомства. Бот подходит для повторяющегося взаимодействия: заявок, записи, уведомлений, анкет, платежей и персональных сценариев.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            <a href="/sayty-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">Сайты для бизнеса →</a>
          </p>
        </Section>

        <Section eyebrow="Реальный проект" title="Пример Telegram-бота">
          <article className="max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
            <div className="text-xs font-medium uppercase tracking-widest text-neon">AI Bot</div>
            <h3 className="mt-2 text-2xl font-semibold">@destiny_voice_bot</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Бот для автоматизации первичного общения с пользователями в нише персональных консультаций. Продумана логика диалога, сценарий первого контакта, варианты запросов и структура ответов. Бот создаёт понятный первый шаг взаимодействия и помогает организовать первичное общение.
            </p>
            <a href="https://t.me/destiny_voice_bot" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center rounded-lg border border-neon/40 bg-neon/10 px-4 py-2.5 text-sm font-semibold text-neon transition hover:bg-neon/20">
              Открыть Telegram-бота
            </a>
          </article>
        </Section>

        <Section eyebrow="Процесс" title="Как создаётся Telegram-бот">
          <div className="grid gap-4 lg:grid-cols-5">
            {process.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Контроль" title="Надёжность и контроль">
          <div className="rounded-2xl border border-neon/25 bg-card p-6 sm:p-8">
            <p className="max-w-4xl leading-relaxed text-muted-foreground">
              До запуска бот тестируется на основных и ошибочных сценариях. Для важных операций нужно предусматривать обработку сбоев, проверку входных данных и понятный способ передать ситуацию человеку.
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
              Если используется ИИ, дополнительно определяются его инструкции, источники информации и ограничения. Особенно внимательно тестируются платежи, персональные данные, AI-функции, API, автоматические действия, запись и заявки.
            </p>
          </div>
        </Section>

        <Section eyebrow="Стоимость" title="Сколько стоит разработка Telegram-бота">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Стоимость зависит от количества сценариев, хранения данных, интеграций, платежей, AI-функций и сложности логики. Простую первую версию можно запустить с минимальным набором функций, а затем постепенно расширять.
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

        <Section eyebrow="Связаться" title="Обсудим Telegram-бота для вашего бизнеса?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Расскажите, что должен делать бот и кто будет им пользоваться. Помогу определить минимальный рабочий сценарий и понять, какие функции действительно нужны на старте.
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
