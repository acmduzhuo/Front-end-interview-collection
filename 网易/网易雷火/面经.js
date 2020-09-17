//ready
//1、React-router的原理
// 监听url变化或者重写push.history，在重写的函数里增加回调。
// 这样你就能在url变化的时候获取url，解析url，匹配路径所对应的组件，展示他。

//fist
//1.
//head标签内都放些什么？
//定义在文档的头部，是所有头部元素的容器
//可以引用脚本，指示浏览器在哪里找到样式表、提供元信息等
//<base> 标签为页面上的所有链接规定默认地址或默认目标。
//<link> 标签定义文档与外部资源的关系，最常见的用途是链接样式表。
///<meta> 标签的属性定义了与文档相关联的名称/值对。
//<title> <style> <script>
//2.
//CSS优先级
//! important > 内联样式 > id > class > 标签 > 通配符 > 继承 > 默认

//ready
//1.
//JS的数据类型
//基本数据类型:Number String Boolean Null undefined  Object Symbol BigInt
//Object : function Array Date

//2.
// var a;
// console.log(a);//undefined
//undefined表示变量未初始化，默认值为undefined
// let a;
// console.log(a);//undefined
// const a;
// console.log(a);//SyntaxError
// console.log(typeof undefined);//undefined
// console.log(typeof null);//object

//3.
//判断数组有哪些方法
//(1)
// var a = [1, 2, 3];
// console.log(a instanceof Array);//true
//局限性，必须保证是由原始的Array创建
// Array_1 = window.frames[0].Array;
// a = new Array_1(1, 2, 3);
// console.log(a instanceof Array);//frame产生了新的全局环境

//(2)
// var a = [1, 3, 4];
// console.log(a.constructor === Array);//true
//实例的构造函数属性constructor指向构造函数
//存在问题同上

//（3）
// var a = [1, 2, 3];
// console.log(Object.prototype.toString.call(a));//[object Array]
//很强大，检验函数，数字

//(4)
// var a = [1, 2, 3];
// console.log(Array.isArray(a));//true

//4.
//数组去重，见总结

//5.
//三列等高布局
// 所有列中使用正的上、下padding和负的上、下margin，
// 并在所有列外面加上一个容器，并设置overflow:hiden把溢出背景切掉。

//6.
//变量提升


//second
//1.
//(1) 今后的打算？
//(2) 前端哪些方面吸引我？
//(3) 前端动画方面？ css3(没听清) canvas
//(4) 项目自己动手做得？独立完成？
//(5) PHP也学过？
//(6) PHP Android Java都接触过？前端学习多久了？
//(7) 我的企业管理系统为啥是在6 7月？
//(8) 继续剖析，前后端分离，前端技术，
//(9) 已经决定前端，为啥要学后端？
//(10) 时间上的协调，精力问题？
//(11) JS缺点？

//(12) 给一个字符串，何种方式，如何判断可以转为JSON？
//jQuery插件支持 $.parseJSON(jsonstr); json字符串转换为json对象
//JSON.parse(jsonstr); json转换为json对象
//JSON.stringify(jsonobj); json对象转换为json字符串
//eval('('+ jsonstr +')'); 将json字符串转为json对象
//json官方转换方式 json.js ie7和ie6就可以支持JSON对象以及其stringify()和parse()
//https://www.cnblogs.com/gemeiyi/p/11045640.html
//判断方法
// function isJSON(str) {
//     if (typeof str == 'string') {
//         try {
//             var obj=JSON.parse(str);
//             if(typeof obj == 'object' && obj ){
//                 return true;
//             }else{
//                 return false;
//             }
//         } catch(e) {
//             console.log('error：'+str+'!!!'+e);
//             return false;
//         }
//     }
//     console.log('It is not a string!')
// }


//（13）ajax请求成功状态返回码 200 201

//(14)跨域及跨域解决方法

//(15)简单请求与复杂请求
//简单请求：GET、POST、HEAD
// HTTP的头信息不超出以下几种字段：
// Accept
// Accept-Language
// Content-Language
// Last-Event-ID
// Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
//复杂请求：不符合简单请求的都是复杂请求
//非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。
// 非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。
// 预检请求为OPTIONS请求，用于向服务器请求权限信息的。

//(16)页面加载缓存video

//(17)微信小程序做过吗？微信小程序授权形式
// 一次性授权，需要获取用户公开信息，判断调取授权登录接口，
// 如果拒绝，体验较差

//(18)video的一些事件，比如说，页面上加载一个video，video缓存到十秒或者多少秒之后才可以播放，

//(19)http code

//(20)webpack配置
//打包
//webpack多页面入口文件怎么写