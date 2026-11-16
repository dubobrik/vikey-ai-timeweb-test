import { createFileRoute } from "@tanstack/react-router";

// Текст: .business/marketing/seo/stati/neyroset-dlya-dogovorov/draft.md (16.11.2026)
// Цену не называем (решение Виктории 14.11), демо 2-3 дня без суммы
const PAGE_URL = "https://chelovek-neiroset.ru/gaidy/neyroset-dlya-dogovorov/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const H1 = "Нейросеть для проверки договоров: как найти риски и не слить данные";
const PAGE_TITLE = "Нейросеть для проверки договоров: как найти риски и не слить данные | Vikey AI";
const PAGE_DESC =
  "Как проверить договор нейросетью и не отправить в чат реквизиты, суммы и персональные данные: таблица замен для обезличивания, запрос на проверку по 9 пунктам и 3 вопроса, чтобы проверить сам ответ";
const PUBLISHED = "2026-11-16";
const TG_DM = "https://t.me/Vikey_shel";
const TG_CHANNEL = "https://t.me/vikey_ai";

const faq: [string, string][] = [
  [
    "Можно ли проверить договор нейросетью бесплатно?",
    "Да, GigaChat и Алиса в чате бесплатны. Перед отправкой замените в копии договора названия компаний, ИНН, суммы и имена метками, а каждую находку сверяйте с текстом договора",
  ],
  [
    "Можно ли загружать договор с персональными данными в GigaChat?",
    "По соглашению GigaChat для физических лиц пользователь обязуется не загружать в сервис персональные данные третьих лиц (п. 8.7). Имена, паспортные данные и телефоны замените метками до отправки",
  ],
  [
    "Как отправить длинный договор в нейросеть?",
    "Вставьте обезличенный текст в чат по разделам. Первым сообщением напишите «Пришлю договор частями, отвечай только после слова ГОТОВО», затем части по порядку, в конце «ГОТОВО» и запрос на проверку",
  ],
  [
    "Что проверять в договоре в первую очередь?",
    "Предмет, цену и порядок оплаты, сроки, неустойки, односторонний отказ, автопродление, ограничение ответственности, место решения споров и конфиденциальность. Без согласованного предмета договор не считается заключённым (п. 1 ст. 432 ГК РФ)",
  ],
];

const sources: [string, string][] = [
  ["Соглашение об использовании сервиса GigaChat для физических лиц (обновлено 6 февраля 2026)", "https://developers.sber.ru/docs/ru/policies/gigachat-agreement/individuals"],
  ["Гражданский кодекс РФ, ст. 432 «Основные положения о заключении договора»", "https://rulaws.ru/gk-rf-chast-1/Razdel-III/Glava-28/Statya-432"],
  ["Закон № 152-ФЗ «О персональных данных», ст. 3", "https://rulaws.ru/laws/Federalnyy-zakon-ot-27.07.2006-N-152-FZ/Statya-3/"],
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
      { "@type": "ListItem", position: 3, name: "Нейросеть для проверки договоров", item: PAGE_URL },
    ],
  },
];

export const Route = createFileRoute("/gaidy/neyroset-dlya-dogovorov")({
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
  component: GuideNeyrosetDlyaDogovorov,
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

function GuideNeyrosetDlyaDogovorov() {
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
          <a href="/" className="hover:text-foreground">Главная</a> / <a href="/gaidy/" className="hover:text-foreground">Гайды</a> / <span>Нейросеть для проверки договоров</span>
        </nav>

        <article>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{H1}</h1>
          <p className="mt-3 text-xs text-muted-foreground">Виктория Шелих · <time dateTime={PUBLISHED}>16 ноября 2026</time></p>

          <p id="otvet" className="mt-6 text-lg leading-relaxed">
            Нейросеть годится как первый читатель договора: она быстро находит штрафы, сроки, автопродление и условия, выгодные только одной стороне. Решение остаётся за вами или юристом, а в чат уходит копия, где названия компаний, ИНН, суммы и имена заменены метками
          </p>
          <p className={p}>
            Как сделать замену, разберу ниже. Затем отправьте копию в бесплатную нейросеть GigaChat (<a href="https://giga.chat/" target="_blank" rel="noopener noreferrer" className={a}>giga.chat</a>) или Алису (<a href="https://alice.yandex.ru/" target="_blank" rel="noopener noreferrer" className={a}>alice.yandex.ru</a>) с запросом:
          </p>
          <Code>{`Ты проверяешь договор [поставки / оказания услуг / аренды] со стороны [Компания 1]. Найди условия, невыгодные этой стороне: штрафы, сроки оплаты и исполнения, односторонний отказ, автопродление, место решения споров. По каждому дай номер пункта, цитату и объясни простыми словами, чем оно опасно.`}</Code>
          <p className={p}>В ответ придёт список пунктов с цитатами. Каждую находку откройте в самом договоре</p>

          <h2 className={h2}>Что нейросеть делает хорошо, а что нет</h2>
          <Table
            head={["Справляется", "Ошибается или не может"]}
            rows={[
              ["Найти пункт про штраф, срок или автопродление и процитировать его", "Знать, как это условие работает в вашей отрасли и с этим контрагентом"],
              ["Пересказать длинный договор простыми словами", "Ручаться за ссылки на закон: может назвать статью неточно или по старой редакции"],
              ["Заметить, чего в договоре нет, например срока оплаты", "Увидеть приложения и допсоглашения, которые вы не загрузили"],
              ["Предложить формулировку взамен опасной", "Учесть устные договорённости и переписку с контрагентом"],
            ]}
          />
          <p className={p}>
            Отдельно смотрите на предмет договора: что именно поставляется или делается. Договор считается заключённым, когда стороны согласовали все существенные условия, и предмет среди них всегда (п. 1 ст. 432 ГК РФ). Размытая формулировка вроде «услуги согласно заявкам» - повод попросить у нейросети вариант конкретнее и обсудить его с контрагентом
          </p>

          <h2 className={h2}>Шаг 1. Замените данные метками</h2>
          <p className={p}>
            Это нужно и для российских нейросетей. В соглашении GigaChat для физических лиц (редакция от 6 февраля 2026) пользователь обязуется не загружать в сервис персональные данные третьих лиц (п. 8.7). Имена подписантов, паспортные данные ИП, телефоны контактных лиц - это как раз они. Для зарубежных нейросетей добавляются правила трансграничной передачи из закона № 152-ФЗ, их я разобрала в гайде <a href="/gaidy/vnedrenie-ii-v-biznes/" className={a}>«Внедрение ИИ в бизнес»</a>
          </p>
          <p className={p}>Сделайте копию договора в Word и меняйте через «Найти и заменить» (Ctrl+H), одно значение за раз:</p>
          <Table
            head={["Что в договоре", "На что заменить", "Где искать"]}
            rows={[
              ["Названия сторон (ООО, ИП)", "Компания 1, Компания 2", "шапка, реквизиты, подписи"],
              ["ФИО подписантов, представителей, контактных лиц", "Подписант 1, Контакт 1", "шапка, раздел подписей"],
              ["ИНН, ОГРН, КПП, счета, БИК", "раздел реквизитов удалите целиком", "конец договора"],
              ["Суммы и цены", "Сумма 1, Сумма 2", "поиск по «руб» и «₽»"],
              ["Адреса", "Адрес 1", "реквизиты, место поставки или работ"],
              ["Номер договора, телефоны, почта", "Договор 1, Телефон 1, Почта 1", "шапка, реквизиты"],
            ]}
          />
          <p className={p}>
            Проценты оставьте как есть: «неустойка 0,5% в день» не раскрывает сумму, а нейросети нужна, чтобы оценить штраф. Список «метка → настоящее значение» держите у себя, в чат он не уходит
          </p>
          <p className={p}>
            <strong className={strong}>Как отправить.</strong> Выделите текст копии (Ctrl+A), скопируйте и вставьте в поле чата, а запрос допишите под ним. Текстом надёжнее, чем файлом: вы видите глазами всё, что уходит. Если договор длинный и чат его не принимает, отправляйте по разделам. Первым сообщением напишите «Пришлю договор частями, отвечай только после слова ГОТОВО», затем части по порядку, а в конце «ГОТОВО» и запрос
          </p>

          <h2 className={h2}>Шаг 2. Задайте проверку по списку</h2>
          <p className={p}>Короткий запрос из начала статьи находит главное. Для договора, который вы собираетесь подписать, дайте нейросети полный список:</p>
          <Code>{`Проверь договор со стороны [Компания 1] по пунктам ниже. По каждому: номер пункта договора, цитата, чем опасно для [Компания 1], что предложить взамен. Если такого условия в договоре нет, так и напиши.
1. Предмет: что именно поставляется или делается, достаточно ли конкретно
2. Цена и порядок оплаты: сроки, предоплата, что будет при просрочке
3. Сроки исполнения и приёмки
4. Неустойки и штрафы: размер, есть ли верхний предел, одинаковы ли для обеих сторон
5. Односторонний отказ и расторжение
6. Автопродление
7. Ограничение ответственности
8. Где и как решаются споры
9. Конфиденциальность`}</Code>
          <p className={p}>
            Строка «если условия нет, так и напиши» показывает то, чего в договоре не хватает. Пропущенный срок оплаты или порядок приёмки иногда обходится дороже, чем жёсткий штраф
          </p>

          <h2 className={h2}>Шаг 3. Проверьте ответ, прежде чем ему верить</h2>
          <p className={p}>Три вопроса к каждой находке:</p>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-muted-foreground">
            <li><strong className={strong}>Есть номер пункта и цитата?</strong> Откройте этот пункт в договоре. Находку без цитаты не принимайте</li>
            <li><strong className={strong}>Статья закона существует и говорит то, что написано?</strong> Откройте её в справочной системе, например на consultant.ru. Нейросеть отвечает уверенно, даже когда ссылается неточно</li>
            <li><strong className={strong}>Учтены приложения и допсоглашения?</strong> Если вы их не загружали, нейросеть о них не знает, а штрафы и сроки бывают и там</li>
          </ol>
          <p className={p}>С пунктом пора идти к юристу, если в ответе есть хотя бы одно из этого:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>неустойка без верхнего предела или штраф, который есть только у вас</li>
            <li>поручительство, залог или личная ответственность директора: тогда вы отвечаете своим имуществом</li>
            <li>статья закона, которую вы не нашли или которая говорит другое</li>
            <li>условие, ошибка в котором обойдётся дороже, чем консультация юриста</li>
          </ul>
          <p className={p}>
            С таким списком разговор с юристом короче: вы приходите с номерами пунктов и цитатами, а не со всем договором
          </p>

          <Cta href={TG_DM} label="Написать «ПОМОЩЬ» в Telegram">
            <p className="leading-relaxed">
              Если договоров много и менять данные руками долго, напишите мне «ПОМОЩЬ». Покажу, как замену делает программа на вашем компьютере, и скажу, хватит ли вам ручной замены из этой статьи
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Ответ в личных сообщениях, без рассылок</p>
          </Cta>

          <h2 className={h2}>Где замена метками не спасает</h2>
          <p className={p}>
            Хорошо заменяется то, у чего есть формат: ИНН, телефоны, почта, суммы, даты. Хуже ловятся имена, названия и адреса, написанные свободным текстом внутри пунктов («передать на склад Иванова в Химках»). Поэтому после замены пролистайте копию глазами, особенно разделы о предмете и порядке поставки
          </p>
          <p className={p}>
            Сам текст договора тоже может быть закрытым. Если в нём есть пункт о конфиденциальности, прочитайте его до отправки: когда он запрещает раскрывать условия третьим лицам, решите с юристом, можно ли загружать даже обезличенную копию
          </p>
          <p className={p}>
            Для таких договоров есть второй путь: нейросеть, скачанная на ваш компьютер. Наружу тогда не уходит ничего, но нужен мощный компьютер, а отвечает она обычно проще облачной
          </p>

          <h2 className={h2}>Когда договоров много: программа вместо ручной замены</h2>
          <p className={p}>Ручная замена работает, когда договоров пара в месяц. Когда их десятки, я ставлю «цифрового вахтёра»:</p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Программа на вашем компьютере заменяет названия компаний, суммы, ИНН, телефоны и номера договоров метками</li>
            <li>В нейросеть уходит только текст с метками</li>
            <li>Ответ возвращается, и настоящие данные подставляются обратно уже у вас</li>
          </ol>
          <p className={p}>
            На первое время добавляем экран «вот что уйдёт в нейросеть» и кнопку «отправить»: вы видите текст до отправки и ловите то, что программа пропустила. Ста процентов замены не даёт ни человек, ни программа, поэтому этот экран остаётся, пока вы не убедитесь, что пропусков нет. Я пришла в ИИ из информационной безопасности, поэтому начинаю именно с этого, а уже потом подключаю проверку
          </p>
          <p className={p}>
            Вахтёр - часть помощника, который работает с документами: читает договоры, достаёт из них сроки и суммы, готовит черновики. Как такие помощники собираются в команду, я описала на странице <a href="/ii-agenty-dlya-biznesa/" className={a}>ИИ-агенты для бизнеса</a>, а помощник, который отвечает клиентам по вашей базе, - это <a href="/ii-assistent-dlya-biznesa/" className={a}>ИИ-ассистент для бизнеса</a>. Если документы должны ещё и сами попадать в таблицы и уведомления, это уже <a href="/avtomatizaciya-biznesa-ai/" className={a}>автоматизация</a>
          </p>
          <p className={p}>
            Проверить, подходит ли это вам, можно до настройки под ключ. Я делаю демо под одну задачу за 2-3 дня: на ваших образцах договоров без настоящих данных. Вы смотрите, что вахтёр заменяет и что находит проверка, и решаете, нужен ли он вам целиком
          </p>

          <h2 className={h2}>Памятка: что сохранить себе</h2>
          <p className={p}>Таблица замен (последний столбец заполняйте только у себя):</p>
          <Table
            head={["Что в договоре", "Метка", "Настоящее значение"]}
            rows={[
              ["Контрагент", "Компания 1", ""],
              ["Ваша компания", "Компания 2", ""],
              ["Подписант контрагента", "Подписант 1", ""],
              ["Сумма договора", "Сумма 1", ""],
              ["Адрес поставки или работ", "Адрес 1", ""],
            ]}
          />
          <p className={p}>
            Девять пунктов проверки: предмет, цена и оплата, сроки, неустойки, односторонний отказ, автопродление, ограничение ответственности, споры, конфиденциальность
          </p>
          <p className={p}>Три вопроса к ответу нейросети:</p>
          <ol className="mt-3 list-decimal space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Есть номер пункта и цитата?</li>
            <li>Статья закона существует и говорит то же самое?</li>
            <li>Приложения и допсоглашения учтены?</li>
          </ol>
          <p className={p}>
            Похожая логика обезличивания для бухгалтерских задач разобрана в гайде <a href="/gaidy/ii-dlya-buhgalterii/" className={a}>«ИИ для бухгалтерии»</a>
          </p>

          <Cta href={TG_DM} label="Написать «ПОМОЩЬ» в Telegram">
            <p className="leading-relaxed">
              Таблица замен и девять пунктов закрывают главное: вы проверяете договор нейросетью и не отправляете в чат ни реквизитов, ни сумм, ни имён
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Сложнее, когда договоров много: руками каждый раз менять долго, а пропуск одного имени уже утечка. Здесь помогает программа, которая меняет данные сама и показывает, что уйдёт в нейросеть
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Это я собираю под ключ, а начинаю с демо под одну задачу, чтобы вы увидели работу до решения. Напишите «ПОМОЩЬ», расскажите, какие договоры вы проверяете, выберем задачу для демо
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
