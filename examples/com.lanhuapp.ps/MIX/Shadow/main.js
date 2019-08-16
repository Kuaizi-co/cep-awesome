/**
 * Created by nullice on 2017/4/1.
 */

var cs = new CSInterface();


/**
 * 重启事件，200 毫秒秒后打开扩展 com.lanhu.extension
 */
cs.addEventListener("lanhu:restart",
    function (data)
    {
        console.log("EventListener:lanhu-Shadow:restart", data)
        setTimeout(function ()
        {
            cs.requestOpenExtension("com.lanhu.extension")
            setTimeout(function () {cs.requestOpenExtension("com.lanhu.extension")},1500)//在速度慢的电脑上保证已重启
        },200)

    }
);


