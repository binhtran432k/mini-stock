import { Hono } from "hono";

import { stocks } from "./stocks";

const api = new Hono();

api.route("/stocks", stocks);

api.get("*", (c) => c.notFound());

export { api };
