const path = require('path');
const withNextIntl = require('next-intl/plugin')(
  // This is the default, also the `src` folder is supported out of the box
  './i18n.tsx'
);
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },


  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    if (!config.resolve.extensionAlias) {
      config.resolve.extensionAlias = {};
    }
    config.resolve.extensionAlias[".js"] = ['.ts', '.js'];
    config.resolve.extensionAlias[".jsx"] = ['.tsx', '.jsx'];
    config.module.rules.push(
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      });
    config.module.rules.push({
      test: /\.(glb|gltf|blend)/,
      type: "asset/resource",
      resourceQuery: { not: [/raw/] },
    });

    return config;
  }
};

module.exports = withNextIntl(nextConfig);
