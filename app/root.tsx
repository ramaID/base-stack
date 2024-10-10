import type { LinksFunction } from "@remix-run/node"
import { type LoaderFunctionArgs, json } from "@remix-run/node"
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react"
import { useTranslation } from "react-i18next"
import { useChangeLanguage } from "remix-i18next/react"
import { LanguageSwitcher } from "./library/language-switcher"
import tailwindcss from "./tailwind.css?url"

export async function loader({ context: { lang, clientEnv } }: LoaderFunctionArgs) {
	return json({ lang, clientEnv })
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: tailwindcss }]

export const handle = {
	i18n: "common",
}

export default function App() {
	const { lang, clientEnv } = useLoaderData<typeof loader>()
	const { i18n } = useTranslation()
	useChangeLanguage(lang)

	return (
		<html className="overflow-y-auto overflow-x-hidden" lang={lang} dir={i18n.dir()}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="w-full h-full">
				<LanguageSwitcher />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: We set the window.env variable to the client env */}
				<script dangerouslySetInnerHTML={{ __html: `window.env = ${JSON.stringify(clientEnv)}` }} />
			</body>
		</html>
	)
}
