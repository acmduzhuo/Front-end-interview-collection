//ready
//1.
// 前端性能优化
//(1)降低请求量：合并资源，减少http请求次数，压缩
//(2)加快请求速度：预解析DNS，减少域名数，并行加载，CDN分发
//(3)缓存：HTTP协议缓存请求，离线缓存manifest，离线数据缓存localStorage
//(4)JS/CSS加载，加载顺序，服务端渲染

//2.
//webpack是一个前端模块化方案，更侧重模块打包，
// 可以把开发中的所有资源（图片、js文件、css文件等）都看成模块，
// 通过loader（加载器）和plugins（插件）对资源进行处理，打包成符合生产环境部署的前端资源。

//3.
//https://www.cnblogs.com/chengxs/p/10396066.html

//4.
//作为网关或者代理服务器从远程服务器发送请求之后，收到了一个无效的响应

//5.
//跨域资源共享(CORS) 是一种机制，
// 它使用额外的 HTTP 头来告诉浏览器
// 让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。
// 当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，
// 资源会发起一个跨域 HTTP 请求。

//6.
//GET和POST
//GET向指定的资源请求数据
//POST向指定的资源提交要被处理的数据
//GET显示在url中，长度有限，所有人都可以看到，浏览器历史中会有记录，只允许ASCII编码，大小限制3-4k，一般1k
//POST不显示在url中，长度不限制，不保存在浏览器历史中，没有编码限制，更安全一些

//7.
// const a = [];
// a.push(1);
// console.log(a);
// a = 7;
// console.log(a);//报错 变量指向的那个内存地址不得改动

//8.
//for-in
//遍历属性名、可以修改、输出可枚举属性（内置函数无法遍历）、省略或者跳过控制

//first.
//1.
// function foo(arr_1, arr_2) {
//     var j =0;
//     for(var i=0;i<arr_1.length;i++){
//         if(arr_1[i] === arr_2[j]){
//             return arr_1[i];
//             break;
//         } else if(arr_1[i] > arr_2[j]){
//             j++;
//             if(j === arr_2.length){
//                 break;
//             }
//         } else if(arr_1[i] < arr_2[j]){
//             continue;
//         }
//     }
//     if(i === arr_1.length || j === arr_2.length){
//         return null;
//     }
// }
// console.log(foo([1, 2, 3], [4, 5, 6]));

//2.
//跨域，见总结

//3.
//解决不同浏览器及不同版本的兼容性问题
//https://blog.csdn.net/JackieDYH/article/details/107823672

//4.
//React生命周期：
//getDefaultProps 接受默认参数
//getInitialState 获取每个实例的初始化状态
//ComponentWillMount 组件将会被装载
//render 组件在这里生成虚拟DOM节点
//ComponentDidMount 组件装载完成
//shouldComponentUpdate 是否要更新数据时触发的函数
//ComponentWillUpdate 组件将要被更新
//ComponentDidUpdate 组件更新完毕
//ComponentWillUnmount 主讲将要被销毁