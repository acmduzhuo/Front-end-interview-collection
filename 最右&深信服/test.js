//1.
//console.log(typeof NaN);//number

//2.
// 协议、域名、端口相同，但是路径不同，不属于跨域

//3.
// let xx = {san : 100};
// Object.defineProperty(xx, 'san', {
//     get(){
//         return 200;
//     },
// });
// xx.san = 300;
// console.log(xx.san);//200

//4.
//查看服务器是否开放某个端口
//ss -Intup|grep (端口号)
//netstat -Intup|grep (端口号)
//lsof -i:(端口号)
//telent (IP)(端口号)
//nc (IP)(端口号)
//nmp -p (端口号)(IP)
//netcat -vv (IP)(端口号)

//5.
//https出现安全警告的原因有：
//(1)网站SSL证书过期或者被吊销
//(2)网站采用的SSL证书并非安全机构颁发
//(3)网站调用了http页面的信息
//(4)SSl安装证书没有安装成功
//分为三种情况：
//证书不被信任，证书过期，证书名称无效或者不匹配

//6.
//Content-length
//描述HTTP消息实体的传输长度，长度与传输长度不同，
//长度代表处理之前的消息实体长度，传输长度代表处理之后消息实体的长度
//存在了Transfer-Encodeing就不能存在Content-Length

//7.
// console.log(null === null);//true
// console.log(undefined === undefined);//true
// console.log(Symbol.for('a') === Symbol.for('a'));//true;

//8.
//CSS画圆
//宽高为100px边框，变为圆形
//border-radius : 50%
//记忆：一半

//9.
//会话管理机制存在漏洞分为两类：
//(1)会话令牌生成过程中的薄弱环节
//(2)在整个声明周期中处理会话令牌薄弱环节

//10.
//1rem = 16px
//px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的
//em是相对长度单位。相对于当前对象内文本的字体尺寸
//rem相对的只是HTML根元素

//11.
// Function.prototype.san = function () {
//     return Function.prototype.call.bind(this);
// };
// console.log(Array.prototype.push.san()([], 1, 2));
// var san  = Function.prototype.call.bind(Array.prototype.push);
// console.log(san([], 1, 2));

// console.log([].push(1, 2));//返回新长度
// console.log(Array.prototype.push([], 1, 2));
// console.log(Array.prototype.join.call('abc', '|'));
// console.log([1, 2, 3].join('|'));
// var arr = [1, 2, 3, 4];
// console.log(arr.slice());
// console.log('abc'.join('|'));
// console.log(Array.prototype.join.call('abc', '|'));

//12.
// let oo = {
//     // _san : 10,
//     get san(){
//         console.log('get');
//         // return this._san
//     },
//     set san(x){
//         //this._san = x;
//         console.log('set');
//     }
// };
// // console.log(oo.san);
// oo.san = '100';
// console.log(oo.san);
// // set
// // get
// // undefined

//13.
// function San() {}
// let a = new San();
// San.prototype.name = 300;
// console.log(a.name);//300

//14.
// function f(a = 1) {
//     console.log(a);
// }
// f();//1
// f(undefined);//1
// f(null);//null
// f(false);//false

//15.
//常见的垃圾回收算法
//（1）标记清除法
//（2）标记压缩（整理）算法
// (3）引用计数算法复制算法
//（4）复制算法
//（5）分代回收算法
//（6）保守式CG
//https://www.jianshu.com/p/723faa8befa0
//https://www.jianshu.com/p/a8a04fd00c3c 较全

//16.
//线程安全三个方面
//原子性 atomic类互不干扰 synchronized同步锁
//可见性 volatile 通过内存屏障和禁止重排序实现的
//有序性 允许编译器和处理器对指令进行重排序
//https://www.jianshu.com/p/207ac3c11975
//(1)不可变
//(2)线程封闭
//(3)同步(悲观锁，乐观锁)
//工具类

//17.
//计算结构体大小 CSDN已发

//18.
//CPU调度算法
//1、先来先服务 FCFS
//2、最短时间调度服务 SJF
//3、优先级服务
//4、轮转法调度RR
//5、多级队列调度
//6、多级反馈队列调度

//19.
//https://www.jianshu.com/p/71700a464e97
//优缺点：https://blog.csdn.net/yangguosb/article/details/81903583
//优点：
// 1、涉及磁盘IO次数少，树的高度小，非叶子节点不包含数据
// 2、查询效率高，从根节点到叶子节点，查询路径相同
// 3、遍历效率高，从某个符合叶子节点开始遍历
// 缺点：随机产生大量IO 插入数据和请求分布