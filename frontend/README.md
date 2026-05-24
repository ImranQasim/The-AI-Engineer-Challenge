# AI Coach Frontend

Next.js App Router dashboard for the AI Engineer Challenge. It shares a layout shell across `/dashboard`, `/chat`, and `/settings`.

## Run locally

From the project root, start the FastAPI backend:

```bash
export OPENAI_API_KEY=sk-your-key
uv run uvicorn api.index:app --reload
```

In another terminal, start the frontend:

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/dashboard`.

## Project structure

```
app/
  (dashboard)/layout.tsx    # Shared dashboard shell
  (dashboard)/dashboard/    # Overview + stat cards
  (dashboard)/chat/         # Chat UI (calls app/api/chat/route.ts)
  (dashboard)/settings/     # Settings (starter)
components/
  dashboard/                # Sidebar, header, stat cards, shell
  ui/                       # Card, Button primitives
lib/
  dashboard-nav.ts          # Nav config
  utils.ts                  # cn() helper
types/
  chat.ts                   # Shared request/response shapes
```

## Build for production

```bash
cd frontend
npm run build
npm start
```
