import { vitePlugin as remix } from "@remix-run/dev"
import { devServer } from "react-router-hono-server/dev"
import { remixDevTools } from "remix-development-tools"
import { defineConfig } from "vite"
import { iconsSpritesheet } from "vite-plugin-icons-spritesheet"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [
		devServer({

			exclude: [/^\/(resources)\/.+/],
		}),
		remixDevTools(),
		remix(),
		tsconfigPaths(),
		iconsSpritesheet({
			inputDir: "./resources/icons",
			outputDir: "./app/library/icon/icons",
			fileName: "icon.svg",
			withTypes: true,
		}),
	],
	build: {
		target: "esnext"
	},
	server: {
		open: true,
		port: 4280,
	},
})
