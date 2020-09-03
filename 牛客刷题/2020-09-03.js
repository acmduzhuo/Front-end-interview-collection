//1.
//以下 javascript 代码，在浏览器中运行的结果是
// function foo() {
//     console.log('first');
//     setTimeout(function () {
//         console.log('second');
//     }, 5);
// }
// for(var i=0;i<439999999;i++){
//     foo();
// }
//首先全部输出first，然后全部输出second

//2.
//如果需要匹配包含文本的元素，用下面哪种方法来实现？
// text() jQuery中的方法，可是设置或返回被选元素的文本内容
// contains()选择器，选取包含指定字符串的元素，字符串也可以是文本
// input()
// attr(name)是设置或获得元素的属性

//3.
// var arr = [2, 4, 1, 5];
// console.log(Math.max(arr));//NaN
// console.log(Math.max(arr[0], arr[1], arr[2], arr[3]));//5
// console.log(Math.max.call(Math, arr[0], arr[1], arr[2], arr[3]));//5
// console.log(Math.max.apply(Math, arr));//5

//4.
// var a = 10.42;
// console.log(parseInt(a));//10
// console.log(Math.floor(a));//10
// console.log(Math.ceil(a));//11
// console.log(a.split('.')[0]);//TypeError 只对字符串有效

//5.
//stopPropagation 仅阻止事件冒泡
//stopImmediatePropagation 会彻底地阻止事件
//preventDefault 阻止事件的默认动作

//6.
// 页面的性能指标详解：
// 白屏时间（first Paint Time）——用户从打开页面开始到页面开始有东西呈现为止
// 首屏时间——用户浏览器首屏内所有内容都呈现出来所花费的时间
// 用户可操作时间(dom Interactive)——用户可以进行正常的点击、输入等操作，默认可以统计domready时间，因为通常会在这时候绑定事件操作
// 总下载时间——页面所有资源都加载完成并呈现出来所花的时间，即页面 onload 的时间

//7.
//noscript元素的内容只有在下列情况下才会显示出来
// 1.浏览器不支持脚本
// 2.浏览器支持脚本，但脚本被禁用

//8.
//<html>
// <body>
//  <div id="ele" class="div">
//  <span id="s1" class="sp" lang="zh-cn">
//  </span>
//  </div>
// </body>
// <script type="text/javascript">
//  function exct() {
//     var oEle = document.getElementById("ele");
//     var child = oEle.children;
//     console.log("ele.children的执行结果是:");
//     for(i = 0; i < child.length; i++){
//        console.log(child[i].tagName);
//     }
//     child = oEle.childNodes;
//     console.log("ele.childNodes的执行结果是:");
//     for(i = 0; i < child.length; i++){
//        console.log(child[i].tagName);
//     }
//  }
//  exct ();
// </script>
// </html>
//其运行结果是：
// div1.children的执行结果是:
// SPAN
// div1.childNodes的执行结果是:
// undefined
// SPAN
// undefined
// 对于DOM元素，children是指DOM Object类型的子对象，不包括tag之间隐形存在的TextNode，
// 而childNodes包括tag之间隐形存在的TextNode对象
//
//span是一个元素节点，还有两个文本节点：空格和换行都被看做一个文本节点。
// 所以，3个子节点 = 两个文本节点 + 一个元素节点。
// tagName用来获取元素的标签名，文本节点没有标签名，所以也就为undefined了