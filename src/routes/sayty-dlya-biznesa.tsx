import { createFileRoute } from "@tanstack/react-router";
import savanaSitePreview from "@/assets/savana-site-preview.webp";
import stoneMasterPreview from "@/assets/stone-master-preview.webp";
import tarhankutPreviewAsset from "@/assets/tarhankut-preview.webp";

const PAGE_URL = "https://chelovek-neiroset.ru/sayty-dlya-biznesa/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const PAGE_TITLE = "Создание сайтов для бизнеса с SEO-подготовкой | Vikey AI";
const PAGE_DESC =
  "Создаю сайты и лендинги для бизнеса и услуг: структура, мобильная адаптация, визуальная упаковка и SEO-подготовка. Реальные проекты Vikey AI.";

export const Route = createFileRoute("/sayty-dlya-biznesa")({
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
  component: BusinessSitesPage,
});

const audiences = [
  "Малый бизнес",
  "Специалисты и эксперты",
  "Компании в сфере услуг",
  "Туристический и гостевой бизнес",
  "Локальный бизнес",
  "Личные и авторские проекты",
];

const formats = [
  {
    title: "Лендинг для бизнеса",
    text: "Одностраничный сайт под конкретную услугу, предложение или продукт с понятной логикой движения посетителя к обращению. Создание лендинга для бизнеса подходит, когда важно сфокусировать внимание на одном основном предложении.",
  },
  {
    title: "Сайт для услуг",
    text: "Структура с представлением услуг, преимуществ, работ, ответов на вопросы и способов связи. Создание сайта для услуг помогает последовательно объяснить клиенту предложение и следующий шаг.",
  },
  {
    title: "Сайт для малого бизнеса",
    text: "Полноценное цифровое представительство компании или специалиста с возможностью дальнейшего расширения по мере роста задач бизнеса.",
  },
  {
    title: "Сайт-портфолио",
    text: "Проекты, кейсы и результаты работы с понятным переходом к обращению — подходящий формат для специалиста, мастера или авторского проекта.",
  },
];

const development = [
  "Разбор бизнеса, услуги и задачи сайта.",
  "Определение целевой аудитории и нужного действия посетителя.",
  "Разработка структуры страницы или сайта.",
  "Подготовка смыслов и текстового наполнения.",
  "Визуальная концепция.",
  "Разработка интерфейса.",
  "Адаптация под смартфоны и десктоп.",
  "Контакты, формы и понятные CTA.",
  "Базовая техническая SEO-подготовка.",
  "Проверка сайта перед публикацией.",
];

const seoItems = [
  "Уникальные Title и Description",
  "Логичная структура H1–H3",
  "Понятные URL",
  "Внутренние ссылки",
  "sitemap.xml",
  "robots.txt",
  "canonical",
  "Оптимизированные изображения",
  "Корректная мобильная версия",
  "Индексируемый текст страницы",
  "Возможность анализа через Яндекс Вебмастер и Google Search Console",
];

const cases = [
  {
    title: "Гостевые домики в Оленевке / Тарханкут",
    text: "Сайт для туристического бизнеса: размещение, атмосфера отдыха, особенности локации, маршруты и понятный переход к бронированию.",
    image: tarhankutPreviewAsset,
    alt: "Сайт гостевых домиков в Оленевке на Тарханкуте",
    caseHref: "/case-sayt-gostevye-domiki/",
    href: "https://tarhankut.space/",
  },
  {
    title: "Гостевой комплекс «Парма Хутор»",
    text: "Визуальная упаковка гостевого бизнеса: домики, территория, отдых и большой объём подготовленных фотоматериалов в единой структуре сайта.",
    image: "/assets/parma-khutor-portfolio.webp",
    alt: "Сайт гостевого комплекса Парма Хутор",
    href: "https://dubobrik-parma-khutor-timeweb-32e1.twc1.net/",
  },
  {
    title: "Сайт мастера по камню",
    caseHref: "/case-sayt-chastnogo-specialista/",
    text: "Сайт для специалиста и услуг с акцентом на авторские работы, природную фактуру материала, портфолио и удобный путь к обращению.",
    image: stoneMasterPreview,
    alt: "Сайт мастера по камню и авторских изделий",
    href: "https://dubobrik-ruslan-stone-water-art-16db.twc1.net/",
  },
  {
    title: "Мистический сайт для таролога",
    text: "Экспертный и личный проект: атмосферная визуальная подача, описание услуг и доверительное первое знакомство со специалистом.",
    image: savanaSitePreview,
    alt: "Мистический сайт для таролога и личных консультаций",
    href: "https://savanadivik.ru/",
  },
];

const process = [
  ["1. Разбираем задачу", "Определяем, что сайт должен объяснить, показать или продать и какое действие требуется от посетителя."],
  ["2. Собираем структуру", "Формируем страницы и смысловые блоки под задачу бизнеса."],
  ["3. Создаём визуальную подачу", "Подбираем стиль, изображения и интерфейс под конкретный проект."],
  ["4. Разрабатываем и адаптируем", "Проверяем desktop, iPhone и Android."],
  ["5. Проверяем и публикуем", "Проверяем production build, маршруты, формы, ссылки и SEO-метаданные."],
];

const faqs = [
  [
    "Чем лендинг отличается от сайта для бизнеса?",
    "Лендинг обычно посвящён одной услуге, продукту или предложению и ведёт посетителя к одному основному действию. Многостраничный сайт позволяет подробнее представить бизнес, направления работы, кейсы и другую информацию.",
  ],
  [
    "Можно ли создать сайт для малого бизнеса?",
    "Да. Структура подбирается под реальную задачу бизнеса, поэтому сайт может быть компактным на старте и расширяться по мере необходимости.",
  ],
  [
    "Входит ли SEO в создание сайта?",
    "В разработку может входить базовая SEO-подготовка: структура страницы, Title и Description, заголовки, URL, sitemap, canonical, внутренние ссылки и техническая подготовка к индексации. Дальнейшее SEO-продвижение — отдельный процесс, который требует наблюдения и регулярной работы.",
  ],
  [
    "Можно ли сделать только лендинг?",
    "Да. Если для задачи достаточно одной страницы, нет необходимости искусственно создавать многостраничный сайт.",
  ],
  [
    "Будет ли сайт работать на телефоне?",
    "Страница адаптируется под мобильные устройства и отдельно проверяется на смартфонах перед публикацией.",
  ],
  [
    "Можно ли развивать сайт после запуска?",
    "Да. Новые страницы, кейсы, услуги и SEO-направления можно добавлять постепенно без полной переделки сайта.",
  ],
];

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        {eyebrow ? <div className="mb-2 text-xs font-medium uppercase tracking-widest text-neon">{eyebrow}</div> : null}
        <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}

function BusinessSitesPage() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="На главную Vikey AI">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">Студия Vikey AI</span>
          </a>
          <a href="/#contact" className="shrink-0 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow sm:px-4 sm:text-sm">
            Обсудить сайт
          </a>
        </div>
      </header>

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Сайты для бизнеса · Vikey AI
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                Создание сайтов для бизнеса под ключ
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Создаю современные сайты и лендинги для бизнеса и услуг: продумываю структуру, визуальную подачу, мобильную версию и SEO-подготовку, чтобы сайт был понятным для клиентов и готовым к дальнейшему продвижению.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                  Обсудить сайт
                </a>
                <a href="#cases" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">
                  Посмотреть работы
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section eyebrow="Для кого" title="Сайты для бизнеса и услуг">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Сайт должен решать конкретную задачу: представить компанию или специалиста, объяснить услугу, показать работы и привести посетителя к понятному следующему шагу. Формат и структура зависят от самого бизнеса, а не от готового шаблона. Это может быть сайт для малого бизнеса, сайт для услуг или компактный сайт для предпринимателя.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm font-medium">{item}</div>
            ))}
          </div>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Нужен ИИ-консультант на сайт? →{" "}
            <a href="/ii-assistent-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">ИИ-ассистенты для бизнеса</a>
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Для сайта также можно подготовить AI-видео или цифрового аватара →{" "}
            <a href="/ai-video-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">AI-видео для бизнеса</a>
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Если сначала нужно сформулировать предложение и структуру проекта —{" "}
            <a href="/upakovka-proekta/" className="font-semibold text-neon transition hover:text-neon/80">Упаковка проекта</a>.
          </p>
        </Section>

        <Section eyebrow="Форматы" title="От лендинга до полноценного сайта для бизнеса">
          <div className="grid gap-5 md:grid-cols-2">
            {formats.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Разработка" title="Что входит в создание сайта для бизнеса">
          <p className="max-w-3xl text-muted-foreground">
            Разработка сайта для бизнеса начинается с задачи и логики будущего клиента, а уже затем переходит к интерфейсу и визуальной части.
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

        <Section eyebrow="SEO" title="Сайт с SEO-подготовкой">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Поисковое продвижение начинается не после публикации сайта, а ещё на этапе его структуры. Поэтому при разработке можно сразу подготовить страницу к корректному обходу и пониманию поисковыми системами. Это не обещание автоматического выхода в TOP-10, а правильный технический и контентный фундамент для дальнейшего SEO.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Такой подход подходит, когда нужна разработка сайта с SEO и дальнейшая возможность развивать сайт с SEO-оптимизацией без полной переделки проекта.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {seoItems.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section id="cases" eyebrow="Портфолио" title="Примеры сайтов Vikey AI">
          <div className="grid gap-5 md:grid-cols-2">
            {cases.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="aspect-video overflow-hidden bg-hero">
                  <img
                    src={item.image}
                    width={1600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.caseHref ? (
                      <a href={item.caseHref} className="inline-flex min-h-11 items-center rounded-lg bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                        Подробнее о кейсе →
                      </a>
                    ) : null}
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-neon/40 bg-neon/10 px-4 py-2.5 text-sm font-semibold text-neon transition hover:bg-neon/20">
                      Посмотреть сайт
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Процесс" title="Как создаётся сайт">
          <div className="grid gap-4 lg:grid-cols-5">
            {process.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Стоимость" title="Сколько стоит создание сайта">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              Стоимость зависит от задачи, количества страниц, объёма контента и дополнительного функционала. Предварительную стоимость можно оценить до начала проекта.
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
            <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">Обсудим ваш сайт?</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Расскажите о бизнесе, услуге или проекте. Помогу определить подходящий формат сайта и понять, с чего лучше начать.
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
