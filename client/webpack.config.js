const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const { CLIENT_HTTPS, CLIENT_HOST, CLIENT_PORT, CHECK } = process.env

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    static: './dist',
    https: CLIENT_HTTPS === 'true' || false,
    host: CLIENT_HOST || 'localhost',
    port: CLIENT_PORT || 3000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new Dotenv({
      path: CHECK ? '../config/.env.example' : '../config/.env.local'
    })
  ]
}
