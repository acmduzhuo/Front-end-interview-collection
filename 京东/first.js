//ready
//1、
// console.log(Object instanceof Array);//false
// console.log(Array instanceof Object);//true
// console.log(Object instanceof Object);//true
// console.log(Array instanceof Array);//false

//2、
//手写bind函数
// Function.prototype.my_bind = function(context) {
//     var args = Array.prototype.slice.call(arguments, 1);
//     var self = this;
//     return function () {
//         var innerArgs = Array.prototype.slice.call(arguments);
//         var finalArgs = args.concat(innerArgs);
//         return self.apply(context, finalArgs);
//     }
// };
//
// function f(y, z){
//     return this.x + y + z;
// }
// var m = f.my_bind({x : 1}, 2);
// var mm = f.bind({x : 1}, 2);
// console.log(m(3));//6
// console.log(mm(3));//6

//3、
//严格模式`use strict`
//不是一条语句，是一种字面量表达式，在JS旧版本会被忽略
//以此来消除代码运行的一些不安全之处，保证代码运行的安全
//提高编译器效率，增加运行速度
//为未来新版本的JS做好铺垫
//使得JS朝着更合理、更安全、更严谨的方向发展
//大多数主流浏览器都已经支持

//4、实例化对象之后一般干什么
// var newObj = {};
// newObj.__proto__ = obj.prototype;
// obj.call(newObj);