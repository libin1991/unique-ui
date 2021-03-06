const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: {
    unique: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: './',
    filename: '[name].min.js',
    library: 'unique',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      packages: path.resolve(__dirname, '../packages')
    }
  },
  externals: [/^normalize\.css$/, /^font-awesome/],
  performance: false,
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'fast-css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'fast-css-loader', 'postcss-loader', 'fast-sass-loader']
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
