import { generateRobotsTxt } from "@forge42/seo-tools/robots"
import type { LoaderFunctionArgs } from "@remix-run/node"
import { createDomain } from "~/utils/http"

export async function loader({ request }: LoaderFunctionArgs) {
	const isProductionDeployment = process.env.DEPLOYMENT_ENV === "production"
	const domain = createDomain(request)
	const robotsTxt = generateRobotsTxt([
		{
			userAgent: "*",
			[isProductionDeployment ? "allow" : "disallow"]: ["/"],
			sitemap: [`${domain}/sitemap-index.xml`],
		},
	])
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain",
		},
	})
}
