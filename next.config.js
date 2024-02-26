// next.config.js
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add file-loader for pdf
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: `${isServer ? '../' : ''}static/files`,
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
