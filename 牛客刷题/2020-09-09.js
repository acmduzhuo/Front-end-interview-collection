//1.
// var reg = /((0\d)|(1[0-2]))/;
// console.log(reg.test('01'));

//2.
//假设 output 是一个函数，输出一行文本。下面的语句输出结果是什么？
// output(typeof (function() {output(“Hello World!”)})());
// console.log(typeof(function () {
//     console.log("Hello World!");
// })());
// Hello World!
// undefined
// 先执行立即执行函数，然后输出数据，函数执行后无返回值，所以是undefined

//3.
// var foo=function(x,y){
//     return x-y;
// }
// function foo(x,y){
//     return x+y;
// }
// var num=foo(1,2);
// console.log(num);//-1
// 变量声明、函数声明都会被提升到作用域顶处；
// 当出现相同名称时，优先级为：变量声明(foo#1) < 函数声明(foo#2) < 变量赋值(foo#3)

//4.
//以下哪些正则表达式满足regexp.test('abc') === true？
// /^abc$/
// /...(?=.)/
// /[ab]{2}[^defgh]/
// /[defgh]*/
console.log(/[defgh]*/.test(''));//true //很无用的写法