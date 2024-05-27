import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools";
import { routes } from "./remix/config";
import { iconsSpritesheet } from "vite-plugin-icons-spritesheet";

export default defineConfig({
  plugins: [
    remixDevTools({
      unstable_console: true,
    }),
    remix({ routes }),
    iconsSpritesheet({
      inputDir: "./resources/icons",
      outputDir: "./app/library/icon/icons",
      withTypes: true,
      fileName: "icon.svg",
    }),
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
