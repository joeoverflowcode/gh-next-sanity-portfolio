/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          },
        ],
      },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   basePath: "/nextjs-github-pages",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;