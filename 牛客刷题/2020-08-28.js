// 1.
// 如何获取下面表单 select域的选择部分的文本？
// <form name="formA">
//     <select name="a" size="1" id=”obj”>
// <option value="a">1</option>
//     <option value="b">2</option>
//     <option value="c">3</option>
//     </select>
//     </form>
//obj.options[obj.selectedIndex].text
//文本 text

//2.
// var a = 4399<0 || typeof (4339+'');
// console.log(a);//string
//以下 javascript 代码，在浏览器中运行的结果是（）
// 4399<0 为false， 4399+''为string, 短路或||看后者

//3.
//正则表达式
// \w匹配字母数字或下划线
// ？匹配0个或者1个
// \1表示对第一个捕获组的引用，
// i忽略大小写

//4.
//在jquery中想要实现通过远程http get请求载入信息功能的是下面的哪一下事件？
//$.get(url)
// A.ajax() 方法通过 HTTP 请求加载远程数据。$.ajax(opts);opts为json格式，常见参数url、type、data等。
// PS:$.ajax({
//   method: 'GET',
//   url: '',
//   dataType: 'json',
//   success: function(){},
//   error: function() {}
// })
// 也可以实现get请求
// B.load() 方法从服务器加载数据，并把返回的数据放入被选元素中。$(selector).load(URL,data,callback);
// 必需的 URL 参数规定您希望加载的 URL。
// 可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。
// 可选的 callback 参数是 load() 方法完成后所执行的函数名称。
// C.$.get() 方法通过 HTTP GET 请求从服务器上请求数据。
// $.get(URL,callback);
// 必需的 URL 参数规定您希望请求的 URL。
// 可选的 callback 参数是请求成功后所执行的函数名。
// D.getScript() 方法通过 HTTP GET 请求载入并执行 JavaScript 文件。
// jQuery.getScript(url,success(response,status));

//5.
// 该代码在浏览器中执行，输出的日志结果是什么？
// var obj = {};
// obj.log = console.log;
// obj.log.call(console,this);
//window
//call方法是用来改变this指向的，调用该方法的obj方法log中的this不再指向obj。没用明确指向的this都指向顶层对象window
//至于第一个参数为什么是console而不是this，console被按照this处理了，替换后的执行结果相同

//6.
// for(var i = 0; i < 5; i++){
//     requestAnimationFrame(() => console.log(i));
// }
//5 5 5 5 5
//所以for循环中的requestAnimationFrame会在循环退出的时候才执行其中的回调，注意循环退出的时候 i 的值为 5.

//7.
// var arr = [1, 2, 3];
// console.log(Array.isArray(arr));//true; 原生对象undefined、null、string、数字number、布尔值boolean、对象Object、函数Function、日期Date、数组Array、错误Error、正则RegExp、Math、JSON、全局对象window和arguments
// console.log(arr instanceof Array);//true
// console.log(typeof arr);//object   typeof 能判断类型有：number、string、boolean、symbol、undefined、function；   object、array、null 的变量都返回 object
// console.log(Object.prototype.toString.call([1, 2, 3]));//[object Array]

//8.
// function Foo(){
//     console.log(this.location);
// }
// Foo();
//结果为undefined
//'use strict'条件下，会报TypeError
// 无'use strict'下，this指向window

//9.
// function Foo(){
//     var i=0;
//     return function(){
//         document.write(i++);
//     }
// }
// var f1=Foo(),
//     f2=Foo();
// f1();
// f1();
// f2();
//输出为0 1 0
// f1(),f2()分别创建了自己的执行环境，所以它们两个是相互独立的，
// 执行之后都会返回一个匿名函数，这个匿名函数的作用域链被初始化为其包含函数的活动对象(这里也就是i)和全局变量对象，
// f1执行之后i并不会销毁，因为返回的匿名函数还要引用i，i仍然在内存中，所以执行两次之后i的值变成了1，而f2执行之后i为0

//10.
//以下代码执行时不会在控制台输出错误信息的是：
//A let a = decodeURIComponent('%');
//必需。一个字符串，含有编码 URI 组件或其他要解码的文本。
//B var a;
// a();
// function a() {
// console.log(a);
// }
//变量提升，不会报错
//C Promise.reject(123).finally(a => {
// console.log(a);
// });
//会发来错误reject
//D var a = 1;
// let a = 2;
// console.log(a);
//let的话重复定义会报错。

//11.
//call与apply
//apply()函数有两个参数，第一个参数是上下文，第二个参数是参数组成的数组
//如果第一个参数是null，则使用全局对象替代
//call和apply的意思一样，不过是参数列表一样
//通过apply可以将数组转换为参数列表的集合

//12.
// JS中的function能访问它们的参数、局部变量或函数、全局变量、外部函数的变量或函数

//13.
//每个对象都具有一个名为__proto__的属性
//[[prototype]]是对象的私有属性，而prototype却是只有函数才有的属性
//每个对象的__proto__属性指向自身构造函数的prototype,Object.create(null)创建的对象没有__proto__吧c除外
//对象不具有prototype属性，只有函数才有prototype属性
var a;
a();
function a() {
    console.log(a);
}