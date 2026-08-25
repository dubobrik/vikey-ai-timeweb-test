from pathlib import Path
import re

path = Path("src/routes/index.tsx")
text = path.read_text(encoding="utf-8")

help_list = '''const help = [
  "Разобраться, какие AI-инструменты реально нужны",
  "Упаковать идею, услугу или проект",
  "Создать визуальный контент",
  "Собрать сайт или лендинг",
  "Автоматизировать повторяющиеся задачи",
  "Внедрить AI-помощника или чат-бота",
  "Другое",
];'''
text, count = re.subn(r'const help = \[.*?\n\];', help_list, text, count=1, flags=re.S)
if count != 1:
    raise SystemExit("Could not replace help list")

help_function = '''function Help() {
  return (
    <Section id="help" eyebrow="Чем помогаю" title="Практические направления для бизнеса и экспертов">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {help.map((h, i) => (
          <a
            key={h}
            href="#calc"
            aria-label={`${h} — перейти к калькулятору`}
            className="group rounded-xl border border-border bg-card/50 p-5 transition hover:-translate-y-0.5 hover:border-neon/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
          >
            <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </div>
            <p className="text-sm text-foreground">{h}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}'''
text, count = re.subn(
    r'function Help\(\) \{.*?\n\}\n\nfunction Services',
    help_function + '\n\nfunction Services',
    text,
    count=1,
    flags=re.S,
)
if count != 1:
    raise SystemExit("Could not replace Help function")

calc_services = '''const CALC_SERVICES: CalcService[] = [
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
  { key: "other", label: "Другое", price: 1000 },
];'''
text, count = re.subn(
    r'const CALC_SERVICES: CalcService\[\] = \[.*?\n\];',
    calc_services,
    text,
    count=1,
    flags=re.S,
)
if count != 1:
    raise SystemExit("Could not replace calculator services")

path.write_text(text, encoding="utf-8")
print("Updated help cards and calculator")
