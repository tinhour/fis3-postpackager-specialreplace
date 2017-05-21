/**
 * 把一些打包没有替换掉的文件手动替换一下
 * @param  {Object} ret      一个包含处理后源码的结构
 * @param  {Object} conf     一般不需要关心，自动打包配置文件
 * @param  {Object} settings 插件配置属性
     format: {
        list: [{
            exportName: "js/exportdashboard.js",
            sourceFiles: ["js/special.js", 'css/sepcial.css']
        }]
    }
 * @param  {Object} opt      命令行参数
 * @return {undefined}
 * author: tinhour 2017-5-10
 */
function specialReplace(ret, conf, settings, opt) {
    var files = ret.src;
    Object.keys(files).forEach(function(subpath) {
        var file = files[subpath];
        for (var j = 0; j < settings.list.length; j++) {
            var exportName = settings.list[j].exportName;
            var sourceFiles = settings.list[j].sourceFiles;

            if (subpath.match(exportName) !== null) {
                var content = file.getContent();
                for (var i in sourceFiles) {
                    var reg = new RegExp(sourceFiles[i], "g");
                    var realFileName = "";
                    var oldFileName = "";
                    Object.keys(files).forEach(function(subpath) {
                        if (subpath.match(reg) !== null) {
                            realFileName = files[subpath].getHashRelease().match(/\/([^\/]+)$/)[1];
                            oldFileName = sourceFiles[i].match(/\/([^\/]+)$/)[1];
                        }
                    })
                    content = content.replace(new RegExp(oldFileName, "g"), realFileName)
                    console.log("\r\n " + exportName + " repalce " + oldFileName + " with " + realFileName)
                }
                file.setContent(content);
            }
        }
    });
}
module.exports = specialReplace;
