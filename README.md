# HireSense AI - Resume Analyzer & Interview Preparation Assistant

**HireSense AI** is a production-style full-stack AI portfolio project for resume parsing, ATS scoring, job-description matching, AI suggestions, interview preparation, chatbot guidance, analytics, authentication, history, and admin usage monitoring.

Built by **Param Saxena**  
Phone: `9810363542`  
Email: `param5saxena@gmail.com`

## Preview

Add final screenshots in `docs/screenshots/` before publishing:

| Landing | Dashboard | Resume Analysis |
| --- | --- | --- |
| `docs/screenshots/landing-page.png` | `docs/screenshots/dashboard.png` | `docs/screenshots/resume-analysis.png` |

## Features

- PDF/DOCX resume upload and parsing
- Extracted candidate profile: name, skills, education, experience, projects, certifications, contact details
- Job-description matching with semantic similarity, missing skills, strong skills, and keyword gaps
- ATS-style score out of 100 with detailed score breakdown
- AI-style resume improvement suggestions and stronger project bullet guidance
- Interview question generation for HR, technical, projects, SQL, Python, and data science/ML
- Context-aware chatbot for resume and interview preparation
- Dashboard analytics with Chart.js visualizations
- Signup/login with JWT authentication and bcrypt password hashing
- MySQL-backed analysis history
- Admin dashboard for users, usage stats, and activity analytics

## Tech Stack

**Frontend**

- React.js
- Tailwind CSS
- Framer Motion
- Chart.js / react-chartjs-2
- lucide-react

**Backend**

- FastAPI
- SQLAlchemy
- JWT auth
- MySQL

**AI/NLP & File Processing**

- spaCy-ready parsing flow
- scikit-learn TF-IDF and cosine similarity
- sentence-transformers semantic similarity
- transformers dependency included for extensibility
- PyPDF2, pdfplumber, python-docx
- OpenAI dependency included as optional extension

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

### 1. Clone and enter the project

```bash
git clone https://github.com/your-username/hiresense-ai.git
cd hiresense-ai
```

### 2. Start MySQL

With Docker:

```bash
docker compose up -d mysql
```

Or create the database manually:

```bash
mysql -u root -p < database/schema.sql
```

### 3. Backend setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
uvicorn app.main:app --reload
```

Backend runs at `http://localhost:8000`.

FastAPI docs:

```text
http://localhost:8000/docs
```

### 4. Frontend setup

Open a second terminal:

```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Frontend runs at `http://localhost:5173`.

## Environment Variables

Backend `backend/.env`:

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
SENTENCE_TRANSFORMER_MODEL=all-MiniLM-L6-v2
```

Frontend `frontend/.env`:

```env
VITE_API_URL=http://localhost:8000/api
```

## Admin Access

The first account created with `ADMIN_EMAIL=param5saxena@gmail.com` receives the `admin` role automatically.

Recommended demo password while testing locally:

```text
Param@12345
```

## API Documentation

See [docs/API.md](docs/API.md) or run the backend and open:

```text
http://localhost:8000/docs
```

## Sample Data

Use these files to test the pipeline:

- [sample_data/sample_resume.txt](sample_data/sample_resume.txt)
- [sample_data/sample_job_description.txt](sample_data/sample_job_description.txt)
- [sample_data/sample_analysis.json](sample_data/sample_analysis.json)

For actual upload testing, export the sample resume text to PDF or DOCX.

## GitHub Publishing Checklist

- Add screenshots to `docs/screenshots/`
- Update the repository URL in this README after creating the GitHub repo
- Keep `.env` files private
- Confirm MySQL credentials match `backend/.env`
- Run backend and frontend build checks
- Create the admin account with the configured developer email

## Production Notes

- Replace `SECRET_KEY` with a long random value
- Use managed MySQL in production
- Restrict CORS to the deployed frontend domain
- Store uploaded resumes in object storage for deployed environments
- Add Alembic migrations if the database schema will evolve
- Add rate limiting and background jobs for heavier AI workloads

## License

This project is licensed under the MIT License.
