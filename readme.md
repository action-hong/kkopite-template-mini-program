# 介绍

小程序的模板, 集成了`scss`, `i18n`, `computed`, `mobx`等相关功能

采用了小程序提供的[i18拓展](https://developers.weixin.qq.com/miniprogram/dev/extended/utils/miniprogram-i18n/quickstart.html), 故需要对src目录下的文件进行编译才可以使用

该项目的目录结构参见[该项目](https://github.com/wechat-miniprogram/miniprogram-i18n/tree/master/examples)

# 前提

- 安装微信开发者工具
- 安装[`node`](https://nodejs.org/en/)

# 开始

```
# 根目录
npm install

cd src

npm install

cd ..

# 编译src文件, 生成dist文件
npm run build

cd dist

npm install

```

注意生成的`/dist`目录即为真正交付的小程序代码, 使用微信开发者工具打开`/dist`目录, 选择工具-->构建npm, [参见小程序文档关于npm的支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

构成成功后, 开发者工具既可以运行了

## 开发

***注意:请不要直接去修改dist下目录的文件, 而是应该通过修改src下的文件, 然后进行编译输出到dist***

```
# 根目录
# 该指令会实时监听对 src目录下文件的修改, 然后实时编译到 dist目录下
npm run watch
```

然后像往常开发小程序一样对src下的目录编辑就行了

---

当前仅支持对src下这几类文件进行实时监听并进行编译复制到dist目录下对应位置:

- *.js
- *.scss
- *.wxml
- *.json
- *.wxs
- assets/xx

PS: 当前并不支持监听src目录下删除文件, 自动同步到dist目录下

### 关于样式

当前使用`scss`来做样式开发, 可参见[官方文档](https://sass-lang.com/)

通过`npm run watch`或`npm run sass`指令 会将scss文件编译成小程序需要的wxss文件

PS: **你也可以完全不使用`scss`所提供的所有功能, 而是像过去写wxss文件一样写scss就行**

#### 样式文件中使用url引入图片

由于无法在`wxss`文件中直接使用本地图片, 故需要对源文件中的本地图片进行处理([`gulp-css-base64`](https://www.npmjs.com/package/gulp-css-base64)), 转换成`base64`形式(或者直接传到服务器上引入也可以)

### 快速生成Page 和 component

```
# 根目录下
npm run new

# 选择page / component

# 输入名称 如 foo

# 即会生成 page/foo/[index.js, index.scss, index.wxml, index.json] 四个文件, 方便快速开发

```

注意点:

- 这里生成的page页面并未添加在`app.json`上, 需要手动添加
- 这里生成的page采用[`Component`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html)函数, 并默认添加好了[`computed`](https://developers.weixin.qq.com/miniprogram/dev/extended/utils/computed.html)、[`miniprogram-i18n`](https://developers.weixin.qq.com/miniprogram/dev/extended/utils/miniprogram-i18n/quickstart.html)这两个[`behavior`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Behavior.html), 方便开发
- 使用了微信提供的`mobx`相关的[扩展库](https://developers.weixin.qq.com/miniprogram/dev/extended/utils/mobx.html), 统一管理所有相关状态(可以查看相关文档了解更多关于[`mobx`](https://mobx.js.org/README.html)的知识)

### 关于分包

由于用了几个`gif`图导致超过2m的限制, 故单独创建一个分包放置`home`页面相关的组件, 页面, gif, 起始如果有台服务器放这些图片就没这么麻烦了

### 测试

该项目使用了`jest`来做为单元测试的工具, 根据`test/utils/command.test.js`的格式编写相关的单元测试

运行`npm run test`来单元测试

## TODO

- [ ] 支持对删除文件的同步
- [ ] `npm run new`生成页面后自动在`app.json`下添加对应目录