module.exports = {
  publicPath: "./",
  devServer: {
    // 环境代理配置
    proxy: {
      "/api": {
        target: "https://movie.douban.com", // 设置你调用的接口域名和端口号
        changeOrigin: true, // 跨域
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
};
