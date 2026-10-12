from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from app.services.solver_service import solve_math_expression
from app.services.topic_service import detect_topic

app = FastAPI(title="Synthetic Intelligence Education API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "ok", "message": "Synthetic Intelligence API is running."}


@app.post("/api/problems/solve")
async def solve_problem(
    expression: str | None = Form(default=None),
    file: UploadFile | None = File(default=None),
):
    raw_text = ""

    if file is not None:
        uploaded_bytes = await file.read()
        raw_text = uploaded_bytes.decode("utf-8", errors="ignore").strip()
    elif expression is not None:
        raw_text = expression.strip()

    if not raw_text:
        return {"error": "No problem provided."}

    result = solve_math_expression(raw_text)
    topic = detect_topic(raw_text)

    return {
        "raw_text": raw_text,
        "topic": topic,
        "solution": result,
    }
