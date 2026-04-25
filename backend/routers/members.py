from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
import json, os

router = APIRouter()

DB_FILE = "members.json"

# ── DB helpers ────────────────────────────────────────────────────────────────
def load_members() -> List[dict]:
    if not os.path.exists(DB_FILE):
        return []
    with open(DB_FILE, "r") as f:
        return json.load(f)

def save_members(members: List[dict]):
    with open(DB_FILE, "w") as f:
        json.dump(members, f, indent=2)

# ── Schemas ───────────────────────────────────────────────────────────────────
class MemberIn(BaseModel):
    name: str
    email: str
    year: str
    branch: str
    linkedin: str        # mandatory
    hackerrank: str      # mandatory
    leetcode: str        # mandatory
    reason: Optional[str] = ""

class MemberOut(MemberIn):
    id: int
    joined_at: str

# ── Routes ────────────────────────────────────────────────────────────────────
@router.post("/join", response_model=MemberOut, status_code=201)
def join_club(member: MemberIn):
    """Register a new club member."""
    members = load_members()
    for m in members:
        if m["email"].lower() == member.email.lower():
            raise HTTPException(status_code=409, detail="Email already registered.")
    new_member = {
        "id": len(members) + 1,
        "joined_at": datetime.utcnow().isoformat() + "Z",
        **member.model_dump(),
    }
    members.append(new_member)
    save_members(members)
    return new_member

@router.get("", response_model=List[MemberOut])
def get_members():
    """Fetch all registered members."""
    return load_members()
