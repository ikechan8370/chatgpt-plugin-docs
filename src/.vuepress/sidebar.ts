import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文档",
      icon: "community",
      prefix: "tutorial/",
      link: "tutorial/",
      collapsible: true,
      children: [
        {
          text: "安装",
          icon: "operate",
          link: "install/"
        },
        {
          text: "配置",
          icon: "config",
          link: "config/"
        },
        {
          text: "AI模型",
          icon: "animation",
          link: "models/",
          prefix: "models/",
          children: [
              "bing.md",
              "chatgpt.md",
              "claude.md",
              "openai.md",
              "qwen.md",
              "wxyy.md",
              "xinghuo.md"
          ]
        },
      ]
    },
    {
      text: "常见问题",
      icon: "comment",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "视频教程",
      icon: "play",
      prefix: "video/",
      link: "video/",
      children: "structure",
    },
  ],
});
