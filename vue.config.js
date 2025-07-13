const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,

  pages: {
    index: {
      entry: 'src/main.js',              // ou main.ts si TypeScript
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Portfolio Joeltech',       // 🎯 ICI ton titre
    }
  },

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
      })
    ]
  }
})
