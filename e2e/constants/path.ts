const rootPath = process.env.BASE_URL ?? "http://localhost:8787";

export const MyPath = {
  page: {
    stock: `${rootPath}`,
  },
  api: {
    stocks: `${rootPath}/api/stocks`,
  },
} as const;
