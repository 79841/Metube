const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/youtube", {
      target: "https://youtube.googleapis.com/youtube/v3",
      pathRewrite: {
        "^/youtube": "",
      },
      changeOrigin: true,
    }),
  );
};
