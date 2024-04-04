import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools";
import { routes } from "./remix/config";

export default defineConfig({
  plugins: [
    remixDevTools({
      pluginDir: "./rdt-plugins",
      unstable_console: true,
    }),
    remix({ routes }),
    tsconfigPaths(),
  ],
  ssr: {
    noExternal: ["remix-i18next"],
  },
  server: {
    open: true,
    port: 3000,
  },
});
