/**
 * Webpack Configuration
 *
 * Working of a Webpack can be very simple or complex. This is an intenally simple
 * build configuration.
 *
 * TODO: Instructions.
 *
 * @since 1.0.0
 */
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP === "true";

const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

const prodConfig = {
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  devtool: shouldUseSourceMap ? "source-map" : false,
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false,
            ascii_only: true
          },
          compress: {
            warnings: false,
            comparisons: false
          },
          safari10: true
        }
      }),
      new OptimizeCSSAssetsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ]
  },
  mode: "production"
};

module.exports = merge(baseConfig, prodConfig);
