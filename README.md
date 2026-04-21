# Курьер-бокс — лендинг

Стек: **Vite + React + TypeScript**, API — **Node (Express)** в каталоге `api/` (ЮKassa, секреты только на сервере).

## Локально

```bash
cp .env.example .env
cp api/.env.example api/.env
npm install
npm install --prefix api
```

Фронт и API вместе:

```bash
npm run dev:all
```

Отдельно: `npm run dev` (Vite, порт 5173) и `npm run dev:api` (API, `127.0.0.1:3001`). Прокси `/api` → API настроен в `vite.config.ts`.

## Сборка

```bash
npm run build
```

Артефакт — `dist/`. На VPS: nginx раздаёт `dist`, `location /api` проксирует на процесс Node.

## GitHub Pages (один раз в настройках репозитория)

CI публикует `dist` через **GitHub Actions** (workflow `Deploy to GitHub Pages`). Пока в **Settings → Pages** указан источник «Deploy from a branch» с **main** (корень), на `https://<user>.github.io/<repo>/` будет отдаваться **сырой** корневой `index.html` из репо, а не сборка.

1. В репозитории: **Settings → Pages** (`https://github.com/<owner>/<repo>/settings/pages`).
2. **Build and deployment → Source:** выбери **GitHub Actions** (не ветку `main`).
3. Дождись зелёного прогона workflow после пуша в `main`.

## Переменные

- Корень: `VITE_YM_ID` — ID Яндекс.Метрики (опционально).
- `api/.env`: `YOOKASSA_*`, при необходимости `CORS_ORIGIN` для прод-домена.
