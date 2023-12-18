/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './pages/my-loader.js',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.quantech.id',
                port: '',
                pathname: '/storage/**',
            },
        ],
    },    trailingSlash: true,
};

module.exports = nextConfig;
