import { Hono } from "hono";

const stocks = new Hono();

stocks.get("/", (c) => c.json({ message: "List stocks" }));

stocks.get("/:id", (c) => {
  const id = c.req.param("id");
  return c.json({ message: "Get stock: " + id });
});

stocks.put("/:id", (c) => c.json({ message: "Create stock" }));

export { stocks };
