// src/worker/index.ts

import { Hono } from "hono";

// Empty Env interface — no env variables used
interface Env {}

const app = new Hono<{ Bindings: Env }>();

app.get("/", (c) => {
  return c.text("Hello from Buildtopia Vote Worker!");
});

export default app;