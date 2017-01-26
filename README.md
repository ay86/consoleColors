# consoleColors

在 Node.js 控制台终端输出带有颜色的文字信息。

通过修改了 `String` 类型的原型，使其具备携带有颜色信息，并且支持链式引用哦。

**PS: 本插件是以污染原生对象为前提生效的，请了解清楚并慎用！**

##原理

通过对 `String` 原型进行改造，将相应的 ANSI 颜色格式插入到文字里面去。

具体可在这里了解 [ANSI 颜色编码](https://en.wikipedia.org/wiki/ANSI_escape_code)

##Usage

```js
require('colors');
console.log('Test'.red.bold.bgYellow);
```

##Methods

###字体颜色
- black   黑色
- red     红色
- green   绿色
- yellow  黄色
- blue    蓝色
- magenta 洋红
- cyan    青色
- gray    灰色
- white   白色（无格式）

###背景颜色
- bgBlack   背景黑
- bgRed     背景红
- bgGreen   背景绿
- bgYellow  背景黄
- bgBlue    背景蓝
- bgMagenta 背景洋红
- bgCyan    背景青
- bgGray    背景灰

###物殊格式
- bold  粗体
- _     下划线
- inv   调换背景色和字体色

以上支持链式引用，理论上字体颜色和背景颜色应各只选择一次，比如`.red.green`这样是不科学的使用。

本插件只使用了部分的 ANSI 格式，还有部分因为兼容性和实用性没有考虑纳入，当然你也可以自行修改 `aColorMap` 加入你想要使用的格式并且定义它的方法名。

&copy; AngusYoung

E-mail: <angusyoung@mrxcool.com>

Home: http://mrxcool.com