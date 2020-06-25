const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(proxy('/apis', {
      logLevel: 'debug',
      target: "http://138.68.246.46:8080/",
      changeOrigin: true,
    }
  ));
};