/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: false,

    async rewrites() {
        return [
            {
                source: '/app2',
                destination: `http://localhost:3002/app2`,
            },
            {
                source: '/app2/:path+',
                destination: `http://localhost:3002/app2/:path+`,
            }
        ];
    }
};

export default nextConfig;
