// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/build/' : '/',
  // Additional configuration to prevent minification issues
  configureWebpack: {
    optimization: {
      minimize: false,
    },
  },
};
