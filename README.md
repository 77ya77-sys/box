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

Единая и рекомендуемая схема (без ручных переключений):

1. `Settings → Pages → Source: Deploy from a branch`
2. `Branch: main`, `Folder: /docs`
3. Workflow `Deploy to GitHub Pages` на каждом пуше в `main`:
   - собирает проект с `VITE_BASE=/<repo>/`;
   - копирует `dist/` в `docs/`;
   - пушит обновлённую статику в `main`.

Важно: для Source `main/docs` URL сайта должен быть вида `https://<user>.github.io/<repo>/`, а не `.../<repo>/docs/`.

## Боевое окружение (VPS/nginx)

- Сборка: `npm run build`
- Публикация: содержимое `dist/` раздаёт nginx как статику
- API: `location /api` проксируется на Node-процесс из `api/`
- Для VPS не задавайте `VITE_BASE` (по умолчанию `/`)

## Переменные

- Корень: `VITE_YM_ID` — ID Яндекс.Метрики (опционально).
- `api/.env`: `YOOKASSA_*`, при необходимости `CORS_ORIGIN` для прод-домена.
