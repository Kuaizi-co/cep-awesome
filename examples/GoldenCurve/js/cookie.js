/**
 * Created by xiaoqiang on 6/12/15.
 */

Cookie = function(instance) {
    this.app = instance;
    this.data = {};
    this.file = this.app.getLocalDir() + "/cookie.json";
    var result = this.app.readFile(this.file);
    if (result.err == 0) {
        this.data = JSON.parse(result.data);
    } else {
        this.save();
    }

};

Cookie.prototype.set = function(key, value, expireDay)
{
    var exp = expireDay*24*3600*1000 + (new Date()).getTime();
    this.data[key] = {value: value, expire: exp};
    this.save();
};

Cookie.prototype.get = function(key)
{
    if (this.data[key] != undefined) {
        var item = this.data[key];
        if (parseInt(item.expire) > (new Date()).getTime()) {
            return item.value;
        } else {
            delete this.data[key];
            this.save();
        }
    }
    return null;
};

Cookie.prototype.clear = function()
{
    this.data = {};
    this.save();
}

Cookie.prototype.save = function()
{
    var result = this.app.writeFile(this.file, JSON.stringify(this.data));
    if (result.err != 0) {
        console.log('save cookie failed');
    }
};
