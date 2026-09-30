from pathlib import Path

index = Path('src/routes/index.tsx')
text = index.read_text(encoding='utf-8')
old = '  { title: "AI-инструменты для бизнеса", desc: "Подбираю и внедряю нейросети под реальные задачи компании." , icon: "◆" },'
new = '  { title: "Telegram-боты для бизнеса", desc: "Боты для заявок, записи, оплат, уведомлений и рабочих сценариев. AI можно подключить, если он действительно нужен.", icon: "◆", href: "/telegram-boty-dlya-biznesa/" },'
if old not in text:
    raise SystemExit('Main service card anchor not found')
index.write_text(text.replace(old, new, 1), encoding='utf-8')

ai = Path('src/routes/ii-assistent-dlya-biznesa.tsx')
text = ai.read_text(encoding='utf-8')
old = '''          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Если проекту нужен новый сайт или отдельная посадочная страница, посмотреть услугу{" "}
            <a href="/sayty-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">«Сайты для бизнеса»</a>.
          </p>'''
new = old + '''
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            Нужен именно Telegram-бот с меню, заявками или оплатой? →{" "}
            <a href="/telegram-boty-dlya-biznesa/" className="font-semibold text-neon transition hover:text-neon/80">Telegram-боты для бизнеса</a>
          </p>'''
if old not in text:
    raise SystemExit('AI assistant cross-link anchor not found')
ai.write_text(text.replace(old, new, 1), encoding='utf-8')

sitemap = Path('public/sitemap.xml')
text = sitemap.read_text(encoding='utf-8')
if 'https://chelovek-neiroset.ru/telegram-boty-dlya-biznesa/' in text:
    raise SystemExit('Telegram bots URL already present in sitemap')
anchor = '''  <url>
    <loc>https://chelovek-neiroset.ru/ii-assistent-dlya-biznesa/</loc>
  </url>
</urlset>'''
replacement = '''  <url>
    <loc>https://chelovek-neiroset.ru/ii-assistent-dlya-biznesa/</loc>
  </url>
  <url>
    <loc>https://chelovek-neiroset.ru/telegram-boty-dlya-biznesa/</loc>
  </url>
</urlset>'''
if anchor not in text:
    raise SystemExit('Sitemap anchor not found')
sitemap.write_text(text.replace(anchor, replacement, 1), encoding='utf-8')
