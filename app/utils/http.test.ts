import { describe, expect, it } from "vitest"
import { createDomain } from "./http"

describe("createDomain", () => {
	it("should handle proxy requests with forwarded proto and host", () => {
		const request = new Request("http://example.com", {
			headers: new Headers({
				"x-forwarded-proto": "https",
				"x-forwarded-host": "myapp.com",
			}),
		})

		expect(createDomain(request)).toBe("https://myapp.com")
	})

	it("should use URL host when behind proxy but missing host header", () => {
		const request = new Request("http://example.com", {
			headers: new Headers({
				"x-forwarded-proto": "https",
			}),
		})

		expect(createDomain(request)).toBe("https://example.com")
	})

	it("should handle localhost development environment", () => {
		const request = new Request("http://localhost:3000")

		expect(createDomain(request)).toBe("http://localhost:3000")
	})

	it("should default to https for production environment", () => {
		const request = new Request("http://myproduction.com")

		expect(createDomain(request)).toBe("https://myproduction.com")
	})
})
