import { createFileRoute } from "@tanstack/react-router";

// Текст: .business/marketing/seo/stati/vnedrenie-ii-v-biznes/draft.md, одобрен Викторией 14.11.2026
// Судья-читатель: judge-run3.log, PASS. Цену в статье не называем (её решение 14.11)
const PAGE_URL = "https://chelovek-neiroset.ru/gaidy/vnedrenie-ii-v-biznes/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const H1 = "Внедрение ИИ в бизнес: с какой задачи начать, чтобы был результат";
const PAGE_TITLE = "Внедрение ИИ в бизнес: с какой задачи начать без лишних трат | Vikey AI";
const PAGE_DESC =
  "Как начать внедрение ИИ в бизнес без лишних трат: считаем часы на повторяющихся делах, выбираем первую задачу по цене ошибки, разбираем данные клиентов и окупаемость. Таблица-калькулятор и готовый запрос для бесплатной нейросети";
const PUBLISHED = "2026-11-14";
const TG_DM = "https://t.me/Vikey_shel";
const TG_CHANNEL = "https://t.me/vikey_ai";

const faq: [string, string][] = [
  [
    "С чего начать внедрение ИИ в малый бизнес?",
    "С таблицы повторяющихся дел: сколько раз в месяц и сколько минут на раз. Первой отдают ИИ задачу, где много часов и ошибка обходится дёшево, например первый ответ на заявку",
  ],
  [
    "Сколько стоит внедрение ИИ в бизнес?",
    "Бесплатная нейросеть в чате стоит 0 ₽. Цена помощника под ключ зависит от задачи и от того, к чему его подключать: чаты, таблицы, календарь. Чтобы не платить за то, что не подойдёт, начните с демо под одну задачу. Окупаемость считается так: часы в месяц, которые забирает помощник, умножить на стоимость часа сотрудника",
  ],
  [
    "Нужен ли программист, чтобы внедрить ИИ?",
    "Для работы в бесплатной нейросети не нужен. Чтобы помощник сам отвечал клиентам или собирал сводки из ваших таблиц, его нужно настроить, это делает тот, кто собирает помощника под ключ",
  ],
  [
    "Можно ли загружать в нейросеть данные клиентов?",
    "В зарубежную - только по правилам трансграничной передачи: до начала получить сведения от компании-получателя и уведомить Роскомнадзор, а для стран вне перечня Роскомнадзора ещё ждать 10 рабочих дней (ст. 12 закона № 152-ФЗ). Проще заменить имена, телефоны и суммы метками до отправки, а настоящие данные оставить у себя",
  ],
];

const sources: [string, string][] = [
  [
    "ComNews: доля крупных российских компаний, использующих генеративный ИИ, превысила 70% (исследование «Яков и Партнёры» и Яндекса, 08.12.2025)",
    "https://www.comnews.ru/content/242813/2025-12-08/2025-w50/1010/dolya-krupnykh-rossiyskikh-kompaniy-ispolzuyuschikh-generativnyy-ii-prevysila-70",
  ],
  ["Закон № 152-ФЗ «О персональных данных», ст. 18", "https://rulaws.ru/laws/Federalnyy-zakon-ot-27.07.2006-N-152-FZ/Statya-18/"],
  ["Закон № 152-ФЗ «О персональных данных», ст. 12", "https://rulaws.ru/laws/Federalnyy-zakon-ot-27.07.2006-N-152-FZ/Statya-12/"],
  ["Закон № 152-ФЗ «О персональных данных», ст. 3 (понятие трансграничной передачи)", "https://rulaws.ru/laws/Federalnyy-zakon-ot-27.07.2006-N-152-FZ/Statya-3/"],
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
      { "@type": "ListItem", position: 3, name: "Внедрение ИИ в бизнес", item: PAGE_URL },
    ],
  },
];

export const Route = createFileRoute("/gaidy/vnedrenie-ii-v-biznes")({
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
  component: GuideVnedrenieIi,
});

const p = "mt-4 leading-relaxed text-muted-foreground";
const h2 = "mt-14 text-2xl font-bold sm:text-3xl";
const a = "font-semibold text-neon underline-offset-4 transition hover:underline";
const th = "border border-border bg-card px-3 py-2 text-left font-semibold";
const td = "border border-border px-3 py-2 align-top text-muted-foreground";

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

function GuideVnedrenieIi() {
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
          <a href="/" className="hover:text-foreground">Главная</a> / <a href="/gaidy/" className="hover:text-foreground">Гайды</a> / <span>Внедрение ИИ в бизнес</span>
        </nav>

        <article>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{H1}</h1>
          <p className="mt-3 text-xs text-muted-foreground">Виктория Шелих · <time dateTime={PUBLISHED}>14 ноября 2026</time></p>

          <p id="otvet" className="mt-6 text-lg leading-relaxed">
            Внедрение ИИ в бизнес начинается не с выбора нейросети, а с одной задачи, которая повторяется каждый день и съедает больше всего часов. Её отдают ИИ первой и считают часы до и после
          </p>
          <p className={p}>
            Откройте бесплатную российскую нейросеть GigaChat (<a href="https://giga.chat/" target="_blank" rel="noopener noreferrer" className={a}>giga.chat</a>) или Алису (<a href="https://alice.yandex.ru/" target="_blank" rel="noopener noreferrer" className={a}>alice.yandex.ru</a>), вставьте текст ниже, впишите свои дела вместо скобок и отправьте. Имена и телефоны клиентов не нужны
          </p>
          <Code>{`Я владелец [чем занимаетесь]. Дела, которые повторяются каждый месяц:
1. [дело] - [раз в месяц] раз по [минут] минут
2. [дело] - [раз в месяц] раз по [минут] минут
3. [дело] - [раз в месяц] раз по [минут] минут
Посчитай часы в месяц по каждому делу, отсортируй по убыванию и оцени цену ошибки ИИ: мелочь, неприятно или дорого. Назови дело, которое отдать ИИ первым: много часов, дешёвая ошибка.`}</Code>
          <p className={p}>В ответ придёт ваш список с часами и одно дело, отмеченное первым. С него и начинайте</p>

          <h2 className={h2}>Посчитайте, куда уходят часы</h2>
          <p className={p}>
            Часы в месяц считаются одной формулой: сколько раз в месяц × сколько минут на раз ÷ 60. Нейросеть сделает это за вас, но цифры «сколько раз» и «сколько минут» знаете только вы (если не уверены, неделю ставьте палочки на листке у компьютера)
          </p>
          <p className={p}>Пример расчёта. Цифры ниже условные: допустим, это мастерская кухонь на заказ, 120 заявок в месяц, 25 договоров. Подставьте свои</p>
          <Table
            head={["Дело", "Раз в месяц", "Минут на раз", "Часов в месяц"]}
            rows={[
              ["Первый ответ на заявку: цены «от», сроки, как проходит замер", "120", "5", "10"],
              ["Запись на замер и напоминание клиенту накануне", "40", "10", "6,7"],
              ["Утренняя сводка: кто без ответа, где горят сроки", "22", "20", "7,3"],
              ["Договор и спецификация по шаблону", "25", "60", "25"],
              [<strong key="t">Итого</strong>, "", "", <strong key="s">49</strong>],
            ]}
          />
          <p className={p}>
            49 часов в месяц - это шесть полных рабочих дней, которые уходят на повторение одного и того же. Обычно владелец удивляется не самой цифре, а тому, что раньше её никто не считал
          </p>

          <h2 className={h2}>Выберите первую задачу: часы против цены ошибки</h2>
          <p className={p}>
            Самая «тяжёлая» строка таблицы не всегда первая. В примере это договоры, 25 часов. Но ошибка ИИ в договоре стоит дорого (суммы, сроки, ответственность), и в нём персональные данные клиента. Такую задачу берут второй или третьей, когда команда уже привыкла проверять работу ИИ
          </p>
          <p className={p}>
            Первой берут строку, где много часов, а ошибка обходится дёшево. В примере это первый ответ на заявку: ассистент называет цены «от» и сроки по вашей базе, а точную цену всё равно называет менеджер. Если ассистент в чём-то ошибся, менеджер поправит это в следующем сообщении
          </p>
          <Table
            head={["Часов много, ошибка дешёвая", "Часов много, ошибка дорогая"]}
            rows={[
              ["Берите первой: ответы по базе, запись, напоминания, сводки", "Берите позже, с проверкой человеком: договоры, расчёты, всё с деньгами и данными"],
              [<strong key="a">Часов мало, ошибка дешёвая</strong>, <strong key="b">Часов мало, ошибка дорогая</strong>],
              ["Можно в бесплатной нейросети руками, без настройки", "Оставьте человеку"],
            ]}
          />
          <p className={p}>
            Когда первая задача выбрана, запишите её часы «до» (в примере 10 часов в месяц). Через месяц работы ИИ посчитайте те же часы ещё раз. Без этой пары цифр вы не узнаете, окупилось ли внедрение, и не сможете решить, что брать дальше
          </p>

          <h2 className={h2}>Начните первую задачу сами, без настройки</h2>
          <p className={p}>Первый ответ на заявку можно ускорить уже сегодня, без помощника под ключ. Вставьте в ту же нейросеть:</p>
          <Code>{`Напиши короткий ответ на новую заявку для [чем занимаетесь]. Цены от [сумма], срок [сколько дней], следующий шаг [например, запись на замер]. Тон дружелюбный, 3-4 предложения, в конце вопрос, когда клиенту удобно.`}</Code>
          <p className={p}>
            Придёт готовый текст. Поправьте его под себя и сохраните как шаблон: в WhatsApp Business и в Telegram для бизнеса (там это часть Premium) есть быстрые ответы, которые вставляются в один клик. Типовая заявка закрывается шаблоном, а не набором с нуля, и через месяц в таблице будет видно, сколько часов это вернуло
          </p>
          <p className={p}>
            Чего так не получится: ответа ночью и в выходные, когда никто не сидит в мессенджере, и записи в календарь без вас. Это уже работа ассистента, который отвечает сам
          </p>

          <Cta href={TG_DM} label="Написать «ПОМОЩЬ» в Telegram">
            <p className="leading-relaxed">
              Если таблица получилась, а с выбором первой задачи сомнения, напишите мне «ПОМОЩЬ». Посмотрю ваш список и скажу, какое дело отдать ИИ первым и можно ли обойтись бесплатной нейросетью (часто можно)
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Ответ в личных сообщениях, без рассылок</p>
          </Cta>

          <h2 className={h2}>Хватит бесплатной нейросети или нужен помощник под ключ</h2>
          <p className={p}>
            Бесплатной нейросети хватает, когда вы сами садитесь и просите: написать ответ, придумать пост, пересказать документ. Это экономит ваши минуты, но работает только пока вы за компьютером
          </p>
          <p className={p}>
            Помощник под ключ нужен, когда задача должна делаться без вас: ночью и в выходные отвечать на заявки, каждое утро присылать сводку, напоминать сотрудникам о незакрытых делах. Такой помощник подключается к вашим чатам и таблицам и работает по вашим правилам. Чем ассистент отличается от агента, я разобрала на странице про <a href="/ii-agenty-dlya-biznesa/" className={a}>ИИ-агентов для бизнеса</a>, а про помощника, который отвечает клиентам по вашей базе, - на странице <a href="/ii-assistent-dlya-biznesa/" className={a}>ИИ-ассистент для бизнеса</a>
          </p>
          <Table
            head={["Ваша ситуация", "Что подходит"]}
            rows={[
              ["Нужно быстрее писать тексты, ответы, посты", "Бесплатная нейросеть, 0 ₽"],
              ["Заявки приходят в мессенджеры, нужен ответ и запись без вас", <span key="b"><a href="/telegram-boty-dlya-biznesa/" className={a}>Telegram-бот</a> или ИИ-ассистент</span>],
              ["Данные лежат в таблицах, почте, календаре, нужна сводка и напоминания", "ИИ-агент"],
              ["Нужно, чтобы данные сами ходили между сервисами (заявка → таблица → уведомление)", <a key="c" href="/avtomatizaciya-biznesa-ai/" className={a}>Автоматизация</a>],
            ]}
          />
          <p className={p}>
            Окупаемость считается из вашей же таблицы: часы в месяц × стоимость часа. Допустим, час менеджера стоит вам 500 ₽, тогда 10 часов первого ответа - это 5 000 ₽ в месяц. Подставьте свою стоимость часа
          </p>
          <p className={p}>
            Проверить, подходит ли помощник именно вам, можно до настройки под ключ. Я собираю демо под одну вашу задачу: на ваших ценах и правилах, без данных клиентов. Вы гоняете его на своих типовых вопросах и смотрите, как он отвечает, а потом решаете, нужен ли он вам целиком
          </p>

          <h2 className={h2}>Если в задаче есть данные клиентов</h2>
          <p className={p}>
            Имена, телефоны, адреса и суммы договоров - это персональные данные, и для них в России есть закон № 152-ФЗ «О персональных данных». Два его правила касаются внедрения ИИ напрямую:
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">Данные россиян при сборе хранятся в базах на территории России</strong> (ч. 5 ст. 18). Таблица заявок на зарубежном сервисе - уже вопрос
            </li>
            <li>
              <strong className="text-foreground">Отправка данных в зарубежную нейросеть - это трансграничная передача, и у неё свой порядок.</strong> Закон называет так передачу данных на территорию другой страны иностранной компании (п. 11 ст. 3). Если нейросеть принадлежит иностранной компании и данные уходят на её серверы за рубежом, это ваш случай. До первой отправки нужно получить от компании-получателя сведения о том, как она защищает данные, и уведомить Роскомнадзор (ч. 3 и 5 ст. 12). В страны, которых нет в перечне Роскомнадзора, передавать нельзя, пока не пройдут 10 рабочих дней на рассмотрение уведомления (ч. 9 и 11 ст. 12)
            </li>
          </ol>
          <p className={p}>
            Для задачи «ответить на заявку» такой порядок несоразмерен, поэтому проще устроить работу так, чтобы данные клиентов в нейросеть не попадали вовсе. Простой выход, который я использую в работе: до отправки в нейросеть имена, телефоны и суммы заменяются метками («Клиент 1», «Сумма 1»), а настоящие данные остаются у вас. Сводки и напоминания вообще можно считать программой без нейросети, тогда данные никуда не уходят. Я пришла в ИИ из информационной безопасности, поэтому проверяю это до запуска, а не после
          </p>

          <h2 className={h2}>Что ломается при внедрении</h2>
          <p className={p}>
            <strong className="text-foreground">Автоматизировали хаос.</strong> Если сейчас каждый менеджер отвечает по-своему, ИИ будет отвечать так же беспорядочно. Выход: сначала запишите на одной странице, как должен звучать правильный ответ (цены «от», сроки, следующий шаг), и только потом отдавайте это ИИ
          </p>
          <p className={p}>
            <strong className="text-foreground">ИИ называет точную цену.</strong> Клиент получает точную сумму, а у вас цена зависит от замера. Выход: в правилах помощника прямо прописать «называй только цены «от», точную цену называет менеджер»
          </p>
          <p className={p}>
            <strong className="text-foreground">Сотрудники продолжают делать руками.</strong> ИИ подготовил ответ, а менеджер по привычке пишет свой. Выход: назначить одного человека, который неделю следит, что работа идёт через помощника, и собирает ошибки
          </p>
          <p className={p}>
            <strong className="text-foreground">Нечем доказать эффект.</strong> Через месяц непонятно, стало ли лучше. Крупные компании эффект считают: по исследованию «Яков и Партнёры» и Яндекса за 2025 год 78% из них уже видят экономический эффект от ИИ. Малому бизнесу считать проще. Выход: часы «до» записаны в таблице (см. выше), считаете их ещё раз и сравниваете
          </p>

          <h2 className={h2}>Памятка: что сохранить себе</h2>
          <p className={p}>Эта таблица работает без статьи. Перепишите её в свой файл и заполняйте каждый раз, когда думаете, что ещё отдать ИИ</p>
          <Table
            head={["Дело", "Раз в месяц", "Минут на раз", "Часов в месяц (раз × минуты ÷ 60)", "Цена ошибки: мелочь / неприятно / дорого", "Часов до ИИ", "Часов через месяц"]}
            rows={[["", "", "", "", "", "", ""]]}
          />
          <p className={p}>Четыре вопроса перед стартом любой задачи:</p>
          <ol className="mt-3 list-decimal space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Сколько часов в месяц она съедает (цифра из таблицы)?</li>
            <li>Что будет, если ИИ ошибётся, и кто это заметит?</li>
            <li>Есть ли в ней имена, телефоны, суммы клиентов, и где они будут храниться?</li>
            <li>Кто из людей проверяет работу ИИ первую неделю?</li>
          </ol>
          <p className={p}>Если на все четыре есть ответ, задачу можно отдавать</p>

          <Cta href={TG_DM} label="Написать «ПОМОЩЬ» в Telegram">
            <p className="leading-relaxed">
              Таблица и четыре вопроса закрывают главное: вы знаете, куда уходят часы, и не отдадите ИИ задачу, где его ошибка обойдётся дорого
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Сложнее следующий шаг: подключить помощника к вашим чатам и таблицам так, чтобы он работал сам и не выносил данные клиентов наружу. Здесь обычно и застревают: настройка, правила ответа, проверка на ваших же заявках
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Это я делаю под ключ, а начинаю с демо под одну задачу, чтобы вы увидели помощника в работе до решения. Напишите «ПОМОЩЬ», пришлите свою таблицу, выберем задачу для демо
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
