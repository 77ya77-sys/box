# ROADMAP — Курьер-бокс (лендинг)

Источник дизайна: [Figma — Курьер-Бокс](https://www.figma.com/design/BtEEuhtjw9480kpftHRU13/%D0%9A%D1%83%D1%80%D1%8C%D0%B5%D1%80-%D0%91%D0%BE%D0%BA%D1%81?node-id=915-108).

Стек: **Vite + React + TypeScript**, API — **Node (Express)** в `api/` (ЮKassa, секреты только на сервере).

## Статус

- [x] Скелет Vite + React + TS, роутинг, layout 1440px.
- [x] Модалка заказа (запрос на `/api/payments/create`).
- [x] Cookie-баннер.
- [x] Яндекс.Метрика по `VITE_YM_ID`.
- [x] Юр. страницы `/privacy/`, `/offer/` (только заголовки).
- [x] Страница «спасибо» `/thank-you/`.
- [x] API-заглушка с 503/501 до настройки ЮKassa.
- [x] Секции лендинга по макету: hero, проблема, характеристики (2×2), галерея (carousel), шаги, CTA, подвал.
- [ ] **Фотоконтент:** в макете все `Rectangle` с `fills:[]` — изображений в Figma нет. Нужны реальные фото от заказчика в `public/images/`:
  - `problem-before.webp`, `problem-after.webp` — слайдер «до/после»; `hero-bg.webp` — фон Hero.
  - `1.webp` … `4.webp` — галерея «в реальных подъездах».
- [ ] Слайдер «до и после» (в макете пока placeholder-текст).
- [ ] Заменить плейсхолдер-реквизиты в футере на боевые (ИП, ИНН, ОГРНИП, email, телефон).
- [ ] Подставить реальные ссылки на **Telegram / MAX / WhatsApp** в `src/config/external.ts`.
- [ ] **ЮKassa:** получить shop_id + secret, заполнить `api/.env`, реализовать создание платежа + `return_url` → `/thank-you/`.
- [ ] Webhook ЮKassa на `POST /api/payments/webhook` (если нужен по сценарию).
- [ ] Письмо клиенту с чеком (настраивается на стороне ЮKassa).
- [ ] Прод-деплой на VPS (Beget): nginx + systemd для Node, HTTPS (Let's Encrypt).
- [ ] Цели в Метрике: клик «Заказать», успешная оплата.
- [ ] SEO: финальные title / description / OG для главной и юр. страниц.

## Принципы и правила

- Работать строго по [макету Figma](https://www.figma.com/design/BtEEuhtjw9480kpftHRU13/%D0%9A%D1%83%D1%80%D1%8C%D0%B5%D1%80-%D0%91%D0%BE%D0%BA%D1%81?node-id=915-108). При изменении макета — обновлять секции в `src/landing/sections/`.
- Базовый layout — контейнер `max-width: 1440px`, центр, паддинги 20px (`PageContainer`).
- Ссылки внутри сайта — только на каталоги (`/privacy/`, `/offer/`), без `index.html`.
- Секреты ЮKassa и любые ключи — **только** в `api/.env`, в клиент ничего.
- Предпросмотр — **только в Google Chrome пользователя**, не во внутреннем браузере Cursor.

## Как запустить

```bash
cp .env.example .env            # (опц.) задать VITE_YM_ID
cp api/.env.example api/.env    # (опц.) задать YOOKASSA_*
npm install
npm install --prefix api
npm run dev:all                 # Vite :5173 + API :3001
```

После `npm run dev` открывай в Chrome **http://127.0.0.1:5173/** (Vite слушает именно IPv4 `127.0.0.1`, не только `::1`). Если порт занят — останови старый процесс (`lsof -i :5173`) и запусти снова.
