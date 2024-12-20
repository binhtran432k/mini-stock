import { MyPath } from "../constants/path";

export async function resetStock(id: string, amount?: number) {
  const res = await fetch(MyPath.api.stocks + "/" + id, { method: "DELETE" });
  if (amount) {
    const addRes = await fetch(MyPath.api.stocks + "/" + id, {
      method: "PATCH",
      body: JSON.stringify({ action: "add", amount }),
    });
    return addRes.status === 200;
  } else {
    return res.status === 204;
  }
}
