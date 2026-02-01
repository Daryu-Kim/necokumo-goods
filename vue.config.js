const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.js",
      title: "네코쿠모 굿즈샵 - 당신의 일상을 더 귀엽게",
    },
  },
  pwa: {
    name: "네코쿠모 굿즈샵 공식몰",
    themeColor: "#ffffff",
    backgroundColor: "#ffffff",
    display: "standalone",
    start_url: "/",
  },
});
