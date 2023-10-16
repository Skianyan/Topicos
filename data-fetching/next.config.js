/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
				pathname: "/image/**",
			},
		],
	},
};

module.exports = nextConfig;
