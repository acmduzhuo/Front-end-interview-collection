//1.
// var date = new Date();
// console.log(date.getMonth());//8 (九月)
// console.log(date.getDate());//8
// console.log(date.getDay());//(星期)2
// console.log(date.getFullYear());//2020
// console.log(date.getUTCFullYear());//2020

//2.
//eq(index) 选择指定的元素
//p:eq(1)选择第二个p元素
//find(expr) 返回被选元素的后代元素，一路向下直到最后一个后代。
//$("p").find("span").css('color','red'); 将p下的span设置为红色
//siblings() 获得匹配集合中每个元素的同胞，通过选择器进行筛选是可选的。
//next() 获得匹配元素集合中每个元素紧邻的同胞元素。如果提供选择器，则取回匹配该选择器的下一个同胞元素。

//3.
//window.setTimeout(checkState, 10000);
//不能加()，加了之后表示立即执行

//4.
//Flash提供了ExternalInterface接口与JavaScript通信，
// ExternalInterface有两个方法，call和addCallback，
// call的作用是让Flash调用js里的方法，addCallback是用来注册flash函数让js调用。

//5.
//CommonJS的根本原因，在于缺少四个Node.js环境的变量。 module exports require global 