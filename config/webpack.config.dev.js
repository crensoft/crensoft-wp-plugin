/**
 * Webpack Configuration
 *
 * @since 1.0.0
 */
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

const devConfig = {
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  devtool: "cheap-eval-source-map",
  // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  }
};

// Export configuration.
module.exports = merge(baseConfig, devConfig);
