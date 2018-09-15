const path = require('path');
// var copyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
//   plugins:[new copyPlugin(
//     [{
//     from:'./src/index.html',
//     to:'index.html'
// }]
// )],
  resolve: {
    extensions: ['.js', '.jsx']
}
  ,
  module: {
    rules: [
      {
        test: /.jpg$/,
        loader: ['url-loader', 'img-loader']
      },
      {
        test: /.png$/,
        loader: ['url-loader', 'img-loader']
      },
      {
        test: /.css$/,
        loader: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.es6\.js$/, loader: "babel-loader",
      //   query: {
      //     presets: ['es2015']
      //   }
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    }

    ],
  }

};
