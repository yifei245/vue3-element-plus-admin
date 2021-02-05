module.exports = {
  devServer: {
    inline: true,
    disableHostCheck: true,
    publicPath:'/vue3-element-plus-admin/',
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