module.exports = {
  publicPath: "./",
  pwa: {
    name: "书签管理平台",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico"
    }
  },
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
