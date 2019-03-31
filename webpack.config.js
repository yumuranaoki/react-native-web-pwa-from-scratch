module.exports = {
  mode: "development",
  entry:　{
    bundle: "./src/index.tsx",
    sw: "./src/serviceWorker/sw.ts"
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      'react-native$': 'react-native-web'
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript"
              ]
            }
          }
        ]
      },
    ]
  },
  devServer: {
    contentBase: __dirname + '/dist',
    compress: true,
    port: 9000
  }
};