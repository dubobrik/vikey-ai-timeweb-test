import { createFileRoute } from "@tanstack/react-router";

const PAGE_URL = "https://chelovek-neiroset.ru/case-ai-telegram-bot/";
const PAGE_TITLE = "Разработка AI Telegram-бота с базой знаний — кейс Vikey AI";
const PAGE_DESC = "Кейс Vikey AI: разработка Telegram-бота с базой знаний, AI, пользовательскими сценариями, изображениями, оплатой и серверным размещением под ключ.";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";

export const Route = createFileRoute("/case-ai-telegram-bot")({
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
  component: AiTelegramCasePage,
});

const sections: [string, string][] = [["Задача проекта","Создать Telegram-бота, который сопровождает пользователя по разным сценариям, учитывает сохранённый контекст, находит ответы в структурированной базе знаний и при необходимости обращается к AI."],["От идеи к архитектуре Telegram-бота","Сначала была определена логика продукта: от пользовательских сценариев и структуры разделов до системы ответов, платежей, уведомлений и серверного размещения."],["Сбор и структурирование базы знаний","Исходные материалы были собраны, проверены, систематизированы по темам и связаны с пользовательскими сценариями. Так разрозненная информация превратилась в управляемую систему знаний."],["Сначала база знаний — затем AI","Основной источник подготовленных ответов — собственная база знаний. Если подходящего ответа нет, запрос обрабатывается с помощью AI в рамках заданных правил и ограничений."],["Подключение искусственного интеллекта","AI Telegram-бот использует искусственный интеллект как часть общей архитектуры. Система передаёт нужный контекст и применяет ограничения; AI не заменяет меню, данные и бизнес-логику."],["Пользовательские сценарии и состояния","Разные пользователи проходят разные этапы: система учитывает состояние, профиль, историю взаимодействия и контекст, а не ведёт всех по одной цепочке."],["Архитектура меню","Создана многоуровневая структура разделов и подразделов с понятными переходами и возвращением назад. Меню связано с пользовательскими сценариями."],["Работа с разными формулировками вопросов","Логика учитывает короткие и разговорные вопросы, синонимы, разные падежи и порядок слов, общие и конкретные запросы."],["Хранение пользовательских данных","Для предусмотренных сценариев организовано хранение необходимых данных: профиль, состояние, история и настройки. Персональные данные и внутреннее устройство хранилища на странице не раскрываются."],["Работа с изображениями","Визуальные материалы подготовлены, оптимизированы и привязаны к нужным пользовательским сценариям. Система предусматривает как выдачу готовых изображений, так и генерацию в соответствующих сценариях."],["Автоматические сообщения и уведомления","Реализована логика сообщений по заданным условиям, повторяющихся сценариев и пользовательских настроек. Отправка сообщений учитывает применимые правила согласия."],["Подключение платежей","Платёжный сценарий включает создание платежа, фиксацию его состояния, обработку статуса и дальнейшую логику доступа. Секретные реквизиты не публикуются."],["Размещение Telegram-бота на сервере","После локальной разработки решение подготовлено для production-среды и постоянной работы на сервере, без зависимости от включённого компьютера разработчика."],["Передача готового решения заказчику","Проект подготовлен для дальнейшей эксплуатации и передачи вместе с необходимой структурой и настройками без публикации закрытых доступов."],["Что получилось в результате","Собрана цифровая система на базе Telegram: база знаний, многоуровневые сценарии, пользовательские данные, AI, изображения, уведомления, платежи и серверная инфраструктура."]];
const faqs: [string, string][] = [["Что такое Telegram-бот с базой знаний?","Это бот, использующий заранее собранную и структурированную информацию для ответов и сценариев. Такая база позволяет контролировать основную часть содержания."],["Можно ли подключить искусственный интеллект к Telegram-боту?","Да. AI можно включить в логику обработки вопросов, например когда в базе знаний нет подходящего ответа."],["Может ли Telegram-бот хранить данные пользователя?","Да. В зависимости от задачи бот может работать с профилем, настройками, состояниями и историей взаимодействия."],["Можно ли принимать оплату через Telegram-бота?","Да. Платёжный сценарий связывается с нужной логикой доступа или оказания услуги."],["Нужно ли размещать Telegram-бота на сервере?","Для постоянной работы бот обычно размещают в серверной среде, чтобы он не зависел от компьютера разработчика."],["Можно ли передать готового Telegram-бота заказчику?","Да. Проект можно передать заказчику вместе с необходимыми настройками, структурой и инструкциями."]];
const steps = ["Идея","Сценарии","Разделы и меню","База знаний","Профили и данные","Логика ответов","AI","Изображения и уведомления","Платежи","Сервер","Готовый продукт"];
const work = ["Архитектура и пользовательские сценарии","Многоуровневое меню и подменю","Сбор и структурирование базы знаний","Связь базы знаний с логикой ответов","Профили, состояния и история взаимодействия","Вариативность формулировок вопросов","AI с контекстом и ограничениями","Изображения и автоматические уведомления","Платёжная логика","Размещение на сервере и тестирование","Подготовка решения к передаче заказчику"];

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h2 className="max-w-4xl text-2xl font-bold sm:text-3xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function AiTelegramCasePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <a href="/" className="text-base font-bold">Студия Vikey AI</a>
          <a href="/#contact" className="rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground sm:text-sm">Обсудить Telegram-бота</a>
        </div>
      </header>
      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <p className="mb-4 text-sm font-semibold text-neon">Реальный кейс · AI Telegram-бот</p>
            <h1 className="max-w-4xl break-words font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Разработка AI Telegram-бота с базой знаний</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Полный цикл разработки Telegram-бота: сбор и структурирование базы знаний, пользовательская архитектура, сценарии, AI, изображения, платежи, серверное размещение и передача готового решения заказчику.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#architecture" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Как устроен проект</a>
              <a href="/#contact" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold">Обсудить Telegram-бота</a>
            </div>
          </div>
        </section>
        <Section title="От идеи к работающему продукту" id="architecture">
          <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">Это не просто бот с кнопками, а система, объединяющая сценарии, базу знаний, хранение данных, AI, оплату и автоматизацию.</p>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => <li key={step} className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-card/60 p-4"><span className="shrink-0 text-sm font-bold text-neon">{i + 1}.</span><span className="break-words text-sm">{step}</span></li>)}
          </ol>
        </Section>
        {sections.map(([title, description]) => (
          <Section key={title} title={title}><p className="max-w-4xl leading-relaxed text-muted-foreground">{description}</p></Section>
        ))}
        <Section title="Как устроено решение">
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            {["Telegram","Пользовательский сценарий","Профиль и состояние","Поиск ответа","База знаний","При отсутствии ответа — AI","Ответ пользователю"].map((item, i) => (
              <div key={item}>
                {i > 0 && <div aria-hidden="true" className="py-1 text-neon">↓</div>}
                <div className="rounded-xl border border-neon/20 bg-card p-4 text-sm font-medium">{item}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">{["Платежи","Изображения и уведомления","База данных и сервер"].map((item) => <div key={item} className="rounded-xl border border-border bg-card/60 p-4 text-center text-sm">{item}</div>)}</div>
        </Section>
        <Section title="Что было сделано в проекте">
          <ul className="grid gap-3 sm:grid-cols-2">{work.map((item) => <li key={item} className="rounded-xl border border-border bg-card/60 p-4 text-sm">{item}</li>)}</ul>
        </Section>
        <Section title="Где можно использовать подобного Telegram-бота">
          <p className="max-w-4xl leading-relaxed text-muted-foreground">Подобная архитектура может использоваться в экспертных проектах, образовательных сервисах, консультационных продуктах, корпоративных базах знаний, клиентской поддержке, закрытых информационных сервисах и подписочных продуктах.</p>
        </Section>
        <Section title="Нужен Telegram-бот под вашу задачу?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">Если стандартного конструктора недостаточно, можно спроектировать Telegram-бота под конкретную бизнес-логику: с базой знаний, AI, данными пользователей, платежами и автоматическими сценариями.</p>
          <a href="/telegram-boty-dlya-biznesa/" className="mt-5 inline-block font-semibold text-neon">Разработка Telegram-ботов для бизнеса →</a>
          <p className="mt-5 text-sm text-muted-foreground">Для задач с корпоративной базой знаний также доступно направление <a href="/ii-assistent-dlya-biznesa/" className="font-semibold text-neon">AI-ассистентов для бизнеса →</a></p>
        </Section>
        <Section title="Частые вопросы о разработке AI Telegram-ботов">
          <div className="max-w-4xl space-y-3">{faqs.map(([q,a]) => <details key={q} className="rounded-xl border border-border bg-card/60 p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div>
        </Section>
        <Section title="Обсудим вашего Telegram-бота?">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">Расскажите, какую задачу должен решать бот, какие данные и материалы уже существуют и что должен уметь пользовательский сценарий. Помогу определить архитектуру и состав первой версии.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/#calc" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Оценить задачу</a>
            <a href="https://t.me/Vikey_shel" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold">Telegram</a>
            <a href="https://wa.me/79081747077" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold">WhatsApp</a>
            <a href="https://max.ru/u/f9LHodD0cOKqFcs6UZJNI7fMntxJ8xCv4X4bwued0XRebPD3LFvJ6CgS3cA" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold">MAX</a>
          </div>
        </Section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground sm:px-6"><a href="/">← На главную Vikey AI</a></div></footer>
    </div>
  );
}
