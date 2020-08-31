//1.
//关于javascript，以下选项描述错误的是
// A在原型上扩展的可枚举方法，会被for in循环出来
// B使用object.defineProperty可向对象添加或者修改属性
//争议：大写O
// C每个对象都有prototype属性，返回对象类型原型的引用
//争议
// var obj = Object.create(null)
// console.log(obj);
//[Object: null prototype] {}
// D通过hasOwnProperty可判断一个对象以及其原型链上是否具有指定名称的属性
//相比之下， hasOwnProperty(..) 只会检查属性是否在myObject 对象中，不会检查[[Prototype]] 链。
// E原型链是JS实现继承的一种模型
// FFor循环是按顺序的，for in 循环是不一定按顺序的
// var arr = {
//     name: '小明',
//     age: 11,
//     family :{
//         mom : 49,
//         dad : 47
//     }
// };
// Object.defineProperty(arr, 'color', {
//     value: 'black'
// });
// Object.defineProperty(arr, 'age', {
//     value: 12
// });
// Object.defineProperty(arr, 'family', {
//     value :{
//         mom : 50,
//         dad : 48
//     }
// });
// console.log(arr.color);//black
// console.log(arr.age);//12
// console.log(arr.family);

//2.
//下列代码存在几个变量没有被回收？
// var i = 1;
// var i = 2;
// var add = function() {
//     var i = 0;
//     return function()
//     {
//         i++;
//         console.log(i);
//     }
// }();
// add();

// 3.
//代码回收规则如下：
// 1.全局变量不会被回收。
// 2.局部变量会被回收，也就是函数一旦运行完以后，函数内部的东西都会被销毁。
// 3.只要被另外一个作用域所引用就不会被回收
// 首先是全局变量中的i，第二行会覆盖掉第一行，因此只有1个。
// 第二个是var add，这个变量也没有回收，他定义了一个匿名函数，并将它赋给了add。
// 第三个就是闭包中的变量i，闭包中的局部变量是不会被回收的

//4.
//页面有一个按钮button id为 button1，通过原生的js如何禁用？(IE 考虑IE 8.0以上版本)
//document.getElementById("button1").disabled = true;
//document.getElementById("button1").setAttribute(“disabled”,”true”);

//5.
// readystatechange 读取状态变化
// pageshow 页面展示
// beforeunload 页面退出
// DOMContentLoaded dom内容加载完成