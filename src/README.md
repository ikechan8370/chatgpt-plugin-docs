---
home: true
icon: home
title: ChatGPT-Plugin文档
#heroImage: /assets/image/l.png
heroImage: https://ikechan8370.oss-cn-beijing.aliyuncs.com/images/232115814-de9a0633-371f-4733-8da0-dd6e912c8a1e.png
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: ChatGPT-Plugin
tagline: ChatGPT-Plugin For Yunzai-Bot
actions:
  - text: 使用指南 💡
    link: ./tutorial/
    type: primary

  - text: 源码
    link: https://github.com/ikechan8370/chatgpt-plugin

highlights:
  - header: 强大、易用的多AI智能对话插件
    image: /assets/image/box.svg
    bgImage: /images/3-light.svg
    bgImageDark: /images/3-dark.svg
    highlights:
      - title: 在Yunzai根目录下运行 <code>git clone --depth=1 https://github.com/ikechan8370/chatgpt-plugin.git ./plugins/chatgpt-plugin/ </code>安装插件
      - title: 执行 <code> pnpm i -P </code> 安装依赖
      - title: 使用插件自带的后台管理或锅巴插件进行多来源AI的配置

  - header: 支持多种大型生成式语言模型
    description: 同时兼具图像生成模型和其他娱乐小功能。更多AI持续接入中……
    image: /assets/image/features.svg
    bgImage: /images/2-light.svg
    bgImageDark: /images/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: OpenAI GPT-3.5/4
        icon: clipboard-check
        details: OpenAI Chat Completion API
        link: /tutorial/openai.html

      - title: OpenAI ChatGPT
        icon: box-archive
        details: 网页版ChatGPT
        link: /tutorial/chatgpt.html

      - title: Bing/Sydney
        icon: table-columns
        details: 基于GPT-4的微软AI助手
        link: /tutorial/bing.html

      - title: Claude
        icon: code
        details: 来自Anthropic的Claude assistant
        link: /tutorial/claude.html

      - title: 星火大模型
        icon: align-center
        details: 讯飞星火大模型
        link: /tutorial/xinghuo.html

      - title: Poe
        icon: code
        details: 来自Quora的Poe
        link: /tutorial/poe.html

      - title: DALL·E 2
        icon: superscript
        details: OpenAI DALL·E 2
        link: /tutorial/dalle.html

      - title: 必应图像创造者
        icon: quote-left
        details: 微软必应基于DALL·E的AI绘图
        link: /tutorial/bingdraw.html

      - title: 更多娱乐功能
        icon: highlighter
        details: 一些娱乐小功能
        link: /tutorial/entertainment.html

  - header: OpenAI GPT-3.5/4
    description: 基于OpenAI官方的Chat Completion API进行对话
    image: /assets/image/layout.svg
    bgImage: /images/5-light.svg
    bgImageDark: /images/5-dark.svg
    highlights:
      - title: 简单易用
        icon: object-group
        details: 仅需配置API Key开箱即用
        link: /tutorial/openai.html

      - title: 完全掌控
        icon: circle-half-stroke
        details: 随心所欲定义模型参数
        link: /tutorial/openai.html

      - title: 角色扮演
        icon: palette
        details: 通过指定系统消息进行角色扮演
        link: /tutorial/openai.html

      - title: 支持代理和反代
        icon: person-chalkboard
        details: 解决因网络等因素无法访问OpenAI API的问题
        link: /tutorial/openai.html


  - header: OpenAI ChatGPT
    description: 基于OpenAI官方网页版ChatGPT进行对话
    image: /assets/image/features.svg
    bgImage: /images/1-light.svg
    bgImageDark: /images/1-dark.svg
    highlights:
      - title: 完全免费
        icon: comment-dots
        details: 与官方保持同步，完全免费
        link: /tutorial/chatgpt.html

      - title: 支持GPT-4
        icon: circle-info
        details: Plus账户可开启GPT-4选项
        link: /tutorial/chatgpt.html

      - title: 官网同步
        icon: lock
        details: 聊天记录完全同步，每个用户对话隔离
        link: /tutorial/chatgpt.html

      - title: 自建反代支持
        icon: search
        details: 提供开源反代部署方法和免费公益反代服务器
        link: /tutorial/chatgpt.html


  - header: Bing/Sydney
    description: 基于GPT-4的微软AI助手
    image: /assets/image/blog.svg
    bgImage: /images/5-light.svg
    bgImageDark: /images/5-dark.svg
    highlights:
      - title: 完全免费
        icon: blog
        details: 仅需有效的微软账户，甚至无需登录也可进行聊天
        link: /tutorial/bing.html

      - title: Sydney越狱
        icon: home
        details: 提供完全的Jailbreak模式支持，我的Sydney由我自己掌控
        link: /tutorial/bing.html

      - title: 无限续杯
        icon: home
        details: 无视官方20条聊天上线的规则限制
        link: /tutorial/bing.html

      - title: 内容生成
        icon: dumbbell
        details: 支持聊天中的图像生成
        link: /tutorial/bing.html
        
      - title: 多种模式
        icon: search
        details: 原版精准/均衡/创意模式和额外的悉尼与自定义模式
        link: /tutorial/bing.html

  - header: Claude
    description: 来自Anthropic的Claude assistant，基于Slack Bot
    image: /assets/image/advanced.svg
    bgImage: /images/4-light.svg
    bgImageDark: /images/4-dark.svg
    highlights:
      - title: 角色扮演
        icon: dumbbell
        details: 封装多轮对话以支持自定义角色扮演设定
        link: /tutorial/claude.html

      - title: 完全免费
        icon: sitemap
        details: 仅需注册Slack并将Claude加入工作区
        link: /tutorial/claude.html

      - title: 更快的速度
        icon: rss
        details: GPT3.5的速度，接近GPT-4的文本质量
        link: /tutorial/claude.html
  - header: 星火
    description: 基于讯飞星火大模型的API和官方网页版
    image: /assets/image/layout.svg
    bgImage: /images/2-light.svg
    bgImageDark: /images/2-dark.svg
    highlights:
      - title: 完全免费
        icon: blog
        details: 只需注册申请星火账号
        link: /tutorial/xinghuo.html

      - title: 星火API
        icon: dumbbell
        details: 配置应用APIKey等即可使用
        link: /tutorial/xinghuo.html

      - title: 星火助手
        icon: sitemap
        details: 星火官方助手，使用更方便
        link: /tutorial/xinghuo.html

      - title: 响应速度飞快
        icon: rss
        details: 国内大厂AI，享受飞一般的感觉
        link: /tutorial/xinghuo.html

copyright: false
footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2023 ikechan8370
---

