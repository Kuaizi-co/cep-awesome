/**
 * Created by xiaoqiang on 6/2/15.
 * 登录功能，依赖app, config
 */

User = function (app, config) {
    this.app = app;
    this.config = config;
};

/**
 * 初始化登录模块
 */
User.prototype.init = function()
{
    if (this.isLogin()) {
        this.hideLogin();
        if (this.config.licence == null) {
            this.updateLicence();
        }
    } else {
        if (this.app.isNetConnected()) {
            this.showLogin();
        } else {
            this.hideLogin();
            this.config.email = 'account@demo.com';
            this.config.uid = 1000000010;
            this.config.trial_start = (new Date()).getTime()/1000;
            this.config.save();
        }
    }
};

/**
 * 当前用户是否已经登录
 * @returns {boolean}
 */
User.prototype.isLogin = function() {
    return ((this.config.uid != null && this.config.email != null) || this.config.code != null);
};

/**
 * 更新授权
 */
User.prototype.updateLicence = function()
{
    var thiz = this;
    thiz.app.request('http://www.cutterman.cn/client/licence',
        thiz.app.buildParam({email: this.config.email, uid: this.config.uid, app: this.app.id, code: this.config.code}), function(result){
            if (result.errno == 0) {
                thiz.config.email = result.email;
                thiz.config.uid = result.uid;
                if (result.licence != '') {
                    thiz.config.licence = result.licence;
                }
                thiz.config.save();
            }
        });
};

/**
 * 显示登录界面
 */
User.prototype.showLogin = function() {
    $('#login-panel').show();
    $('#main-panel').hide();

    var thiz = this;
    $('#register-btn').click(function() {
        thiz.app.openURL('http://www.cutterman.cn/u/register');
    });

    $('#auth-btn').click(function() {
        $('#login-panel').hide();
        $('#auth-panel').show();
    });

    $('#go-register-btn').click(function() {
        $('#login-panel').show();
        $('#auth-panel').hide();
    });

    $('#submitcode').click(function(){
        var code = $('#authcode').val().trim();
        if (code != '') {
            thiz.app.request('http://www.cutterman.cn/auth/check', thiz.app.buildParam({code: code, app: thiz.app.id}), function(result){
                if (result.errno == 0) {
                    if (result.status == 0) {
                        thiz.config.code = code;
                        thiz.config.email = 'account@demo.com';
                        thiz.config.uid = 1000000010;
                        thiz.config.trial_start = (new Date()).getTime()/1000;
                        thiz.config.save();
                        thiz.app.showToast('登录成功！正在进入');
                        setTimeout(function() { location.reload(true); }, 1000);
                    } else if (result.status == 1) {
                        thiz.app.showToast("授权码不正确，请重试");
                    } else if (result.status == 2) {
                        thiz.app.showToast("授权码已被使用达" + result.max + "次，不能再次使用");
                    } else {
                        thiz.app.showToast("数据提交错误，请联系cut君");
                    }
                } else {
                    thiz.app.showToast("数据提交错误，请联系cut君");
                }
            });
        } else {
            thiz.app.showToast('请输入授权码');
        }
    });

    $('#login-form').submit(function(ev){
        ev.preventDefault();
        var email = $('input[name=email]').val().trim();
        var psw = $('input[name=password]').val().trim();
        if (email == '' || psw == '') {
            thiz.app.showToast('输入不完整！')
            return;
        }

        var regex = /^([0-9A-Za-z\-_\.]+)@(([0-9a-z\.]+)+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        if (regex.test(email)) {
            var url = 'http://www.cutterman.cn/client/login?email='+email;
            thiz.app.request(url, thiz.app.buildParam({email: email, password: psw, app: thiz.app.id}), function(result){
                if (result.errno == 0) {
                    thiz.config.email = result.email;
                    thiz.config.uid = result.uid;
                    if (result.licence != '') {
                        thiz.config.licence = result.licence;
                    }
                    thiz.config.trial_start = result.trial_start;
                    thiz.config.save();
                    thiz.app.showToast('登录成功！正在进入')
                    setTimeout(function() {
                        location.reload(true);
                    }, 1000);
                } else {
                    thiz.app.showToast(result.info);
                }
            });
        } else {
            thiz.app.showToast('邮箱格式不正确！');
        }
    });
};

User.prototype.hideLogin = function()
{
    $('#login-panel').hide();
    $('#main-panel').show();
};

/**
 * 退出登录，删除配置文件
 */
User.prototype.logout = function()
{
    var ret = this.app.deleteLocalDir();
    if (ret.err != 0) {
        this.config.remove();
    }
    location.reload(true);
};


