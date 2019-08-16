/**
 * Created by xiaoqiang on 7/22/15.
 */

function action(name)
{
    //console.log('action: ' + name);
    instance.evalScript("goldenCurve."+name+"()");
}

/**
 * 对话框对象
 */
Dialog = function(text,btnText) {
    var callback = null;

    $('#dialog p').html(text);
    $('#dialog button').unbind().click(function() {
        if (btnText == undefined) {
            $('#cover').hide();
            $('#dialog').hide();
        }
        if (callback != null) {
            callback();
        }
    });

    $('#dialog button').text((btnText != undefined)? btnText : "确定");

    this.show = function(onConfirm) {
        callback = onConfirm;
        $('#cover').show();
        $('#dialog').show();
    }

    this.hide = function() {
        $('#cover').hide();
        $('#dialog').hide();
    }
};

Dialog.show = function(text, onConfirm, btnText) {
    var dialog = new Dialog(text, btnText);
    onConfirm = (onConfirm == undefined)? null : onConfirm;
    dialog.show(onConfirm);
    return dialog;
};

window.onload = function() {

    if (user.isLogin()) {
        setTimeout(function() {
            $('#email').text(config.email);
            if (config.licence == null) {   // 没有授权
                var trial_start = config.trial_start*1000;   // 试用起始时间
                var now = (new Date()).getTime();       // 当前时间
                if (now - trial_start > 30*24*3600*1000) { // 试用期30天
                    Dialog.show('试用期已结束，您需要购买后才能继续使用。<br/>如果已经购买，请<a href="#" onclick="location.reload(true)">刷新</a>', function() {
                        instance.openURL('http://www.cutterman.cn/v2/buy?app=goldencurve');
                    }, '去购买(20rmb)');
                } else {
                    var left = parseInt((trial_start + 30*24*3600*1000 - now)/(24*3600*1000));
                    $('#left').text('试用剩余' + left + '天');
                }
                 $('#left').click(function() {
                    instance.openURL('http://www.cutterman.cn/v2/buy?app=goldencurve');
                 });
            } else {
                $('#left').text('已授权，终生使用');
            }
        }, 300);
    }
};

