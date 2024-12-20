import { Hono } from "hono";
import { z } from "zod";

const Stock = z.object({
  action: z.enum(["add", "deduct"]),
  amount: z.number().min(1),
});

interface DStock {
  id: string;
  amount: number;
}

const stocksApi = new Hono();

const state: { db: { [id: string]: DStock } } = {
  db: {},
};

stocksApi.get("/", (c) => c.json({ items: Object.values(state.db) }));

stocksApi.get("/:id", (c) => {
  const id = c.req.param("id");

  const stock = state.db[id];
  if (!stock) return c.notFound();

  return c.json({ item: stock });
});

stocksApi.patch("/:id", async (c) => {
  const id = c.req.param("id");

  const json = await c.req.json();

  const reqStock = Stock.parse(json);
  if (reqStock.action === "add") {
    if (!state.db[id]) state.db[id] = { id, amount: 0 };

    const stock = state.db[id];
    stock.amount += reqStock.amount;

    return c.json({ item: stock });
  } else if (reqStock.action === "deduct") {
    if (!state.db[id]) return c.notFound();

    const stock = state.db[id];
    stock.amount -= reqStock.amount;

    if (state.db[id].amount <= 0) {
      delete state.db[id];
      return c.body(null, 204);
    }

    return c.json({ item: stock });
  }
});

stocksApi.delete("/:id", (c) => {
  const id = c.req.param("id");

  if (!state.db[id]) return c.notFound();

  delete state.db[id];

  return c.body(null, 204);
});

export { stocksApi };
