# Enterprise SaaS Project Management

A TypeScript-first MERN project management platform designed around multi-tenant workspaces, teams, projects, tasks, and role-based access control.

## Stack
- React + TypeScript client (planned)
- Node.js, Express, TypeScript API
- MongoDB + Mongoose
- JWT authentication, Zod validation
- Socket.IO for live updates (planned)

## Getting started
1. Install Node.js 20+ and MongoDB.
2. Copy `.env.example` to `.env` and set `MONGODB_URI` and `JWT_SECRET`.
3. Run `npm install`.
4. Run `npm run dev`.

## Current implementation
This repository is the initial API foundation. Domain modules, authorization policies, tests, and the React application will be added in subsequent commits.

## Engineering priorities
Tenant isolation is enforced at the service/query boundary; secrets are environment-based; API inputs are validated; errors are handled centrally.
