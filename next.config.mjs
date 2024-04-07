const redirects = [
{
    source: '/',
    destination: 'https://map.andrewevans.us/',
    permanent: true,
},
// Add more redirect rules as needed
];

const nextConfig = {
async redirects() {
    return redirects;
},
};

export default nextConfig;
