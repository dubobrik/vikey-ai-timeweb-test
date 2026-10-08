import { createFileRoute } from "@tanstack/react-router";
import savanaPreview from "@/assets/savana-site-preview.webp";

const PAGE_URL = "https://chelovek-neiroset.ru/case-sayt-lichnogo-brenda/";
const PROJECT_URL = "https://savanadivik.ru/";
const PAGE_TITLE = "Создание сайта для личного бренда — кейс Vikey AI";
const PAGE_DESC = "Кейс Vikey AI: создание сайта для личного бренда на примере проекта личных консультаций. Структура, атмосферная визуальная подача, услуги, мобильная версия и контакты.";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";

export const Route = createFileRoute("/case-sayt-lichnogo-brenda")({
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
  component: PersonalBrandCase,
});

const sections: [string, string][] = [["Задача проекта","Для личного бренда важно показать не только перечень услуг, но и характер человека, его подход и стиль общения. В проекте личных консультаций требовалось представить специалиста, раскрыть услуги, объединить материалы общей атмосферой и сделать спокойный, последовательный путь к первому обращению."],["Сайт как пространство личного бренда","Сайт объединяет знакомство со специалистом, его направление работы, личную подачу, услуги, визуальный стиль и способы связи. Здесь он построен не как безличный каталог, а как пространство знакомства с человеком и форматом его работы."],["Визуальный стиль под характер проекта","Для проекта выбран мягкий мистический, женственный и атмосферный визуальный подход. Цветовое настроение, образы, композиция и сочетание изображений с текстом помогают передать характер именно этого личного бренда. Содержание кейса посвящено разработке сайта, а не самим консультациям."],["Как сайт знакомит с человеком","Структура первого экрана и последующих блоков помогает посетителю разобраться, кто перед ним, чем занимается специалист, какие услуги предлагает и как связаться. Знакомство выстроено последовательно, а не как набор разрозненных разделов."],["Как показать услуги без перегруза","На сайте оформлены блоки с услугами и понятная навигация между смысловыми частями. Услуги остаются заметными, но визуальная подача не теряет индивидуальную атмосферу личного бренда."],["Доверительное первое касание","Структура и визуальная подача были собраны так, чтобы знакомство со специалистом происходило спокойно, последовательно и без лишнего давления. Посетитель может сначала узнать о подходе и услугах, а затем самостоятельно решить, стоит ли обращаться."],["Личный сайт на мобильных устройствах","Для проекта выполнена мобильная адаптация. При разработке уделено внимание тому, как на небольшом экране представлены первый экран, тексты, услуги, навигация, изображения и контактные кнопки."],["Что получилось","Получился цельный атмосферный сайт личного бренда, который знакомит посетителя со специалистом, показывает услуги и стиль работы и ведёт к понятному следующему шагу — обращению. Визуальная подача поддерживает характер проекта, а структура помогает ориентироваться на сайте."],["Для каких личных брендов подходит такой формат","Подобный формат может использоваться консультантами, авторами, преподавателями, коучами, психологами, специалистами творческих направлений и других личных практик. Это примеры возможного применения, а не перечень реализованных проектов."],["Сайт личного бренда или сайт-портфолио?","Сайт-портфолио делает основной акцент на работах и примерах, а сайт личного бренда — на человеке, его подходе, услугах, стиле общения и позиционировании. Эти форматы могут пересекаться. В данном кейсе в центре внимания именно знакомство со специалистом."]];
const completed: string[] = ["Разработана структура сайта","Подобран мягкий атмосферный визуальный стиль","Оформлена подача специалиста","Оформлены блоки с услугами","Создана понятная навигация","Добавлены контактные точки","Добавлен призыв к обращению","Выполнена мобильная адаптация"];
const faqs: [string, string][] = [["Что такое сайт личного бренда?","Это сайт, где значимая часть подачи строится вокруг человека: его направления работы, подхода, услуг, визуального стиля и способов связи."],["Кому нужен сайт для личного бренда?","Такой формат может подойти специалистам, консультантам, авторам и другим людям, для которых личность и подход являются важной частью проекта."],["Чем сайт личного бренда отличается от портфолио?","В портфолио основной акцент обычно делается на работах. На сайте личного бренда важную роль также играют сам человек, его подход, услуги и характер коммуникации."],["Можно ли сделать сайт в индивидуальном стиле?","Да. Визуальную подачу можно строить вокруг характера проекта, аудитории и образа бренда."],["Можно ли разместить на таком сайте услуги?","Да. Услуги можно встроить в структуру так, чтобы посетителю было понятно, что предлагает специалист и как обратиться."],["Будет ли сайт адаптирован для телефона?","Да. Мобильную версию необходимо учитывать при разработке, поскольку сайт должен нормально читаться и работать на небольшом экране."]];

function Section({title,children}:{title:string;children:React.ReactNode}){
  return <section className="border-t border-border"><div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
    <h2 className="max-w-4xl text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
    <div className="mt-6">{children}</div>
  </div></section>;
}

function PersonalBrandCase(){
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <header className="border-b border-border bg-background/95"><div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
      <a href="/" className="font-display text-base font-bold sm:text-lg">Студия Vikey AI</a>
      <a href="/#contact" className="rounded-lg bg-gradient-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground sm:text-sm">Заказать сайт</a>
    </div></header>
    <main>
      <section className="bg-hero"><div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1fr_1fr]">
        <div className="min-w-0">
          <p className="mb-4 text-sm font-semibold text-neon">Реальный кейс · Личный бренд</p>
          <h1 className="break-words font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Создание сайта для личного бренда</h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">Атмосферный сайт для личных консультаций: структура, визуальный стиль, подача услуг, знакомство со специалистом и понятный путь к обращению.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Посмотреть сайт</a>
            <a href="/#contact" className="rounded-lg border border-border bg-card/60 px-5 py-3 text-sm font-semibold">Заказать сайт</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <img src={savanaPreview} width={1600} height={900} decoding="async" fetchPriority="high" alt="Атмосферный сайт для личного бренда и личных консультаций — кейс Vikey AI" className="block h-auto w-full object-contain" />
        </div>
      </div></section>
      {sections.slice(0,7).map(([title,body])=><Section key={title} title={title}><p className="max-w-4xl leading-relaxed text-muted-foreground">{body}</p></Section>)}
      <Section title="Что было сделано в проекте"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{completed.map(item=><div key={item} className="rounded-xl border border-border bg-card/60 p-4 text-sm">{item}</div>)}</div></Section>
      {sections.slice(7).map(([title,body])=><Section key={title} title={title}><p className="max-w-4xl leading-relaxed text-muted-foreground">{body}</p></Section>)}
      <Section title="Нужен сайт для вашего проекта или личного бренда?"><p className="max-w-3xl leading-relaxed text-muted-foreground">Если сайт должен не только перечислить услуги, но и передать характер проекта, можно выстроить структуру и визуальную подачу вокруг самого бренда и его аудитории.</p><a href="/sayty-dlya-biznesa/" className="mt-5 inline-flex min-h-11 items-center font-semibold text-neon">Создание сайтов для бизнеса →</a></Section>
      <Section title="Частые вопросы о сайте для личного бренда"><div className="max-w-4xl space-y-3">{faqs.map(([question,answer])=><details key={question} className="rounded-xl border border-border bg-card/60 p-5"><summary className="cursor-pointer font-semibold">{question}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></Section>
      <Section title="Нужен сайт для вашего личного бренда?"><p className="max-w-3xl leading-relaxed text-muted-foreground">Расскажите, чем вы занимаетесь, какие услуги нужно представить и какой характер должен передавать сайт. Помогу определить структуру и формат.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="/#calc" className="rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Оценить задачу</a>
          <a href="https://t.me/Vikey_shel" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold">Telegram</a>
          <a href="https://wa.me/79081747077" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold">WhatsApp</a>
          <a href="https://max.ru/u/f9LHodD0cOKqFcs6UZJNI7fMntxJ8xCv4X4bwued0XRebPD3LFvJ6CgS3cA" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold">MAX</a>
        </div>
      </Section>
    </main>
    <footer className="border-t border-border"><div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground"><a href="/">На главную Vikey AI →</a></div></footer>
  </div>;
}
