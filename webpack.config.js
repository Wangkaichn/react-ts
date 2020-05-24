const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', 
  devServer: {
    contentBase: path.join(__dirname, 'output'),
    compress: true,
    open: false,
    port: 8000,
    hot: true,
    hotOnly: false,
    quiet: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }), 
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  entry: {
    main: './src/main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }, {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
                modules: true,  // 保证 import styles from './index.module.less'
            }
          }, 
          {
            loader: "less-loader",
            options: {
              lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                modifyVars: {
                  'primary-color': '#1DA57A',
                  'link-color': '#1DA57A',
                  'border-radius-base': '2px',
                },
                javascriptEnabled: true,
              },
            }
          },
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'output'),
    // 千万注意, publicPath 设置
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx','.ts', 'tsx'],
  },
}