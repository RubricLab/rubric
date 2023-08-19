/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ['@rubriclab/ui'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: ''
			}
		]
	}
}
export default nextConfig
