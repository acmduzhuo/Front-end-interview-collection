//1.
//HTML元素脱离文档流的方法：
//定义 脱离文档流之后，将不再问的那个流之中占据空间，而是出于浮动状态，可以理解为漂浮在文档流上方
//top: 0;
//完全脱离文档流，相对于浏览器窗口进行定位。（相对于浏览器窗口
// //float: left;
// //使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，环绕在该元素的周围。
// //position: absolute;
// //right: 0;
// //top: 0;
// //因为使用absolute脱离文档流后的元素，是相对于该元素的父类（及以上，如果直系父类元素不满足条件则继续向上查询）元素进行定位的，
// // 并且这个父类元素的position必须是非static定位的
// //position: fixed;
// //right: 0;就是相对于html
//https://www.cnblogs.com/ning123/p/11011845.html

//2.
//度 = 边
//入度&出度

//3.
//Proxy 对象拦截器
//增删改查都会被拦截
//https://blog.csdn.net/weixin_42724176/article/details/104811337

//4.死锁一定是不安全状态

//5.
//数据库中只能有一个主索引
//多个普通索引、唯一索引、候补索引

//6.
//检测是否支持Worker
// if((typeof Worker) !== 'undefined'){
//     //支持Worker
// }

//7.
//查看本机DNS
//ipconfig/all

//8.
//JSON格式化方法：
//stringify()
//parse()
//jquery.json-view.js
//JSONView