import { createFileRoute } from "@tanstack/react-router";

// Текст: .business/marketing/seo/stati/ii-dlya-buhgalterii/draft.md, согласован Викторией 15.11.2026
// Судья-читатель: judge-run6.log и judge-run7.log, PASS 6/6. Цену в статье не называем (её решение 14.11)
const PAGE_URL = "https://chelovek-neiroset.ru/gaidy/ii-dlya-buhgalterii/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const H1 = "ИИ для бухгалтерии: что отдать нейросети и не слить данные";
const PAGE_TITLE = "ИИ для бухгалтерии: что отдать нейросети и не слить данные | Vikey AI";
const PAGE_DESC =
  "Что в бухгалтерии можно отдать ИИ уже сейчас: письма-запросы документов, разбор выписки, черновики пояснений, распознавание первички в 1С. Как убрать из запроса данные клиентов и сотрудников и где нейросеть ошибается. Готовые промпты и таблица замен";
const PUBLISHED = "2026-11-15";
const TG_DM = "https://t.me/Vikey_shel";
const TG_CHANNEL = "https://t.me/vikey_ai";

const faq: [string, string][] = [
  [
    "Что делать, если нейросеть написала не то или отказалась отвечать?",
    "Напишите в том же чате, что поправить: «короче», «официальнее», «убери слово срочно», «добавь срок до 5-го числа». Она перепишет текст, начинать заново не нужно. Если отказалась отвечать, сформулируйте задачу проще или вставьте тот же запрос во вторую нейросеть: в Алису вместо GigaChat или наоборот",
  ],
  [
    "Какую нейросеть выбрать бухгалтеру?",
    "Для писем и черновиков подходят бесплатные российские GigaChat и Алиса. Для вопросов по работе в программе 1С полезнее «1С:Напарник по ИТС», для ввода документов - распознавание первичных документов внутри 1С",
  ],
  [
    "Как быстро убрать названия и фамилии из выписки?",
    "Откройте выписку в Excel и нажмите Ctrl+H, откроется окно «Найти и заменить». В поле «Найти» впишите название контрагента, в поле «Заменить на» впишите «Контрагент 1» и нажмите «Заменить все». Так по очереди для каждого названия и фамилии. Столбцы со счетами и ИНН удалите целиком. Сохраните обезличенную копию отдельным файлом, а оригинал не трогайте",
  ],
  [
    "Есть ли искусственный интеллект в 1С:Бухгалтерии?",
    "Да. По данным фирмы «1С», сервис «1С:Распознавание первичных документов» встроен в 1С:Бухгалтерию и создаёт документы из сканов, фото и файлов, а «1С:Напарник по ИТС» отвечает на вопросы по работе в программах 1С",
  ],
];

const sources: [string, string][] = [
  ["ФНС: как исчислять НДС по новым правилам с 2026 года (закон № 425-ФЗ, ставка 22%)", "https://www.nalog.gov.ru/rn25/news/activities_fts/16590316/"],
  [
    "Фирма «1С»: Карта ИИ-возможностей 1С, готовые сервисы для вашего бизнеса (PDF)",
    "https://static.1c.ru/files/Карта_ИИ-возможностей_1С_готовые_сервисы_для_вашего_бизнеса.pdf",
  ],
  ["1С:Напарник ИТС", "https://portalchat.1c.ai/"],
  ["Закон № 152-ФЗ «О персональных данных», ст. 3 (понятие трансграничной передачи)", "https://rulaws.ru/laws/Federalnyy-zakon-ot-27.07.2006-N-152-FZ/Statya-3/"],
  ["Закон № 152-ФЗ «О персональных данных», ст. 12", "https://rulaws.ru/laws/Federalnyy-zakon-ot-27.07.2006-N-152-FZ/Statya-12/"],
  ["GigaChat", "https://giga.chat/"],
  ["Алиса", "https://alice.yandex.ru/"],
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: H1,
    description: PAGE_DESC,
    inLanguage: "ru",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: PAGE_URL,
    image: OG_IMAGE,
    author: { "@type": "Person", name: "Виктория Шелих", url: "https://chelovek-neiroset.ru/" },
    publisher: { "@type": "Organization", name: "Студия Vikey AI", url: "https://chelovek-neiroset.ru/" },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#otvet"] },
    citation: sources.map(([name, url]) => ({ "@type": "CreativeWork", name, url })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://chelovek-neiroset.ru/" },
      { "@type": "ListItem", position: 2, name: "Гайды", item: "https://chelovek-neiroset.ru/gaidy/" },
      { "@type": "ListItem", position: 3, name: "ИИ для бухгалтерии", item: PAGE_URL },
    ],
  },
];

export const Route = createFileRoute("/gaidy/ii-dlya-buhgalterii")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: PUBLISHED },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: GuideIiDlyaBuhgalterii,
});

const p = "mt-4 leading-relaxed text-muted-foreground";
const h2 = "mt-14 text-2xl font-bold sm:text-3xl";
const a = "font-semibold text-neon underline-offset-4 transition hover:underline";
const th = "border border-border bg-card px-3 py-2 text-left font-semibold";
const td = "border border-border px-3 py-2 align-top text-muted-foreground";
const strong = "text-foreground";

function Code({ children }: { children: string }) {
  return (
    <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-border bg-card p-4 text-sm leading-relaxed">
      <code>{children}</code>
    </pre>
  );
}

function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        <thead>
          <tr>{head.map((h) => <th key={h} className={th}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j} className={td}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Cta({ children, label, href }: { children: React.ReactNode; label: string; href: string }) {
  return (
    <aside className="mt-8 rounded-2xl border border-neon/30 bg-card p-6 sm:p-8">
      {children}
      <a href={href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
        {label}
      </a>
    </aside>
  );
}

function GuideIiDlyaBuhgalterii() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="На главную Vikey AI">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">Студия Vikey AI</span>
          </a>
          <a href={TG_DM} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow sm:px-4 sm:text-sm">
            Написать в Telegram
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:py-16">
        <nav aria-label="Хлебные крошки" className="text-xs text-muted-foreground">
          <a href="/" className="hover:text-foreground">Главная</a> / <a href="/gaidy/" className="hover:text-foreground">Гайды</a> / <span>ИИ для бухгалтерии</span>
        </nav>

        <article>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{H1}</h1>
          <p className="mt-3 text-xs text-muted-foreground">Виктория Шелих · <time dateTime={PUBLISHED}>15 ноября 2026</time></p>

          <p id="otvet" className="mt-6 text-lg leading-relaxed">
            ИИ в бухгалтерии забирает текст и ввод вокруг цифр: письма, первичку, разбор выписки, черновики пояснений. Проводки, расчёт налогов и подпись остаются за бухгалтером, потому что нейросеть отвечает уверенно даже тогда, когда ошибается или опирается на старую редакцию закона
          </p>
          <p className={p}>
            Начните с самой безопасной задачи. Откройте бесплатную российскую нейросеть GigaChat (<a href="https://giga.chat/" target="_blank" rel="noopener noreferrer" className={a}>giga.chat</a>) или Алису (<a href="https://alice.yandex.ru/" target="_blank" rel="noopener noreferrer" className={a}>alice.yandex.ru</a>), вставьте текст ниже, впишите в скобки свои документы и отправьте. Если сайт попросит войти, войдите через аккаунт Сбера или Яндекса, это бесплатно. Названия клиента и фамилии не нужны
          </p>
          <Code>{`Ты помощник бухгалтера. Напиши письмо клиенту: за [месяц] не хватает документов: [например: акт за интернет, УПД на закупку товара, выписка по второму счёту]. Прислать нужно до [число]. Одной фразой объясни, зачем они: без них учёт за месяц останется неполным. Тон спокойный, 5-6 предложений, в конце спроси, когда клиенту удобно прислать.`}</Code>
          <p className={p}>Придёт готовое письмо. Подставьте имя клиента уже у себя в почте или мессенджере и отправляйте</p>

          <h2 className={h2}>Что отдать нейросети, а что оставить себе</h2>
          <p className={p}>
            Делите задачи по одному вопросу: что будет, если нейросеть ошибётся, и заметите ли вы это сразу. Письмо с ошибкой видно с первого прочтения. Неверную ставку в расчёте можно не заметить до требования из налоговой
          </p>
          <Table
            head={["Задача", "Кто делает", "Цена ошибки", "Данные"]}
            rows={[
              ["Письма и напоминания: запрос документов, сроки оплаты, ответы на типовые вопросы", "нейросеть пишет, вы читаете и отправляете", "мелочь, видно сразу", "без имён"],
              ["Ввод первички из сканов и фото", "сервис распознавания внутри 1С, вы проверяете", "неприятно, ловится при проверке", "остаются в 1С"],
              ["Разбор назначений платежей по группам", "нейросеть сортирует, вы решаете по спорным", "неприятно", "только после замен из памятки"],
              ["Черновик пояснений на требование налоговой", "нейросеть пишет черновик, вы проверяете каждую ссылку", "дорого", "без ИНН и названий"],
              ["Вопросы «как сделать это в 1С»", "помощник «1С:Напарник по ИТС»", "мелочь", "не нужны"],
              ["Проводки, расчёт налогов и зарплаты, отчётность", "программа учёта и вы", "дорого", "в нейросеть не отправляются"],
            ]}
          />
          <p className={p}>
            Последняя строка не про недоверие к технологиям. Налоги и зарплату 1С считает по правилам, которые в неё заложены, а чат-нейросеть каждый раз собирает ответ заново, и проверять его придётся так же долго, как посчитать самостоятельно
          </p>

          <h2 className={h2}>Первичка: распознавание уже встроено в 1С</h2>
          <p className={p}>
            Для ввода документов отдельная нейросеть не нужна. У фирмы «1С» есть сервис «1С:Распознавание первичных документов»: по описанию самой 1С он создаёт документы в программе из сканов, фотографий и файлов, сам определяет тип документа и сопоставляет его с данными, которые уже есть в вашей базе
          </p>
          <p className={p}>Что он принимает, по данным 1С:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>счета на оплату, товарные накладные ТОРГ-12, счета-фактуры, акты, УПД, УКД, кассовые чеки</li>
            <li>сканы и фото (PDF, PNG, JPEG, TIFF), файлы Word и Excel, архивы ZIP, RAR, 7Z</li>
            <li>в 1С:Бухгалтерии, 1С:Управлении нашей фирмой, 1С:ERP и других программах 1С</li>
          </ul>
          <p className={p}>
            По описанию 1С, распознанные документы попадают к бухгалтеру на проверку. Если первичка приходит не к вам, а в офис или на склад, сотрудник фотографирует её в мобильном приложении «1С:Сканер документов», и документ попадает в базу с пометкой, кто его прислал. Условия подключения для своей программы смотрите на портале 1С:ИТС
          </p>
          <p className={p}>
            На вопросы «где в 1С эта настройка» и «как сделать сторно» отвечает «1С:Напарник по ИТС» (<a href="https://portalchat.1c.ai/" target="_blank" rel="noopener noreferrer" className={a}>portalchat.1c.ai</a>). Его сделала сама фирма «1С» для вопросов по работе в своих программах, поэтому здесь он полезнее общего чата
          </p>

          <h2 className={h2}>Выписка: как отдать нейросети без имён и ИНН</h2>
          <p className={p}>
            Разбор выписки по группам экономит время, когда строк много, а половина назначений очевидна. Но в выписке названия контрагентов, ИНН, фамилии сотрудников и суммы выплат. Фамилия и сумма зарплаты - это персональные данные, и для них действует закон № 152-ФЗ
          </p>
          <p className={p}>Поэтому порядок такой: сначала замены, потом нейросеть</p>
          <ol className="mt-3 list-decimal space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Скопируйте из выписки только столбцы «назначение платежа» и «сумма»</li>
            <li>Замените названия на «Контрагент 1, 2, 3», фамилии на «Сотрудник 1, 2», номера счетов удалите (полная таблица замен в памятке ниже)</li>
            <li>Ключ «метка → настоящее название» держите у себя в отдельном файле, в чат он не уходит</li>
            <li>Вставьте строки в запрос:</li>
          </ol>
          <Code>{`Ниже назначения платежей из банковской выписки за месяц. Названия, ИНН и фамилии заменены метками. Разложи каждую строку в одну группу: оплата поставщику, поступление от покупателя, выплаты людям, налоги и взносы, комиссии банка, непонятно. Строки, где группа не очевидна, вынеси отдельным списком «проверить» и напиши, чего не хватает для решения. Счета учёта и проводки не предлагай, суммы не складывай.
[ваши строки]`}</Code>
          <p className={p}>
            Придёт список по группам и короткий список «проверить». Время уходит только на спорные строки. Суммы по группам считайте в Excel или в 1С: длинный столбец нейросеть может сложить с ошибкой
          </p>

          <Cta href={TG_DM} label="Написать «ПОМОЩЬ» в Telegram">
            <p className="leading-relaxed">
              Если письма и выписка пошли, а хочется, чтобы рутина делалась без вас (документы от клиентов собирались сами, напоминания уходили по графику), напишите мне «ПОМОЩЬ». Посмотрю, как у вас сейчас приходит первичка, и скажу, что можно снять, а где хватит бесплатной нейросети
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Ответ в личных сообщениях, без рассылок</p>
          </Cta>

          <h2 className={h2}>Требование из налоговой: черновик пояснений</h2>
          <p className={p}>
            Черновик пояснений нейросеть пишет хорошо, если дать ей факты и запретить придумывать ссылки. Самая опасная её привычка здесь - уверенно назвать номер статьи или письма Минфина, которого не существует
          </p>
          <Code>{`Мне пришло требование о пояснениях из налоговой. Суть требования: [своими словами, без ИНН и названий]. Что было на самом деле: [ваши факты]. Составь черновик пояснения: вежливо, по пунктам, только по этим фактам. Если нужна ссылка на статью Налогового кодекса или письмо, не придумывай номер, а поставь пометку [проверить].`}</Code>
          <p className={p}>
            Придёт текст с пометками [проверить]. Каждую пометку закрываете сами по Налоговому кодексу или по справочной системе, которой пользуетесь. Без этого шага черновик не отправляют
          </p>

          <h2 className={h2}>Где нейросеть ошибается в бухгалтерии</h2>
          <p className={p}>
            <strong className={strong}>Отвечает по старой редакции закона.</strong> Нейросеть учится на текстах до определённой даты и не знает, что поменялось после. Пример, где это бьёт по деньгам: с 1 января 2026 года основная ставка НДС 22%, а не 20% (закон № 425-ФЗ), порог освобождения от НДС на упрощёнке в 2026 году 20 млн рублей. Выход: ставки, пороги и сроки не спрашивать у чата, а брать с сайта ФНС или из Налогового кодекса
          </p>
          <p className={p}>
            <strong className={strong}>Придумывает ссылки.</strong> Номер статьи, письма или определения суда выглядит настоящим, а документа нет. Выход: в каждом запросе запрет «не придумывай номер, ставь [проверить]», как в шаблоне выше
          </p>
          <p className={p}>
            <strong className={strong}>Ошибается в сложении.</strong> На длинной таблице итог может не сойтись. Выход: нейросеть группирует и пишет, а складывает Excel или 1С
          </p>
          <p className={p}>
            <strong className={strong}>Звучит одинаково уверенно, когда права и когда нет.</strong> По тону ответа ошибку не поймать. Выход: перед тем как использовать ответ, задайте ему три вопроса из памятки ниже
          </p>

          <h2 className={h2}>Если в задаче есть данные сотрудников и клиентов</h2>
          <p className={p}>
            В бухгалтерии почти всё - персональные данные: фамилии, паспорта, СНИЛС, адреса и суммы зарплат сотрудников, данные клиентов-физлиц. Отправка таких данных в зарубежную нейросеть по закону № 152-ФЗ - это трансграничная передача (п. 11 ст. 3), и у неё свой порядок: до первой отправки получить сведения от компании-получателя о защите данных и уведомить Роскомнадзор (ч. 3 и 5 ст. 12). Для письма или разбора выписки такой порядок несоразмерен
          </p>
          <p className={p}>
            Российская нейросеть этот вопрос не снимает полностью: данные всё равно уходят чужой компании. Поэтому правило одно для любой нейросети: паспорта, СНИЛС и адреса не отправляются вовсе, имена и названия меняются на метки, а ключ к меткам остаётся у вас. Я пришла в ИИ из информационной безопасности и в своих проектах ставлю это правило первым, до любой настройки
          </p>

          <h2 className={h2}>Когда нужен помощник, а не чат</h2>
          <p className={p}>
            Признак, что чата уже мало: письмо-запрос из начала статьи вы каждый месяц отправляете по кругу одним и тем же клиентам, а документы всё равно приходят в разные мессенджеры, и вы ищете их в переписке перед сдачей отчётности
          </p>
          <p className={p}>
            Эту задачу закрывает помощник в Telegram. Допустим, вы ведёте бухгалтерию нескольких клиентов на аутсорсе: помощник сам напоминает каждому клиенту о документах за месяц, принимает от них фото и файлы в одно место, а утром присылает вам сводку, кто что не прислал. Такой бот разговаривает с клиентами по вашим правилам, подробнее про него на странице <a href="/telegram-boty-dlya-biznesa/" className={a}>Telegram-боты для бизнеса</a> и <a href="/ii-assistent-dlya-biznesa/" className={a}>ИИ-ассистент для бизнеса</a>. Если нужно, чтобы помощник сам собирал данные из таблиц и почты и приносил готовую сводку, это уже <a href="/ii-agenty-dlya-biznesa/" className={a}>ИИ-агент</a>
          </p>
          <Table
            head={["Ваша ситуация", "Что подходит"]}
            rows={[
              ["Письма, пояснения, разбор выписки раз в месяц", "бесплатная нейросеть, 0 ₽"],
              ["Много первички на бумаге и в фото", "распознавание в 1С"],
              ["Клиенты присылают документы в мессенджеры, их надо собирать и напоминать", "Telegram-бот или ИИ-ассистент"],
              ["Данные должны сами ходить между почтой, таблицей и уведомлениями", <a key="c" href="/avtomatizaciya-biznesa-ai/" className={a}>автоматизация</a>],
            ]}
          />
          <p className={p}>
            Если пока непонятно, с какой задачи начать, в статье <a href="/gaidy/vnedrenie-ii-v-biznes/" className={a}>«Внедрение ИИ в бизнес»</a> есть таблица, которая считает часы на каждом повторяющемся деле и подсказывает, что отдавать первым
          </p>

          <h2 className={h2}>Памятка: что сохранить себе</h2>
          <p className={p}>Эта памятка работает без статьи. Сохраните её рядом с рабочими шаблонами</p>
          <p className="mt-6 font-semibold">Таблица замен перед отправкой в любую нейросеть</p>
          <Table
            head={["Что в документе", "На что заменить"]}
            rows={[
              ["Название организации или ИП", "Контрагент 1, Контрагент 2"],
              ["ИНН, КПП, ОГРН", "ИНН 1 или удалить"],
              ["Фамилия сотрудника", "Сотрудник 1, Сотрудник 2"],
              ["Фамилия клиента-физлица", "Клиент 1, Клиент 2"],
              ["Паспорт, СНИЛС, адрес, телефон", "удалить полностью: нейросети они не нужны ни для одной задачи"],
              ["Номер счёта, номер карты", "удалить"],
              ["Суммы", "оставить, если задача про суммы, иначе Сумма 1"],
              ["Номер и дата документа", "оставить: по ним вы найдёте строку"],
            ]}
          />
          <p className={p}>Ключ «метка → настоящее название» хранится у вас отдельным файлом и в чат не уходит</p>
          <p className={p}>
            <strong className={strong}>Три шаблона запросов:</strong> письмо-запрос документов (в начале статьи), разбор назначений платежей (раздел про выписку), черновик пояснений (раздел про требование)
          </p>
          <p className="mt-6 font-semibold">Три вопроса к любому ответу нейросети</p>
          <ol className="mt-3 list-decimal space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Есть ли в ответе ставка, порог или срок? Сверить с сайтом ФНС или Налоговым кодексом</li>
            <li>Есть ли номер статьи, письма или решения суда? Найти документ сами, не нашли - убрать</li>
            <li>Есть ли итоговая сумма? Пересчитать в Excel или 1С</li>
          </ol>

          <Cta href={TG_DM} label="Написать «ПОМОЩЬ» в Telegram">
            <p className="leading-relaxed">
              Таблица замен и три вопроса закрывают главное: вы отдаёте нейросети рутину и не отправляете наружу данные людей и не берёте на веру её цифры
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Сложнее, когда хочется, чтобы рутина шла без вас: клиенты сами присылают документы боту, напоминания уходят по графику, утром приходит сводка. Здесь обычно и застревают: где хранить данные, как устроить правила, кто проверяет первую неделю
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Это я собираю под ключ, а начинаю с демо под одну задачу, чтобы вы увидели помощника в работе до решения. Напишите «ПОМОЩЬ» и расскажите, что в вашей бухгалтерии повторяется каждый месяц, выберем задачу для демо
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Отвечаю сама, обсуждение ни к чему не обязывает</p>
          </Cta>

          <h2 className={h2}>Частые вопросы</h2>
          <div className="mt-5 space-y-6">
            {faq.map(([q, ans]) => (
              <section key={q}>
                <h3 className="text-lg font-semibold">{q}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{ans}</p>
              </section>
            ))}
          </div>

          <h2 className={h2}>Источники</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-relaxed text-muted-foreground">
            {sources.map(([t, href]) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={a}>{t}</a>
              </li>
            ))}
          </ol>

          <Cta href={TG_CHANNEL} label="Подписаться на канал в Telegram">
            <p className="leading-relaxed">
              Я Виктория Шелих, собираю ИИ-агентов и ассистентов для бизнеса. В канале «Vikey AI | Агенты для бизнеса» показываю, как агенты снимают рутину на живых задачах, и разбираю, где ИИ помогает, а где лучше оставить человека
            </p>
          </Cta>
        </article>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} Vikey AI. Все права защищены.</span>
          <span className="flex gap-4">
            <a href="/gaidy/" className="transition hover:text-foreground">Все гайды</a>
            <a href="/" className="transition hover:text-foreground">Вернуться на главную</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
