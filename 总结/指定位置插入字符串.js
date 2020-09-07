//为指定位置插入新的字符
//方法一，不推荐，需要替换的位置不够灵活
// var str = 'aaa_bbb';//原字符串
// var reg = /_/g;//需要替换的位置
// var inserStr = "ccc_";//目标字符串
// console.log(str.replace(reg, "_"+inserStr));
//方法二
// String.prototype.splice = function (start, newStr) {
//     return this.slice(0, start) + newStr + this.slice(start);
// };
// var index = 'aaa_bbb'.indexOf('_');
// var str = 'aaa_bbb'.splice(index+1, 'ccc_');
// console.log(str);