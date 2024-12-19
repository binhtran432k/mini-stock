import { reactive } from "vue";

interface DStock {
  id: string;
  amount: number;
}

interface DListResponse<T> {
  status: number;
  items?: T[];
}

interface DItemResponse<T> {
  status: number;
  item?: T;
}

interface StockStore {
  stocks: DStock[];
  fetchStocks: () => Promise<DListResponse<DStock>>;
  addStock: (id: string, amount: number) => Promise<DItemResponse<DStock>>;
  deductStock: (id: string, amount: number) => Promise<DItemResponse<DStock>>;
  queryStock: (id: string) => Promise<DItemResponse<DStock>>;
}

export const stockStore = reactive<StockStore>({
  stocks: [],
  async fetchStocks() {
    const res = await fetch("/api/stocks");
    const val = await res.json();

    this.stocks = val.items;

    return {
      status: res.status,
      items: val.items,
    };
  },
  async addStock(id, amount) {
    const res = await fetch(`/api/stocks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ action: "add", amount }),
    });

    if (!res.ok)
      return {
        status: res.status,
      };

    const val = await res.json();
    return {
      status: res.status,
      item: val.item,
    };
  },
  async deductStock(id, amount) {
    const res = await fetch(`/api/stocks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ action: "deduct", amount }),
    });

    if (!res.ok || res.status === 204)
      return {
        status: res.status,
      };

    const val = await res.json();
    return {
      status: res.status,
      item: val.item,
    };
  },
  async queryStock(id) {
    const res = await fetch(`/api/stocks/${id}`);

    if (!res.ok)
      return {
        status: res.status,
      };

    const val = await res.json();
    return {
      status: res.status,
      item: val.item,
    };
  },
});
