//编程
//1、
//快速计算n!末尾包含0的个数
// function foo(n) {
//     if(n<0){
//         return "Error";
//     } else if(n>=0 && n<5){
//         return 0;
//     } else {
//         var arr = [0,0,0,0,0,0];
//         for(var i=6;i<=n;i++){
//             arr[i] = parseInt(i/5) + arr[parseInt(i/5)];
//         }
//         return arr[n];
//     }
// }
// console.log(foo(10));
//
// var m = 10;
// var sum = 1;
// for(var i=1;i<=m;i++){
//     sum *= i;
// }
// console.log(sum);

//填空
//1、
// for(let i=0;i<10;i++){
//     console.log(parseInt(i/2));
// }

//2、
//JS声明变量的三种方式
//var let const

//3、
//iframe的优缺点
// iframe是一种框架，也是一种很常见的网页嵌入方式
// iframe的优点：
// 1.iframe能够原封不动的把嵌入的网页展现出来。
// 2.如果有多个网页引用iframe，那么你只需要修改iframe的内容，
// 就可以实现调用的每一个页面内容的更改，方便快捷。
// 3.网页如果为了统一风格，头部和版本都是一样的，
// 就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。
// 4.如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。
// iframe的缺点：
// 1.会产生很多页面，不容易管理。
// 2.iframe框架结构有时会让人感到迷惑，如果框架个数多的话，
// 可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差。
// 3.代码复杂，无法被一些搜索引擎索引到，
// 这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe会不利于搜索引擎优化。
// 4.很多的移动设备（PDA 手机）无法完全显示框架，设备兼容性差。
// 5.iframe框架页面会增加服务器的http请求，对于大型网站是不可取的。
//https://www.jianshu.com/p/8fbee843437c

//4、行内元素块级元素，见总结

//5、
//box-sizing 属性，参考牛客网
// 用来盛放页面上的元素矩形区域
// 三个属性：
// 默认属性是content-box 标准盒模型
// padding-box IE盒模型
// box-sizing 这个属性值的宽度包含了左右padding+width

//6、
//split()方法默认将全部字符分割，第二个参数为最多分割子字符串个数
// var str = "ab b aba";
// console.log(str.split('b', 2));//[ 'a', 'a' ]

//7、
// <a>标签中的四个选择器
// link 设置a对象未被访问前的样式属性
// visited 设置a对象在其链接地址已被访问过时的样式属性
// hover 设置鼠标悬停时的样式表属性
// active 设置对象在被用户激活时的样式表属性
// 触发的正确顺序，CSS遵循“就近原则”：link visited hover active

//8、
//background-position 见菜鸟教程
//左上角是0％0％。右下角是100％100％, 如果仅指定了一个值，其他值将是50％默认值为：0％0％

//9、
//flex
//让所有的弹性盒模型的子元素都有相同的长度，且忽略他们内部的内容
//flex-grow、flex-shrink、flex-basis三个属性的缩写。
//flex:1 为 flex-grow:1

//10、
const name = 'name';
const t = {name};
console.log(t);//{ name: 'name' }
