module.exports = {

    entry: {
        main: './example/src/example.js'
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/example/dist'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };