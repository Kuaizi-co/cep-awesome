/* vim: set et sw=4 ts=4 sts=4 fdm=marker ff=unix fenc=utf8 nobomb: */

/**
 * filename.js
 *
 * @author xiaoqiang
 * @mail   qiang0902@126.com
 * @date
 */


if(typeof($)=='undefined') {
    $={};
}

if(typeof(exports)=='undefined') {
    exports = {ver: 1.0};
}

if (typeof(Object) == 'undefined') {
    Object = {
        defineProperty: function() {}
    }
} else {
    Object['defineProperty'] = function() {}
}

dollar = $;
dollar['File'] = File;
dollar['Folder'] = Folder;

cutterman = null;
csevent = true;

$._ext = {
    evalFile : function(path) {
        try {
            $.evalFile(path);
            console_debug(path);
        } catch (e) {
            alert("Cutterman Exception:" + e + "; path: " + path);
        }
    },
    evalFiles: function(jsxFolderPath) {
        var files = [];
        var ext  = '.js';
        var folder = new Folder(jsxFolderPath + '/Panel/jsx/');
        if (folder.exists) {
            files = files.concat(folder.getFiles("*"+ext));
        }
        for (var i = 0; i < files.length; i++) {
            $._ext.evalFile(files[i]);
        }
        $._ext.evalFinish();
    },
    evalFinish: function() {
        cutterman = new exports.Cutterman();
    },
    dispatchEvent: function (msg) {
        dispatchEvent(msg);
    }
};




try {
    var xLib = new ExternalObject("lib:\PlugPlugExternalObject");
} catch (e) {
    csevent = false;
    alert('external object load fail: ' + e.toString());
}

function require(file) {
    return exports;
}

function console_debug(in_message) {
    if (csevent) {
        var eventObj = new CSXSEvent();
        eventObj.type = "DevToolsConsoleEvent";
        eventObj.data = '[DEBUG] [MSG: ' +  in_message + ']';
        eventObj.dispatch();
    }
}

function console_error(file, line, in_message) {
    if (csevent) {
        var eventObj = new CSXSEvent();
        eventObj.type = "DevToolsConsoleEvent";
        eventObj.data = '[ERROR][MSG: ' + in_message + '] ['+file+'] [LINE: '+ line+']';
        eventObj.dispatch();
    }
}

function dispatchEvent(message) {
    if (csevent) {
        var eventObj = new CSXSEvent();
        eventObj.type = "CUTTERMAN_PANEL_EVENT";
        eventObj.data = message;
        eventObj.dispatch();
    }
}

