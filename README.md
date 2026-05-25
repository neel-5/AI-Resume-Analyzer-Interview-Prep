# HireSense AI - Resume Analyzer & Interview Preparation Assistant

**HireSense AI** is a production-style full-stack AI portfolio project for resume parsing, ATS scoring, job-description matching, AI suggestions, interview preparation, chatbot guidance, analytics, authentication, history, and admin usage monitoring.

Built by **Param Saxena**  
Email: param5saxena@gmail.com
LinkedIn: https://www.linkedin.com/in/param-saxena-050905ps/

## Preview

| Landing | Dashboard |
|--------|----------|
| ![](docs/screenshots/landing-page.png.png) | ![](docs/screenshots/dashboard.png.png) |

| Resume Analysis | JD Match |
|----------------|----------|
| ![](docs/screenshots/resume-analysis.png.png) | ![](docs/screenshots/jd-match.png.png) |

| Interview Assistant | Chatbot | Admin Dashboard |
|-------------------|---------|----------------|
| ![](docs/screenshots/interview-assistant.png.png) | ![](docs/screenshots/chatbot.png.png) | ![](docs/screenshots/admin-dashboard.png.png) |

## Features

- PDF/DOCX resume upload and parsing
- Extracted candidate profile: name, skills, education, experience, projects, certifications, contact details
- Job-description matching with semantic similarity, missing skills, strong skills, and keyword gaps
- ATS-style score out of 100 with detailed score breakdown
- AI-style resume improvement suggestions and stronger project bullet guidance
- Interview question generation for HR, technical, projects, SQL, Python, and data science/ML
- Context-aware chatbot for resume and interview preparation
- Dashboard analytics with Chart.js visualizations
- Signup/login with JWT authentication and secure password hashing
- MySQL-backed analysis history
- Admin dashboard for users, usage stats, and activity analytics

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- Chart.js / react-chartjs-2
- lucide-react

### Backend
- FastAPI
- SQLAlchemy
- JWT auth
- MySQL

### AI/NLP & File Processing
- spaCy-ready parsing flow
- scikit-learn TF-IDF and cosine similarity
- sentence-transformers semantic similarity
- transformers dependency included for extensibility
- PyPDF2
- pdfplumber
- python-docx
- OpenAI optional integration

## Folder Structure

```text
HireSense AI - Resume Analyzer & Interview Prep Assistant/
|-- backend/
|   |-- app/
|   |   |-- api/
|   |   |-- core/
|   |   |-- db/
|   |   |-- models/
|   |   |-- schemas/
|   |   |-- services/
|   |   `-- main.py
|   |-- storage/uploads/
|   |-- tests/
|   |-- .env.example
|   `-- requirements.txt
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- api/
|   |   |-- components/
|   |   |-- context/
|   |   |-- data/
|   |   |-- layouts/
|   |   |-- pages/
|   |   |-- routes/
|   |   `-- utils/
|   |-- .env.example
|   `-- package.json
|-- database/
|   |-- schema.sql
|   `-- sample_seed.sql
|-- docs/
|   |-- API.md
|   `-- screenshots/
|-- sample_data/
|-- docker-compose.yml
|-- .gitignore
|-- LICENSE
`-- README.md
```

## Quick Start

### Clone Repository

```bash
git clone https://github.com/neel-5/AI-Resume-Analyzer-Interview-Prep.git
cd AI-Resume-Analyzer-Interview-Prep
```

### Backend Setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
uvicorn app.main:app --reload
```

Backend:
```text
http://localhost:8000
```

API Docs:
```text
http://localhost:8000/docs
```

### Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Frontend:
```text
http://localhost:5173
```

## Environment Variables

Backend `.env`

```env
APP_NAME=HireSense AI API
DATABASE_URL=mysql+pymysql://root:password@localhost:3306/hiresense_ai
SECRET_KEY=change-this-to-a-long-random-secret
ACCESS_TOKEN_EXPIRE_MINUTES=1440
FRONTEND_ORIGIN=http://localhost:5173
ADMIN_EMAIL=param5saxena@gmail.com
UPLOAD_DIR=storage/uploads
OPENAI_API_KEY=
ENABLE_OPENAI=false
```

Frontend `.env`

```env
VITE_API_URL=http://localhost:8000/api
```

## Admin Access

First account created with:

```text
param5saxena@gmail.com
```

gets automatic admin access.

Demo password:

```text
Param@12345
```

## API Documentation

See:

```text
docs/API.md
```

or:

```text
http://localhost:8000/docs
```

## Sample Test Files

Located in:

- sample_data/sample_resume.txt
- sample_data/sample_job_description.txt
- sample_data/sample_analysis.json

## Production Notes

- Replace SECRET_KEY
- Use production MySQL
- Restrict CORS
- Store uploads in object storage
- Add migrations
- Add rate limiting

## License

MIT License
