/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — produces plain HTML/CSS/JS in ./out, deployable
  // directly to Cloudflare Pages, GitHub Pages, Netlify, S3, etc.
  output: "export",
};

export default nextConfig;
