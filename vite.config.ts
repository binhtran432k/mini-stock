import build from "@hono/vite-build/cloudflare-workers";
import devServer, { defaultOptions } from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import { defineConfig, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [vue() as PluginOption],
      build: {
        rollupOptions: {
          input: "./src/client.ts",
          output: {
            entryFileNames: "static/client.js",
          },
        },
      },
    };
  } else {
    return {
      ssr: {
        external: ["vue"],
      },
      build: {
        copyPublicDir: false,
      },
      plugins: [
        build({
          outputDir: "dist-server",
          entry: "src/index.ts",
        }),
        devServer({
          adapter,
          entry: "src/index.ts",
          exclude: [
            ...defaultOptions.exclude,
            /.*\.vue?($|\?)/,
            /^\/(public|assets|static)\/.+/,
            /.*\.(s?css|less)($|\?)/,
            /.*\.(svg|png)($|\?)/,
          ],
        }),
        vue() as PluginOption,
      ],
    };
  }
});
