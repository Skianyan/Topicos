/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fakestoreapi.com/**",
			},
			{
				protocol: "https",
				hostname: "dummyjson.com/**",
			},
			{
				protocol: "https",
				hostname: "i.dummyjson.com/**",
			},
		],
	},
};

module.exports = nextConfig;
