/* vim: set et sw=4 ts=4 sts=4 fdm=marker ff=unix fenc=utf8 nobomb: */

/**
 * Config.js
 * 配置文件，依赖base.js
 *
 * @author xiaoqiang
 * @mail   qiang0902@126.com
 * @date
 */

Config = function(instane) {
    this.app = instane;
    this.version = "2.0.1";
    this.email = null;
    this.uid = null;
    this.licence = null;
    this.code = null;
    this.trial_start = null;
    this.name = this.app.id + ".conf";

    this.read();
};

/**
 * 读取本地配置文件
 */
Config.prototype.read = function()
{
    var dir = this.app.getLocalDir();
    var result = this.app.readFile(dir + '/' + this.name);
    if (result.err == 0) {
        var data = JSON.parse(result.data);
        if (data != null) {
            this.version = data.version;
            this.email = data.email;
            this.uid = data.uid;
            this.trial_start = data.trial_start;
            this.licence = data.licence;
            if (data.code != undefined) {
                this.code = data.code;
            }
        } else {
            this.save();
        }
    } else {
        this.save();
    }
};

Config.prototype.isAuth = function()
{
    return (this.code != null || this.licence != null);
};

/**
 * 写入本地配置文件
 */
Config.prototype.save = function()
{
    var dir = this.app.getLocalDir();
    var data = {
        version: this.version,
        email: this.email,
        uid: this.uid,
        licence: this.licence,
        trial_start: this.trial_start,
        code: this.code
    };
    var result = this.app.writeFile(dir + '/' + this.name, JSON.stringify(data));
    if (result.err != 0) {
        this.app.showToast("配置文件写入失败，请连续cut君");
    }

};


/**
 * 删除本地配置文件
 */
Config.prototype.remove = function()
{
    var dir = this.app.getLocalDir();
    this.app.deleteFile(dir + '/' + this.name);
};

