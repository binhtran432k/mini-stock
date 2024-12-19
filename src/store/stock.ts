import { reactive } from "vue";

interface DStock {
  id: string;
  amount: number;
}

interface StockStore {
  stocks: DStock[];
  fetchStocks: () => Promise<DStock[]>;
  addStock: (id: string, amount: number) => Promise<DStock>;
}

export const stockStore = reactive<StockStore>({
  stocks: [],
  async fetchStocks() {
    const res = await fetch("/api/stocks");
    const val = await res.json();

    this.stocks = val.items;

    return this.stocks;
  },
  async addStock(id, amount) {
    const res = await fetch(`/api/stocks/${id}`, {
      method: "PUT",
      body: JSON.stringify({ amount }),
    });
    const val = await res.json();
    return val.item;
  },
});
