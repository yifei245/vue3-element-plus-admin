module.exports = {
  publicPath:'/vue3-element-plus-admin/',
  devServer: {
    inline: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
    }
  }
}