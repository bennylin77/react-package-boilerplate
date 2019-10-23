const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
	plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:['dist/*.*']
     }),
	]
}
