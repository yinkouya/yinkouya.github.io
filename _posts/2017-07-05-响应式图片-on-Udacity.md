---
layout: post
title: 响应式图片 on Udacity      
categories: code
---

看了响应式图片，才知道我花了很多时间选择跟编辑的图片原来是一个巨大的坑。

我的这个blog初步是成形了，打算花一些时间学习更多网页设计课程之后，再慢慢的完善细节。

以下是课程笔记：


#### 第一节：准备工作

使用 快捷键 Ctrl+Shift+I (Windows) 或 Cmd+Opt+I (Mac) 打开Chrome 开发者工具

[Chrome 开发者工具概览](https://developers.google.com/web/tools/chrome-devtools/)

[远程调试Android设备]( http://www.css88.com/doc/chrome-devtools/remote-debugging/)

**适用于 IOS 的移动工具**
[iOS WebKit 调试代理]( https://github.com/google/ios-webkit-debug-proxy)
[Testing Mobile: Emulators, Simulators And Remote Debugging]( https://www.smashingmagazine.com/2014/09/testing-mobile-emulators-simulators-remote-debugging/2/)

#### 第二节：单位，格式和环境

Placeholder images: http://lorempixel.com/

Just put the custom url in your code like this:`<img src="http://lorempixel.com/400/200" />`


从 Mozilla 开发者社区了解更多关于 calc() 的信息: https://developer.mozilla.org/en-US/docs/Web/CSS/calc


[PNG, GIF, or JPEG? Which is the Best Image Format for Email?]( https://litmus.com/blog/png-gif-or-jpeg-which-ones-should-you-use-in-email)


[图片优化]( https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)

图像通常占据了网页上下载字节的大部分，通常也占据了大量的视觉空间。因此，优化图像通常可以最大限度地减少从网站下载的字节数以及提高网站性能：浏览器需要下载的字节越少，占用客户端的带宽就越少，浏览器下载并在屏幕上渲染有用内容的速度就越快。

[更多关于WebP的信息]( https://developers.google.com/speed/webp/?csw=1)

WebP is a modern image format that provides superior lossless and lossy compression for images on the web. Using WebP, webmasters and web developers can create smaller, richer images that make the web faster.

[WebP浏览器支持 from caniuse]( http://caniuse.com/#feat=webp)

"Can I use" provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.

**2.14 压缩、优化和自动化**

重要的链接，关于安装Grount和ImageMagic

**2.17 & 18 图片压缩和练习**

重要的链接，关于图片压缩& Page speed & 练习
