# Deployment Guide

This guide walks you through deploying the AI Coach application with **separate deployments** for the Python API and Next.js frontend on Vercel.

## Architecture Overview

```
┌─────────────────────┐         ┌──────────────────────┐
│   Next.js Frontend  │────────▶│   Python API (FastAPI)│
│  (Main Dashboard)   │  HTTP   │   (OpenAI Proxy)      │
│  Vercel Deployment  │         │   Vercel Deployment   │
└─────────────────────┘         └──────────────────────┘
         │
         │ User visits
         ▼
    https://your-app.vercel.app
```

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

---

## Part 1: Deploy Python API (Backend)

### Step 1: Create New Vercel Project for API

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. **IMPORTANT:** Configure the project:
   - **Framework Preset:** Other
   - **Root Directory:** Click "Edit" → Select **`api`** directory
   - **Build Command:** Leave empty or use default
   - **Output Directory:** Leave empty

### Step 2: Configure API Environment Variables

In the Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add the following variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (starts with `sk-...`)
   - **Environment:** All (Production, Preview, Development)

### Step 3: Deploy API

1. Click **"Deploy"**
2. Wait for deployment to complete
3. Copy your API URL (e.g., `https://your-api.vercel.app`)
4. Test it by visiting: `https://your-api.vercel.app/`
   - You should see: `{"status": "ok"}`

**✅ API Deployed Successfully!**

---

## Part 2: Deploy Next.js Frontend (Dashboard)

### Step 1: Create New Vercel Project for Frontend

1. In Vercel, click **"Add New Project"** again
2. Import the **same GitHub repository** (yes, the same repo!)
3. **IMPORTANT:** Configure the project:
   - **Framework Preset:** Next.js
   - **Root Directory:** Keep as **`.`** (root) - Vercel will automatically detect the `frontend` directory from `vercel.json`
   - **Build Command:** Auto-detected (uses vercel.json configuration)
   - **Output Directory:** Auto-detected (uses vercel.json configuration)

### Step 2: Configure Frontend Environment Variables

In the Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add the following variable:
   - **Name:** `API_BASE_URL`
   - **Value:** Your deployed API URL from Part 1 (e.g., `https://your-api.vercel.app`)
   - **Environment:** All (Production, Preview, Development)

> **Note:** Do NOT include a trailing slash in the URL

### Step 3: Deploy Frontend

1. Click **"Deploy"**
2. Wait for deployment to complete
3. Visit your frontend URL (e.g., `https://your-dashboard.vercel.app`)
4. You should be redirected to `/dashboard`

**✅ Frontend Deployed Successfully!**

---

## Part 3: Verify Everything Works

### Test the Full Stack

1. Open your frontend URL
2. Navigate to **Chat** page
3. Send a message
4. You should receive a response from the AI coach

### Troubleshooting

#### Frontend shows "Failed to reach backend" error

**Check:**
- API deployment is successful and running
- `API_BASE_URL` environment variable is set correctly in frontend
- API URL doesn't have a trailing slash
- CORS is enabled in the API (already configured in `api/index.py`)

**Solution:**
```bash
# Verify API is accessible
curl https://your-api.vercel.app/
# Should return: {"status":"ok"}
```

#### API returns "OPENAI_API_KEY not configured" error

**Check:**
- `OPENAI_API_KEY` is set in the API's Vercel environment variables
- The key is valid and has credits

**Solution:**
1. Go to API project → Settings → Environment Variables
2. Verify `OPENAI_API_KEY` exists
3. Redeploy the API after adding the variable

#### Build fails for frontend

**Check:**
- `vercel.json` at root is correctly configured
- `frontend/package.json` exists
- No syntax errors in TypeScript files

**Solution:**
```bash
# Test build locally first
cd frontend
npm install
npm run build
```

---

## Environment Variables Summary

### API Deployment (`api` directory)
| Variable | Value | Required |
|----------|-------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | ✅ Yes |

### Frontend Deployment (root)
| Variable | Value | Required |
|----------|-------|----------|
| `API_BASE_URL` | Your deployed API URL | ✅ Yes |

---

## Updating Your Deployment

### Update API
1. Push changes to your GitHub repository
2. Vercel automatically redeploys the API

### Update Frontend
1. Push changes to your GitHub repository
2. Vercel automatically redeploys the frontend

---

## Local Development

### Run API Locally
```bash
cd api
export OPENAI_API_KEY=sk-your-key
uv run uvicorn index:app --reload
# API runs on http://localhost:8000
```

### Run Frontend Locally
```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:3000
# Automatically connects to localhost:8000 for API
```

---

## Cost Considerations

- **Vercel Hosting:** Free tier supports both deployments
- **OpenAI API:** Pay per usage
  - Model used: `gpt-4o-mini` (cost-effective)
  - Approximate cost: $0.15 per 1M input tokens, $0.60 per 1M output tokens

---

## Security Notes

### ✅ Already Implemented
- API keys stored as environment variables (not in code)
- `.env` files in `.gitignore`
- CORS properly configured

### 🔒 Production Recommendations
1. **Restrict CORS:** Update `api/index.py` line 15 to allow only your frontend domain:
   ```python
   allow_origins=["https://your-dashboard.vercel.app"],
   ```

2. **Rate Limiting:** Consider adding rate limiting to prevent abuse

3. **API Key Rotation:** Rotate your OpenAI API key periodically

---

## Need Help?

- **Vercel Documentation:** https://vercel.com/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **FastAPI Documentation:** https://fastapi.tiangolo.com

---

**🎉 Congratulations!** Your AI Coach application is now deployed and accessible to the world!
