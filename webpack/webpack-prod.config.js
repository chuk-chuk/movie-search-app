var devConfig = require("./webpack-dev.config.js");
var webpackStrip = require("strip-loader");
var stripLoader = {
  test: [/\.js$/,/\.es6$/],
  exclude: /node_modules/,
  loader: webpackStrip.loader('console.log', 'perfLog')
}

devConfig.module.loader.push(stripLoader);
module.exports = devConfig;
