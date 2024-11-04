/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'assets.aceternity.com',
            'vercel.live',
        ],
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.map$/,
            exclude: /node_modules\/chrome-aws-lambda\/build\/puppeteer\/lib\/Page\.js\.map/,
            use: 'ignore-loader',
        });

        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                child_process: false,
                net: false,
                tls: false,
            };
        }
        return config;
    },
};

export default nextConfig;
