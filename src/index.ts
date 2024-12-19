import { Hono } from "hono";
import { ZodError } from "zod";

import { routes } from "./routes";

const app = new Hono();

routes(app);

app.onError((error, c) => {
  if (error instanceof ZodError) {
    return c.json({ error, message: error.message }, { status: 403 });
  }

  console.error(`${error}`);
  return c.json(
    { error, message: error.message || "Custom Error Message" },
    500,
  );
});

app.notFound((c) => {
  console.error(`not found${c}`);
  return c.json({ status: 404, message: "Not Found" }, 404);
});

export default {
  ...app,
  port: process.env.PORT,
};
