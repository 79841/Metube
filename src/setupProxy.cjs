import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    createProxyMiddleware("/youtube", {
      target: "https://youtube.googleapis.com/youtube/v3",
      pathRewrite: {
        "^/youtube": "",
      },
      changeOrigin: true,
    }),
  );
}
