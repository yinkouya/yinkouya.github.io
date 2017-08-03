---
layout: post
title: SASS Tutorial by Net Ninja
category: code
---

The [Net Ninjia](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg/featured) is such an amazing youtuber, I need to watch all of his videos! On his youtube main page says **Kung fu your web skills**.

Here are some of the playlists that I find important and interesting, which I will blog my learning notes when I finish the tutorial:
- [Python 3 Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9idu6GZ8EU_5B6WpKTdYZbK)

- [CSS Flexbox Tutorial ](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG)

So I finished a 12-step [SASS tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA) in 2 days, and below are my notes.

### SASS Tutorial #1 - What is SASS?
Sass is short for *syntactically awesome stylesheets*. Sass is a **scripting language** that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax", uses a syntax similar to Haml.It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, "SCSS", uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate lines within a block. The indented syntax and SCSS files are traditionally given the extensions .sass and .scss, respectively.

### SASS Tutorial #2 - Download & Compiling SASS
1. Command Line. Download Rudy. Nah.
2. Applications. Use Prepros free trial. Yeah.

### SASS Tutorial #3 - SASS Variables
Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable.

SCSS is used in the tutorial, since the syntax is similar to CSS, beginner-friendly.

{% highlight ruby %}
$deepBlue: #032f3e;
$secionHeading: 24px;

#main-nav{
  background: $deepBlue;
}

section h1{
  font-size: $sectionHeading;
}
{% end highlight%}

### SASS Tutorial #4 - Nesting Styles
Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.

Use `//` to add comments.

### SASS Tutorial #5 - Mixins
A mixin is **a chunck of reusable SCSS or SASS** that we can just inject into any element that we want.

Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible.

```
@mixin banner{
  width: 100%;
  position: relative;
  color: white;
  .banner-content{
    position: absolute;
    top: 50px;
    width: 100%;
  }
  span{
    font-size: $bannerHeading;
    display: block;
    text-transform: uppercase;
    font-weight: bold;
  }
}

.lead-banner{
  @include banner;
  text-align: right;
}
```

### SASS Tutorial #6 - Importing Files
CSS has an import option that lets you split your CSS into smaller, more maintainable portions. The only drawback is that each time you use @import in CSS it creates another HTTP request. Sass builds on top of the current CSS @import but instead of requiring an HTTP request, Sass will take the file that you want to import and combine it with the file you're importing into so you can serve a single CSS file to the web browser.

`@import 'reset';`

### SASS Tutorial #7 - Pseudo Classes
```
ul{
  width: 100%;
  &:after{
    content: "";
    display：block;
    clear: both;
  }
}
```

### SASS Tutorial #8 - Mathematical Operators
```
p {
  font: 10px/8px;             // Plain CSS, no division
  $width: 1000px;
  width: $width/2;            // Uses a variable, does division
  width: round(1.5)/2;        // Uses a function, does division
  height: (500px/2);          // Uses parentheses, does division
  margin-left: 5px + 8px/2px; // Uses +, does division
  font: (italic bold 10px/8px); // In a list, parentheses don't count
}
```
More on SASS documentation.

### SASS Tutorial #9 - Creating a Grid with SASS Math
[Place Holder](https://placeholder.com/)
```
@mixin grid($cols, $mgn){
  float: left;
  margin-right: $mgn;
  margin-bottom: $mgn;
  width: ((100% - (($cols-1)*$mgn)) / $cols );
  &:nth-child(#($cols)n){
    margin-right: 0;
  }
}
```

### SASS Tutorial #10 - Colour Functions
[Function reference](http://sass-lang.com/documentation/Sass/Script/Functions.html)

*eg.1* lighten($color, $amount) : Makes a color lighter. Takes a color and a number between 0% and 100%, and returns a color with the lightness increased by that amount.
```
a{
  &:hover{
    background: lighten($deepBlue, 5);
  }
}
```

*eg.2* complement($color): Returns the complement of a color. This is identical to adjust-hue(color, 180deg).
```
a{
  &:hover{
    color: complement($deepBlue);
  }
}
```

### SASS Tutorial #11 - The @Content Keyword
**Passing Content Blocks to a Mixin #mixin-content**

It is possible to pass a block of styles to the mixin for placement within the styles included by the mixin. The styles will appear at the location of any @content directives found within the mixin. This makes it possible to define abstractions relating to the construction of selectors and directives.

```
@mix mQ($arg){
  @media screen and (max-width: $arg){
    @content;
  }
}

li{
  float: left;
  width: (100% / 6);
  @include mQ(600px){
    width: 100%;
  }
}
```

### SASS Tutorial #12 - If Statements
```
@mix mQ($arg...){      //... puts don't-know-how-many arguments into a list
  @if length($arg) == 1{
    @media screen and (max-width: nth($arg, 1)){
      @content;
    }
  }
  @if length($arg) == 2{
    @media screen and (max-width: nth($arg, 1)) and (min-width: nth($arg, 2));
      @content;
    }
  }
}

span{
  @include mQ(3000px, 1200px){
    font-size: 68px;
  }
}
```
