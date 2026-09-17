# SkillGraph

SkillGraph is a web application that helps students map their current skills to a career goal, identify skill gaps, and build a learning roadmap.

The project was developed collaboratively for DevHack 2026.

## Features

- Student profile setup
- Career goal selection
- Built-in career paths:
  - Frontend Developer
  - Backend Developer
  - Full-Stack Developer
  - Data Scientist
  - AI / ML Engineer
  - DevOps Engineer
- Custom career goals
- Skill assessment
- Skill gap analysis
- Learning roadmap
- Learning resources
- Progress tracking
- AI-powered learning plan
- MongoDB database persistence
- User session persistence across browser refreshes
- REST API based backend

## Tech Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- MongoDB
- MongoDB Atlas
- Mongoose

### Other

- Git
- GitHub
- GitHub Pull Requests
- dotenv

## Project Structure

```text
SkillGraph/
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── config/
│   └── db.js
│
├── models/
│   └── User.js
│
├── data/
│   ├── goals.js
│   ├── skills.js
│   ├── aiPresets.js
│   └── resources.js
│
├── routes/
│   ├── goalRoutes.js
│   ├── skillRoutes.js
│   ├── userRoutes.js
│   ├── aiRoutes.js
│   └── resourcesRoutes.js
│
├── utils/
│   └── skillUtils.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## How It Works

1. A student enters their basic information.
2. SkillGraph creates a user profile.
3. The selected career goal determines the relevant skills.
4. The student can assess their existing skills.
5. SkillGraph compares their skills with the selected career path.
6. The application calculates their skill gaps and progress.
7. A roadmap and learning resources help guide their learning.
8. The AI planner can generate a learning plan based on the selected goal.
9. User information and progress are stored through the backend and MongoDB.

## API

The backend provides REST APIs for working with users, goals, skills, progress, AI plans, and learning resources.

Main user endpoints include:

```text
POST   /api/users
GET    /api/users
GET    /api/users/:userId
PUT    /api/users/:userId/profile
PUT    /api/users/:userId/goal
PUT    /api/users/:userId/skills
GET    /api/users/:userId/progress
```

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/SwatiManjari/SkillGraph.git
cd SkillGraph
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create the environment file

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Do not commit the `.env` file to GitHub.

### 4. Start the server

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## Database

SkillGraph uses MongoDB Atlas for persistent user data.

User information such as:

- Name
- College
- Semester
- Career goal
- Selected skills

is stored in MongoDB through Mongoose.

The application also stores the user's ID in browser local storage so that the session can be restored after a page refresh.

## Development

The project is developed using Git and GitHub with separate branches and pull requests for major changes.

Example workflow:

```text
main
  ↑
Pull Request
  ↑
feature / backend branch
```

Changes are tested locally before being merged into `main`.

## Current Status

SkillGraph currently has:

- Frontend interface
- Express backend
- REST APIs
- MongoDB persistence
- User session restoration
- Career goal system
- Skill assessment
- Skill gap analysis
- Roadmap
- Learning resources
- AI planner

The project is currently being prepared for deployment.

## Contributors

Developed collaboratively for DevHack 2026.

## License

This project is for educational and hackathon purposes.
