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

## GitHub Pages

Источник **Deploy from a branch → `main` → `/` (root)** поддерживается без ручных переключений на «GitHub Actions»:

- корневой `index.html` на **dev** грузит Vite (`127.0.0.1:5173` и т.п.);
- на **github.io** редиректит в **`./docs/`**, где лежит статика из `dist` (обновляет workflow `Deploy to GitHub Pages` после каждого пуша в `main`).

Если в Settings выбран **только каталог `/docs`** без корня, редирект с корня не используется — оставь тогда один источник `/docs` и тот же workflow.

## Переменные

- Корень: `VITE_YM_ID` — ID Яндекс.Метрики (опционально).
- `api/.env`: `YOOKASSA_*`, при необходимости `CORS_ORIGIN` для прод-домена.
