/**
 * Webpack Configuration
 *
 * Working of a Webpack can be very simple or complex. This is an intenally simple
 * build configuration.
 *
 * Webpack basics — If you are new the Webpack here's all you need to know:
 *     1. Webpack is a module bundler. It bundles different JS modules together.
 *     2. It needs and entry point and an ouput to process file(s) and bundle them.
 *     3. By default it only understands common JavaScript but you can make it
 *        understand other formats by way of adding a Webpack loader.
 *     4. In the file below you will find an entry point, an ouput, and a babel-loader
 *        that tests all .js files excluding the ones in node_modules to process the
 *        ESNext and make it compatible with older browsers i.e. it converts the
 *        ESNext (new standards of JavaScript) into old JavaScript through a loader
 *        by Babel.
 *
 * TODO: Instructions.
 *
 * @since 1.0.0
 */

const paths = require("./paths");
const webpack = require("webpack");
const externals = require("./externals");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsConfigPathsPlugin = require("awesome-typescript-loader").TsConfigPathsPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP === "true";

// Extract style.css for both editor and frontend styles.
const blocksCSSPlugin = new MiniCssExtractPlugin({
  filename: "./dist/blocks.style.build.css"
});

// Extract editor.css for editor styles.
const editBlocksCSSPlugin = new MiniCssExtractPlugin({
  filename: "./dist/blocks.editor.build.css"
});

// Configuration for the ExtractTextPlugin — DRY rule.
const extractConfig = {
  use: [
    // "postcss" loader applies autoprefixer to our CSS
    { loader: MiniCssExtractPlugin.loader },
    { loader: "css-loader" },
    {
      loader: "postcss-loader",
      options: {
        ident: "postcss",
        plugins: [
          autoprefixer({
            browsers: [
              ">1%",
              "last 4 versions",
              "Firefox ESR",
              "not ie < 9" // React doesn't support IE8 anyway
            ],
            flexbox: "no-2009"
          })
        ]
      }
    },
    // "sass" loader converts SCSS to CSS.
    {
      loader: "sass-loader",
      options: {
        // Add common CSS file for variables and mixins.
        data: '@import "./src/common.scss";\n',
        outputStyle: "compressed"
      }
    }
  ]
};

// Export configuration.
module.exports = {
  entry: {
    "./dist/blocks.build": paths.pluginBlocksJs, // 'name' : 'path/file.ext'.
    "./dist/hydrate": paths.pluginHydrate
  },
  output: {
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // The dist folder.
    path: paths.pluginDist,
    filename: "[name].js" // [name] = './dist/blocks.build' as defined above.
  },
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  devtool: shouldUseSourceMap ? "source-map" : false,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [new TsConfigPathsPlugin(/* { tsconfig, compiler } */)]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // {
      // 	test: /\.(js|jsx|mjs)$/,
      // 	exclude: /(node_modules|bower_components)/,
      // 	use: {
      // 		loader: 'babel-loader',
      // 		options: {

      // 			// This is a feature of `babel-loader` for webpack (not Babel itself).
      // 			// It enables caching results in ./node_modules/.cache/babel-loader/
      // 			// directory for faster rebuilds.
      // 			cacheDirectory: true,
      // 		},
      // 	},
      // },
      {
        test: /style\.s?css$/,
        exclude: /(node_modules|bower_components)/,
        use: extractConfig.use
      },
      {
        test: /editor\.s?css$/,
        exclude: /(node_modules|bower_components)/,
        use: extractConfig.use
      }
    ]
  },
  // Add plugins.
  plugins: [blocksCSSPlugin, editBlocksCSSPlugin /*new BundleAnalyzerPlugin()*/],
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
  stats: "minimal",
  mode: "production",
  // stats: 'errors-only',
  // Add externals.
  externals: externals
};
