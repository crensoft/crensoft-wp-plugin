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
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsConfigPathsPlugin = require("awesome-typescript-loader").TsConfigPathsPlugin;
const paths = require("./paths");
const externals = require("./externals");

// Export configuration.
module.exports = {
  entry: {
    "blocks.build": paths.pluginBlocksJs,
    hydrate: paths.pluginHydrate,
    css: paths.pluginBlocksStyle
  },
  output: {
    pathinfo: true,
    path: paths.pluginDist,
    filename: "[name].js" // [name] = './dist/blocks.build' as defined above.
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".css"],
    plugins: [new TsConfigPathsPlugin(/* { tsconfig, compiler } */)]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.s?css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
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
          {
            loader: "sass-loader",
            options: {
              data: '@import "./src/common.scss";\n',
              outputStyle: "compressed"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "blocks.[name].build.css"
    }) /*new BundleAnalyzerPlugin()*/
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        style: {
          name: "style",
          test: /style\.s?css$/,
          chunks: "all",
          enforce: true
        },
        editor: {
          name: "editor",
          test: /editor\.s?css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  stats: "minimal",
  externals: externals
};
