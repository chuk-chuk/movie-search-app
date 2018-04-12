module.exports = {
  entry: "./src/index.js",
  output: {
        filename: 'bundle.js'
    },
    watch: true,

    module: {
        preLoaders: [
          {
            test: /|.js$/,
            exclude: /node_modules/,
            loaders: "jshint-loader"
          }
        ],

        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?minimize&-autoprefixer', 'postcss-loader']
            }
        ]
    },

    resolve: {
      extentions: ["", ".js", ".es6"]
    }
}
