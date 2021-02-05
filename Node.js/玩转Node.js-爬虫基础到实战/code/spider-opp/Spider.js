"use strict";
// 目的：希望将来写爬虫的时候，来一个类继承父类，然后在子类中处理得到的结果即可
exports.__esModule = true;
var http = require('http');
var Spider = /** @class */ (function () {
    // 使用接口定义options的成员
    function Spider(options) {
        if (options === void 0) { options = { url: '', method: 'get' }; }
        // 初始化
        this.options = options;
        this.start();
    }
    Spider.prototype.start = function () {
        var _this = this;
        // 创建请求对象
        var req = http.request(this.options.url, {
            headers: this.options.headers,
            method: this.options.method
        }, function (res) {
            var chunks = [];
            res.on('data', function (c) { return chunks.push(c); });
            res.on('end', function () {
                var result = Buffer.concat(chunks).toString('utf-8');
                _this.onCatchHTML(result);
            });
        });
        // 发送请求
        req.end();
    };
    return Spider;
}());
exports["default"] = Spider;
