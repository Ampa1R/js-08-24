const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/App.vue',
  output: {
    filename: './build.js'
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    poll: 1000,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // это будет применяться к файлам `.js`
      // А ТАКЖЕ к секциям `<script>` внутри файлов `.vue`
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // это будет применяться к файлам `.css`
      // А ТАКЖЕ к секциям `<style>` внутри файлов `.vue`
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // убедитесь что подключили плагин!
    new VueLoaderPlugin()
  ]
}