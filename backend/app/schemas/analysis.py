from datetime import datetime
from typing import Any

from pydantic import BaseModel, Field


class ResumeParseResponse(BaseModel):
    filename: str
    raw_text: str
    extracted_data: dict[str, Any]


class JDMatchRequest(BaseModel):
    resume_text: str = Field(..., min_length=20)
    job_description: str = Field(..., min_length=20)
    extracted_data: dict[str, Any] | None = None


class AnalysisResponse(BaseModel):
    history_id: int | None = None
    filename: str | None = None
    extracted_data: dict[str, Any]
    match_result: dict[str, Any]
    ats_score: int
    score_breakdown: dict[str, Any]
    suggestions: dict[str, Any]
    interview_questions: dict[str, Any]


class HistoryRead(BaseModel):
    id: int
    resume_filename: str
    job_description: str | None = None
    extracted_data: dict[str, Any]
    match_result: dict[str, Any]
    score_breakdown: dict[str, Any]
    ats_score: int
    suggestions: dict[str, Any]
    interview_questions: dict[str, Any]
    created_at: datetime

    model_config = {"from_attributes": True}


class InterviewRequest(BaseModel):
    resume_text: str | None = None
    extracted_data: dict[str, Any] | None = None
    focus_area: str | None = None


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=2, max_length=1200)
    context: dict[str, Any] | None = None


class ChatResponse(BaseModel):
    answer: str
    suggested_prompts: list[str]
