const WebExtension = require('webpack-target-webextension');
const CopyPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webpack = require('webpack');
const path = require('path');

/** @type {webpack.Configuration} */
const config = {
  // No eval allowed in MV3
  devtool: 'cheap-source-map',
  entry: {
    background: path.join(__dirname, './src/background.js'),
    settings:  path.join(__dirname, './src/settings.js'),
    popup:  path.join(__dirname, './src/popup.js')

  },
  optimization: {
    minimize: false,
  },
  output: {
    path: path.join(__dirname, './dist'),
    // Our assets are emitted in /dist folder of our web extension.
    publicPath: '/dist/',
    clean: true,
  },
  resolve: {
    alias: {
      core: path.join(__dirname, 'background'),
    },
    fallback: {
      //Require to provide compatibility for Chrome where Buffer is not available. (Part 1)
      //https://stackoverflow.com/a/68723223/89769
      "buffer": require.resolve("buffer")
    },
  },
  module: {
    rules: [
      { test: /.*\.vue$/, loader: 'vue-loader' },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./src/manifest.json"},
        { from: "./src/tabInjectPayload.js"},
        {
          from: "src/*.html",
          to({ context, absoluteFilename }) {
            return "./[name][ext]";
          },
        },
        {
          from: "src/*.css",
          to({ context, absoluteFilename }) {
            return "./[name][ext]";
          },
        },
        {
          from: "src/images/*.png",
          to: "./images/[name][ext]",
        },
      ],
    }),
    //Configuration require for the Buffer class. (Part 2)
    //https://stackoverflow.com/a/68723223/89769
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new WebExtension({
      background: {
        entry: 'background',
        manifest: 3,
        weakRuntimeCheck: true,
        eagerChunkLoading: false,
      },
    }),
  ],
  // Add devServer.hot = true or "only" to enable HMR.
  devServer: {
    hot: 'only',
  },

  //Hide asset limit warning given for esprima + vue
  performance: {
    maxEntrypointSize: 512000000,
    maxAssetSize: 512000000
  },
}
module.exports = config
