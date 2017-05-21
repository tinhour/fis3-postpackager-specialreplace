# fis3-postpackager-specialreplace
把一些打包没有替换掉的文件手动替换一下
## 注意
**此插件适用动态或特别的文件，在fis3打包过程中没有替换的，手动替换掉**


## 安装
支持全局安装和局部安装，根据自己的需求来定。

```bash
npm install fis3-postpackager-specialreplace
```

## 使用

```javascript
fis.match('::packager', {
  postpackager: fis.plugin('specialreplace', {
        list: [{
            exportName: "js/exportdashboard.js",
            sourceFiles: ["js/special.js", 'css/sepcial.css']
        }]
    })
});
```


