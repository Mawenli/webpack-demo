var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
　　entry: './js/main.js',
　　output: {
　　　　path: './dist',
　　　　filename: 'bundle.js'
　　},

　　plugins: [
　　　　new ExtractTextPlugin('./style.css')
　　],
　　module: {
　　　　//加载器配置
　　　　loaders: [
　　　　　　{ 
　　　　　　　　test: /\.css$/, 
　　　　　　　　loader:ExtractTextPlugin.extract("style-loader","css-loader")
　　　　　　}
　　　　　　// { 
　　　　　　　　// test: /\.(png|jpg)$/,
　　　　　　　　// loader: 'url-loader?limit=8192'
　　　　　　// }
　　　　]
　　}
};