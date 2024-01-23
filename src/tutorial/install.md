---
icon: operate
category:
- 安装
tag:
- Get Started
- 安装
author:
- ikechan8370
---

# 安装

## 安装前检查

* Node.js >= 18 / Node.js >= 14(with node-fetch) 小白尽可能使用18版本以上的nodejs

* 一个Yunzai发行版，如原版Yunzai、miao-Yunzai或TRSS-Yunzai

## 安装插件

推荐使用 git 进行安装，以方便后续升级。在 Yunzai-Bot 根目录夹打开终端，运行下述指令进行安装

```shell
# github源
git clone --depth=1 https://github.com/ikechan8370/chatgpt-plugin.git ./plugins/chatgpt-plugin/

# 网络不好连不上github可以使用gitee源，但更新可能不如github及时
git clone --depth=1 https://gitee.com/ikechan/chatgpt-plugin.git ./plugins/chatgpt-plugin/

# 以上二选一后执行下面步骤进入目录安装依赖
cd plugins/chatgpt-plugin
pnpm i
```

## 注意事项

安装阶段唯一可能出现的问题是依赖问题。本插件包含了几个较为特殊的依赖，如sharp、node-silk等，需要额外下载和编译。

其中sharp可能需要下载安装较长时间，用于dalle绘图中的剪切操作。

node-silk需要具备编译环境，用于高清语音合成。根据经验，ubuntu用户可以使用`sudo apt-get install build-essential`来一键安装依赖即可安装node-silk成功。

不想折腾的话，可以忽略上述两个依赖的错误，等用到相关功能的时候再去研究。

## 快速使用

虽然本插件功能繁多，配置项也很复杂，但一般用户可以通过一些简单的方式快速体验基础功能，例如：

1. 使用指令`#chatgpt设置APIKey`配置OpenAI的Key，然后直接开始对话。(获取密钥参考[OpenAI配置](/tutorial/models/openai.html#获取api-key))
2. 使用指令`#chatgpt设置必应token`配置必应_U Cookie，然后使用`#chatgpt切换必应`切换到必应模式，即可开始对话。（Cookie获取方式可以参考[必应配置](/tutorial/models/bing.html)）

## 更新插件

1. #chatgpt（强制）更新



如果你已经做好准备，想要体验更多功能，可以前往下一页参考[配置](/tutorial/config.html)使用。