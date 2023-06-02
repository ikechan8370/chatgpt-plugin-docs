import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "AI模型",
      icon: "laptop-code",
      prefix: "tutorial/",
      link: "tutorial/",
      children: "structure",
    },
    {
      text: "常见问题",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "视频教程",
      icon: "video",
      prefix: "video/",
      link: "video/",
      children: "structure",
    },
  ],
});
