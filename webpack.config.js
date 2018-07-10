module.exports = {
  entry : {
    app: './src/index.js'
  },
  output:{
    path: __dirname + '/build',
    filename:'bundle.js',
    publicPath: '/'
  },
  resolve:{
    extensions: ['.jsx', '.js']
  },
  devtool: 'source-map',
  devServer:{
    host:'localhost',
    port: 3000,
    inline: true
  },
  mode: 'development',
  module: {
    rules: [
      { 
        test: /\.css$/, use: 'css-loader' 
      },
      { 
        test: /\.scss$/, 
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=8192'
      },      
    ]
  }
}
