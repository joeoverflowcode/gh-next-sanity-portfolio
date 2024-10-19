/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // GitHub Pages requires static export
  basePath: "/gh-next-sanity-portfolio",
  images: {
    unoptimized: true, // GitHub Pages doesn't support optimized images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  // Exclude the /admin route from static export
  async exportPathMap(defaultPathMap) {
    const pathMap = { ...defaultPathMap };
    delete pathMap['/admin/[[...index]]']; // Exclude the admin route
    return pathMap;
  },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   basePath: "/gh-next-sanity-portfolio", // Base path for GitHub Pages deployment
//   images: {
//     unoptimized: true, // Required for GitHub Pages since it doesn’t support Next.js image optimization
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io', // Allow images from Sanity's CDN
//         port: '',
//       },
//     ],
//   },
// };



// export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {

//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'cdn.sanity.io',
//             port: '',
//           },
//         ],
//       },
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   basePath: "/gh-next-sanity-portfolio",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;