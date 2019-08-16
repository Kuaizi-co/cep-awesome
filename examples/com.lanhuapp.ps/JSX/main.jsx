function evalJsxFile(path)
{
    try
    {
        $.evalFile(path);
    } catch (e)
    {
        return e;
    }
}
/*执行一个目录下所有 jsx 脚本文件*/
function evalJsxFolder(jsxFolderPath)
{
    var folder = new Folder(jsxFolderPath);
    var result = [];
    $.writeln(folder.exists)

    // alert(folder)
    // alert(folder.exists)
    if (folder.exists)
    {
        var jsxs = folder.getFiles("*.jsx");
        // alert(jsxs)
        for (var i = 0; i < jsxs.length; i++)
        {
            var jsxFile = jsxs[i];
            var re = evalJsxFile(jsxFile)
            if (re != undefined)
            {
                result.push();
            }
        }


        var jsxs = folder.getFiles("*.jsxbin");
        for (var i = 0; i < jsxs.length; i++)
        {
            var jsxFile = jsxs[i];
            var re = evalJsxFile(jsxFile)
            if (re != undefined)
            {
                result.push();
            }
        }

    }
    return result;
}




