// next.config.mjs

const redirects = [
{
    source: '/(.*)',
    destination: 'https://map.andrewevans.us/$1',
    permanent: true,
},
];

const nextConfig = {
async redirects() {
    return redirects;
},
};

export default nextConfig;
