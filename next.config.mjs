/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        SESSION_PASSWORD: process.env.SESSION_PASSWORD
    },
};

export default nextConfig;
