"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var cheerio = require('cheerio');
var download = require('download');
// 导入Spider父类
var Spider_1 = require("./Spider");
var TeacherPhotos = /** @class */ (function (_super) {
    __extends(TeacherPhotos, _super);
    function TeacherPhotos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 实现抽象方法
    TeacherPhotos.prototype.onCatchHTML = function (result) {
        // 根据html的img标签src属性来下载图片
        var $ = cheerio.load(result);
        var imgs = Array.prototype.map.call($('.maincon .main_pic > img'), function (item) { return encodeURI("http://web.itheima.com/" + $(item).attr('src')); });
        Promise.all(imgs.map(function (x) { return download(x, 'dist'); })).then(function () {
            console.log("---------------- files donwloaded! ----------------");
        });
    };
    return TeacherPhotos;
}(Spider_1["default"]));
exports["default"] = TeacherPhotos;
