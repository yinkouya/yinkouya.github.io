---
layout: post
title: CSS Float And Clear
category: code
---

When I was taking a SASS tutorial, a piece of code came as something of a novelty to me.

``` css
#main-nav{
  background: $deepBlue;
  ul{
    width: 100%;
  }
  li{
    float: left;
    width: 14%;
  }
  a{
    color:$offWhite;
    text-decoration: none;
    padding: 16px;
    display: block;
    text-align: center;
  }
}

#main-nav ul:after{
  content: "";
  display: block;
  clear: both;
}
```

As I google my questions, here are several highlights:

### 1. 盒子模型（box model）& HTML的普通流（normal flow）

#### 盒子模型

在HTML中元素的盒子模型分为两种：**块状元素、行内元素**，请注意这里的块状元素（Block）和行内元素（Inline）与Display属性中的inline、block两个属性值并不等同。

我们直观的上看两种盒子模型的区别:

- 块状（Block）类型的元素可以设置width、height属性，而行内（Inline）类型设置无效。
- 块状（Block）类型的元素会独占一行（直观的说就是会换行显示，无法与其他元素在同一行内显示，除非你主动修改元素的样式），而行内（Inline）类型的元素则都会在一行内显示。
- 块状（Block）类型的元素的width默认为100%，而行内（Inline）类型的元素则是根据自身的内容及子元素来决定宽度。

列举出一些大家常见的元素的分类: 

块状元素：p、div、ul、li、dd、dt...

行内元素：a、img、span、strong...

#### HTML的普通流

浏览器在读取HTML源代码的时候是根据元素在代码出现的顺序读取，最终元素的呈现方式是依据元素的盒子模型来决定的。行内元素是从左到右，块状元素是从上到下。

如果你不改变元素的默认样式前提下，元素在HTML的普通流中会“占用”一个位置，而“占用”位置的大小、位置则是由元素的盒子模型来决定。因此，在后续讲的Position、Float属性是否会使元素脱离这个普通流是一个关键点。

*Click [here](http://www.cnblogs.com/coffeedeveloper/p/3145790.html) to read more about Position.

### 2. Float属性: none、left、right

- 只有横向浮动，并没有纵向浮动。
- 当元素应用了float属性后，将会脱离普通流，其容器（父）元素将得不到脱离普通流的子元素高度。
- 会将元素的display属性变更为block。(注：把float: left 应用在span上会将它变成block.)
- 浮动元素的后一个元素会围绕着浮动元素（典型运用是文字围绕图片），与应用了position的元素相比浮动元素并不会遮盖后一个元素。（注：youtube上一个6年前的视频里介绍的是浮动元素会遮盖后一个元素，只能理解为科技日新月异吧。不会遮盖。）
- 浮动元素的前一个元素不会受到任何影响（如果你想让两个块状元素并排显示，必须让两个块状元素都应用float）。

*Click [here](http://www.cnblogs.com/coffeedeveloper/p/3145790.html) to read more about the compatability of Position and Float.

### 3. 伪类

### 4. clear:
