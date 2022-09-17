
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Import Module Federation plugin.
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),

    // Configure module federation plugin to expose
    // files from remote project.
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/index'
      }
    }),
  ]
};



