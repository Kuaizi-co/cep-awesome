/* vim: set et sw=4 ts=4 sts=4 fdm=marker ff=unix fenc=utf8 nobomb: */

/**
 * filename.js
 *
 * @author xiaoqiang
 * @mail   qiang0902@126.com
 * @2014-10-17
 */

var total = 415;

var pid = 100;
var overlay = 1;

function init() {

    $('#preview img').click(function() {
        change();
    });

    $('#overlay').change(function() {
        var checked = $(this).is(':checked');
        overlay = checked? 1 : 0;
    });

    $('#generate-btn').click(function() {
        var avatarDir = CC.getSystemPath(SystemPath.EXTENSION) + "/avatar/";
        CC.evalScript('Avatar.create("'+ avatarDir +'", '+ pid +','+ overlay +')', function(result) {
            if (parseInt(result) == 1) {
                alert('no document open yet');
            }
            if (parseInt(result) == 2) {
                alert('file read error');
            }
        });
    });

    change();
}

function change() {
    pid = parseInt(Math.random()*total);
    var src = $('#preview img').attr('src');
    src = src.replace(/\d+/, pid);
    //$('#tt').text(pid);
    //console.log(src);
    $('#preview img').attr('src', src);
}

init();
