var cs = new CSInterface();


/**
 * 重启事件，200 毫秒秒后打开扩展 com.lanhu.extension
 */
cs.addEventListener("xxpie:restart",
    function (data)
    {
        console.log("EventListener:lanhu-Shadow:restart", data)
        setTimeout(function ()
        {
            cs.requestOpenExtension("com.xxpie.psplugin")
            setTimeout(function () {cs.requestOpenExtension("com.xxpie.psplugin")},1500)//在速度慢的电脑上保证已重启
        },200)

    }
);


