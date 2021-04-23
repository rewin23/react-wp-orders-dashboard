const webpack = require("webpack");
const dotenv = require('dotenv')

module.exports = {
  mode : 'development',
  entry : "./app.js",
  output : {
    filename: "public/bundle.js"
  },
  plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed)
        })
    ],
  module:{
    rules: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',{'plugins': ['@babel/plugin-proposal-class-properties']}
              ]
          }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
    ]
  }
};
