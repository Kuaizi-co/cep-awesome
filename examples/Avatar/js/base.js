/* vim: set et sw=4 ts=4 sts=4 fdm=marker ff=unix fenc=utf8 nobomb: */

/**
 * filename.js
 *
 * @author xiaoqiang
 * @mail   qiang0902@126.com
 * @date
 */

var CC = new CSInterface();
var CEP = window.cep;

var EXTENSION_ID = "Cutterman";

window.onload = function() {
    CC.addEventListener('com.adobe.csxs.events.ThemeColorChanged',  themeChange);

    CC.addEventListener("DevToolsConsoleEvent", function(event) {
        console.log(event.data);
    });

    themeChange();
    loadJSX();
}

function loadJSX() {
    var extensionRoot = CC.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
    CC.evalScript('$._ext.evalFiles("' + extensionRoot + '")');
}

function themeChange() {
    var hostEnv = CC.getHostEnvironment();
    var UIColorObj = new UIColor();
    UIColorObj = hostEnv.appSkinInfo.appBarBackgroundColor;
    var red = Math.round(UIColorObj.color.red);
    var green = Math.round(UIColorObj.color.green);
    var blue = Math.round(UIColorObj.color.blue);
    var alpha = Math.round(UIColorObj.color.alpha);
    var colorRGB = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
    var theme = {
        '#343434': ['theme-black', './css/topcoat-desktop-darkdark.min.css'],
        '#535353': ['theme-dark', './css/topcoat-desktop-dark.min.css'],
        '#b8b8b8': ['theme-gray', './css/topcoat-desktop-light.min.css'],
        '#d6d6d6': ['theme-white', './css/topcoat-desktop-lightlight.min.css?xx']
    };
    if (theme[colorRGB] != undefined) {
        $('body').removeClass('theme-black').removeClass('theme-dark').removeClass('theme-gray').removeClass('theme-white').addClass(theme[colorRGB][0]);
        $('#theme-link').attr('href', theme[colorRGB][1]);
        try {
            window.parent.document.body.style.backgroundColor = colorRGB;
        } catch(e) {
        }
    }
}

function openURL(url) {
    var isWindows = window.navigator.platform.toLowerCase().indexOf("win") > -1;
    try {
        if (isWindows) {
            var rootDir = CC.getSystemPath(SystemPath.COMMON_FILES).substring(0, 3);
            processPath = rootDir + "Windows/explorer.exe";
            CEP.process.createProcess(processPath, url);
        } else {
            CC.openURLInDefaultBrowser(url);
        }
    } catch(e) {
        var processPath = '/usr/bin/open';
        if (isWindows) {
            var rootDir = CC.getSystemPath(SystemPath.COMMON_FILES).substring(0, 3);
            processPath = rootDir + "Windows/explorer.exe";
            CEP.process.createProcess(processPath, url);
        } else {
            CEP.process.createProcess(processPath, '-a', 'Safari', url);
        }
    }

}


