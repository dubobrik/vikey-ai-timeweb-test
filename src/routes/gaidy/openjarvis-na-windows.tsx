import { createFileRoute } from "@tanstack/react-router";

// Текст: .business/marketing/seo/stati/openjarvis-na-windows/draft.md (26.11.2026)
// Факты: проекты/openjarvis (установка 25-26.11 на её ноутбуке). Почта и агент по расписанию описаны по коду программы, не запускались
const PAGE_URL = "https://chelovek-neiroset.ru/gaidy/openjarvis-na-windows/";
const OG_IMAGE = "https://chelovek-neiroset.ru/gaidy/openjarvis/og.jpg";
const IMG = "/gaidy/openjarvis/";
// Полный адрес: относительную ссылку обходчик пререндера скачивает и перезаписывает PDF как текст (битый файл, 26.11)
const PDF_URL = "https://chelovek-neiroset.ru/gaidy/openjarvis/OpenJarvis-instrukciya.pdf";
const H1 = "Как установить Open Jarvis на Windows и не застрять на ошибках";
const PAGE_TITLE = "Open Jarvis (OpenJarvis) на Windows: установка и ошибки";
const PAGE_DESC =
  "Бесплатный ИИ-ассистент Джарвис на ПК: как поставить Open Jarvis на Windows, какие ошибки будут и как их обойти. Памятка и PDF-инструкция";
const QUICK_ANSWER =
  "До установки откройте Диспетчер задач, вкладку «Производительность», пункт «Графический процессор» и посмотрите строку «Выделенная память». Меньше 8 ГБ - ассистент будет отвечать минутами и тормозить компьютер. Тогда ставьте ради пробы, а для работы нужен компьютер мощнее";
const PUBLISHED = "2026-11-26";
const TG_DM = "https://t.me/Vikey_shel";
const TG_CHANNEL = "https://t.me/vikey_ai";
const INSTALL_CMD = "irm https://open-jarvis.github.io/OpenJarvis/install.ps1 | iex";

const faq: [string, string][] = [
  [
    "OpenJarvis бесплатный?",
    "Да. Программа, Ollama и нейросети бесплатны, аккаунт не нужен. Платными становятся только облачные добавки, например русский голос для ответов",
  ],
  [
    "Можно ли поставить OpenJarvis на обычный ноутбук?",
    "Можно, но на ноутбуке без мощной видеокарты программа выберет самую маленькую нейросеть. У меня на видеокарте MX250 на 2 ГБ ответ шёл от 2 до 5 минут, и компьютер подвисал",
  ],
  [
    "Почему OpenJarvis пишет «Could not find Rust's cargo command»?",
    "Установщик из PowerShell не ставит Rust, а окну программы он нужен. Поставьте Rust с сайта rustup.rs, полностью закройте OpenJarvis и откройте заново",
  ],
  [
    "Работает ли OpenJarvis без интернета?",
    "Да, после установки чат, голосовой ввод и поиск по документам работают без интернета и без VPN. Интернет нужен на время установки и для подключения почты",
  ],
  [
    "Подключается ли OpenJarvis к WhatsApp и Telegram?",
    "Из коробки нет: WhatsApp только через официальный API Meta, а Telegram на Windows не принимает сообщения. Это можно доработать и подключить отдельно",
  ],
  [
    "Где скачать Open Jarvis на GitHub?",
    "На странице релизов github.com/open-jarvis/OpenJarvis/releases: у верхней версии с пометкой desktop в списке Assets лежит файл OpenJarvis_x64-setup.exe. Это только окно программы. Сам ассистент ставится командой в PowerShell, а перед ней нужны 5 вспомогательных программ",
  ],
  [
    "Это тот же Джарвис, что голосовой помощник из роликов?",
    "Не всегда. Джарвисом называют много разных программ и голосовых помощников. Open Jarvis - проект Стэнфордского университета с открытым кодом на GitHub (open-jarvis/OpenJarvis): он ставит нейросеть к вам на компьютер и работает без подписки. Если в ролике программу скачивают с другого сайта, это другой Джарвис",
  ],
];

const sources: [string, string][] = [
  ["Репозиторий OpenJarvis на GitHub", "https://github.com/open-jarvis/OpenJarvis"],
  ["Официальный установщик OpenJarvis для Windows", "https://open-jarvis.github.io/OpenJarvis/install.ps1"],
  ["Релизы окна программы OpenJarvis", "https://github.com/open-jarvis/OpenJarvis/releases"],
  ["Python для Windows", "https://www.python.org/downloads/windows/"],
  ["Git для Windows", "https://git-scm.com/download/win"],
  ["Visual Studio Build Tools", "https://visualstudio.microsoft.com/visual-cpp-build-tools/"],
  ["Rust", "https://rustup.rs/"],
  ["Ollama", "https://ollama.com/download"],
];

const steps: [string, string][] = [
  ["Поставьте 5 вспомогательных программ", "Python 3.12, Git, Visual Studio Build Tools, Rust и Ollama, каждую с официального сайта"],
  ["Запустите установщик в PowerShell", INSTALL_CMD],
  ["Поставьте окно программы", "Скачайте OpenJarvis_x64-setup.exe со страницы релизов и установите"],
  ["Пройдите окна первого запуска", "Local Ollama, «Use Ollama and continue», «Continue without sharing»"],
  ["Выберите скачанную нейросеть", "Нажмите на название нейросети слева вверху и выберите ту, что поставил установщик"],
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
    citation: sources.map(([name, url]) => ({ "@type": "CreativeWork", name, url })),
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#otvet", "#quick-answer"] },
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: H1,
    inLanguage: "ru",
    step: steps.map(([name, text], i) => ({ "@type": "HowToStep", position: i + 1, name, text })),
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
      { "@type": "ListItem", position: 3, name: "Open Jarvis на Windows", item: PAGE_URL },
    ],
  },
];

export const Route = createFileRoute("/gaidy/openjarvis-na-windows")({
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
  component: GuideOpenJarvis,
});

const p = "mt-4 leading-relaxed text-muted-foreground";
const h2 = "mt-14 text-2xl font-bold sm:text-3xl";
const a = "font-semibold text-neon underline-offset-4 transition hover:underline";
const th = "border border-border bg-card px-3 py-2 text-left font-semibold";
const td = "border border-border px-3 py-2 align-top text-muted-foreground";
const strong = "text-foreground";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

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

function Shot({ src, alt, w, h, narrow }: { src: string; alt: string; w: number; h: number; narrow?: boolean }) {
  return (
    <figure className="mt-6">
      <img
        src={IMG + src}
        alt={alt}
        width={w}
        height={h}
        loading="lazy"
        decoding="async"
        className={`mx-auto h-auto rounded-xl border border-border ${narrow ? "w-full max-w-md" : "w-full"}`}
      />
      <figcaption className="mt-2 text-center text-xs text-muted-foreground">{alt}</figcaption>
    </figure>
  );
}

function Cta({ children, label, href }: { children: React.ReactNode; label: string; href: string }) {
  return (
    <aside className="mt-8 rounded-2xl border border-neon/30 bg-card p-6 sm:p-8">
      {children}
      <a href={href} {...ext} className="mt-5 inline-block rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
        {label}
      </a>
    </aside>
  );
}

function GuideOpenJarvis() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="На главную Vikey AI">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">Студия Vikey AI</span>
          </a>
          <a href={TG_DM} {...ext} className="shrink-0 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow sm:px-4 sm:text-sm">
            Написать в Telegram
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:py-16">
        <nav aria-label="Хлебные крошки" className="text-xs text-muted-foreground">
          <a href="/" className="hover:text-foreground">Главная</a> / <a href="/gaidy/" className="hover:text-foreground">Гайды</a> / <span>Open Jarvis на Windows</span>
        </nav>

        <article>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{H1}</h1>
          <p className="mt-3 text-xs text-muted-foreground">Виктория Шелих · <time dateTime={PUBLISHED}>26 ноября 2026</time></p>

          <p id="otvet" className="mt-6 text-lg leading-relaxed">
            Open Jarvis (OpenJarvis) - бесплатный ИИ-ассистент от Стэнфорда, тот самый «Джарвис на ноутбук» из роликов: нейросеть стоит прямо у вас на компьютере. Аккаунт не нужен, документы никуда не уходят. Нужно больше 10 ГБ на диске
          </p>
          <p className={p}>Поставьте пять программ с официальных сайтов:</p>
          <ol className="mt-3 list-decimal space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Python 3.12 с <a href="https://www.python.org/downloads/windows/" {...ext} className={a}>python.org/downloads/windows</a>, в установщике галочка «Add python.exe to PATH»</li>
            <li>Git с <a href="https://git-scm.com/download/win" {...ext} className={a}>git-scm.com/download/win</a>, во всех окнах «Next»</li>
            <li>Visual Studio Build Tools с <a href="https://visualstudio.microsoft.com/visual-cpp-build-tools/" {...ext} className={a}>visualstudio.microsoft.com/visual-cpp-build-tools</a>, плитка «Разработка классических приложений на C++»</li>
            <li>Rust с <a href="https://rustup.rs/" {...ext} className={a}>rustup.rs</a>, в чёрном окне 1 и Enter</li>
            <li>Ollama с <a href="https://ollama.com/download" {...ext} className={a}>ollama.com/download</a>, на просьбу создать аккаунт «No thanks, I'll use Ollama locally»</li>
          </ol>
          <p className={p}>Потом «Пуск», наберите PowerShell, Enter, вставьте строку правой кнопкой мыши и нажмите Enter:</p>
          <Code>{INSTALL_CMD}</Code>
          <p className={p}>
            После надписи «OpenJarvis install complete» скачайте OpenJarvis_x64-setup.exe со <a href="https://github.com/open-jarvis/OpenJarvis/releases" {...ext} className={a}>страницы релизов</a> и установите. Откройте OpenJarvis из «Пуска», нажмите Local Ollama, «Use Ollama and continue», «Continue without sharing» и задайте вопрос в чате
          </p>

          <aside id="quick-answer" className="mt-6 rounded-2xl border border-border bg-card p-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-neon">Быстрый ответ</div>
            <p className="mt-2 leading-relaxed">{QUICK_ANSWER}</p>
          </aside>

          <h2 className={h2}>Шаг 1. Пять программ: что увидите и где легко ошибиться</h2>
          <p className={p}>
            У меня на обычном рабочем ноутбуке с ошибками и доустановкой ушёл почти день. Чтобы у вас вышло быстрее, вот чем опознать, что каждая программа встала:
          </p>
          <Table
            head={["Программа", "Что это", "Что увидите в конце", "Где легко ошибиться"]}
            rows={[
              ["Python", "язык, на котором написан ассистент", "окно «Setup was successful»", "Без галочки PATH установщик ассистента не найдёт Python. Самую новую 3.14 не берите: нужные части под неё ещё не выпущены, и установка падает"],
              ["Git", "программа, через которую скачивается сам проект", "окно «Completing the Git Setup»", "настройки в окнах не меняйте"],
              ["Visual Studio Build Tools", "инструменты сборки: часть ассистента собирается прямо на вашем компьютере", "надпись «Установлено», загрузка 3-4 ГБ", "без плитки C++ сборка не пройдёт"],
              ["Rust", "ещё один инструмент сборки", "строка «Rust is installed now. Great!»", "установщик OpenJarvis его не ставит, а без него окно программы не запустится (эту ошибку я поймала сама)"],
              ["Ollama", "программа, которая держит нейросеть на компьютере", "окно «Create an account», файл около 2 ГБ", "аккаунт не нужен, жмите нижнюю ссылку"],
            ]}
          />
          <Shot src="s-03-ollama-akkaunt-ne-nuzhen.webp" alt="Окно Ollama после установки: нижняя ссылка «No thanks, I'll use Ollama locally»" w={811} h={721} narrow />

          <h2 className={h2}>Шаг 2. Пока Open Jarvis ставится: что будет в PowerShell</h2>
          <p className={p}>
            В окне побегут строки с зелёными метками [ok]: Windows, Python, git, uv, скачивание проекта, зависимости, Ollama, нейросеть. Это занимает от 20 минут до пары часов, смотря какой интернет
          </p>
          <p className={p}>
            В конце установщик спросит, ставить ли ассистента в автозапуск (service). Нажмите N и Enter: так он не будет работать в фоне и грузить компьютер, когда вы им не пользуетесь. Установка закончена, когда в окне появилась рамка «OpenJarvis install complete»
          </p>
          <p className={p}>
            Теперь окно программы. Откройте страницу релизов github.com/open-jarvis/OpenJarvis/releases. Ищите верхний блок, в названии которого есть слово desktop, и в нём список файлов «Assets». Скачайте файл OpenJarvis_x64-setup.exe, запустите, нажмите «Next», потом «Install». В «Пуске» появится OpenJarvis
          </p>

          <h2 className={h2}>Шаг 3. Первый запуск: как выглядят окна</h2>
          <p className={p}>
            <strong className={strong}>«Choose your inference source».</strong> Программа спрашивает, откуда брать нейросеть. Выбирайте верхнюю плитку Local Ollama (на этом компьютере)
          </p>
          <Shot src="s-09-vybor-istochnika-neyroseti.webp" alt="Окно выбора источника нейросети: верхняя плитка Local Ollama" w={1400} h={857} />
          <p className={p}>
            <strong className={strong}>«Allow local model setup?».</strong> Нажмите «Use Ollama and continue». Если нейросети ещё нет, программа скачает её сама, это несколько гигабайт
          </p>
          <p className={p}>
            <strong className={strong}>«Win a Mac mini».</strong> «Приватная» программа просит оставить имя и почту ради розыгрыша и включить отправку статистики. Не хотите делиться, нажмите нижнюю кнопку «Continue without sharing»
          </p>
          <Shot src="s-11-rozygrysh-mac-mini.webp" alt="Окно розыгрыша Mac mini при первом запуске: нижняя кнопка Continue without sharing" w={630} h={696} narrow />
          <p className={p}>
            <strong className={strong}>Название нейросети слева вверху.</strong> У меня там однажды оказалась нейросеть, которой на компьютере нет, и чат просто молчал. Нажмите на название и выберите ту, что поставил установщик, например qwen3.5:2b или qwen3.5:9b. После этого на вопрос в чате придёт ответ
          </p>

          <h2 className={h2}>Отвечает минутами? Посмотрите на видеокарту</h2>
          <p className={p}>Программа сама подбирает нейросеть под память видеокарты: чем её больше, тем умнее нейросеть и тем лучше она говорит по-русски</p>
          <Table
            head={["Компьютер", "Нейросеть", "Как работает"]}
            rows={[
              ["Видеокарта NVIDIA на 24 ГБ (RTX 3090, 4090) или Mac на чипе M с 32-64 ГБ памяти", "qwen3.5:27b", "Нормальный русский, разбор почты и документов"],
              ["Видеокарта NVIDIA на 8-16 ГБ (RTX 3060 12 ГБ, 4060 Ti 16 ГБ)", "qwen3.5:9b", "Сортировка и сводки нормально, тексты попроще"],
              ["Обычный офисный ноутбук", "qwen3.5:2b-4b", "Медленно и с ошибками в русском"],
            ]}
          />
          <p className={p}>
            Мой ноутбук: Acer Aspire 5, процессор Core i5-10210U, 32 ГБ памяти, видеокарта MX250 на 2 ГБ. Программа выбрала самую маленькую нейросеть, и ответ шёл от 2 до 5 минут, а компьютер в это время подвисал
          </p>
          <p className={p}>Ещё понадобятся Windows 10 (версия 1809 или новее) или Windows 11, свободные 15 ГБ на диске C и стабильный интернет на время установки</p>

          <h2 className={h2}>Что ломается и что делать</h2>
          <Table
            head={["Что на экране", "Почему", "Что сделать"]}
            rows={[
              ["«Could not find Rust's cargo command»", "Установщик из PowerShell Rust не ставит, а окну программы он нужен", "Поставьте Rust (программа 4 из списка в начале), полностью закройте OpenJarvis и откройте заново"],
              ["Касперский: «Сайт pypi.org может отображаться неправильно»", "pypi.org - официальный склад частей для Python, установщик берёт оттуда компоненты", "Нажмите «Добавить в исключения», иначе загрузка оборвётся"],
              ["Загрузка оборвалась на середине", "Части качаются с GitHub, pypi.org и Hugging Face, связь с ними бывает нестабильной", "Повторите команду из шага 2: установщик продолжит с того места, где остановился"],
              ["Чат молчит, ответа нет", "Слева вверху выбрана нейросеть, которой нет на компьютере", "Нажмите на название и выберите скачанную"],
              ["После нажатия на микрофон всё висит", "На слабой видеокарте распознавание речи зависает", "Переведите его на процессор (три строки ниже, в разделе про голос)"],
            ]}
          />
          <Shot src="s-07-okno-programmy-oshibka-rust.webp" alt="Ошибка Could not find Rust's cargo command в окне OpenJarvis" w={1400} h={859} />

          <h2 className={h2}>Как пользоваться: чат, голос и свои документы</h2>
          <p className={p}>
            <strong className={strong}>Чат.</strong> Пишите вопрос в поле внизу. Я вставила сообщение недовольного клиента («заказывала шкаф 3 недели назад... пишу отзыв и иду в суд») и спросила, насколько это срочно и что ответить. Ответ был по делу, но общий, и шёл 283 секунды
          </p>
          <Shot src="s-13-otvet-pro-shkaf-1.webp" alt="Ответ OpenJarvis на сообщение клиента про шкаф и угрозу суда" w={907} h={835} />
          <p className={p}>
            <strong className={strong}>Голос.</strong> Шестерёнка Settings слева внизу, раздел Speech, включите Speech-to-Text. В поле чата станет активным значок микрофона: говорите по-русски, программа сама превратит речь в текст (у меня за 20-30 секунд). Если после нажатия на микрофон всё висит, откройте Блокнотом файл C:\Users\ВАШЕ_ИМЯ\.openjarvis\config.toml, допишите в конец три строки, сохраните и перезапустите программу:
          </p>
          <Code>{`[speech]
device = "cpu"
compute_type = "int8"`}</Code>
          <p className={p}>
            Отвечать голосом по-русски бесплатно программа не умеет: русский голос есть только у платных облачных сервисов (ElevenLabs и подобные), и тогда текст ответа уходит в интернет
          </p>
          <p className={p}>
            <strong className={strong}>Свои документы.</strong> Слева Data Sources, вкладка Memory, блок Index Folder, кнопка Browse, выберите папку с документами и нажмите Index. Появится зелёная строка «Indexed N chunks»: документы разрезаны на кусочки и сложены в память. Теперь в чате можно спросить «какие сроки в договоре с Ивановым?»
          </p>
          <Shot src="s-18-pamyat-12-kuskov.webp" alt="Раздел Memory: строка о том, что файл разрезан на 12 кусков" w={708} h={412} narrow />
          <p className={p}>
            На маленькой нейросети такие ответы бывают неточными. Я загрузила выгрузку своей переписки, её разрезало на 12 кусков, а ассистент перепутал, кто кому пишет, и ответил по сообщениям десятидневной давности вместо последних. Цифры и даты проверяйте сами
          </p>
          <p className={p}>
            Что делать, если документы закрытые, а мощного компьютера нет, я разбирала в гайде <a href="/gaidy/neyroset-dlya-dogovorov/" className={a}>«Нейросеть для проверки договоров»</a>: там данные заменяются метками до отправки в обычную нейросеть
          </p>

          <Cta href={TG_DM} label="Написать «ПОМОЩЬ» в Telegram">
            <p className="leading-relaxed">
              Когда ассистент нужен не для пробы, а для работы (разбирать заявки, проверять таблицы, отвечать клиентам по-русски), напишите мне «ПОМОЩЬ». Скажу, хватит ли вам OpenJarvis на вашем компьютере или лучше собрать помощника под ваши задачи
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Ответ в личных сообщениях, без рассылок</p>
          </Cta>

          <h2 className={h2}>Хотите, чтобы он сам разбирал почту</h2>
          <p className={p}>
            Почту подключают один раз, дальше письма подтягиваются сами, а агент по расписанию каждое утро разбирает их и пишет, на что ответить
          </p>
          <p className={p}>
            <strong className={strong}>Почта.</strong> Программа забирает письма по IMAP (стандартный способ, которым почтовые программы берут письма с сервера). Нужен не ваш обычный пароль, а отдельный пароль приложения, его можно удалить в любой момент:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Яндекс: в Почте «Все настройки», «Почтовые программы», отметьте «С сервера imap.yandex.ru по протоколу IMAP». Потом id.yandex.ru, «Безопасность», «Пароли приложений», «Почта», название OpenJarvis</li>
            <li>Mail.ru: «Настройки», «Безопасность», «Пароли для внешних приложений», «Добавить»</li>
            <li>Gmail: включите двухэтапную аутентификацию, потом myaccount.google.com/apppasswords. Из России для Gmail нужен VPN, Яндекс и Mail.ru работают без него</li>
          </ul>
          <p className={p}>
            Пароль показывают один раз, сразу скопируйте. Дальше в OpenJarvis: Data Sources, вкладка Data Sources, плитка Email (IMAP), «+ Add», адрес и пароль приложения. Для адресов на ya.ru, bk.ru, list.ru и inbox.ru впишите сервер вручную: imap.yandex.ru или imap.mail.ru, порт 993, защита TLS. Почта переедет в раздел Connected, нажмите «Sync Now»
          </p>
          <p className={p}>
            <strong className={strong}>Утренняя сводка.</strong> Слева Agents, «+ New Agent», шаблон Inbox Triager. В Schedule выберите Daily и время, например 9 AM, в Instruction замените английское задание своим:
          </p>
          <Code>{`Проверь мои свежие письма. Раздели их на срочные, важные, к сведению и спам. Коротко перечисли, на какие письма нужно ответить сегодня и от кого они. Отвечай по-русски.`}</Code>
          <p className={p}>Нажмите «Launch Agent», потом «Run Now», чтобы не ждать утра. Результаты будут во вкладке Tasks</p>
          <p className={p}>
            Что важно знать заранее: агент работает, только пока компьютер включён и программа запущена. Сводка остаётся внутри программы, в Telegram сама не придёт. А в моём тесте маленькая нейросеть отнесла сообщение клиента с угрозой суда к спаму, так что на слабом компьютере сводку проверяйте глазами
          </p>

          <h2 className={h2}>Чего Open Jarvis не умеет из коробки</h2>
          <p className={p}>
            В программе 26 источников данных, но мессенджеров и российских сервисов среди них нет. Всё, что ниже, можно доработать и подключить к OpenJarvis отдельно, под ваши сервисы
          </p>
          <Shot src="s-16-istochniki-dannyh-26-shtuk.webp" alt="Раздел Data Sources: 26 источников данных, мессенджеров и российских сервисов среди них нет" w={1400} h={874} />
          <Table
            head={["Чего нет", "Что я увидела", "Что можно доработать"]}
            rows={[
              ["WhatsApp", "Плитка подключает только официальный WhatsApp для бизнеса через Meta. Выгрузку чата с айфона встроенный модуль прочитал как 0 сообщений", "Научить программу читать выгрузки с российских телефонов или подключить рабочий номер"],
              ["Telegram", "На Windows программа не принимает сообщения и не присылает сводки в Telegram, отправка из коробки только в Slack и SMS через американский SendBlue", "Подключить своего бота, чтобы заявки и сводки шли через него"],
              ["amoCRM, Битрикс24, 1С, ВКонтакте, Max, Авито", "Подключений нет", "Подключить нужный сервис отдельным модулем, чтобы ассистент видел заявки и сделки"],
              ["Русский голос для ответов", "Бесплатный голос русского не знает", "Подключить русскую озвучку, если вас устраивает, что текст ответа уходит в облачный сервис"],
            ]}
          />
          <p className={p}>
            Как выглядит такая доработка в обычном бизнесе: заявки из мессенджера принимает бот (примеры на странице <a href="/telegram-boty-dlya-biznesa/" className={a}>Telegram-боты для бизнеса</a>), а почту, таблицы и CRM разбирает помощник, который сам ходит в ваши сервисы. Чем такой помощник отличается от чата, я объясняю на странице <a href="/ii-agenty-dlya-biznesa/" className={a}>ИИ-агенты для бизнеса</a>
          </p>

          <h2 className={h2}>Нюансы для России</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Google Календарь и Google Диск, как и Gmail, работают только с VPN</li>
            <li>Антивирус может ругаться на сайты загрузки, как у меня Касперский на pypi.org</li>
            <li>Сама нейросеть после установки работает без интернета и без VPN: чат, голосовой ввод и поиск по документам. Это и есть главный плюс программы</li>
          </ul>

          <h2 className={h2}>Если Open Jarvis не подошёл: как удалить</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>«Пуск», «Параметры», «Приложения»: удалите OpenJarvis, Ollama, Visual Studio Build Tools 2022, Visual Studio Installer и «Rustup: the Rust toolchain installer»</li>
            <li>Удалите папки C:\Users\ВАШЕ_ИМЯ\AppData\Local\OpenJarvis, C:\Users\ВАШЕ_ИМЯ\.openjarvis и C:\Users\ВАШЕ_ИМЯ\.ollama (в последней лежат нейросети, она самая тяжёлая)</li>
          </ol>
          <p className={p}>У меня после удаления освободилось около 14 ГБ</p>

          <h2 className={h2}>Памятка: окно или ошибка и что нажать</h2>
          <Table
            head={["Что видите", "Что нажать"]}
            rows={[
              ["Ollama: «Create an account»", "«No thanks, I'll use Ollama locally»"],
              ["PowerShell спрашивает про service", "N и Enter"],
              ["«Choose your inference source»", "Local Ollama"],
              ["«Allow local model setup?»", "«Use Ollama and continue»"],
              ["«Win a Mac mini»", "«Continue without sharing»"],
              ["«Could not find Rust's cargo command»", "Поставить Rust с rustup.rs, закрыть и открыть программу"],
              ["Касперский про pypi.org", "«Добавить в исключения»"],
              ["Чат молчит", "Выбрать скачанную нейросеть слева вверху"],
              ["Микрофон висит", "Дописать в конец C:\\Users\\ВАШЕ_ИМЯ\\.openjarvis\\config.toml три строки: [speech], device = \"cpu\", compute_type = \"int8\""],
            ]}
          />
          <p className={p}>
            Ту же инструкцию одним файлом со всеми скринами можно <a href={PDF_URL} {...ext} className={a}>скачать в PDF</a>. Её же я присылаю тем, кто пишет ДЖАРВИС в комментариях к моему ролику про OpenJarvis
          </p>
          <p className={p}>
            Кому он подходит: тем, у кого документы не должны уходить в интернет (юристы, клиники, бухгалтерия, производство с коммерческой тайной) и есть мощный компьютер, который может работать круглосуточно. С чего начинать, когда ИИ нужен всей компании, а не одному компьютеру, я разобрала в гайде <a href="/gaidy/vnedrenie-ii-v-biznes/" className={a}>«Внедрение ИИ в бизнес»</a>
          </p>

          <Cta href={TG_DM} label="Написать «ПОМОЩЬ» в Telegram">
            <p className="leading-relaxed">
              Памятка выше доводит до работающего окна чата, и для знакомства с локальным ИИ этого хватит
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Сложнее, когда помощник нужен в работе: клиенты пишут в мессенджеры, заявки живут в таблицах или CRM, письма приходят на русском, а из коробки OpenJarvis этого не подключает. На обычном ноутбуке он ещё и отвечает минутами
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Тогда я собираю своего агента под ваши задачи: он разбирает заявки, таблицы и письма на русском, и так, чтобы ваши данные не уходили в облако. Напишите «ПОМОЩЬ» и расскажите, что хотите отдать помощнику, предложу решение
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
                <a href={href} {...ext} className={a}>{t}</a>
              </li>
            ))}
          </ol>

          <Cta href={TG_CHANNEL} label="Подписаться на канал в Telegram">
            <p className="leading-relaxed">
              Я Виктория Шелих, собираю ИИ-агентов и ассистентов для бизнеса. В канале «Vikey AI | Агенты для бизнеса» проверяю новые ИИ-инструменты на живых задачах и рассказываю, где они помогают, а где пока нет
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
