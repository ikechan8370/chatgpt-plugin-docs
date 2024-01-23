---
home: true
icon: home
title: 首页
#heroImage: /assets/image/l.png
heroImage: /images/eli.png
bgImage: /images/6-light.svg
bgImageDark: /images/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: Yunzai.Chat
heroFullScreen: true
tagline: 将人工智能效率工具嵌入你所熟悉的群组<br>与流行的多模态大型语言模型畅聊<br>强大，开源，免费</p>
actions:
  - text: 使用指南 💡
    link: ./tutorial/install.html
    type: primary

  - text: " 仓库"
    icon: code
    link: https://gitee.com/ikechan/chatgpt-plugin

highlights:
  - header: 强大、易用的多AI智能对话插件
    description: <a href="https://gitee.com/ikechan/chatgpt-plugin/releases"><img src="https://img.shields.io/github/v/tag/ikechan8370/chatgpt-plugin?label=latest%20version&logo=github"></a>
    image: /assets/image/box.svg
    bgImage: /images/3-light.svg
    bgImageDark: /images/3-dark.svg
    highlights:
      - title: 安装
        details: 在Yunzai根目录下运行 <code>git clone --depth=1 https://gitee.com/ikechan/chatgpt-plugin.git ./plugins/chatgpt-plugin/ </code>安装插件
        icon: operate
      - title: 依赖
        details: 执行 <code> pnpm i -P </code> 安装依赖
        icon: nodeJS
      - title: 配置
        details: 使用插件自带的工具箱或<a href="https://gitee.com/guoba-yunzai/guoba-plugin">锅巴插件</a>进行多来源AI的配置
        icon: repair
      - title: 兼容性
        details: 支持<a href="https://gitee.com/Le-niao/Yunzai-Bot">Yunzai</a>、<a href="https://gitee.com/yoimiya-kokomi/Miao-Yunzai">Miao-Yunzai</a>和<a href="https://github.com/TimeRainStarSky/Yunzai">TRSS-Yunzai</a> (非icqq环境部分功能不可用)，以及<a href="https://gitee.com/xiaoye12123/ws-plugin">ws-plugin</a>、<a href="https://github.com/Zyy955/Lain-plugin">Lain-Plugin</a>等适配器
        icon: workingDirectory

  - header: 支持多种多模态大型生成式语言模型
    description: 多模态AI与群组互动的深入融合。更多AI持续接入中……
    image: /assets/image/features.svg
    bgImage: /images/2-light.svg
    bgImageDark: /images/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 星火大模型
        icon: flower
        details: 讯飞星火大模型
        link: /tutorial/models/xinghuo.html

      - title: 通义千问
        icon: discover
        details: 来自阿里的通义千问
        link: /tutorial/models/qwen.html
        
      - title: 文心一言
        icon: dart
        details: 来自百度的文心一言
        link: /tutorial/models/wxyy.html

      - title: OpenAI GPT-3.5/4
        icon: map
        details: OpenAI Chat Completion API
        link: /tutorial/models/openai.html

      - title: OpenAI ChatGPT
        icon: launch
        details: 网页版ChatGPT
        link: /tutorial/models/chatgpt.html

      - title: 必应/Sydney
        icon: hot
        details: 基于GPT-4的微软AI助手
        link: /tutorial/models/bing.html

      - title: Claude / Claude2
        icon: guide
        details: 来自Anthropic的Claude assistant和Claude2
        link: /tutorial/models/claude.html
        
      - title: Gemini Pro
        icon: computer
        details: Google最新推出的强大模型
        link: /tutorial/models/gemini.html
      - title: 智谱清言
        icon: computer
        details: 北京智谱华章科技的智谱清言
        link: /tutorial/models/zhipu.html
  
      - title: DALL·E
        icon: categoryselected
        details: OpenAI DALL·E 图像生成
        link: /tutorial/models/dalle.html

      - title: 必应图像创造者
        icon: style
        details: 微软必应基于DALL·E 3的AI绘图
        link: /tutorial/models/bingdraw.html

      - title: 更多娱乐功能
        icon: superscript
        details: 一些娱乐小功能
        link: /tutorial/models/entertainment.html


  - header: 星火大模型
    description: 基于讯飞星火大模型API
    image: /images/xh.png
    bgImage: /images/5-light.svg
    bgImageDark: /images/5-dark.svg
    highlights:
      - title: 完全免费
        icon: blog
        details: 只需注册申请星火账号
        link: /tutorial/models/xinghuo.html

      - title: 星火API
        icon: workingDirectory
        details: 配置应用APIKey等即可使用
        link: /tutorial/models/xinghuo.html

      - title: 星火助手
        icon: sitemap
        details: 星火官方助手，使用更方便
        link: /tutorial/models/xinghuo.html

      - title: 响应速度飞快
        icon: speed
        details: 国内大厂AI，享受飞一般的感觉
        link: /tutorial/models/xinghuo.html

  - header: 通义千问
    description: 基于阿里通义千问大模型qwen进行对话
    image: /images/qwen.apng
    bgImage: /images/6-light.svg
    bgImageDark: /images/6-dark.svg
    highlights:
      - title: 免费试用
        icon: view
        details: 官方提供大量免费试用额度
        link: /tutorial/models/qwen.html

      - title: 双模型支持
        icon: write
        details: qwen-plus和qwen-turbo
        link: https://help.aliyun.com/zh/dashscope/developer-reference/api-details

      - title: 快速响应
        icon: speed
        details: 国内部署，响应速度非凡
        link: /tutorial/models/qwen.html

      - title: 百变设定
        icon: search
        details: 支持完全自定义的设定和各种参数，自带夸克搜索
        link: /tutorial/models/qwen.html


  - header: 文心一言
    description: 来自百度的强大的国产语言模型，4.0版本抢鲜体验
    image: /images/wxyy.png
    bgImage: /images/2-light.svg
    bgImageDark: /images/2-dark.svg
    highlights:
      - title: 免费试用
        icon: token
        details: 官方提供大量免费试用额度
        link: /tutorial/models/wxyy.html

      - title: 多模型支持
        icon: type
        details: ERNIE-Bot和ERNIE-Bot-turbo
        link: https://console.bce.baidu.com/qianfan/modelcenter/model/buildIn/list

      - title: 快速响应
        icon: speed
        details: 国内部署，响应速度非凡
        link: /tutorial/models/wxyy.html

      - title: 智能模式
        icon: search
        details: ERNIE-Bot 4.0全新支持智能模式，与OpenAI一样享受被机器人踢出群聊的快乐吧
        link: /tutorial/models/wxyy.html
    
  - header: GPT-3.5-turbo/4
    description: 基于OpenAI官方的Chat Completion API进行对话
    image: /assets/image/layout.svg
    bgImage: /images/5-light.svg
    bgImageDark: /images/5-dark.svg
    highlights:
      - title: 简单易用
        icon: share
        details: 仅需配置API Key开箱即用
        link: /tutorial/models/openai.html

      - title: 完全掌控
        icon: shell
        details: 随心所欲定义模型参数
        link: /tutorial/models/openai.html

      - title: 角色扮演
        icon: group
        details: 通过指定系统消息进行角色扮演
        link: /tutorial/models/openai.html
      
      - title: 智能模式
        icon: process
        details: 彻底释放AI潜力，群内禁言、踢人、搜索等，联动AP、喵喵、星铁等其他插件
        link: /tutorial/models/openai.html


  - header: ChatGPT
    description: 基于网页版ChatGPT进行对话
    image: /images/openai.png
    bgImage: /images/1-light.svg
    bgImageDark: /images/1-dark.svg
    highlights:
      - title: 完全免费
        icon: react
        details: 与官方保持同步，完全免费
        link: /tutorial/models/chatgpt.html

      - title: 支持GPT-4
        icon: script
        details: Plus账户可开启GPT-4选项
        link: /tutorial/models/chatgpt.html

      - title: 官网同步
        icon: lock
        details: 聊天记录完全同步，每个用户对话隔离
        link: /tutorial/models/chatgpt.html

      - title: 自建反代支持
        icon: stack
        details: 提供开源反代部署方法和免费反代服务器
        link: /tutorial/models/chatgpt.html


  - header: 必应/Sydney
    description: 基于GPT-4的微软AI助手
    image: /images/bing.png
    bgImage: /images/10-light.svg
    bgImageDark: /images/10-dark.svg
    highlights:
      - title: 完全免费
        icon: template
        details: 仅需有效的微软账户，支持多账户负载均衡
        link: /tutorial/models/bing.html

      - title: Sydney越狱
        icon: subscript
        details: 提供完全的Jailbreak模式支持，我的Sydney由我自己掌控
        link: /tutorial/models/bing.html

      - title: 无限续杯
        icon: stack
        details: 无视官方20条聊天上线的规则限制，支持pdf、word等文件解读
        link: /tutorial/models/bing.html

      - title: 内容生成
        icon: style
        details: 支持聊天中的图像生成和图像识别
        link: /tutorial/models/bing.html
        
      - title: 多种模式
        icon: search
        details: 原版精准/均衡/创意模式和额外的悉尼与自定义模式
        link: /tutorial/models/bing.html
        
      - title: 辅助验证
        icon: tool
        details: 自动应对和通过验证
        link: /tutorial/models/bing.html
      

  - header: Claude
    description: 来自Anthropic的Claude，支持Slack和Claude2
    image: /images/Anthropic-AI.png
    bgImage: /images/4-light.svg
    bgImageDark: /images/4-dark.svg
    highlights:
      - title: 角色扮演
        icon: strong
        details: 封装多轮对话以支持自定义角色扮演设定
        link: /tutorial/models/claude.html

      - title: 完全免费
        icon: sitemap
        details: 仅需注册Slack并将Claude加入工作区
        link: /tutorial/models/claude.html

      - title: 更快的速度
        icon: speed
        details: 飞一样的速度，不一样的文字风格体验
        link: /tutorial/models/claude.html
        
      - title: 超长上下文
        icon: blog
        details: claude2支持长达100k上下文聊天，支持pdf、word等文件解读
        link: /tutorial/models/claude.html
        
  - header: Gemini
    description: 来自谷歌的双子星
    image: /images/google.png
    bgImage: /images/9-light.svg
    bgImageDark: /images/1-dark.svg
    highlights:
      - title: 角色扮演
        icon: strong
        details: Gemini特有的无审查模式，尽情扮演任何角色
        link: /tutorial/models/gemini.html

      - title: 免费使用
        icon: sitemap
        details: 从Google AI Studio获取免费API密钥
        link: https://makersuite.google.com/app/apikey

      - title: 更快的速度
        icon: speed
        details: 飞一样的速度，不一样的文字风格体验
        link: /tutorial/models/gemini.html

      - title: 支持智能模式
        icon: blog
        details: 基于function_call的花式调用
        link: /tutorial/models/gemini.html

  - header: 智谱清言
    description: 来自北京智谱华章科技有限公司的智谱清言
    image: /images/zhipu.png
    bgImage: /images/12-light.svg
    bgImageDark: /images/9-dark.svg
    highlights:
      - title: 免费使用
        icon: sitemap
        details: 从智谱清言获取登录chatglm_refresh_token
        link: https://www.chatglm.cn

      - title: 支持AI画图
        icon: blog
        details: 根据用户的文字描述智能绘制出图片
        link: /tutorial/models/zhipu.html

      - title: 支持联网
        icon: speed
        details: AI帮你搜罗全网信息，能够快速响应用户需求，帮助用户分析总结信息的智能助手。
        link: /tutorial/models/zhipu.html

      - title: 更快的速度
        icon: speed
        details: 飞一样的速度，不一样的文字风格体验
        link: /tutorial/models/zhipu.html
---
