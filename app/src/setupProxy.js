const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(proxy('/apis', {
      logLevel: 'debug',
      target: "http://138.197.210.89:8080/",
      changeOrigin: true,
    }
  ));
};