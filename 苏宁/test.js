//ready
//1.多行元素省略

//2.
//关于三个隐藏的区别
//opacity:0 元素隐藏，但不会改变页面布局，一些事件仍然会触发
//visibility:hidden 元素隐藏，但不会改变页面布局，一些事件也不会触发
//visibility:none 直接消失，页面格式也改变

//first
//1.H5中的媒体标签
//<video> 标签用来播放视频
//属性
//src 地址
//autoplay 是否需要自动播放
//controls 是否需要进度条
//poster 播放之前显示占位图片
//loop 循环播放视频
//preload 预加载视频 优先级小于autoplay
//muted 静音
// width height
//<audio>播放音频
//<marquee>走马灯

//2.实现多个视频播放
//新建个个video，指定播放列表bai的第一个视频路径为src。
// 监听end事件，即一旦该视频播放完毕就回调里面
// 把video的src改成列表的下一个，再play（播放）

//3.<video>支持的格式
// Ogg、MPEG4、WebM
//扩展<audio>支持的格式 Ogg mp3 WAV

//4.title属性
//通常会在鼠标移到元素上时显示一段工具提示文本

//5.alt 属性
// 是一个必需的属性，它规定在图像无法显示时的替代文本。
// 假设由于一些原因（比如网速太慢、src 属性中的错误、浏览器禁用图像、用户使用的是屏幕阅读器）用户无法查看图像
// alt 属性可以为图像提供替代的信息。

//6. CSS选择器

//7.选择父元素下的第一个元素
//CSS中 :first-child   :nth-child(1)（严格要求格式，必须是第二个，且是p） p:nth-of-type(1) （不严格要求，只要是第二个p就好）
// jQuey中： $("div:first")
//JS获取节点， getElementById firstChild（第一个元素，不一定是节点）  firstElementChild

//8.布局网站，上面是通栏，下面是左右布局
// 重点是计算左右两个盒子的宽度和不能超过main盒子宽度

//9.基本类型和引用类型
//区别：
// （1）引用类型的值是可变的，两个变量保存了同一个对象地址，一个改变，另一个也会改变
// （2）引用类型的比较是引用的比较
// var person1 = {};
// var person2 = {};
// console.log(person1 == person2); // false
// （3）引用类型的值是同时保存在栈内存和堆内存中的对象，栈区内存保存变量标识符和指向堆内存中该对象的指针，也可以说是该对象在堆内存的地址。
// 牛客
// 基本数据类型：按值访问，可操作保存在变量中的实际的值。基本类型值指的是简单的数据段。
// 引用类型：当复制保存着对象的某个变量时，操作的是对象的引用，
// 但在为对象添加属性时，操作的是实际的对象。引用类型值指那些可能为多个值构成的对象。

//10.
//简单数组拷贝
var arr = [1, 2, 3, 4];
// var arr = [[1], [2]];
var arr_new = [];
//(0)
// 多维数组浅拷贝
// arr_new = arr;
// console.log(arr_new);
//（1）
// arr_new = [...arr];
// console.log(arr_new);
// arr[0].push(0);
// console.log(arr, arr_new);
//对于多维数组无效，多维数组是赋址 一维数组是赋值

//（2）
// for(var i=0;i<arr.length;i++){
//     arr_new.push(arr[i]);
// }
// console.log(arr_new);
//同样对于多维数组是赋址

//（3）while
// var i = 0;
// while(i<arr.length){
//     arr_new.push(arr[i++]);
// }
// console.log(arr_new);
// 与for类似

//（4）map
// arr_new = arr.map((x) => x);
// console.log(arr_new);//浅拷贝
//另一种写法
// item = (x) => x;
// console.log(arr.map(item));

//（5）Array.filter
//浅拷贝
// arr_new = arr.filter(() => true);
// console.log(arr_new);

//（6）Array.reduce
//浅拷贝
// arrCopy = arr.reduce((arr_new, item)=>{
//     arr_new.push(item);
//     return arr_new;
// },[]);
// console.log(arrCopy);

//（7）
//slice
// arr_new = arr.slice(0, arr.length);
// console.log(arr_new);

//（8）
//JSON.parse与JSON.stringify
//深拷贝
// arr_new = JSON.parse(
//     JSON.stringify(arr)
// );
// console.log(arr_new);

//（9）
// Array.concat
//浅拷贝
// arr_new = arr.concat([])
// console.log(arr_new);

//（10）
// Array.from
//浅拷贝
// arr_new = Array.from(arr);
// console.log(arr_new);

//11.拷贝是一个对象
var obj = {
    x : 1,
    y : 2
};
var obj_new = {};
//(1)最简单的赋值
//浅拷贝
// obj_new = obj;
// console.log(obj_new);

//(2)
// ... 深拷贝
// obj_new = {...obj};
// console.log(obj_new);
// obj.x = 2;
// console.log(obj);
// console.log(obj_new);

//(3)遍历
//深拷贝
// for(var i in obj){
//     if(!obj_new[i]){
//         obj_new[i] = obj[i];
//     }
// }
//另一种递归遍历的写法，见总结

//（4） assign 有可枚举属性的值从一个或多个源对象复制到目标对象
// 深拷贝
// obj_new = Object.assign(obj_new, obj);
// console.log(obj_new);
// obj.x = 3;
// console.log(obj);
// console.log(obj_new);

//(5)JSON
//深拷贝
// obj_new = JSON.parse(
//     JSON.stringify(obj)
// );
// console.log(obj_new);
// obj.x = 3;
// console.log(obj_new);
//缺点在于如果里面有
// 只能枚举自由属性，如果有constructor则会被舍弃
// Date变为字符串
// RegExp Error变为空对象
// undefined消失
// NaN Infinity -Infinity 变为null
// function也不可以

//12.添加事件和移除事件
// addEventListener()和removeEventListener() 接受3个参数：
// type：事件名； 事件类型，比如click mousedown
// callback：事件处理函数；事件触发之后的函数
// capture：事件处理程序调用时机，指定该监听是添加在事件捕获还是事件冒泡阶段，
// true 事件捕获，false 事件冒泡(默认值)
// 形式为：
// addEventListener("事件名" , "事件处理函数" , "布尔值");

//13.addEventListener(click)与onclick区别
// (1)onclick事件在同一时间内只能指向唯一对象
// (2)addEventListener对任何DOM都是有效的，而onclick仅限于HTML
// (3)addEventListener可以控制listener的触发阶段，对于多个相同事件处理器，不会重复触发，不需要手动使用removeEventListener手动清除
// (4)onclick添加多次之后，后面的会覆盖前面的，addEventListener可以给多个事件添加listener

//14.操作DOM节点方法
//访问节点
doucument.getElementById()//指定ID
doucument.getElementsByName()//指定名称节点
doucument.getElementsByTagName()//指定标签名对象
document.getElementsByClassName()//指定class名称对象
//添加节点
doucument.insertBefore()//在某个节点前插入新节点
doucument.appendChild()//给某个节点添加子节点
//复制节点
cloneNode(true|false)//复制某个节点，是否复制原节点所有属性
//删除节点
removeChild()//删除某个节点子节点
//执行之前，需要判断，nodeType是否为1，是否是元素节点类型，
//https://blog.csdn.net/sky786905664/article/details/65444258

//15.原生JS实现指定节点后面增加节点
//
// var header1 = document.getElementById("header");
// var p = document.createElement("p"); // 创建一个元素节点
// insertAfter(p,header1); // 因为js没有直接追加到指定元素后面的方法 所以要自己创建一个方法
// function insertAfter( newElement, targetElement ){ // newElement是要追加的元素 targetElement 是指定元素的位置
//     var parent = targetElement.parentNode; // 找到指定元素的父节点
//     if( parent.lastChild == targetElement ){ // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法
//         parent.appendChild( newElement, targetElement );
//     }else{
//         parent.insertBefore( newElement, targetElement.nextSibling );
//     };
// };