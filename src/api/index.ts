import { Hono } from "hono";

import { stocksApi } from "./stocks";

const api = new Hono();

api.route("/stocks", stocksApi);

api.get("*", (c) => c.notFound());

export { api };
