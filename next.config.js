/** @type {import('next').NextConfig} */
const config = {
	utput: "export",
	images: {
		remotePatterns: [
			{
				hostname: "*",
			},
		],
	},
	experimental: {
		typedRoutes: false,
	},
};

export default config;
