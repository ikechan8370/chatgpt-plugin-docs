---
title: 常见问题
index: false
icon: laptop-code
category:
  - 常见问题
---

## icqq登陆失败：Token已失效
第一步：先进入云崽执行
pnpm config set registry https://registry.npmjs.org/

第二步：
pnpm update icqq -w

第三步：把data文件夹里面的`device.json`和`QQ号_token`都删了（喵崽是在`data`里面的`icqq`文件夹里）

第四步：`npm run login`，直接协议6登录（其他的应该也行）

建议：把`device.json`文件和`QQ号_token`文件备份到一个地方，下次遇到登录问题直接进行替换`token`即可
