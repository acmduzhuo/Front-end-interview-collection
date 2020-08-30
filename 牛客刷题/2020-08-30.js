//1.
//块级元素的总的宽度=左右padding+左右border+内容区的width块级元素的总的宽度=左右padding+左右border+内容区的width

//2.
//以上 javascript 代码执行后， 浏览器 alert 出来的结果分别是
// var color = 'green';
// var test4399 = {
//     color: 'blue',
//     getColor:function() {
//         var color = "red";
//         console.log(color);
//     }
// }
// var getColor = test4399.getColor;
// getColor();
// test4399.getColor();
//green,blue
// function fun() {
//     return 5;
// }
// var a = fun
// var b = fun();
// console.log(a);
// console.log(b);
//[Function: fun]
// 5
//知识点一:js函数调用时加括号和不加括号的区别.
// 不加括号相当于把函数代码赋给等号左边,加括号是把函数返回值赋给等号左边.
// 参考https://www.zhihu.com/question/31044040
// 知识点二:js中this的用法,this总是指向调用它的对象,
// 倒数第二行的getColor为windows调用的,倒数第一行的getColor是test4399对象调用的.
// 参考http://www.cnblogs.com/painsOnline/p/5102359.html

//3.
//在标准的 JavaScript 中， Ajax 异步执行调用基于下面哪一个机制才能实现
//Event和callback
//JavaScript是单线程的，浏览器实现了异步的操作，整个js程序是事件驱动的，每个事件都会绑定相应的回调函数，

//4.
// 保留字，不能作为变量名、标签或者函数名

//5.
//clearTimeout(a);
// 清除setTimeout

//6.
//Math.round(）函数返回一个数字四舍五入后最接近的整数
// 如果参数的小数部分大于0.5，四舍五入到相邻的绝对值更大的整数
// 如果参数的小数部分小于0.5，四舍五入到相邻的绝对值更小的整数
// 如果参数的小数部分等于0.5，四舍五入到相邻的在正无穷（+∞）方向上的整数。

//7.
//以下哪一条Javascript语句会产生运行错误？
//var obj=( ); 语法错误
// var obj=[ ]; 创建一个数组
// var obj={ };创建一个对象
// var obj=/ /;创建一个正则

//8.
//与搜索浏览列表(Browser 对象)有关的对象:
// history screen location Navigator

//9.
//以下哪些操作会触发Reflow：()
// var obj = document.getElementById(“test”);
// alert(obj.className)
// alert(obj.offsetHeight) 1
// obj.style.height = “100px” 1
// obj.style.color = “red”
//整个在浏览器的渲染过程中（页面初始化，用户行为改变界面样式，动画改变界面样式等）
// reflow(回流)和repaint(重绘) 会大大影响web性能，
// 尤其是手机页面。因此我们在页面设计的时候要尽量减少reflow和repaint。
// 什么是reflow和repaint（原文链接：http://www.cnblogs.com/Peng2014/p/4687218.html）
// reflow：例如某个子元素样式发生改变，直接影响到了其父元素以及往上追溯很多祖先元素（包括兄弟元素），
// 这个时候浏览器要重新去渲染这个子元素相关联的所有元素的过程称为回流。
// reflow：几乎是无法避免的。现在界面上流行的一些效果，
// 比如树状目录的折叠、展开（实质上是元素的显 示与隐藏）等，都将引起浏览器的 reflow。
// 鼠标滑过、点击……只要这些行为引起了页面上某些元素的占位面积、定位方式、边距等属性的变化，都会引起它内部、周围甚至整个页面的重新渲 染。
// 通常我们都无法预估浏览器到底会 reflow 哪一部分的代码，它们都彼此相互影响着。
// repaint：如果只是改变某个元素的背景色、文 字颜色、边框颜色等等不影响它周围或内部布局的属性，
// 将只会引起浏览器 repaint（重绘）。repaint 的速度明显快于 reflow
// 下面情况会导致reflow发生
// 1：改变窗口大小
// 2：改变文字大小
// 3：内容的改变，如用户在输入框中敲字
// 4：激活伪类，如:hover
// 5：操作class属性
// 6：脚本操作DOM
// 7：计算offsetWidth和offsetHeight
// 8：设置style属性

//10.
//History 对象包含用户（在浏览器窗口中）访问过的 URL
// Location 对象包含有关当前 URL 的信息
// Window 对象表示浏览器中打开的窗口
// Navigator 对象包含有关浏览器的信息

//11.
//下列代码，页面打开后能够弹出alert(1)的是？
//<iframe src=”javascript: alert(1)”></iframe> 加载时弹出
// <img src=”” onerror=”alert(1)”/> 图片不存在时
// IE下<s style=”top:expression(alert(1))”></s> expression，用来把CSS属性和Javascript表达式关联起来
// <div onclick=”alert(1)”></div>因为div里没有内容，盒子的宽度为0所以点击不了的