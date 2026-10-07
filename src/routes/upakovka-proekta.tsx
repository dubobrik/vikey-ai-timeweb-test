import { createFileRoute } from "@tanstack/react-router";
import horecaCaseImage from "@/assets/b2b-horeca-card.webp";

const PAGE_URL = "https://chelovek-neiroset.ru/upakovka-proekta/";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";
const PAGE_TITLE = "Упаковка проекта под ключ для бизнеса | Vikey AI";
const PAGE_DESC =
  "Помогаю упаковать проект или услугу: позиционирование, структура, оффер, презентационные материалы и понятная подача для клиентов и партнёров.";

export const Route = createFileRoute("/upakovka-proekta")({
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
  component: ProjectPackagingPage,
});

const needPackaging = [
  ["Есть идея, но нет структуры", "Материалы и мысли есть, но они пока не складываются в понятное предложение."],
  ["Услуга сложная для объяснения", "Клиенту нужно быстро понять смысл, формат работы и пользу."],
  ["Нужно выйти на B2B-клиентов", "Проект необходимо адаптировать под язык компаний и конкретных лиц, принимающих решение."],
  ["Нужна презентация проекта", "Необходимо собрать информацию в последовательную и убедительную структуру."],
  ["Нужен сайт или лендинг", "Сначала важно определить, что именно страница должна объяснить и кому."],
  ["Нужно переосмыслить существующее предложение", "Услуга уже есть, но позиционирование и структура требуют доработки."],
];

const packagingItems = [
  "Разбор исходной идеи",
  "Анализ задачи",
  "Определение аудитории",
  "Сегментация",
  "Понимание потребностей клиента",
  "Формулировка ценности",
  "Позиционирование",
  "Структура предложения",
  "Оффер",
  "Аргументация",
  "Структура презентации",
  "Структура сайта или лендинга",
  "Визуальная логика",
  "Рекомендации по дальнейшему использованию материалов",
];

const positioningQuestions = [
  "Что это за продукт или услуга",
  "Для кого она предназначена",
  "Какую задачу решает",
  "Чем отличается от альтернатив",
  "Как объяснить ценность простыми словами",
];

const servicePackaging = [
  "Структура",
  "Понятное описание",
  "Сценарий взаимодействия",
  "Формат работы",
  "Аргументы",
  "Презентационные материалы",
  "Страница услуги",
  "FAQ",
  "Следующий шаг для клиента",
];

const b2bItems = [
  "Исследование сегмента",
  "Сегментация потенциальных клиентов",
  "Определение ЛПР",
  "Аргументы для разных ролей",
  "Структура первого контакта",
  "Презентационные материалы",
  "Карта продаж",
  "База потенциальных компаний для первичного выхода",
];

const clientMaterials = [
  "Идея или описание проекта",
  "Существующие материалы",
  "Описание услуги",
  "Целевая аудитория, если она уже определена",
  "Примеры клиентов",
  "Сайт или презентация, если уже существуют",
  "Референсы",
  "Конкуренты, если они известны",
  "Цель проекта",
  "Формат, к которому нужно прийти",
];

const workSteps = [
  "Разбираем исходную задачу.",
  "Собираем существующие материалы.",
  "Определяем аудиторию.",
  "Исследуем контекст.",
  "Формулируем ценность.",
  "Выстраиваем структуру предложения.",
  "Определяем аргументы.",
  "Формируем нужные материалы.",
  "Проверяем, насколько понятно предложение.",
  "Готовим итоговую структуру к использованию.",
];

const faqs = [
  [
    "Что такое упаковка проекта?",
    "Это работа над тем, чтобы идея, услуга или продукт были понятны целевой аудитории: что предлагается, для кого, какую задачу решает и как с проектом начать работать.",
  ],
  [
    "Чем упаковка отличается от дизайна?",
    "Дизайн отвечает за визуальную подачу, а упаковка начинается со смысла, структуры, аудитории и предложения. Визуал — один из этапов, а не отправная точка.",
  ],
  [
    "Можно ли упаковать уже существующую услугу?",
    "Да. Часто задача состоит не в создании нового продукта, а в том, чтобы переработать структуру и понятнее объяснить существующее предложение.",
  ],
  [
    "Можно ли упаковать проект для B2B?",
    "Да. В этом случае дополнительно учитываются сегменты компаний, лица, принимающие решение, сценарии первого контакта и необходимые презентационные материалы.",
  ],
  [
    "Обязательно ли делать сайт?",
    "Нет. Итогом может быть структура предложения, презентация, материалы для продаж или другой формат. Сайт нужен только если он соответствует задаче.",
  ],
  [
    "Можно ли начать, если пока есть только идея?",
    "Да. Работа может начинаться с идеи, но объём исследования и подготовки будет больше, чем у проекта с уже готовыми материалами.",
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

function ProjectPackagingPage() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="На главную Vikey AI">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">V</span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">Студия Vikey AI</span>
          </a>
          <a href="/#contact" className="shrink-0 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow sm:px-4 sm:text-sm">
            Обсудить проект
          </a>
        </div>
      </header>

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Упаковка проекта · Vikey AI
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                Упаковка проекта под ключ
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Помогаю превратить идею, услугу или набор разрозненных материалов в понятное предложение: определить смысл, аудиторию, структуру, аргументы и способ подачи проекта.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                  Обсудить проект
                </a>
                <a href="#packaging" className="rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold transition hover:bg-card">
                  Что входит в упаковку
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section eyebrow="Когда это полезно" title="Когда проекту нужна упаковка">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Упаковка полезна, когда есть идея, опыт или услуга, но сложно коротко объяснить, что именно предлагается, кому это нужно и почему клиенту стоит обратить внимание.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {needPackaging.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="packaging" eyebrow="Состав работы" title="Что входит в упаковку проекта">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Состав работы зависит от проекта. Не каждому проекту нужны все этапы одновременно: сначала определяется задача, а затем собирается только тот набор материалов, который действительно нужен.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {packagingItems.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Логика упаковки" title="От идеи к понятному предложению">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Хорошая упаковка начинается не с цвета кнопки и не с дизайна презентации. Сначала нужно понять, что проект предлагает, кому и почему это может быть полезно.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-2 text-sm font-medium">
            {["Идея", "Аудитория", "Проблема / задача", "Ценность", "Предложение", "Аргументы", "Подача", "Следующий шаг клиента"].map((item, index, all) => (
              <div key={item} className="contents">
                <div className="rounded-xl border border-border bg-card px-4 py-3">{item}</div>
                {index < all.length - 1 ? <span className="px-1 text-neon" aria-hidden="true">→</span> : null}
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Смысл и аудитория" title="Позиционирование проекта или услуги">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Позиционирование и упаковка проекта помогают сделать предложение понятным для конкретной аудитории. Разработка позиционирования проекта начинается не с попытки отличаться любой ценой, а с реальной ценности и ясного ответа на базовые вопросы.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {positioningQuestions.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Для экспертов и услуг" title="Упаковка услуги">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Если специалист хорошо выполняет работу, это ещё не значит, что потенциальному клиенту легко понять предложение. Упаковка услуги под ключ помогает выстроить понятную логику: что получает клиент, как проходит работа и какой следующий шаг ему нужно сделать.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {servicePackaging.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="B2B" title="Упаковка проекта для B2B">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            При работе с компаниями важно учитывать не только конечного пользователя, но и людей, которые принимают решение о покупке, согласуют бюджет или отвечают за внедрение. Поэтому B2B-упаковка строится вокруг сегментов компаний, ЛПР, аргументов и сценария первого контакта.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {b2bItems.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Такая подготовка помогает структурировать выход на B2B-аудиторию, но не является гарантией продажи или финансового результата.
          </p>
        </Section>

        <Section eyebrow="Реальный кейс" title="B2B-упаковка услуги психологической поддержки для HoReCa">
          <div className="grid gap-7 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img
                src={horecaCaseImage}
                width={1100}
                height={620}
                loading="lazy"
                decoding="async"
                alt="Психологическая поддержка сотрудников HoReCa — профессиональный разговор и B2B-упаковка услуги"
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-neon">B2B-стратегия / HoReCa / Упаковка услуги</div>
              <h3 className="mt-2 text-2xl font-semibold">От профессиональной услуги к понятному B2B-предложению</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Реальный проект по упаковке услуги психолога со стажем более 20 лет для B2B-сегмента HoReCa. Исходную профессиональную услугу нужно было адаптировать для компаний: определить продуктовую логику, язык ценности для разных ролей и подготовить материалы для первичного выхода.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {[
                  "Проведено исследование и структурирован контекст проекта",
                  "Разработана продуктовая логика B2B-услуги",
                  "Проведена сегментация аудитории и ЛПР",
                  "Сформирована структура предложения и аргументация",
                  "Подготовлены презентационные материалы",
                  "Разработана карта продаж",
                  "Собрана база потенциальных компаний и контактов для первичного выхода",
                ].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-neon">—</span><span>{item}</span></li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Задача упаковки — сделать профессиональную услугу понятной для B2B-коммуникации и подготовить материалы для первичного выхода на компании. Дальнейший результат зависит от самого предложения, продаж и работы с клиентами.
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Материалы" title="Презентация проекта под ключ">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Презентация — один из возможных результатов упаковки. Она должна не просто красиво выглядеть, а последовательно объяснять контекст, задачу, предложение, ценность, формат работы, аргументы и следующий шаг.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Презентация проекта под ключ может стать рабочим материалом для коммуникации и упаковки проекта для продаж, но сама по себе не гарантирует заключение сделки.
          </p>
        </Section>

        <Section eyebrow="Онлайн-подача" title="Сайт как часть упаковки проекта">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Иногда итогом упаковки становится структура сайта или отдельной посадочной страницы. В этом случае сначала определяется логика предложения, а уже потом дизайн и техническая реализация.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            Если проекту нужен сайт после проработки структуры —{" "}
            <a href="/sayty-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">Сайты для бизнеса →</a>
          </p>
        </Section>

        <Section eyebrow="Старт" title="Что нужно для начала">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Если структура пока не сформирована — это нормально. Можно начать с самой идеи и текущих материалов, а затем определить, какой информации не хватает для следующего шага.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clientMaterials.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card/50 p-4 text-sm">{item}</div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Процесс" title="Как проходит упаковка проекта">
          <ol className="grid gap-3 md:grid-cols-2">
            {workSteps.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-xl border border-border bg-card/50 p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#8B7BC8]/10 text-sm font-bold text-[#8B7BC8]">{index + 1}</span>
                <span className="pt-1 text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section eyebrow="Честные границы" title="Что упаковка не заменяет">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Упаковка помогает сделать предложение понятным и подготовить материалы, но сама по себе не гарантирует продажи. Она не заменяет работу отдела продаж, рекламный бюджет, качество самой услуги, клиентский сервис и реальное подтверждение ценности продукта.
          </p>
        </Section>

        <Section eyebrow="Стоимость" title="Сколько стоит упаковка проекта">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            Стоимость зависит от исходного состояния проекта, количества материалов, глубины исследования, необходимости презентации, сайта и других итоговых материалов. Можно начать с одного конкретного этапа — например со структуры услуги или предложения — и затем расширить работу.
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

        <Section eyebrow="Связаться" title="Обсудим ваш проект?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Расскажите, что уже есть: идея, услуга, презентация, сайт или набор материалов. Помогу определить, чего не хватает, и выстроить понятную структуру проекта.
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
