//1.
//打开名为 "window2" 的新窗口的 JavaScript 语法是？
//window.open("http://www.w3school.com.cn","window2")

//2.
//appendChild() 方法可向节点的子节点列表的末尾添加新的子节点即可。

//3.
// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log(this.foo);
//         console.log(self.foo);
//         (function() {
//             console.log(this.foo);
//             console.log(self.foo);
//         }());
//     }
// };
// myObject.func();
// bar
// bar
// undefined
// bar
// 1.第一个this.foo输出bar，因为当前this指向对象myObject。
// 2.第二个self.foo输出bar，因为self是this的副本，同指向myObject对象。
// 3.第三个this.foo输出undefined，因为这个IIFE(立即执行函数表达式)中的this指向window。
// 4.第四个self.foo输出bar，因为这个匿名函数所处的上下文中没有self，所以通过作用域链向上查找，从包含它的父函数中找到了指向myObject对象的self。

//4.
//console.log(2.toString());//SyntaxError
//整数调用toString会报错

//5.
console.log(!![]);//true;
console.log([] == true);//flase 隐式类型转换