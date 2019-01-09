module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api':{
        target: 'http://localhost:9999',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api': ''
        }
      }
    }
  }
}
