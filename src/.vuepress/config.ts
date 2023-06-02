import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ChatGPT-Plugin文档",
  description: "ChatGPT-Plugin文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  head: [
      ['script', {
        async: true,
        defer: true,
        'data-website-id': '2ba9d94e-736d-4f32-a49e-5ea8bb58f327',
        src: 'https://umami.geyinchi.cn/umami.js'
      }]
  ],
  plugins: [
    searchProPlugin({
      indexContent: true
    })
  ]
});

// <script async defer data-website-id="2ba9d94e-736d-4f32-a49e-5ea8bb58f327" src="https://umami.geyinchi.cn/umami.js"></script>