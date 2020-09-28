//1、
// var a = 1;
// console.log(a[a]);
// console.log(a[1]);
// console.log(1);
// console.log(a[b]);//ReferenceError: b is not defined
// var Object = new Object(3)(4);//TypeError: Object is not a constructor
// var Object = new Object('3', '4');//TypeError: Object is not a constructor

//2、
// 发现这个要处理的文件不是 js 文件，然后就去配置文件中，查找有没有对应的第三方 loader 规则
// 如果能找到对应的规则，就会调用对应 loader 处理这种文件
// 在调用 loader 时候，是从后往前调用的
// 当最后一个 loader 调用完毕，会把处理结果，直接交给 webpack 进行打包合并，最终输出到 bundle.js 中去