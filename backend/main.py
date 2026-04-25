from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import members

app = FastAPI(title="Protocol Zero API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Register routers ──────────────────────────────────────────────────────────
app.include_router(members.router, prefix="/members", tags=["Members"])


@app.get("/", tags=["Health"])
def root():
    return {"status": "Protocol Zero API is online 🟢"}
