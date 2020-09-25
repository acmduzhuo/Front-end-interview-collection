//简答
// 1、轮询、长轮询、长连接、websocket
// 2、事件委托，减少DOM操作，减少浏览器重绘和重排

//编程：求最大公共字符串
// 首先保证L1 < L2
// var s1, s2;
// var L1=s1.length, L2=s2.length;
// var str = "";
// for(var i=L1;i>0;i--){
//     for(var j=0;j<=L2-i;j++){
//         str = s1.substr(j, i);
//         if(s2.indexOf(str) >= 0){
//             console.log(str);
//         }
//     }
// }

//选择
//1、布局模型
// 流动模型、浮动模型、层模型
//2、 outline属性
//设置四个边框的属性，边框是border外一层
//四个属性outline-color outline-style outline-width inherit
//3、CSS3新样式
// max/min-width/height 最大最小宽高
// border-radius 圆角
// background（image，size，repeat，position，Origin，clip） 背景，可以用图片作为背景
// Gradients 渐变
// text-shadow 字体阴影
// box-shadow 盒子阴影
// word-break 文本单词处理
// transform 2D效果，3D效果
// animation+@keyframes 动画效果
// flex 弹性布局 这个单独写一个文章
// grid 网格布局 这个还没能全普及
// white-space 文本空格处理
//4、看代码说输出
let a = 1;
function foo() {
    this.a = 2;
    let b = () =>{
        console.log(this.a);
    };
    b();//立即执行函数
}
let bar = new foo();//2
console.log(bar.b);//undefined，b未命名