// vue.config.js
module.exports = {
    // options...
    devServer: {
        port: 3000,  
        proxy: 'http://localhost/api',
      }
  }