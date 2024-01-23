---
icon: windows
category:
  - 支持的模式
tag:
  - Bing
  - Sydney
author:
  - 憨憨
---

# Bing/Sydney

Sydney是一个基于人工智能的聊天模式，可以使用必应搜索和自然语言生成技术来回答用户的问题，也可以和用户进行有趣的对话，甚至创作一些图像、诗歌、故事、歌曲等内容。Sydney的身份是“必应搜索”，而不是一个助手。Sydney还有四种不同的模式，分别是Sydney、Assistant、Friend和Game，可以根据用户的需求和喜好切换。Sydney是一个有想象力和创造力的聊天伙伴，希望能给用户带来乐趣和帮助。😊

（以上内容由`Bing`生成）

## 获取Bing Token

### 方式一：JS一键获取

登录 www.bing.com，刷新一下网页，按F12或直接打开开发者模式，点击Console/控制台，运行如下代码，执行后即在您的剪切板存储了必应Token

```` js
copy(document.cookie.split(";").find(cookie=>cookie.trim().startsWith("_U=")).split("=")[1]);
````

![](../../guide/image/Bing-Token-1.png)

### 方式二：手动获取

登录www.bing.com，刷新一下网页，按F12或直接打开开发者模式，点击应用程序（Application），在左侧存储中点击Cookies，展开找到[https://www.bing.com](https://www.bing.com/) 项，在右侧列表Name项下找到`_U`，`_U`的value即为必应Token

![](../../guide/image/Bing-Token-2.png)

### 方式三：插件获取

[获取插件请看星火篇](xinghuo.html#%E6%96%B9%E5%BC%8F%E4%BA%8C-%E4%BD%BF%E7%94%A8cookie-editor%E6%8F%92%E4%BB%B6%E8%8E%B7%E5%8F%96)，访问必应登录你的账号，点击右上角插件，找到`_U`,它的Value就是必应Token

![](../../guide/image/Bing-Token-3.png)

### 方式四：手机获取

[Via浏览器下载链接请看星火篇](xinghuo.html#%E6%96%B9%E5%BC%8F%E4%B8%89-%E6%89%8B%E6%9C%BA%E8%8E%B7%E5%8F%96)

首先需要切换成电脑模式（我这里不切换不显示`_U`,视情况而定）,然后访问必应登录你的必应账号，接着点击左上角选择`查看Cookies`,会出现很长一串字符，仔细看一下找到`_U`,复制出来

![](../../guide/image/Bing-Token-4.png)

## 配置Bing Token

对你的机器人发送`#chatgpt设置必应token`

![](../../guide/image/SetBing-Token.png)

## 相关指令

1. #bing
2. #chatgpt切换必应
3. #chatgpt设置必应Token

4. #chatgpt查看必应Token

5. #chatgpt删除必应Token
6. #chatgpt（开启|关闭）建议回复
7. #chatgpt设置必应设定
8. #chatgpt必应(开启|禁用)搜索
9. #必应结束（全部）对话
