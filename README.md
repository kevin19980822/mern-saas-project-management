# Enterprise SaaS Project Management

A TypeScript MERN workspace and project management application.

## Features
- JWT authentication and password hashing
- Workspaces with owner/admin/member roles
- Projects, tasks, priorities, status workflows and comments
- Workspace dashboard metrics
- React + Vite interface
- MongoDB/Mongoose, Zod validation, Helmet and centralized errors

## Run locally
Requirements: Node.js 20+ and MongoDB 7+.
1. Copy .env.example to .env and set a random JWT_SECRET of at least 32 characters.
2. Run npm install.
3. Run npm run dev.
4. Open http://localhost:5173 (API: http://localhost:4000).

## API
Auth: POST /api/auth/register, POST /api/auth/login, GET /api/auth/me
Workspaces: GET/POST /api/workspaces, GET/POST /api/workspaces/:id/members
Projects: GET/POST /api/projects, GET/PATCH/DELETE /api/projects/:id
Tasks: GET/POST /api/tasks, PATCH/DELETE /api/tasks/:id, GET/POST /api/tasks/:id/comments
Dashboard: GET /api/dashboard?workspaceId=...

Protected endpoints require Authorization: Bearer <token>. Workspace access is checked server-side.

## Production hardening
Before real customer use, add rate limiting, email verification, password reset, audit logs, backups, monitoring, HTTPS, managed secrets and CI. This is a portfolio application and has not undergone an independent security audit.
