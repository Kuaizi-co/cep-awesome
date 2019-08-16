/* vim: set et sw=4 ts=4 sts=4 fdm=marker ff=unix fenc=utf8 nobomb: */

/**
 * filename.js
 *
 * @author xiaoqiang
 * @mail   qiang0902@126.com
 * @date
 */


/**
 * 应用程序基础对象
 * @constructor
 */
App = function(extensionID) {
    this.id = extensionID;
    this.csInterface = new CSInterface();
    this.cep = window.cep;
};

/**
 * 初始化
 */
App.prototype.init = function()
{
    var thiz = this;
    // PS主题变化事件
    this.csInterface.addEventListener('com.adobe.csxs.events.ThemeColorChanged',  function() {
        thiz.themeChange();
    });
    // 开发调试事件
    this.csInterface.addEventListener("DevToolsConsoleEvent", function(event) {
        console.log(event.data);
    });

    //var event = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION");
    //event.extensionId = this.id;
    //this.csInterface.dispatchEvent(event);

    // 修改主题样式
    this.themeChange();
    this.loadJSX();

    // 创建本地文件缓存目录
    this.createLocalDir();
};



/**
 * 加载本地的JSX文件
 */
App.prototype.loadJSX = function() {
    var extensionRoot = this.csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
    this.csInterface.evalScript('$._ext.evalFiles("' + extensionRoot + '")');
};

/**
 * 主题样式变化
 */
App.prototype.themeChange = function()
{
    var hostEnv = this.csInterface.getHostEnvironment();
    var UIColorObj = new UIColor();
    UIColorObj = hostEnv.appSkinInfo.appBarBackgroundColor;
    var red = Math.round(UIColorObj.color.red);
    var green = Math.round(UIColorObj.color.green);
    var blue = Math.round(UIColorObj.color.blue);
    var alpha = Math.round(UIColorObj.color.alpha);
    var colorRGB = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
    var theme = {
        '#343434': ['black', './css/topcoat-desktop-darkdark.min.css'],
        '#535353': ['dark', './css/topcoat-desktop-dark.min.css'],
        '#b8b8b8': ['gray', './css/topcoat-desktop-light.min.css'],
        '#d6d6d6': ['white', './css/topcoat-desktop-lightlight.min.css?xx']
    };
    if (theme[colorRGB] != undefined) {
        $('body').removeClass('black').removeClass('dark').removeClass('gray').removeClass('white').addClass(theme[colorRGB][0]);
        try {
            window.parent.document.body.style.backgroundColor = colorRGB;
        } catch(e) {
        }
    }

};


/* ---------------------------
 * --- 获取系统路径------------
 *----------------------------*/
App.prototype.getExtensionPath = function()
{
    return this.csInterface.getSystemPath(SystemPath.EXTENSION);
};

App.prototype.getUserDataPath = function()
{
    return this.csInterface.getSystemPath(SystemPath.USER_DATA);
};

App.prototype.getCommonFilesPath = function()
{
    return this.csInterface.getSystemPath(SystemPath.COMMON_FILES);
};

App.prototype.getMyDocumentPath = function()
{
    return this.csInterface.getSystemPath(SystemPath.MY_DOCUMENTS);
};

App.prototype.getHostApplicationPath = function()
{
    return this.csInterface.getSystemPath(SystemPath.HOST_APPLICATION);
};

App.prototype.getAdobeExtensionPath = function()
{
    var dir = (this.getPSVersion() == '14')? 'CEPServiceManager4' : 'CEP';
    var path = this.getUserDataPath() + '/Adobe/' + dir + '/extensions';
    return path;
};

App.prototype.getPSVersion = function()
{
    var host = this.csInterface.getHostEnvironment();
    return host.appVersion;
};

/***********
 * 获取能力支持
 */
App.prototype.isSupportPanelMenu = function()
{
    var cap = this.csInterface.getHostCapabilities();
    return cap.EXTENDED_PANEL_MENU? true : false;
};

App.prototype.isSupportPanelIcons = function()
{
    var cap = this.csInterface.getHostCapabilities();
    return (cap.EXTENDED_PANEL_ICONS)? true : false;
};

App.prototype.isAppOnline = function()
{
    var preference = this.csInterface.getNetworkPreferences();
    return preference.isAppOnline;
};

App.prototype.isAdminOnline = function()
{
    var preference = this.csInterface.getNetworkPreferences();
    return preference.isAdminOnline;
};

App.prototype.isUserOnline = function()
{
    var preference = this.csInterface.getNetworkPreferences();
    return preference.isUserOnline;
};

App.prototype.isHtmlOnline = function()
{
    return navigator.onLine;    // html5 的方法
};

App.prototype.isNetConnected = function()
{
    return (this.isAppOnline() && this.isAdminOnline() && this.isUserOnline());
};

App.prototype.getInstallInfo = function()
{
    return this.csInterface.dumpInstallationInfo();
};

App.prototype.getOS = function()
{
    return this.csInterface.getOSInformation();
};

App.prototype.isMac = function()
{
    return (this.getOS().toLowerCase().indexOf('mac') > -1)? true : false;
};

App.prototype.isWin = function()
{
    return (this.getOS().toLowerCase().indexOf('win') > -1)? true : false;
};

App.prototype.openURL = function(url) {
    try {
        if (this.isWin()) {
            var rootDir = this.getCommonFilesPath().substring(0, 3);
            processPath = rootDir + "Windows/explorer.exe";
            this.cep.process.createProcess(processPath, url);
        } else {
            this.csInterface.openURLInDefaultBrowser(url);
        }
    } catch(e) {
        var processPath = '/usr/bin/open';
        if (this.isWin()) {
            var rootDir = this.csInterface.getCommonFilesPath().substring(0, 3);
            processPath = rootDir + "Windows/explorer.exe";
            this.cep.process.createProcess(processPath, url);
        } else {
            this.cep.process.createProcess(processPath, '-a', 'Safari', url);
        }
    }
};


App.prototype.setCookie = function(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
};

App.prototype.getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

App.prototype.evalScript = function(script, callback)
{
    this.csInterface.evalScript(script, callback);
};


/** --------- cep.fs  ------------*/
App.prototype.openDialog = function(title, defaultPath)
{
    defaultPath = (defaultPath == undefined)? null : defaultPath;
    return this.cep.fs.showOpenDialog(false, true, title, defaultPath, []);
};

App.prototype.selectFile = function(title, defaultPath, filetypes)
{
    defaultPath = (defaultPath == undefined)? null : defaultPath;
    filetypes = (filetypes == undefined)? [] : filetypes;
    return this.cep.fs.showOpenDialog(false, false, title, defaultPath, filetypes);
}

App.prototype.readFile = function(filename)
{
    return this.cep.fs.readFile(filename);
};

App.prototype.writeFile = function(file, data, encoding)
{
    encoding = (encoding == undefined)? this.cep.encoding.UTF8 : encoding;
    return this.cep.fs.writeFile(file, data, encoding);
};

App.prototype.deleteFile = function(file)
{
    return this.cep.fs.deleteFile(file);
};

App.prototype.createDir = function(path)
{
    return this.cep.fs.makedir(path);
};

App.prototype.readDir = function(dir)
{
    return this.cep.fs.readdir(dir);
};

App.prototype.rename = function(oldPath, newPath)
{
    return this.cep.fs.rename(oldPath, newPath);
};


/**
 * 创建本地文件缓存目录
 */
App.prototype.createLocalDir = function()
{
    var dir = this.getUserDataPath() + '/' + this.id;
    this.createDir(dir);
};

/**
 * 获取本地文件缓存目录
 * @returns {string}
 */
App.prototype.getLocalDir = function() {
    return this.getUserDataPath() + '/' + this.id;
};

/**
 * 删除本地文件缓存目录
 */
App.prototype.deleteLocalDir = function() {
    return this.cep.fs.deleteFile(this.getLocalDir());
};

/**
 * 获取用户的agent信息
 */
App.prototype.userAgent = function() {
    return {
        os: this.getOS(),
        psver: this.getPSVersion(),
        installation: this.csInterface.dumpInstallationInfo()
    };
};

App.prototype.buildParam = function(data)
{
    var param = this.userAgent();
    for (var k in data) {
        param[k] = data[k];
    }
    return param;
};

/**
 * 封装jquery的jsonp请求
 * @param url
 * @param param
 * @param callback
 */
App.prototype.request = function(url, param, callback, jsonp)
{
    var p = "";
    for (var k in param) {
        p += k + '=' + param[k] + '&';
    }
    p = p.replace(/&$/, '');
    p = (url.indexOf('?') > -1)? '&' + p : '?' + p;

    url = url + p;

    $.ajax({
        url: url,
        dataType: 'jsonp',
        jsonp: (jsonp == undefined)? 'jsonpcallback' : jsonp,
        success: callback
    });
};

/**
 * 异常数据上报
 * @param param
 */
App.prototype.trace = function(params) {
    params['os'] = this.getOS();
    params['psver'] = this.getPSVersion();
    $.get('http://www.cutterman.cn/client/trace', params, function(result) {
    });
};


/**
 * 显示提示文字
 * @param text
 * @param timeout
 */
App.prototype.showToast = function(text, timeout) {
    timeout = (timeout == undefined)? 2000 : time;
    $('#toast').html('<span>' + text + '</span>').show().animate({top: '60px'}, 'fast', 'swing', function() {
        setTimeout(function() {
            $('#toast').animate({top: '-20px'}, 'fast', 'swing', function() {
                $(this).hide();
            })
        }, timeout);
    });
};



/**
 * 初始化APP实例
 * @type {null}
var instance = null;
window.onload = function() {
    instance = new App('parker');
    instance.init();
};
 */
