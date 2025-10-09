/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.bangaloregastrocentre.com',
        pathname: '/sites/default/files/**',
      },
    ],
  },
};

export default nextConfig;
