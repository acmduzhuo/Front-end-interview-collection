// console.log(typeof null);//object
// console.log(typeof undefined);//undefined
//1.js的基本数据类型？为什么string是基本数据类型还可以调用数组的那些方法？
//Undefined、Null、Boolean、Number和String。 还有一种复杂的数据类型Object
//string是一种特殊的数组，每一个元素都是一个字符

//2.cookie与session区别
  //cookie数据存放在客户的浏览器上，session数据存放在你服务器上
  //cookie不是很安全，别人可以分析在本地的cookie并进行cookie盗用， 考虑安全应当使用session
  // session会在一定时间内保存在服务器上，当访问增多，会比较占用服务器性能，考虑到减轻服务器性能方面，应当使用cookie
  //单个cookie保存的数据不能超过4K，很多浏览器一个站点最多保存20个cookie，Session则没有这种限制，可以保存更复杂的数据
  //最大区别是生命周期，一个是IE启动到IE关闭，一个是余弦设置的生命周期或永久保存于本地的文件

//3.输入url到浏览器显示的整个过程
//DNS解析
//TCP连接
//发送http请求
//服务器处理请求并返回http报文
//浏览器解析渲染界面
//连接结束

//4.跨域
//只要协议、域名、端口有任何一个不同，都被当作是不同的域。
//(1)通过jsonp跨域
//通过script标签引入一个js文件，
//这个js文件载入成功后会执行我们在url参数中指定的函数，
//并且会把我们需要的json数据作为参数传入。所以jsonp是需要服务器端的页面进行相应的配合的。
//(2)通过修改document.domain来跨子域
//document.domain都设成相同的域名就可以了
//(3)window.name
//(4)window.postMessage