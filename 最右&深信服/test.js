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
