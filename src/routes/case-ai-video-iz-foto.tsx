import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import source01 from "@/assets/ai-video-source-01.webp";
import source02 from "@/assets/ai-video-source-02.webp";
import poster01 from "@/assets/ai-video-result-01-poster.webp";
import poster02 from "@/assets/ai-video-result-02-poster.webp";

const URL = "https://chelovek-neiroset.ru/case-ai-video-iz-foto/";
const TITLE = "Создание видео из фото с помощью ИИ — кейс Vikey AI";
const DESC = "Кейс Vikey AI: создание двух AI-видео из исходных фотографий. Показываю формат «исходник → результат» и возможности нейросетей для динамичной подачи визуального материала.";

export const Route = createFileRoute("/case-ai-video-iz-foto")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://chelovek-neiroset.ru/vikey-og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ImageToVideoCase,
});

const examples = [
  { key: "01", source: source01, poster: poster01, video: "/assets/ai-video-result-01.mp4", sourceWidth: 1280, sourceHeight: 960, title: "Исходник → AI-видео: пример 1", desc: "Каменная композиция на исходной фотографии и готовый вертикальный AI-ролик со звуком." },
  { key: "02", source: source02, poster: poster02, video: "/assets/ai-video-result-02.mp4", sourceWidth: 720, sourceHeight: 1280, title: "Исходник → AI-видео: пример 2", desc: "Композиция с башней на исходной фотографии и второй готовый вертикальный AI-ролик без звуковой дорожки." },
];
const faq: [string, string][] = [
  ["Можно ли создать видео из одной фотографии?", "Да. Статичное изображение можно использовать как основу для короткого AI-видео, если исходник подходит для поставленной задачи."],
  ["Какие фотографии подходят для AI-видео?", "Лучше заранее оценить качество изображения, главный объект, композицию и то, какое движение должно появиться в результате."],
  ["Сохранится ли исходное изображение точно?", "AI может интерпретировать отдельные детали при создании движения. Поэтому результат нужно просматривать, отбирать и при необходимости создавать новые варианты."],
  ["Можно ли сделать несколько вариантов движения?", "Да, если задача этого требует. Количество вариантов определяется отдельно в зависимости от проекта."],
  ["Можно ли создать ролик без текста и озвучки?", "Да. Видео может быть самостоятельным визуальным материалом, а текст, музыка или озвучка добавляются только если они нужны для конкретной задачи."],
  ["Где можно использовать AI-видео из фото?", "Формат может использоваться на сайте, в социальных сетях, презентациях и других цифровых материалах, если он подходит под задачу проекта."],
];
const checklist = ["Качество исходной фотографии", "Композиция", "Понятный главный объект", "Направление движения", "Сохранение важных деталей", "Отбор результата", "Формат готового ролика"];
const work = ["Использованы готовые исходные фотографии", "Изображения стали основой для AI-видео", "Созданы два отдельных видеорезультата", "Отобраны финальные варианты", "Ролики подготовлены для демонстрации"];
function Section({ title, id, children }: { title: string; id?: string; children: React.ReactNode }) {
  return <section id={id} className="border-t border-border"><div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20"><h2 className="max-w-4xl text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2><div className="mt-6">{children}</div></div></section>;
}
function Comparison({ item }: { item: typeof examples[number] }) {
  const [playing, setPlaying] = useState(false);
  return <Section id={item.key === "01" ? "example-1" : "example-2"} title={item.title}>
    <p className="mb-6 max-w-4xl leading-relaxed text-muted-foreground">{item.desc}</p>
    <div className="grid items-start gap-6 md:grid-cols-2">
      <figure className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <div className="flex aspect-[9/16] items-center justify-center bg-black/20 p-3"><img src={item.source} width={item.sourceWidth} height={item.sourceHeight} loading="lazy" decoding="async" alt={`Исходная фотография для AI-видео ${item.key}`} className="max-h-full w-full object-contain" /></div>
        <figcaption className="p-4 text-center text-sm font-semibold">Исходное изображение</figcaption>
      </figure>
      <figure className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <div className="aspect-[464/832] w-full bg-black">
          {playing ? <video src={item.video} poster={item.poster} controls playsInline preload="none" className="h-full w-full object-contain" aria-label={`Готовый AI-ролик ${item.key}`} /> : <img src={item.poster} width={464} height={832} loading="lazy" decoding="async" alt={`Реальный кадр AI-ролика ${item.key}`} className="block h-full w-full object-contain" />}
        </div>
        <div className="p-4"><button type="button" className="min-h-11 w-full rounded-lg bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground" onClick={() => setPlaying(true)} disabled={playing}>{playing ? "Видео готово к воспроизведению" : "Смотреть AI-видео"}</button><figcaption className="mt-3 text-center text-sm font-semibold">Готовый AI-ролик</figcaption></div>
      </figure>
    </div>
  </Section>;
}
function ImageToVideoCase() {
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <header className="border-b border-border bg-background/95"><div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6"><a href="/" className="text-base font-bold sm:text-lg">Студия Vikey AI</a><a href="/#contact" className="min-h-11 rounded-lg bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground">Создать AI-видео</a></div></header>
    <main>
      <section className="bg-hero"><div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0"><p className="mb-4 text-sm font-semibold text-neon">Реальный кейс · AI-видео из фото</p><h1 className="break-words font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Создание видео из фото с помощью ИИ</h1><p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">Два статичных исходных изображения превращены в короткие AI-ролики. Показываю результат на реальных материалах: от исходной фотографии до готового видео.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#example-1" className="min-h-11 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Смотреть результат</a><a href="/#contact" className="min-h-11 rounded-lg border border-border px-5 py-3 text-sm font-semibold">Создать AI-видео</a></div></div>
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-card"><img src={source01} width={1280} height={960} decoding="async" fetchPriority="high" alt="Исходная фотография каменной композиции для AI-видео" className="block h-auto w-full object-contain" /></div>
      </div></section>
      <Section title="Задача проекта"><p className="max-w-4xl leading-relaxed text-muted-foreground">Исходными материалами были фотографии готовых объектов. Задача — использовать AI, чтобы превратить статичные изображения в короткие динамичные ролики для визуальной презентации проекта, без отдельной видеосъёмки исходных объектов.</p></Section>
      <Section title="От фотографии к AI-видео"><p className="max-w-4xl leading-relaxed text-muted-foreground">Сначала есть готовое фото. Затем определяется движение в кадре, на основе изображения нейросеть создаёт динамическую сцену, а результат оценивается, отбирается и подготавливается как ролик. AI может по-своему интерпретировать мелкие детали фотографии — поэтому важны проверка и отбор результата.</p></Section>
      {examples.map(item => <Comparison key={item.key} item={item} />)}
      <Section title="Что можно сделать из готового изображения"><p className="max-w-4xl leading-relaxed text-muted-foreground">Уже существующие фотографии можно использовать для создания динамичных материалов для сайта, социальных сетей, презентаций, демонстрации объекта или промоматериалов. Это возможные сценарии применения, а не перечень фактических публикаций этих двух роликов.</p></Section>
      <Section title="Когда уже есть хороший исходный материал"><p className="max-w-4xl leading-relaxed text-muted-foreground">Для создания AI-видео не обязательно начинать визуал с нуля. Фотографию объекта, изделия или проекта можно взять за основу, чтобы представить его в новом движущемся формате.</p></Section>
      <Section title="Что важно при создании видео из изображения"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{checklist.map(x => <div key={x} className="rounded-xl border border-border bg-card/60 p-4 text-sm">{x}</div>)}</div></Section>
      <Section title="Что было сделано"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{work.map(x => <div key={x} className="rounded-xl border border-border bg-card/60 p-4 text-sm">{x}</div>)}</div></Section>
      <Section title="Что получилось"><p className="max-w-4xl leading-relaxed text-muted-foreground">Из двух статичных фотографий были созданы два коротких AI-ролика. Кейс показывает, как готовый визуальный материал можно превратить в динамичный формат без отдельной видеосъёмки исходного объекта.</p></Section>
      <Section title="Нужно AI-видео под вашу задачу?"><p className="max-w-4xl leading-relaxed text-muted-foreground">AI-видео можно создавать не только с нуля: основой могут стать уже существующие фотографии и визуалы проекта.</p><a href="/ai-video-dlya-biznesa/" className="mt-5 inline-flex min-h-11 items-center font-semibold text-neon">Создание AI-видео для бизнеса →</a><p className="mt-5 text-sm text-muted-foreground">Если сначала нужно подготовить статичный визуал: <a href="/ai-kreativy-dlya-biznesa/" className="font-semibold text-neon">AI-креативы для бизнеса →</a></p></Section>
      <Section title="Частые вопросы о создании AI-видео из фото"><div className="max-w-4xl space-y-3">{faq.map(([q,a]) => <details key={q} className="rounded-xl border border-border bg-card/60 p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div></Section>
      <Section title="Есть фотография, которую хочется превратить в видео?"><p className="max-w-4xl leading-relaxed text-muted-foreground">Пришлите исходное изображение и расскажите, какой результат нужен. Помогу оценить, подходит ли материал для AI-видео и какой формат лучше использовать.</p><div className="mt-7 flex flex-wrap gap-3"><a href="/#calc" className="min-h-11 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Оценить задачу</a><a href="https://t.me/Vikey_shel" target="_blank" rel="noopener noreferrer" className="min-h-11 rounded-lg border border-border px-5 py-3 text-sm font-semibold">Telegram</a><a href="https://wa.me/79081747077" target="_blank" rel="noopener noreferrer" className="min-h-11 rounded-lg border border-border px-5 py-3 text-sm font-semibold">WhatsApp</a><a href="https://max.ru/u/f9LHodD0cOKqFcs6UZJNI7fMntxJ8xCv4X4bwued0XRebPD3LFvJ6CgS3cA" target="_blank" rel="noopener noreferrer" className="min-h-11 rounded-lg border border-border px-5 py-3 text-sm font-semibold">MAX</a></div></Section>
    </main><footer className="border-t border-border"><div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground"><a href="/">На главную Vikey AI →</a></div></footer>
  </div>;
}
