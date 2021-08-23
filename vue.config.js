// vue.config.js
module.exports = {
    // options...
    devServer: {
        port: 2000,  
        proxy: 'http://localhost/api',
      }
  }