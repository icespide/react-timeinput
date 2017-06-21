module.exports = {
  entry: './example/app.js',
  output: {
    filename: "bundle.js",
  },
  devtool: 'cheap-hidden-source-map',
  devServer: {
    contentBase: __dirname,
    compress: true
  },
  resolve: {
    alias: {
      "react-timeinput": '../src'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react','es2015']
          }
        }
      }
    ]
  }
}
