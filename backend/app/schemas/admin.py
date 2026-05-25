from datetime import datetime

from pydantic import BaseModel, EmailStr


class AdminUserRead(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    phone: str | None
    role: str
    is_active: bool
    created_at: datetime
    analysis_count: int


class AdminStats(BaseModel):
    total_users: int
    total_analyses: int
    average_ats_score: float
    average_match_percentage: float
    recent_activity: list[dict[str, int | str]]
