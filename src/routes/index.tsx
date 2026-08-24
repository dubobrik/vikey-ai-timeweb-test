import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, lazy, Suspense, Component, type ReactNode } from "react";
import { Copy, Check } from "lucide-react";
import heroAsset from "@/assets/vikey-hero.jpg";
import aboutAsset from "@/assets/vikey-about.png";
import destinyBotAsset from "@/assets/destiny-bot-preview.png";
import alleyAsset from "@/assets/alley-before-after.jpg";
import savanaSitePreview from "@/assets/savana-site-preview.jpg";
import stoneMasterPreview from "@/assets/stone-master-preview.jpg";
import cardCoverAsset from "@/assets/vikey-card-cover.jpg";
import avatarVideoAsset from "@/assets/digital-avatar.mp4";
import avatarPosterAsset from "@/assets/digital-avatar-poster.jpg";
import tarhankutPreviewAsset from "@/assets/tarhankut-preview.jpg";
import b2bHorecaCardAsset from "@/assets/b2b-horeca-card.webp";
import b2bHorecaModalAsset from "@/assets/b2b-horeca-modal.webp";
import Certificates from "@/components/Certificates";

const AiConsultantWidget = lazy(() => import("@/components/AiConsultantWidget"));

class WidgetBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { /* keep site alive */ }
  render() { return this.state.failed ? null : this.props.children; }
}

const SITE_URL = "https://chelovek-neiroset.ru/";
const OG_IMAGE = SITE_URL + "vikey-og.jpg";
const SITE_TITLE = "Vikey AI — нейросети для бизнеса и контента";
const SITE_DESC = "Помогаю внедрять AI-инструменты в сайты, визуал, чат-боты, упаковку проектов и автоматизацию рабочих процессов.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Home,
});

const nav = [
  { href: "#about", label: "Обо мне" },
  { href: "#help", label: "Помощь" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#process", label: "Работа" },
  { href: "#vibe", label: "Vibe Coding" },
  { href: "#calc", label: "Калькулятор" },
  { href: "#contact", label: "Контакты" },
];

const services = [
  { title: "AI-инструменты для бизнеса", desc: "Подбираю и внедряю нейросети под реальные задачи компании." , icon: "◆" },
  { title: "Сайты и лендинги с AI", desc: "Быстрая разработка сайтов с использованием AI-генерации." , icon: "▲" },
  { title: "Визуальный контент с AI", desc: "Изображения, обложки, баннеры и промо-материалы." , icon: "●" },
  { title: "AI-консультанты и чат-боты", desc: "Умные помощники в Telegram, на сайте и в мессенджерах." , icon: "✦" },
  { title: "Автоматизация процессов", desc: "Убираю рутину: n8n, Make, Zapier + AI-агенты." , icon: "◈" },
  { title: "Упаковка проекта или услуги", desc: "Смысл, структура, визуал и посадочная страница под ключ." , icon: "❖" },
];

const help = [
  "Разобраться, какие AI-инструменты реально нужны",
  "Упаковать идею, услугу или проект",
  "Создать визуальный контент",
  "Собрать сайт или лендинг",
  "Автоматизировать повторяющиеся задачи",
  "Внедрить AI-помощника или чат-бота",
];

const portfolio = [
  {
    title: "Мистический сайт для таролога и личных консультаций",
    tag: "Сайт / Личный бренд / Мистический проект",
    desc: "Атмосферный сайт в мягком мистическом стиле: про интуицию, внутренние ответы и бережную работу с личными запросами. Проект помогает показать эксперта, раскрыть услуги и создать доверительное первое касание с посетителем.",
    image: savanaSitePreview,
    bullets: [
      "разработана структура сайта",
      "подобран мягкий мистический визуальный стиль",
      "оформлены блоки об эксперте и услугах",
      "создана понятная навигация",
      "добавлены контакты и призыв к первому обращению",
      "сайт адаптирован под мобильную версию",
    ],
    result: "получился спокойный, женственный и атмосферный сайт, который передаёт характер специалиста, создаёт доверие и помогает посетителю сделать первый шаг к консультации.",
    viewHref: "https://savanadivik.ru/",
    viewLabel: "Посмотреть сайт",
  },
  {
    title: "Сайт для гостевых домиков в Оленевке",
    tag: "Сайт / Туризм / Гостевые домики / AI-упаковка",
    desc: "Сайт для гостевых домиков в Оленевке на Тарханкуте: презентация места, атмосферы отдыха, маршрутов, преимуществ локации и удобного перехода к бронированию.",
    image: tarhankutPreviewAsset,
    bullets: [
      "разработана структура сайта для туристического объекта",
      "оформлен первый экран с акцентом на отдых в Оленевке и Тарханкуте",
      "собраны смысловые блоки о домиках, локации и преимуществах",
      "добавлен маршрут по ключевым местам Тарханкута",
      "оформлены блоки с достопримечательностями и атмосферой отдыха",
      "добавлены контакты и переход к бронированию",
      "сайт адаптирован под мобильную версию",
      "изображения и визуальная подача подобраны под морскую и туристическую тематику",
    ],
    full: "Кейс по созданию сайта для гостевых домиков в Оленевке. Задача проекта — не просто показать жильё, а упаковать место как полноценный отдых на Тарханкуте: море, пляжи, природные маршруты, атмосферу Крыма, достопримечательности и гостеприимство владельца. Сайт помогает посетителю быстро понять, где он будет жить, что рядом посмотреть, как добраться и как связаться для бронирования.",
    result: "Получился сайт-витрина для гостевых домиков, который продаёт не только проживание, но и впечатление от места: море, природу, маршруты, атмосферу Тарханкута и понятный путь к бронированию.",
    viewHref: "https://tarhankut.space/",
    viewLabel: "Посмотреть сайт",
  },
  {
    title: "B2B-упаковка услуги психологической поддержки для HoReCa",
    tag: "B2B-стратегия / HoReCa / AI-аналитика / Упаковка услуги",
    desc: "Комплексная упаковка B2B-услуги психолога с опытом более 20 лет для рынка HoReCa: продуктовая логика, исследование проблем сотрудников, сегментация ЛПР, презентационные материалы, карта продаж и база контактов для первичного выхода.",
    image: b2bHorecaCardAsset,
    cardImage: b2bHorecaCardAsset,
    modalImage: b2bHorecaModalAsset,
    cardWidth: 1100,
    cardHeight: 620,
    focus: "center",
    bullets: [
      "собран и структурирован мастер-контекст проекта",
      "разработана продуктовая логика B2B-услуги",
      "выделены основные ЛПР: собственник, управляющий, HR, операционный директор",
      "подготовлена карта болей, триггеров, аргументов и офферов для каждого ЛПР",
      "проведена исследовательская работа по проблемам сотрудников HoReCa",
      "сформирована доказательная база по пяти группам проблем",
      "подготовлены презентационные материалы под разные аудитории",
      "разработана логика первого контакта, сообщений и follow-up",
      "собрана база потенциальных компаний и контактов для первичного выхода",
      "подготовлена структура для дальнейших продаж и тестирования пилотного формата",
      "зафиксированы ограничения формулировок: без обещаний гарантированного психологического результата, без неподтверждённого ROI и без переноса зарубежной статистики как факта для РФ",
    ],
    full: "Кейс по разработке стратегии вывода на рынок B2B-услуги психологической поддержки сотрудников HoReCa. Задача проекта — упаковать экспертность психолога с опытом более 20 лет в понятный продукт для собственников, управляющих, HR и операционных руководителей. В работе были определены границы услуги, ценность для разных ЛПР, язык коммуникации, доказательная база, презентационные материалы и логика первого контакта. Отдельно была подготовлена база потенциальных компаний и контактов для первичного выхода на рынок.",
    result: "Проект получил понятную B2B-упаковку: от экспертной услуги психолога до набора материалов для выхода на рынок HoReCa, первичных контактов с ЛПР, переговоров и тестирования пилотного формата.",
  },


  
  {
    title: "Сайт мастера по камню",
    tag: "Сайт / Портфолио мастера / Авторские изделия",
    desc: "Сайт для мастера по камню и авторских изделий. Атмосферный проект о природной фактуре, ручной работе, форме и силе материала.",
    image: stoneMasterPreview,
    bullets: [
      "разработана структура сайта",
      "подобран атмосферный визуальный стиль",
      "оформлены разделы с работами мастера",
      "усилена подача авторских изделий",
      "добавлены контактные точки для обращения",
      "сайт адаптирован под мобильную версию",
    ],
    result: "получился визуально сильный сайт-портфолио, который передаёт характер мастера, показывает ценность ручной работы и помогает представить изделия как авторские объекты.",
    viewHref: "https://stone-fire-water-art.lovable.app",
    viewLabel: "Посмотреть сайт",
  },
  {
    title: "AI / Telegram-бот @destiny_voice_bot",
    tag: "AI Bot",
    desc: "Бот для автоматизации первичного общения с пользователями в нише персональных консультаций. Продумана логика диалога, сценарий первого контакта, варианты запросов и структура ответов. Помогает быстрее принимать обращения, снижает ручную нагрузку и создаёт понятный первый шаг взаимодействия.",
    href: "https://t.me/destiny_voice_bot",
    image: destinyBotAsset,
  },
  {
    title: "AI / Благоустройство городской среды",
    tag: "Case",
    subtitle: "Аллея на ул. Кривопустенко, г. Новочеркасск",
    desc: "Кейс по оформлению инициативы жителей в понятный проект благоустройства с визуализациями, предварительной сметой и материалами для обсуждения.",
    image: alleyAsset,
    bullets: [
      "подготовлена структура проекта",
      "собрана предварительная смета",
      "оформлены предложения по контейнерной площадке, лавочкам, урнам, камерам и табличкам",
      "созданы визуализации «до / после»",
      "подготовлены материалы для презентации инициативы",
    ],
    result: "Первый этап благоустройства уже начался — высажено 150 кустов сирени.",
    newsHref:
      "https://nduma.ru/news/german-zaporozhchenko-prinyal-uchastie-v-masshtabnom-ozelenenii-ulitsy-krivopustenko/",
  },
  {
    title: "Логотип и визитка для личного AI-бренда",
    tag: "Айдентика / Логотип / Визитка",
    desc: "Логотип и визитка для личного AI-бренда Vikey AI: монограмма V, мраморная эстетика, лавандовые оттенки, золотые акценты и QR-код для быстрого перехода на сайт.",
    image: cardCoverAsset,
    contain: true,
    full: "Разработка визуальной айдентики для Vikey AI: логотип, фирменная подача и визитка с QR-кодом для быстрого перехода на сайт. Задача проекта — создать аккуратный, запоминающийся и женственный образ AI-бренда, где технологичность сочетается с мягкостью, доверием и экспертностью. В основе визуала — монограмма V, светлый мраморный фон, лавандовые оттенки, золотые акценты и ощущение лёгкой цифровой искры.",
    bullets: [
      "разработана идея логотипа с монограммой V",
      "подобрана светлая мраморная эстетика",
      "использованы лавандовые и золотые акценты",
      "оформлена лицевая и оборотная сторона визитки",
      "добавлен QR-код для перехода на сайт",
      "вынесены основные каналы связи: Instagram, Telegram, MAX",
      "создана визуальная подача для личного AI-бренда",
    ],
    result: "получилась лёгкая, премиальная и запоминающаяся визитка, которая соединяет личный бренд, AI-направление и понятный путь к контакту через QR-код.",
  },
  {
    title: "Создание цифрового аватара",
    tag: "AI-видео / Цифровой аватар / Личный бренд",
    desc: "AI-видео с цифровым аватаром для личного бренда: визуальный образ, голос, подача и короткий ролик, который помогает эксперту представить себя современно, живо и технологично.",
    image: avatarPosterAsset,
    focus: "50% 22%",
    video: avatarVideoAsset,
    full: "Кейс по созданию цифрового аватара для личного бренда Vikey AI. Задача проекта — показать, как AI-инструменты помогают создать современный видеовизуал: образ эксперта, короткое приветствие, динамичную подачу и ощущение присутствия без полноценной видеосъёмки. Такой формат можно использовать для сайта, соцсетей, презентации услуг, приветственного ролика, обучающих материалов или первого касания с клиентом.",
    bullets: [
      "создана идея цифрового образа",
      "подготовлен визуальный стиль аватара",
      "собран короткий видеоролик",
      "адаптирована подача под личный AI-бренд",
      "подготовлен формат для использования на сайте и в соцсетях",
    ],
    result: "получился короткий AI-видеоформат, который усиливает личный бренд, делает подачу более живой и показывает возможности цифрового аватара для экспертов и бизнеса.",
  },
];

const steps = [
  "Разбираем задачу",
  "Выбираем AI-инструменты",
  "Собираем структуру и визуал",
  "Тестируем результат",
  "Передаём готовое решение и объясняем, как пользоваться",
];

const contacts = [
  { label: "Telegram", href: "https://t.me/Vikey_shel" },
  { label: "WhatsApp", href: "https://wa.me/79081747077", detail: "89081747077", copy: "89081747077" },
  { label: "VK", href: "https://vk.com/id867298362" },
  { label: "Email", href: "mailto:dubobrik@list.ru", detail: "dubobrik@list.ru", copy: "dubobrik@list.ru" },
  { label: "MAX", href: "https://max.ru/u/f9LHodD0cOKqFcs6UZJNI7fMntxJ8xCv4X4bwued0XRebPD3LFvJ6CgS3cA" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Certificates />
      <Help />
      <Services />
      <Portfolio />
      <Process />
      <Vibe />
      <Calculator />
      <Contact />
      <Footer />
      <WidgetBoundary>
        <Suspense fallback={null}>
          <AiConsultantWidget />
        </Suspense>
      </WidgetBoundary>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
          <span className="font-display text-lg font-semibold">Vikey AI</span>
        </a>
        <nav className="hidden gap-6 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Меню"
          className="lg:hidden rounded-md border border-border p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-28">
        <div className="min-w-0">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Vikey AI · AI-решения под задачи
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            AI-решения для <span className="text-gradient">бизнеса, контента</span> и автоматизации
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Помогаю быстро находить, упаковывать и внедрять AI-инструменты под реальные задачи: сайты, визуал, чат-боты, контент и рабочие процессы.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
              Обсудить задачу
            </a>
            <a href="#portfolio" className="rounded-lg border border-border bg-card/40 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-card">
              Посмотреть портфолио
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-glow">
            <img
              src={heroAsset}
              alt="Vikey AI — Виктория"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      {eyebrow && <div className="mb-2 text-xs font-medium uppercase tracking-widest text-neon">{eyebrow}</div>}
      <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.2fr] md:py-24">
        <div className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-primary opacity-25 blur-xl" />
          <img
            src={aboutAsset}
            alt="Виктория / Vikey AI"
            className="relative rounded-2xl border border-border object-cover shadow-card"
          />
        </div>
        <div className="min-w-0">
          <div className="mb-2 text-xs font-medium uppercase tracking-widest text-neon">Обо мне</div>
          <h2 className="text-3xl font-bold sm:text-4xl">Виктория / Vikey AI</h2>
          <p className="mt-5 text-muted-foreground">
            Опыт в IT, информационной безопасности, продажах сложных решений и работе с реальными бизнес-задачами.
          </p>
          <p className="mt-4 text-muted-foreground">
            Сейчас фокус — AI-инструменты, визуальный контент, автоматизация, сайты и практическое внедрение нейросетей в работу команд и экспертов.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {["IT & Security", "AI-инструменты", "Автоматизация", "Сайты", "Визуал", "Внедрение"].map((t) => (
              <div key={t} className="rounded-lg border border-border bg-card/50 px-3 py-2 text-center text-xs text-muted-foreground">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Help() {
  return (
    <Section id="help" eyebrow="Чем помогаю" title="Практические направления для бизнеса и экспертов">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {help.map((h, i) => (
          <div key={h} className="group rounded-xl border border-border bg-card/50 p-5 transition hover:border-neon/50">
            <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </div>
            <p className="text-sm text-foreground">{h}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-2 text-xs font-medium uppercase tracking-widest text-neon">Услуги</div>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">Что можно заказать</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-neon/50">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-lg text-primary-foreground shadow-glow">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type PortfolioItem = (typeof portfolio)[number] & {
  subtitle?: string;
  desc?: string;
  href?: string;
  image?: string;
  cardImage?: string;
  modalImage?: string;
  cardWidth?: number;
  cardHeight?: number;
  bullets?: string[];
  result?: string;
  newsHref?: string;
  viewHref?: string;
  viewLabel?: string;
  full?: string;
  contain?: boolean;
  focus?: string;
  video?: string;
};

function PortfolioCard({ p, i }: { p: PortfolioItem; i: number }) {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const card = (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      {p.video && playing ? (
        <div className="bg-hero p-4">
          <video
            src={p.video}
            poster={p.image}
            controls
            playsInline
            autoPlay
            preload="metadata"
            className="mx-auto block max-h-[70vh] w-full max-w-sm rounded-xl bg-black"
          />
        </div>
      ) : (
      <div className={`relative overflow-hidden bg-hero ${p.bullets ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        {p.image ? (
          <img
            src={p.cardImage ?? p.image}
            srcSet={p.modalImage ? `${p.cardImage} 1100w, ${p.modalImage} 1400w` : undefined}
            sizes="(max-width: 768px) 100vw, 600px"
            width={p.cardWidth ?? 1600}
            height={p.cardHeight ?? 900}
            alt={p.title}
            style={p.focus ? { objectPosition: p.focus } : undefined}
            className={`h-full w-full transition duration-500 group-hover:scale-105 ${p.contain ? "object-contain" : "object-cover"}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-40" style={{
              background: `radial-gradient(circle at ${20 + i*10}% ${30 + i*8}%, oklch(0.82 0.16 195 / .6), transparent 60%)`
            }} />
            <div className="absolute inset-0 grid place-items-center">
              <div className="font-display text-3xl font-bold text-gradient">0{i + 1}</div>
            </div>
          </>
        )}
      </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="text-xs text-neon">{p.tag}</div>
        <div className="mt-1 font-semibold">{p.title}</div>
        {p.subtitle ? <div className="mt-1 text-sm text-muted-foreground">{p.subtitle}</div> : null}
        {p.desc ? <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p> : null}
        {p.bullets && open ? (
          <div className="mt-4 rounded-xl border border-border bg-background/40 p-4">
            {p.full ? <p className="mb-3 text-sm text-muted-foreground">{p.full}</p> : null}
            <div className="text-xs font-medium uppercase tracking-wider text-neon">Что сделано с помощью AI</div>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-neon">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {p.result ? (
              <p className="mt-3 text-sm text-foreground">
                <span className="font-semibold">Результат: </span>
                {p.result}
              </p>
            ) : null}
          </div>
        ) : null}
        {p.bullets || p.newsHref || p.viewHref || p.video ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.video ? (
              <button
                type="button"
                onClick={() => setPlaying((v) => !v)}
                className="min-h-11 rounded-lg border border-neon/40 bg-neon/10 px-4 py-2.5 text-sm font-semibold text-neon transition hover:bg-neon/20"
              >
                {playing ? "Скрыть видео" : "Смотреть видео"}
              </button>
            ) : null}
            {p.bullets ? (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="min-h-11 rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-card"
              >
                {open ? "Свернуть" : "Подробнее о кейсе"}
              </button>
            ) : null}
            {p.viewHref ? (
              <a
                href={p.viewHref}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 rounded-lg border border-neon/40 bg-neon/10 px-4 py-2.5 text-sm font-semibold text-neon transition hover:bg-neon/20"
              >
                {p.viewLabel || "Посмотреть сайт"}
              </a>
            ) : null}
            {p.newsHref ? (
              <a
                href={p.newsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 rounded-lg border border-neon/40 bg-neon/10 px-4 py-2.5 text-sm font-semibold text-neon transition hover:bg-neon/20"
              >
                Официальная новость
              </a>
            ) : null}
          </div>
        ) : null}
        {p.href ? (
          <div className="mt-3 text-sm text-neon transition group-hover:text-neon/80">Открыть →</div>
        ) : null}
      </div>
    </div>
  );
  return p.href ? (
    <a href={p.href} target="_blank" rel="noopener noreferrer" className="block">
      {card}
    </a>
  ) : (
    card
  );
}

function Portfolio() {
  return (
    <Section id="portfolio" eyebrow="Портфолио" title="Реальные проекты и кейсы">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {(portfolio as PortfolioItem[]).map((p, i) => (
          <div key={p.title} className={p.bullets ? "sm:col-span-2" : undefined}>
            <PortfolioCard p={p} i={i} />
          </div>
        ))}
      </div>
    </Section>
  );
}


function Process() {
  return (
    <section id="process" className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-2 text-xs font-medium uppercase tracking-widest text-neon">Как проходит работа</div>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">Прозрачный процесс от задачи до результата</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s} className="relative rounded-2xl border border-border bg-card p-5">
              <div className="mb-3 font-display text-2xl font-bold text-gradient">{i + 1}</div>
              <div className="text-sm text-foreground">{s}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Vibe() {
  return (
    <Section id="vibe" eyebrow="Vibe Coding" title="Создание цифровых решений с AI">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
        <p className="text-base text-muted-foreground sm:text-lg">
          <span className="text-foreground font-semibold">Vibe Coding</span> — это создание сайтов и цифровых решений с помощью AI, где человек задаёт смысл, структуру и задачу, а AI помогает быстро собрать рабочий результат.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["Смысл и задача", "AI-инструменты", "Готовый результат"].map((t) => (
            <div key={t} className="rounded-xl border border-border bg-background/50 p-4 text-sm">
              {t}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Список услуг калькулятора — редактируется в одном месте
type CalcService = { key: string; label: string; price: number };

const CALC_SERVICES: CalcService[] = [
  { key: "landing", label: "Лендинг", price: 6000 },
  { key: "site", label: "Многостраничный сайт", price: 10000 },
  { key: "shop", label: "Интернет-магазин", price: 18000 },
  { key: "logo", label: "Логотип", price: 2500 },
  { key: "brand", label: "Фирменный стиль", price: 7000 },
  { key: "smm", label: "SMM-пакет: 10 постов", price: 4000 },
  { key: "stories", label: "Шаблоны stories: 5 шт", price: 2000 },
  { key: "print", label: "Полиграфия: визитки, буклеты", price: 2000 },
  { key: "bot", label: "Создание бота", price: 5000 },
  { key: "avatar", label: "Цифровой аватар / AI-видео", price: 5000 },
];

const TELEGRAM_URL = "https://t.me/Vikey_shel";
const WHATSAPP_PHONE = "79081747077";
const MAX_URL =
  "https://max.ru/u/f9LHodD0cOKqFcs6UZJNI7fMntxJ8xCv4X4bwued0XRebPD3LFvJ6CgS3cA";

const CHANNEL_LABEL: Record<string, string> = {
  telegram: "Telegram",
  whatsapp: "WhatsApp",
  email: "Email",
  phone: "Телефон",
};

function Calculator() {
  const options = CALC_SERVICES;

  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [channel, setChannel] = useState<"telegram" | "whatsapp" | "email" | "phone">("telegram");
  const [form, setForm] = useState({ name: "", contact: "" });
  const [agree, setAgree] = useState(false);
  const [sent, setSent] = useState(false);

  const total = useMemo(
    () => options.reduce((sum, o) => sum + (selected[o.key] ? o.price : 0), 0),
    [selected]
  );

  const contactPlaceholder =
    channel === "telegram" ? "@username или номер"
    : channel === "whatsapp" ? "Номер телефона"
    : channel === "email" ? "you@example.com"
    : "+7 900 000 00 00";
  const contactType = channel === "email" ? "email" : channel === "phone" ? "tel" : "text";

  const canSubmit = agree && form.name.trim() && form.contact.trim();

  const message = useMemo(() => {
    const services = options.filter((o) => selected[o.key]).map((o) => `• ${o.label} — от ${o.price.toLocaleString("ru-RU")} ₽`);
    return [
      "Заявка с сайта Vikey AI",
      `Имя: ${form.name.trim()}`,
      services.length ? `Услуги:\n${services.join("\n")}` : "Услуги: не выбраны",
      `Предварительная оценка: от ${total.toLocaleString("ru-RU")} ₽`,
      `Способ связи: ${CHANNEL_LABEL[channel]}`,
      `Контакт: ${form.contact.trim()}`,
    ].join("\n");
  }, [options, selected, form, total, channel]);

  const tgHref = `${TELEGRAM_URL}?text=${encodeURIComponent(message)}`;
  const waHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSent(true);
  };


  return (
    <Section id="calc" eyebrow="Калькулятор" title="Оцените задачу">
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
        Выберите направления, которые вам нужны. Калькулятор покажет предварительную
        стоимость, а точную смету я подготовлю после короткого разбора задачи.
      </p>
      <div className="mt-8 rounded-3xl bg-[oklch(0.97_0.01_240)] p-4 sm:p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {options.map((o) => {
              const active = !!selected[o.key];
              return (
                <button
                  key={o.key}
                  type="button"
                  onClick={() => setSelected((s) => ({ ...s, [o.key]: !s[o.key] }))}
                  className={`flex items-center gap-4 rounded-2xl bg-white p-4 text-left shadow-sm ring-1 transition ${
                    active ? "ring-2 ring-[oklch(0.6_0.18_265)]" : "ring-black/5 hover:ring-black/10"
                  }`}
                >
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition ${
                      active ? "border-[oklch(0.6_0.18_265)] bg-[oklch(0.6_0.18_265)]" : "border-slate-300"
                    }`}
                  >
                    {active && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-slate-900">{o.label}</span>
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="block text-sm font-semibold text-slate-700">
                      от {o.price.toLocaleString("ru-RU")} ₽
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6 lg:sticky lg:top-24 lg:self-start">
            <div className="text-xs font-medium text-slate-500">Предварительная оценка</div>
            {total === 0 ? (
              <p className="mt-3 text-sm text-slate-500">
                Выберите хотя бы одно направление, чтобы увидеть предварительную оценку.
              </p>
            ) : (
              <div className="mt-2">
                <div className="font-display text-3xl font-bold text-[oklch(0.6_0.18_265)]">
                  от {total.toLocaleString("ru-RU")} ₽
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Точная стоимость зависит от объёма, сроков, исходных материалов и сложности задачи.
                </p>
              </div>
            )}

            {sent ? (
              <div className="mt-5 space-y-3">
                <div className="rounded-xl bg-[oklch(0.96_0.05_180)] p-4 text-sm text-slate-700">
                  Заявка готова. Отправьте её Виктории удобным способом.
                </div>
                <a
                  href={tgHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg bg-[oklch(0.6_0.18_265)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Отправить в Telegram
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg bg-[oklch(0.62_0.16_155)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Отправить в WhatsApp
                </a>
                <a
                  href={MAX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg bg-[oklch(0.55_0.2_30)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Отправить в MAX
                </a>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600"
                >
                  Изменить заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[oklch(0.6_0.18_265)] focus:outline-none"
                />
                <div>
                  <div className="mb-1.5 text-xs font-medium text-slate-600">Удобный способ связи</div>
                  <div className="grid grid-cols-4 gap-1.5 rounded-lg bg-slate-100 p-1">
                    {(["telegram", "whatsapp", "email", "phone"] as const).map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setChannel(c)}
                        className={`rounded-md px-1 py-1.5 text-xs font-medium transition ${
                          channel === c ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
                        }`}
                      >
                        {c === "phone" ? "Телефон" : c === "email" ? "Email" : c === "telegram" ? "Telegram" : "WhatsApp"}
                      </button>
                    ))}
                  </div>
                </div>
                <input
                  type={contactType}
                  required
                  placeholder={contactPlaceholder}
                  value={form.contact}
                  onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[oklch(0.6_0.18_265)] focus:outline-none"
                />
                <label className="flex items-start gap-2 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[oklch(0.6_0.18_265)]"
                    required
                  />
                  <span>
                    Нажимая кнопку «Оставить заявку», я даю согласие на обработку персональных данных и принимаю{" "}
                    <Link to="/privacy" target="_blank" className="text-[oklch(0.6_0.18_265)] underline">
                      Политику обработки персональных данных
                    </Link>
                    .
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full rounded-lg bg-[oklch(0.6_0.18_265)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Оставить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleCopy = async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLabel(label);
      setTimeout(() => setCopiedLabel((current) => (current === label ? null : current)), 2000);
    } catch {
      /* ignore unsupported environments */
    }
  };

  return (
    <section id="contact" className="border-t border-border bg-hero">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-2 text-xs font-medium uppercase tracking-widest text-neon">Контакты</div>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">Напишите — обсудим задачу</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Выберите удобный канал связи. Отвечаю быстро в рабочее время.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {contacts.map((c) => {
            const item = c as { label: string; href: string; detail?: string; copy?: string };
            const isCopied = copiedLabel === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/60 p-4 text-center text-sm font-semibold transition hover:border-neon/60 hover:shadow-glow"
              >
                <span>{item.label}</span>
                {item.detail ? (
                  <span className="mt-1 text-xs font-normal text-muted-foreground break-all">{item.detail}</span>
                ) : null}
                {item.copy ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy(item.label, item.copy!);
                    }}
                    className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-neon/10 px-2.5 py-1 text-xs font-medium text-neon transition hover:bg-neon/20"
                    aria-label={`Скопировать ${item.label}`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5" /> Скопировано
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" /> Копировать
                      </>
                    )}
                  </button>
                ) : null}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:px-6">
        <div>© {new Date().getFullYear()} Vikey AI. Все права защищены.</div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link to="/privacy" className="transition hover:text-foreground">
            Политика обработки персональных данных
          </Link>
          <span className="hidden sm:inline">AI-решения для бизнеса, контента и автоматизации</span>
        </div>
      </div>
    </footer>
  );
}
