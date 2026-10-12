# Synthetic Intelligence Education Platform

This repository contains the initial MVP for a Synthetic Intelligence (SI) education platform focused on education and learning support.

## Phase 1: Math problem solver MVP

The MVP currently supports:
- typed math input
- solving simple equations
- topic detection
- a basic web UI

## Tech stack
- Frontend: Next.js
- Backend: FastAPI
- Solver: SymPy
- Database: PostgreSQL (planned)
- OCR: Tesseract/EasyOCR (planned)
- AI explanation: OpenAI/Gemini (planned)

## Structure
- `backend/` - API and solver logic
- `frontend/` - web interface
- `docs/` - architecture and planning notes

## Quick start

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

### Example request

```bash
curl -X POST "http://localhost:8000/api/problems/solve" \
  -F "expression=x**2 + 5*x + 6 = 0"
```

## Roadmap
1. Math solve MVP
2. Topic detection and learning path
3. OCR image input
4. AI explanation and tutoring
5. Video generation and simulations
6. Virtual lab and analytics

## License
MIT
