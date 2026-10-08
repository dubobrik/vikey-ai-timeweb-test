import { createFileRoute } from "@tanstack/react-router";
import cardVisual from "@/assets/vikey-card-cover.jpg";

const PAGE_URL = "https://chelovek-neiroset.ru/ai-kreativy-dlya-biznesa/";
const PAGE_TITLE = "AI-креативы для бизнеса и рекламы | Vikey AI";
const PAGE_DESC = "Создаю AI-креативы и визуальный контент для бизнеса: изображения для рекламы, сайтов, соцсетей, презентаций и проектов под конкретную задачу.";
const OG_IMAGE = "https://chelovek-neiroset.ru/vikey-og.jpg";

export const Route = createFileRoute("/ai-kreativy-dlya-biznesa")({
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
  component: AiCreativeService,
});

const sections: [string, string][] = [["Что такое AI-креативы","AI-креатив — это изображение или серия изображений, созданных с использованием нейросетей под конкретную коммуникационную задачу. Это может быть рекламный визуал, обложка, иллюстрация, концепция или материалы для презентации. Важно не само использование AI, а то, что изображение помогает показать и объяснить."],["AI-креативы для рекламы","Для рекламной коммуникации можно разработать несколько визуальных направлений: показать продукт или услугу, оформить предложение, событие, баннер или промоматериал. До создания изображения учитываются аудитория, площадка, формат и текст объявления."],["AI-изображения для сайтов и лендингов","AI-изображения помогают поддержать структуру и стиль сайта: оформить первый экран, проиллюстрировать услуги, создать атмосферную сцену, фон или визуал для кейса. Они подбираются под конкретный раздел, а не заменяют проектирование сайта."],["AI-визуал для контента и социальных сетей","Для постов, обложек, анонсов и карточек можно подготовить серию материалов в общем визуальном направлении. Это помогает сделать публикации согласованными по палитре, композиции и атмосфере, не генерируя каждый кадр случайно."],["Когда нужно показать то, чего ещё нет","Нейросетевой визуал полезен при проработке концепции, будущего пространства, оформления, продуктовой идеи или атмосферы проекта. Такой материал помогает обсудить направление до реализации и сравнить разные способы подачи."],["От идеи до готового визуала","Работа начинается с задачи и аудитории. Затем определяется формат, подбираются референсы и визуальное направление, составляется промпт, создаются варианты, отбираются подходящие, дорабатываются детали и готовятся изображения под размещение."],["Серия визуалов в одном стиле","Когда нужен не один кадр, а несколько материалов, заранее определяем общую палитру, характер света, композицию, повторяющиеся элементы и настроение. Степень визуальной согласованности зависит от исходной задачи и возможностей инструментов."],["Что нужно для начала","Полезно рассказать о задаче, площадке размещения, продукте или услуге, аудитории, предпочтениях по стилю, цветах бренда, логотипе и техническом формате. Если референсов и готового визуального направления нет, определим их вместе."]];
const useCases = ["Реклама","Социальные сети","Сайты и лендинги","Презентации","Оформление продукта или услуги","Визуализация идеи","Иллюстрации для контента","Концепции личного бренда","Тестирование визуальных направлений"];
const formats = ["Одиночный AI-визуал","Серия изображений","Визуальная концепция","Изображения для сайта","Рекламные креативы","Материалы для соцсетей","Изображения для презентации","Визуализация идеи"];
const steps = ["Разбираем задачу","Определяем формат","Собираем визуальное направление","Создаём варианты","Выбираем и дорабатываем","Готовим финальные файлы"];
const faqs: [string, string][] = [["Что такое AI-креатив?","AI-креатив — визуальный материал, созданный с использованием нейросетей под конкретную задачу бизнеса или проекта."],["Можно ли сделать AI-креатив для рекламы?","Да. Можно разработать визуальную концепцию и подготовить изображения под нужный рекламный формат."],["Можно ли создать изображения для сайта?","Да. AI можно использовать для hero-блоков, иллюстраций, атмосферных сцен и других визуальных элементов сайта."],["Можно ли сделать несколько изображений в одном стиле?","Да. При создании серии можно заранее определить единое визуальное направление, палитру и характер изображений."],["Чем AI-креатив отличается от AI-видео?","AI-креатив в рамках этой услуги — статичное изображение. AI-видео включает движение, видеосцены, монтаж и другие видеозадачи."],["Можно ли работать без готового фирменного стиля?","Да. Если визуального направления ещё нет, его можно определить в процессе подготовки задачи."]];

function Section({title,children}:{title:string;children:React.ReactNode}){
  return <section className="border-t border-border"><div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
    <h2 className="max-w-4xl text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
    <div className="mt-6">{children}</div>
  </div></section>;
}
function AiCreativeService(){
 return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
  <header className="border-b border-border bg-background/95"><div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
   <a href="/" className="text-base font-bold sm:text-lg">Студия Vikey AI</a>
   <a href="/#contact" className="min-h-11 rounded-lg bg-gradient-primary px-4 py-3 text-xs font-semibold text-primary-foreground sm:text-sm">Обсудить задачу</a>
  </div></header>
  <main>
   <section className="bg-hero"><div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.2fr_0.8fr]">
    <div className="min-w-0">
     <p className="mb-4 text-sm font-semibold text-neon">AI-визуал · Бизнес · Контент</p>
     <h1 className="break-words font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Создание AI-креативов для бизнеса</h1>
     <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">Создаю визуалы с помощью нейросетей для рекламы, сайтов, социальных сетей, презентаций и проектов — под задачу, стиль бренда и формат размещения.</p>
     <div className="mt-8 flex flex-wrap gap-3">
      <a href="/#contact" className="min-h-11 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Обсудить задачу</a>
      <a href="/#calc" className="min-h-11 rounded-lg border border-border bg-card/60 px-5 py-3 text-sm font-semibold">Оценить задачу</a>
     </div>
    </div>
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-card">
     <img src={cardVisual} width={1600} height={900} decoding="async" fetchPriority="high" alt="Пример визуального оформления Vikey AI — разработанный материал личного AI-бренда" className="block h-auto w-full object-contain"/>
    </div>
   </div></section>
   <Section title={sections[0][0]}><p className="max-w-4xl leading-relaxed text-muted-foreground">{sections[0][1]}</p></Section>
   <Section title="Для каких задач можно использовать AI-визуал"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{useCases.map(item=><div key={item} className="rounded-xl border border-border bg-card/60 p-4 text-sm">{item}</div>)}</div></Section>
   {sections.slice(1,3).map(([title,body])=><Section key={title} title={title}><p className="max-w-4xl leading-relaxed text-muted-foreground">{body}</p>{title==="AI-изображения для сайтов и лендингов"&&<a href="/sayty-dlya-biznesa/" className="mt-5 inline-flex min-h-11 items-center font-semibold text-neon">Создание сайтов для бизнеса →</a>}</Section>)}
   {sections.slice(3,7).map(([title,body])=><Section key={title} title={title}><p className="max-w-4xl leading-relaxed text-muted-foreground">{body}</p></Section>)}
   <Section title="AI-креатив или AI-видео — что выбрать?"><p className="max-w-4xl leading-relaxed text-muted-foreground">AI-креативы в этой услуге — статичные изображения. AI-видео включает движение, монтаж, видеосцены и цифровых аватаров. Формат выбирается под задачу и площадку размещения.</p><a href="/ai-video-dlya-biznesa/" className="mt-5 inline-flex min-h-11 items-center font-semibold text-neon">Создание AI-видео для бизнеса →</a></Section>
   <Section title={sections[7][0]}><p className="max-w-4xl leading-relaxed text-muted-foreground">{sections[7][1]}</p></Section>
   <Section title="Как создаётся AI-визуал"><ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{steps.map((step,i)=><li key={step} className="rounded-xl border border-border bg-card/60 p-4 text-sm"><span className="mr-2 font-bold text-neon">{i+1}.</span>{step}</li>)}</ol></Section>
   <Section title="Примеры визуальных задач"><div className="grid gap-6 md:grid-cols-2"><article className="overflow-hidden rounded-2xl border border-border bg-card"><img src={cardVisual} width={1600} height={900} loading="lazy" decoding="async" alt="Оформление визуальной концепции личного бренда Vikey AI" className="block h-auto w-full object-contain"/><div className="p-5"><h3 className="font-semibold">Визуальное оформление бренда</h3><p className="mt-2 text-sm text-muted-foreground">Реальный материал Vikey AI: пример подбора образа, композиции и оформления для личного бренда.</p></div></article><div className="rounded-2xl border border-border bg-card p-6"><h3 className="text-xl font-semibold">Подход под задачу</h3><p className="mt-4 leading-relaxed text-muted-foreground">Иллюстрация, рекламный баннер, обложка или серия изображений требуют разного формата и визуальной подачи. Поэтому сначала уточняется цель, а затем создаются варианты.</p></div></div></Section>
   <Section title="Форматы результата"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{formats.map(item=><div key={item} className="rounded-xl border border-border bg-card/60 p-4 text-sm">{item}</div>)}</div></Section>
   <Section title="Сколько стоит создание AI-креативов"><p className="max-w-4xl leading-relaxed text-muted-foreground">Стоимость зависит от задачи, количества визуалов, сложности сцены, необходимости доработок и форматов результата. Калькулятор покажет предварительную оценку «от».</p><a href="/#calc" className="mt-5 inline-flex min-h-11 items-center font-semibold text-neon">Оценить задачу →</a></Section>
   <Section title="Частые вопросы об AI-креативах"><div className="max-w-4xl space-y-3">{faqs.map(([question,answer])=><details key={question} className="rounded-xl border border-border bg-card/60 p-5"><summary className="cursor-pointer font-semibold">{question}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></Section>
   <Section title="Нужен визуал под конкретную задачу?"><p className="max-w-3xl leading-relaxed text-muted-foreground">Расскажите, что нужно показать, где будет использоваться изображение и какой результат хотите получить. Помогу определить формат и визуальное направление.</p><div className="mt-7 flex flex-wrap gap-3"><a href="/#calc" className="min-h-11 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Оценить задачу</a><a href="https://t.me/Vikey_shel" target="_blank" rel="noopener noreferrer" className="min-h-11 rounded-lg border border-border px-5 py-3 text-sm font-semibold">Telegram</a><a href="https://wa.me/79081747077" target="_blank" rel="noopener noreferrer" className="min-h-11 rounded-lg border border-border px-5 py-3 text-sm font-semibold">WhatsApp</a><a href="https://max.ru/u/f9LHodD0cOKqFcs6UZJNI7fMntxJ8xCv4X4bwued0XRebPD3LFvJ6CgS3cA" target="_blank" rel="noopener noreferrer" className="min-h-11 rounded-lg border border-border px-5 py-3 text-sm font-semibold">MAX</a></div></Section>
  </main>
  <footer className="border-t border-border"><div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground"><a href="/">На главную Vikey AI →</a></div></footer>
 </div>;
}
