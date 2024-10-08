import { generateSitemapIndex } from "@forge42/seo-tools/sitemap"
import type { LoaderFunctionArgs } from "@remix-run/node"
import { createDomain } from "~/utils/http"

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const domain = createDomain(request)
	const sitemaps = generateSitemapIndex([
		{
			url: `${domain}/sitemap/en.xml`,
			lastmod: "2024-07-17",
		},
		{
			url: `${domain}/sitemap/bs.xml`,
			lastmod: "2024-07-17",
		},
	])

	return new Response(sitemaps, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	})
}
