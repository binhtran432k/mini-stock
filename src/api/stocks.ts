import { Hono } from "hono";
import { z } from "zod";

const Stock = z.object({ amount: z.number().min(1) });

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

stocksApi.put("/:id", async (c) => {
  const id = c.req.param("id");

  const json = await c.req.json();

  const addStock = Stock.parse(json);

  if (!state.db[id]) state.db[id] = { id, amount: 0 };

  const stock = state.db[id];
  stock.amount += addStock.amount;

  return c.json(stock);
});

export { stocksApi };
