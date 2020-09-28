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