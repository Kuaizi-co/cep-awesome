
/*
 * mock up data for brwoser
 * xiaoqiang
 */

var baseFontFamily = ".AppleSystemUIFont";
var baseFontSize = 10;
var appBarBackgroundColor = {type: 1, antialiasLevel: 0, color: {alpha: 255, green: 240, blue: 240, red: 240}};
var panelBackgroundColor = {type: 1, antialiasLevel:0, color: {alpha: 255, green: 240, blue: 240, red: 240}};
var systemHighlightColor = {alpha: 255, green: 180, blue: 184, red: 241};

window.__adobe_cep__ = {
    getHostEnvironment: function() {
        return JSON.stringify({
            appId: 'PHXS',
            appLocale: "en_US",
            appName: "PHXS",
            appUILocale: "en_US",
            appVersion: "20.0.2",
            isAppOnline: true,
            appSkinInfo: {
                baseFontFamily: baseFontFamily, 
                baseFontSize: baseFontSize, 
                appBarBackgroundColor: appBarBackgroundColor, 
                panelBackgroundColor: panelBackgroundColor, 
                appBarBackgroundColorSRGB: appBarBackgroundColor, 
                panelBackgroundColorSRGB: panelBackgroundColor, 
                systemHighlightColor: systemHighlightColor
            }
        })
    },
    getOSInformation: function() {
        return 'Mac OS X 10.14.1';
    }

};
