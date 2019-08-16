/* vim: set et sw=4 ts=4 sts=4 fdm=marker ff=unix fenc=utf8 nobomb: */

/**
 * filename.js
 *
 * @author xiaoqiang
 * @mail   qiang0902@126.com
 * @date
 */


if(typeof($)=='undefined')
$={};

$._ext = {
    evalFile : function(path) {
                   try {
                       $.evalFile(path);
                   } catch (e) {
                       alert("Exception:" + e + "; path: " + path);
                   }
               },
    evalFiles: function(jsxFolderPath) {
                   var folder = new Folder(jsxFolderPath);
                   if (folder.exists) {
                       var jsxFiles = folder.getFiles("*.jsx");
                       for (var i = 0; i < jsxFiles.length; i++) {
                           var jsxFile = jsxFiles[i];
                           $._ext.evalFile(jsxFile);
                       }
                   }
               }
};

DEBUG = 0;
/*
try {
    var xLib = new ExternalObject("lib:\PlugPlugExternalObject");
} catch (e) {
    alert(e);
}
*/

function console_debug(in_message)
{
    if (DEBUG == 1) {
        var eventObj = new CSXSEvent();
        eventObj.type = "DevToolsConsoleEvent";
        eventObj.data = '[DEBUG] [MSG: ' +  in_message + ']';
        eventObj.dispatch();
    }
}

function console_error(file, line, in_message)
{
    if (DEBUG == 1) {
        var eventObj = new CSXSEvent();
        eventObj.type = "DevToolsConsoleEvent";
        eventObj.data = '[ERROR][MSG: ' + in_message + '] ['+file+'] [LINE: '+ line+']';
        eventObj.dispatch();
    }
}

/*
function dispatchEvent(type, message) {
    var eventObj = new CSXSEvent();
    eventObj.type = type;
    eventObj.data = message;
    eventObj.dispatch();
}
*/


//dispatchEvent('TEST_EVENT', "test event");

