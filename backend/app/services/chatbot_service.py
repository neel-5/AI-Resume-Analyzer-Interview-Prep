from typing import Any


def answer_chat(message: str, context: dict[str, Any] | None = None) -> dict[str, Any]:
    context = context or {}
    lowered = message.lower()
    extracted = context.get("extracted_data") or {}
    missing_skills = (context.get("match_result") or {}).get("missing_skills", [])

    if "python" in lowered and "question" in lowered:
        answer = (
            "Here are three Python questions to practice: explain list vs tuple, write a function to remove duplicates "
            "while preserving order, and describe how generators help with large datasets."
        )
    elif "project" in lowered:
        answer = _project_advice(extracted)
    elif "improve" in lowered or "resume" in lowered:
        answer = _resume_advice(extracted, missing_skills)
    elif "sql" in lowered:
        answer = (
            "Practice joins, grouping, subqueries, window functions, and query optimization. Start with this: write a "
            "query that returns each department's top three salaries using DENSE_RANK."
        )
    else:
        answer = (
            "I can help you improve your resume, practice interview questions, tailor your resume to a job description, "
            "or choose stronger data science projects. Share a target role and I will guide you."
        )

    return {
        "answer": answer,
        "suggested_prompts": [
            "How do I improve my resume for data science internships?",
            "Ask me Python interview questions.",
            "What projects should I add for ML roles?",
        ],
    }


def _resume_advice(extracted: dict[str, Any], missing_skills: list[str]) -> str:
    skills = extracted.get("skills", [])
    skill_line = f"Your current detected skills are {', '.join(skills[:8])}. " if skills else ""
    missing_line = f"Add or demonstrate these target skills if relevant: {', '.join(missing_skills[:6])}. " if missing_skills else ""
    return (
        f"{skill_line}{missing_line}"
        "Use a three-line summary, quantify project impact, place technical skills near the top, and rewrite each project "
        "bullet as action + tech + result."
    )


def _project_advice(extracted: dict[str, Any]) -> str:
    projects = extracted.get("projects", [])
    if projects:
        return (
            "Your next improvement is to make every project read like an engineering case study: problem, dataset, "
            "approach, model/API, metric, and deployment. Add GitHub links and a short demo note where possible."
        )
    return (
        "Add two portfolio projects: one ML prediction project with evaluation metrics, and one full-stack analytics app "
        "with FastAPI, React, MySQL, and charts. That combination signals both data science and software engineering depth."
    )
