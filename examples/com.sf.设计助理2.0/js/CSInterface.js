function CSXSWindowType() {}
function Version(e, t, n, o) {
    this.major = e,
    this.minor = t,
    this.micro = n,
    this.special = o
}
function VersionBound(e, t) {
    this.version = e,
    this.inclusive = t
}
function VersionRange(e, t) {
    this.lowerBound = e,
    this.upperBound = t
}
function Runtime(e, t) {
    this.name = e,
    this.versionRange = t
}
function Extension(e, t, n, o, i, r, a, s, p, c, _, d, u, f, h, S) {
    this.id = e,
    this.name = t,
    this.mainPath = n,
    this.basePath = o,
    this.windowType = i,
    this.width = r,
    this.height = a,
    this.minWidth = s,
    this.minHeight = p,
    this.maxWidth = c,
    this.maxHeight = _,
    this.defaultExtensionDataXml = d,
    this.specialExtensionDataXml = u,
    this.requiredRuntimeList = f,
    this.isAutoVisible = h,
    this.isPluginExtension = S
}
function CSEvent(e, t, n, o) {
    this.type = e,
    this.scope = t,
    this.appId = n,
    this.extensionId = o
}
function SystemPath() {}
function ColorType() {}
function RGBColor(e, t, n, o) {
    this.red = e,
    this.green = t,
    this.blue = n,
    this.alpha = o
}
function Direction(e, t) {
    this.x = e,
    this.y = t
}
function GradientStop(e, t) {
    this.offset = e,
    this.rgbColor = t
}
function GradientColor(e, t, n, o) {
    this.type = e,
    this.direction = t,
    this.numStops = n,
    this.arrGradientStop = o
}
function UIColor(e, t, n) {
    this.type = e,
    this.antialiasLevel = t,
    this.color = n
}
function AppSkinInfo(e, t, n, o, i, r, a) {
    this.baseFontFamily = e,
    this.baseFontSize = t,
    this.appBarBackgroundColor = n,
    this.panelBackgroundColor = o,
    this.appBarBackgroundColorSRGB = i,
    this.panelBackgroundColorSRGB = r,
    this.systemHighlightColor = a
}
function HostEnvironment(e, t, n, o, i, r, a) {
    this.appName = e,
    this.appVersion = t,
    this.appLocale = n,
    this.appUILocale = o,
    this.appId = i,
    this.isAppOnline = r,
    this.appSkinInfo = a
}
function HostCapabilities(e, t, n, o, i) {
    this.EXTENDED_PANEL_MENU = e,
    this.EXTENDED_PANEL_ICONS = t,
    this.DELEGATE_APE_ENGINE = n,
    this.SUPPORT_HTML_EXTENSIONS = o,
    this.DISABLE_FLASH_EXTENSIONS = i
}
function ApiVersion(e, t, n) {
    this.major = e,
    this.minor = t,
    this.micro = n
}
function MenuItemStatus(e, t, n) {
    this.menuItemLabel = e,
    this.enabled = t,
    this.checked = n
}
function ContextMenuItemStatus(e, t, n) {
    this.menuItemID = e,
    this.enabled = t,
    this.checked = n
}
function CSInterface() {}
CSXSWindowType._PANEL = "Panel",
CSXSWindowType._MODELESS = "Modeless",
CSXSWindowType._MODAL_DIALOG = "ModalDialog",
EvalScript_ErrMessage = "EvalScript error.",
Version.MAX_NUM = 999999999,
CSEvent.prototype.data = "",
SystemPath.USER_DATA = "userData",
SystemPath.COMMON_FILES = "commonFiles",
SystemPath.MY_DOCUMENTS = "myDocuments",
SystemPath.APPLICATION = "application",
SystemPath.EXTENSION = "extension",
SystemPath.HOST_APPLICATION = "hostApplication",
ColorType.RGB = "rgb",
ColorType.GRADIENT = "gradient",
ColorType.NONE = "none",
CSInterface.THEME_COLOR_CHANGED_EVENT = "com.adobe.csxs.events.ThemeColorChanged",
CSInterface.prototype.hostEnvironment = JSON.parse(window.__adobe_cep__.getHostEnvironment()),
CSInterface.prototype.getHostEnvironment = function() {
    return this.hostEnvironment = JSON.parse(window.__adobe_cep__.getHostEnvironment()),
    this.hostEnvironment
},
CSInterface.prototype.closeExtension = function() {
    window.__adobe_cep__.closeExtension()
},
CSInterface.prototype.getSystemPath = function(e) {
    var t = decodeURI(window.__adobe_cep__.getSystemPath(e)),
    n = this.getOSInformation();
    return n.indexOf("Windows") >= 0 ? t = t.replace("file:///", "") : n.indexOf("Mac") >= 0 && (t = t.replace("file://", "")),
    t
},
CSInterface.prototype.evalScript = function(e, t) {
    null != t && null != t || (t = function(e) {}),
    window.__adobe_cep__.evalScript(e, t)
},
CSInterface.prototype.getApplicationID = function() {
    var e = this.hostEnvironment.appId;
    return e
},
CSInterface.prototype.getHostCapabilities = function() {
    var e = JSON.parse(window.__adobe_cep__.getHostCapabilities());
    return e
},
CSInterface.prototype.dispatchEvent = function(e) {
    "object" == typeof e.data && (e.data = JSON.stringify(e.data)),
    window.__adobe_cep__.dispatchEvent(e)
},
CSInterface.prototype.addEventListener = function(e, t, n) {
    window.__adobe_cep__.addEventListener(e, t, n)
},
CSInterface.prototype.removeEventListener = function(e, t, n) {
    window.__adobe_cep__.removeEventListener(e, t, n)
},
CSInterface.prototype.requestOpenExtension = function(e, t) {
    window.__adobe_cep__.requestOpenExtension(e, t)
},
CSInterface.prototype.getExtensions = function(e) {
    var t = JSON.stringify(e),
    n = window.__adobe_cep__.getExtensions(t),
    o = JSON.parse(n);
    return o
},
CSInterface.prototype.getNetworkPreferences = function() {
    var e = window.__adobe_cep__.getNetworkPreferences(),
    t = JSON.parse(e);
    return t
},
CSInterface.prototype.initResourceBundle = function() {
    for (var e = JSON.parse(window.__adobe_cep__.initResourceBundle()), t = document.querySelectorAll("[data-locale]"), n = 0; n < t.length; n++) {
        var o = t[n],
        i = o.getAttribute("data-locale");
        if (i) for (var r in e) if (0 == r.indexOf(i)) {
            var a = e[r];
            if (r.length == i.length) o.innerHTML = a;
            else if ("." == r.charAt(i.length)) {
                var s = r.substring(i.length + 1);
                o[s] = a
            }
        }
    }
    return e
},
CSInterface.prototype.dumpInstallationInfo = function() {
    return window.__adobe_cep__.dumpInstallationInfo()
},
CSInterface.prototype.getOSInformation = function() {
    var e = navigator.userAgent;
    if ("Win32" == navigator.platform || "Windows" == navigator.platform) {
        var t = "Windows",
        n = "";
        return e.indexOf("Windows") > -1 && (e.indexOf("Windows NT 5.0") > -1 ? t = "Windows 2000 ": e.indexOf("Windows NT 5.1") > -1 ? t = "Windows XP ": e.indexOf("Windows NT 5.2") > -1 ? t = "Windows Server 2003 ": e.indexOf("Windows NT 6.0") > -1 ? t = "Windows Vista ": e.indexOf("Windows NT 6.1") > -1 ? t = "Windows 7 ": e.indexOf("Windows NT 6.2") > -1 && (t = "Windows 8 "), n = e.indexOf("WOW64") > -1 ? "64-bit": "32-bit"),
        t + n
    }
    if ("MacIntel" == navigator.platform || "Macintosh" == navigator.platform) {
        var o = "Mac OS X",
        i = new String;
        if (i = e, i.indexOf("Mac OS X") > -1) {
            var r = i.indexOf(")") - i.indexOf("Mac OS X"),
            a = i.substr(i.indexOf("Mac OS X"), r);
            o = a.replace("_", "."),
            o = o.replace("_", ".")
        }
        return o
    }
    return "Unknown Operation System"
},
CSInterface.prototype.openURLInDefaultBrowser = function(e) {
    return cep.util.openURLInDefaultBrowser(e)
},
CSInterface.prototype.getExtensionID = function() {
    return window.__adobe_cep__.getExtensionId()
},
CSInterface.prototype.getScaleFactor = function() {
    return window.__adobe_cep__.getScaleFactor()
},
CSInterface.prototype.setScaleFactorChangedHandler = function(e) {
    window.__adobe_cep__.setScaleFactorChangedHandler(e)
},
CSInterface.prototype.getCurrentApiVersion = function() {
    var e = JSON.parse(window.__adobe_cep__.getCurrentApiVersion());
    return e
},
CSInterface.prototype.setPanelFlyoutMenu = function(e) {
    "string" == typeof e && window.__adobe_cep__.invokeSync("setPanelFlyoutMenu", e)
},
CSInterface.prototype.updatePanelMenuItem = function(e, t, n) {
    var o = !1;
    if (this.getHostCapabilities().EXTENDED_PANEL_MENU) {
        var i = new MenuItemStatus(e, t, n);
        o = window.__adobe_cep__.invokeSync("updatePanelMenuItem", JSON.stringify(i))
    }
    return o
},
CSInterface.prototype.setContextMenu = function(e, t) {
    "string" == typeof e && window.__adobe_cep__.invokeAsync("setContextMenu", e, t)
},
CSInterface.prototype.setContextMenuByJSON = function(e, t) {
    "string" == typeof e && window.__adobe_cep__.invokeAsync("setContextMenuByJSON", e, t)
},
CSInterface.prototype.updateContextMenuItem = function(e, t, n) {
    var o = new ContextMenuItemStatus(e, t, n);
    ret = window.__adobe_cep__.invokeSync("updateContextMenuItem", JSON.stringify(o))
},
CSInterface.prototype.isWindowVisible = function() {
    return window.__adobe_cep__.invokeSync("isWindowVisible", "")
},
CSInterface.prototype.resizeContent = function(e, t) {
    window.__adobe_cep__.resizeContent(e, t)
};