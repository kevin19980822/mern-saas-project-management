import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";

const app = express();
app.disable("x-powered-by");
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN ?? "http://localhost:5173" }));
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", service: "saas-project-management-api" });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: { code: "NOT_FOUND", message: "Route not found" } });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: { code: "INTERNAL_ERROR", message: "Unexpected server error" } });
});

const port = Number(process.env.PORT ?? 4000);
async function start(): Promise<void> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is required");
  await mongoose.connect(uri);
  app.listen(port, () => console.log(`API listening on :${port}`));
}

if (require.main === module) {
  start().catch((error: unknown) => {
    console.error("Failed to start API", error);
    process.exit(1);
  });
}

export { app };
