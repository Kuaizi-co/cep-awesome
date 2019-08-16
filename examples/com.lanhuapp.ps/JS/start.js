(function ()
{
    //基础版本
    window.BASE_VER = 87

    var fs = require("fs")
    var path = require("path")
    var cs = new CSInterface()
    window.cs = cs
    //----------------------------------------
    window.DecompressZip  = require("decompress-zip");
    window.opn = require('opn');
    window.NodeCopy = require("copy-paste")
    window.base65536 = require("base65536");

    //-----------------------------
    var scriptBox = document.getElementById("script-box")
    console.log("scriptBox", scriptBox)

    var jsFileList = []
    //-----------------------------
    // addScript("./JS/gonz.js")
    addScript("./JS/axios.js")    //载入 axios
    addScript("./JS/vue_v2.3.4.js")   //载入 Vue
    addScript("./JS/lodash.js")       //载入 lodash
    addScript("./JS/CSInterface.js")  //载入 CEP 官方库
    addScript("./JS/gonz.js")    //载入 持久化 gonz
    addScript("./JS/jquery-2.1.4.min.js")  //载入 jquery
    addScript("./JS/jquery.nicescroll.min.js")  //载入 jquery-nicescroll
    loading_autoUpdate()
    //-----------------------------
    loadJs()
    //END--------------------------

    function loading_autoUpdate()
    {
        var autoUpdatePath = path.join(cs.getSystemPath(SystemPath.USER_DATA), "com.lanhuapp.ps/AutoUpdate")

        console.info("[AutoUpdate check]", autoUpdatePath)
        if (fs.existsSync(autoUpdatePath))
        {

            var fileList = fs.readdirSync(autoUpdatePath)
            var reg = /^patch_main_V0@[0-9]{0,4}/
            var reg_ver = /@[0-9]{0,4}/
            var maxVerIndex = window.BASE_VER; // 基础版本
            var maxVerFilePath = null;


            for (var i = 0; i < fileList.length; i++)
            {
                if (reg.test(fileList[i]))
                {
                    var verIndex = +(reg_ver.exec(fileList[i])[0].slice(1))
                    if (verIndex > maxVerIndex)
                    {
                        maxVerIndex = verIndex
                        maxVerFilePath = fileList[i]
                    }
                }
            }
            console.info("[AutoUpdate exist]", "maxVerIndex:", verIndex, maxVerFilePath, "maxVerFilePath")
            if (maxVerFilePath != undefined)
            {
                var finPath = path.join(autoUpdatePath, maxVerFilePath)
                if (fs.existsSync(finPath))
                {
                    console.info("[AutoUpdate load]", "finPath:", finPath)
                    addScript(finPath)
                    return
                }

            }
        }
        addScript("./JS/main.js")

    }


    /**
     * 添加一个 script node 到 jsFileList
     * @param src script 地址
     */
    function addScript(src)
    {
        var js = document.createElement("script")
        js.src = src
        jsFileList.push(js)
    }


    /**
     * 开始载入 js
     */
    function loadJs()
    {
        for (var i = 0; i < jsFileList.length; i++)
        {
            if (i < jsFileList.length - 1)
            {
                jsFileList[i].onload = (function (i)
                {
                    return function ()
                    {
                        console.info("loadJs:", i + 1, jsFileList[i + 1])
                        scriptBox.appendChild(jsFileList[i + 1])
                    }
                })(i)
            }
        }
        scriptBox.appendChild(jsFileList[0])
    }

})()
