const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name][contenthash:8].[ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name][contenthash:8].[ext]',
          outputPath: 'assets',
          esModule: false,
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css',
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.ico',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
  },
  devtool: 'source-map',
}
