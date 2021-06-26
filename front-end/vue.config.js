module.exports = {
  outputDir: "../src/main/resources/static",
  indexPath: "../templates/index.html",
  devServer: {
    port:3000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080'
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  configureWebpack: {
    entry:{
      app: './src/main.js',
      style:[
        'bootstrap/dist/css/bootstrap.min.css'
      ]
    }
  }
};
