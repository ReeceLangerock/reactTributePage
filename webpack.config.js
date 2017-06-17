module.exports = {
  entry: "./app/app.jsx",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },

  resolve: {
    root: __dirname,
    alias: {
      Main: "app/components/Main.jsx",
      Title: "app/components/Title.jsx",
      Timeline: "app/components/Timeline.jsx",
      Image: "app/components/Image.jsx",
      Quote: "app/components/Quote.jsx",
      Footer: "app/components/Footer.jsx"


    },
    extensions: ["", ".js", ".jsx"]
  },

  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
