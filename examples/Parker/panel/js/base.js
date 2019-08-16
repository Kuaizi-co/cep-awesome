var events=require("events"),fs=require("fs"),os=require("os"),util=require("util"),Q=require("q"),path=require("path"),getmac=require("getmac"),spawn=require("child_process").spawn;App=function(e,t,r){this.versionCode=t,this.versionName=r,this.id=e,this.csInterface=new CSInterface,this.cep=window.cep,this.generatorTask={},this.eventTask={}},App.prototype.init=function(){var e=this;this.csInterface.addEventListener("com.adobe.csxs.events.ThemeColorChanged",function(){e.themeChange()}),this.csInterface.addEventListener("DevToolsConsoleEvent",function(e){console.log(e.data)}),this.csInterface.addEventListener("APOLLO_DATA_TRANSFER",function(t){var r=t.data;if(r.panel==e.id){var n=r.command,o=e.generatorTask[n];void 0!=o&&(clearTimeout(o.timeoutId),0==r.err?o.deffered.resolve(r.data):o.deffered.reject(r.err)),delete e.generatorTask[n]}}),this.persistent(),this.themeChange(),this.loadJSX(),this.createLocalDir(),this.setPlayerDebugMode()},App.prototype.persistent=function(){var e=new CSEvent("com.adobe.PhotoshopPersistent","APPLICATION");e.extensionId=this.id,this.csInterface.dispatchEvent(e)},App.prototype.setPlayerDebugMode=function(){var e=parseInt(this.getPSVersion());if(!(e<14)){var t={14:"CSXS.4",15:"CSXS.5",16:"CSXS.6",17:"CSXS.7"},r=this;if(this.isWin()){var n="HKEY_CURRENT_USER\\SOFTWARE\\Adobe\\"+t[e];this.executeCMD("REG",["QUERY",n,"/v","PlayerDebugMode"]).then(function(e){null!=e&&/PlayerDebugMode/.test(e)?console.log("Photoshop is already in Debug Mode"):r.executeCMD("REG",["ADD",n,"/v","PlayerDebugMode","/t","REG_SZ","/d","1"])},function(e){console.log("photoshop is no in debug mode"),r.executeCMD("REG",["ADD",n,"/v","PlayerDebugMode","/t","REG_SZ","/d","1"])})}else r.executeCMD("defaults",["write","com.adobe."+t[e]+".plist","PlayerDebugMode","1"])}},App.prototype.executeCMD=function(e,t){function r(e){n.reject(e)}var n=Q.defer();console.log(e+" "+t.join(" "));var o=spawn(e,t);o.on("error",r),o.stdin.on("error",r),o.stdout.on("error",r),o.stderr.on("error",r),o.stderr.on("data",r);var i="";return o.stdout.on("data",function(e){i+=e}),o.on("exit",function(e,t){0==e?n.resolve(i):n.reject()}),n.promise},App.prototype.getMac=function(){var e=Q.defer();return getmac.getMac(function(t,r){t?e.resolve(os.homedir()):e.resolve(r)}),e.promise},App.prototype.getHostName=function(){var e="";return e="win32"==process.platform?process.env.USERPROFILE:process.env.HOME,path.basename(e)},App.prototype.logger=function(e){var t=this.csInterface.getSystemPath(SystemPath.MY_DOCUMENTS)+"/parker.log";fs.appendFile(t,e+"\n")},App.prototype.loadJSX=function(){var e=this.csInterface.getSystemPath(SystemPath.EXTENSION)+"/panel/jsx/";this.csInterface.evalScript('$._ext.evalFiles("'+e+'")')},App.prototype.themeChange=function(){var e=this.csInterface.getHostEnvironment(),t=new UIColor;t=e.appSkinInfo.appBarBackgroundColor;var r=Math.round(t.color.red),n=Math.round(t.color.green),o=Math.round(t.color.blue),i="#"+r.toString(16)+n.toString(16)+o.toString(16),s="",p=parseInt(r);s=p<60?"black":60<=p&&p<127?"dark":127<=p&&p<200?"gray":"white",$("body").css("backgroundColor",i).removeClass().addClass("wrapper").addClass(s)},App.prototype.getExtensionPath=function(){return this.csInterface.getSystemPath(SystemPath.EXTENSION)},App.prototype.getUserDataPath=function(){return this.csInterface.getSystemPath(SystemPath.USER_DATA)},App.prototype.getCommonFilesPath=function(){return this.csInterface.getSystemPath(SystemPath.COMMON_FILES)},App.prototype.getMyDocumentPath=function(){return this.csInterface.getSystemPath(SystemPath.MY_DOCUMENTS)},App.prototype.getHostApplicationPath=function(){return this.csInterface.getSystemPath(SystemPath.HOST_APPLICATION)},App.prototype.getPSVersion=function(){var e=this.csInterface.getHostEnvironment();return e.appVersion},App.prototype.isSupportPanelMenu=function(){var e=this.csInterface.getHostCapabilities();return!!e.EXTENDED_PANEL_MENU},App.prototype.isSupportPanelIcons=function(){var e=this.csInterface.getHostCapabilities();return!!e.EXTENDED_PANEL_ICONS},App.prototype.isAppOnline=function(){var e=this.csInterface.getNetworkPreferences();return e.isAppOnline},App.prototype.isAdminOnline=function(){var e=this.csInterface.getNetworkPreferences();return e.isAdminOnline},App.prototype.isUserOnline=function(){var e=this.csInterface.getNetworkPreferences();return e.isUserOnline},App.prototype.isHtmlOnline=function(){return navigator.onLine},App.prototype.isNetConnected=function(){return this.isAppOnline()&&this.isAdminOnline()&&this.isUserOnline()},App.prototype.getInstallInfo=function(){return this.csInterface.dumpInstallationInfo()},App.prototype.getOS=function(){return this.csInterface.getOSInformation()},App.prototype.isMac=function(){return this.getOS().toLowerCase().indexOf("mac")>-1},App.prototype.isWin=function(){return this.getOS().toLowerCase().indexOf("win")>-1},App.prototype.openURL=function(e){try{if(this.isWin()){var t=this.getCommonFilesPath().substring(0,3);r=t+"Windows/explorer.exe",this.cep.process.createProcess(r,e)}else this.csInterface.openURLInDefaultBrowser(e)}catch(n){var r="/usr/bin/open";if(this.isWin()){var t=this.csInterface.getCommonFilesPath().substring(0,3);r=t+"Windows/explorer.exe",this.cep.process.createProcess(r,e)}else this.cep.process.createProcess(r,"-a","Safari",e)}},App.prototype.setCookie=function(e,t,r){var n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);var o="expires="+n.toGMTString();document.cookie=e+"="+t+"; "+o},App.prototype.getCookie=function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""},App.prototype.evalScript=function(e){var t=Q.defer();return this.csInterface.evalScript(e,function(e){e=JSON.parse(e),0==e.err?t.resolve(e.data):t.reject(e.msg)}),t.promise},App.prototype.post=function(e,t){var r=Q.defer();return $.post(e,t,function(e){r.resolve(e)}),r.promise},App.prototype.get=function(e){var t=Q.defer();return $.get(e,function(e){t.resolve(e)}),t.promise},App.prototype.sendToGenerator=function(e,t){var r=t.command,n=Q.defer(),o=this.generatorTask[r];return void 0!=o&&(clearTimeout(o.timeoutId),o.timeoutId=null,o.promise=null),o={command:r,start:(new Date).getTime(),timeoutId:null,deffered:n},this.generatorTask[r]=o,this.evalScript(e+"('"+JSON.stringify(t)+"')").then(function(e){return o.timeoutId=setTimeout(function(){o.deffered.reject(-1),delete o},1e4),n.promise},function(e){n.reject(e)})},App.prototype.dispatchEvent=function(e,t,r){var n={command:t,panel:e,data:r},o=Q.defer(),i=this.eventTask[t];void 0!=i&&(i.deffered=null),i={command:t,deffered:o},this.eventTask[t]=i;var s=new CSEvent;return s.type="PANEL_DATA_TRANSFER",s.scope="APPLICATION",s.data=n,this.csInterface.dispatchEvent(s),o.promise},App.prototype.readFile=function(e){var t=Q.defer();return this.fileExists(e).then(function(){return fs.readFile(e,function(e,r){e?t.reject(e):t.resolve(r)}),t.promise},function(){return t.reject(),t.promise})},App.prototype.writeFile=function(e,t){var r=Q.defer();return fs.writeFile(e,t,function(e){e?r.reject(e):r.resolve()}),r.promise},App.prototype.appendFile=function(e,t){var r=Q.defer();return fs.appendFile(e,t,function(e){e?r.reject(e):r.resolve()}),r.promise},App.prototype.fileExists=function(e){var t=Q.defer();return fs.exists(e,function(e){e?t.resolve():t.reject()}),t.promise},App.prototype.deleteFile=function(e){var t=Q.defer();return fs.unlink(e,function(e){e?t.reject(e):t.resolve()}),t.promise},App.prototype.openDialog=function(e,t){return t=void 0==t?null:t,this.cep.fs.showOpenDialog(!1,!0,e,t,[])},App.prototype.selectFile=function(e,t,r){return t=void 0==t?null:t,r=void 0==r?[]:r,this.cep.fs.showOpenDialog(!1,!1,e,t,r)},App.prototype.createDir=function(e){return this.cep.fs.makedir(e)},App.prototype.readDir=function(e){return this.cep.fs.readdir(e)},App.prototype.rename=function(e,t){return this.cep.fs.rename(e,t)},App.prototype.createLocalDir=function(){var e=this.getUserDataPath()+"/"+this.id;this.createDir(e),this.createDir(this.getLogDir())},App.prototype.getLocalDir=function(){return this.getUserDataPath()+"/"+this.id},App.prototype.getLogDir=function(){return this.getLocalDir()+"/log"},App.prototype.getConfigFile=function(){return this.getLocalDir()+"/"+this.id+".conf"},App.prototype.userAgent=function(){return{os:this.getOS(),psver:this.getPSVersion(),installation:this.csInterface.dumpInstallationInfo()}},App.prototype.buildParam=function(e){var t=this.userAgent();for(var r in e)t[r]=e[r];return t},App.prototype.trace=function(e){e.os=this.getOS(),e.psver=this.getPSVersion(),$.get("http://www.cutterman.cn/client/trace",e,function(e){})},App.prototype.showToast=function(e,t){t=void 0==t?2e3:t,$("#toast").html("<span>"+e+"</span>").show().animate({top:"80px"},"fast","swing",function(){setTimeout(function(){$("#toast").animate({top:"-30px"},"fast","swing",function(){$(this).hide()})},t)})},Dialog=function(e,t){var r=null;$("#dialog p").html(e),$("#dialog button").unbind().click(function(){void 0==t&&($("#cover").hide(),$("#dialog").hide()),null!=r&&r()}),$("#dialog button").text(void 0!=t?t:"确定"),this.show=function(e){r=e,$("#cover").show(),$("#dialog").show()},this.hide=function(){$("#cover").hide(),$("#dialog").hide()}},Dialog.show=function(e,t,r){var n=new Dialog(e,r);return t=void 0==t?null:t,n.show(t),n};