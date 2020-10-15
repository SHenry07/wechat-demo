"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTime = void 0;
/**
 * 数字格式化
 * @param n 整数
 */
function formatNumber(n) {
    var str = n.toString();
    return str[1] ? str : "0" + str;
}
/**
 * 日期格式化
 * @param date
 */
function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return ([year, month, day].map(formatNumber).join("/") +
        " " +
        [hour, minute, second].map(formatNumber).join(":"));
}
exports.formatTime = formatTime;

//# sourceMappingURL=date.js.map
