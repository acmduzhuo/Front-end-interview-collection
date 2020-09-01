//1.
//创建Array对象的语法
//var arr = [1,2,3];
//var arr = new Array(1, 2, 3);
//var arr = new Array(12);//声明长度
// var arr = new Array(0);//[]清空数组
// console.log(arr);

//2.
//document.write 需要向文档流中写入内容，
// 所以，若在一个已完成加载的文档上调用 document.write，
// 就会自动调用 document.open，这将清空该文档已加载的内容。

//3.
// function add(c, d) {
//     return this.a + this.b + c +d;
// }
// var o = {a:1, b:3};
// console.log(add.call(o, 5, 7));//16
// console.log(add.apply(o, [10,20]));//34

//4.
// function A(x){
//     this.x = x;
// }
// A.prototype.x = 1;
//
// function B(x){
//     this.x = x;
// }
// B.prototype = new A();
// var a = new A(2), b = new B(3);
// delete b.x;
// console.log(a.x, b.x);//2 undefined

//5.
//"JavaScript内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。" 