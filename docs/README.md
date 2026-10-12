# Synthetic Intelligence Education Platform

This repository contains a Phase 1 MVP for a Synthetic Intelligence (SI) education platform.

## Project status
- Basic backend API running
- Math expression solving working
- Topic detection working
- Basic front-end UI ready

## Setup

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Then open:
- http://localhost:3000

## Example problem
`x**2 + 5*x + 6 = 0`
