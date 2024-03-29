import { defineUserConfig } from "vuepress";
// import { webpackBundler } from "@vuepress/bundler-webpack";
// import { defineUserConfig } from "@vuepress/cli";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { path } from "@vuepress/utils";
import theme from "./theme";

export default defineUserConfig({
  // 网站语言，默认为中文
  lang: "zh-CN",
  // 网站标题
  title: "LearnData-开源笔记",
  // 网站描述
  description:
    "Hu的开源笔记部署尝试",

  // 网站路径默认为主域名。如果网站部署在子路径下，比如 xxx.com/yyy，那么 base 应该被设置为 "/yyy/"
  base: "/",

  theme,
  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,

  // 修改页面模板，https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/templates/index.build.html
  // 配置参考：https://vuepress.github.io/zh/reference/theme-api.html#templatebuild
  templateBuild: path.resolve(__dirname, "templateBuild.html"),

  // 禁止文件夹生成静态文件，参考 [VuePress 文档]（https://v2.vuepress.vuejs.org/zh/guide/page.html#routing）
  pagePatterns: [
    "**/*.md",
    "!_temp",
    "!reading",
    "!.vuepress",
    "!node_modules",
  ],

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
    // 谷歌分析 ID
    googleAnalyticsPlugin({
      id: "G-RWKZTY2P9R",
    }),
  ],
});
