/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  output: "export",
  swcMinify: true,
  transpilePackages: [
    "@ionic/react",
    "@ionic/core",
    "@stencil/core",
    "ionicons",
  ],
};

export default nextConfig;
