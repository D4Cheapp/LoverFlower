const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.tsx'),
  },
  optimization: {
    runtimeChunk: 'single',
  },
  stats: {
    children: true,
  },
  devServer: {
    watchFiles: [path.resolve(__dirname, 'src')],
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'docs'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "src/scss/style.scss";',
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                path: path.resolve(__dirname, 'postcss.config.js'),
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg|ico|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path]/[name].[ext]',
            },
          },
          {
            loader: 'webp-loader',
            options: {
              quality: 70,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      favicon: path.resolve(__dirname, './public/favicon.ico'),
    }),
    new CleanWebpackPlugin(),
  ],
};
