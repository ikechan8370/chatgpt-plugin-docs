import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "支持的模式",
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
  ],
});
