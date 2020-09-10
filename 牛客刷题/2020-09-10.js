//1.
// var a = [1, 4, 5, 2, 9];
// console.log(Math.max.apply(null, a));//9

//2.
// var oStringObkect = new String('abcdefg');
// console.log(typeof oStringObkect == 'string');
// console.log(oStringObkect instanceof String);

//3.
//undefined和null与任何有意义的值比较返回的都是false，
// 但是null与undefined之间互相比较返回的是true。

//4.
// var a = {
//     name:'xiaoming',
//     age : 2
// };
// console.log(Object.keys(a));

//5.
// var msg='hello';
// for (var i=0; i<10; i++)
// {
//     var msg='hello'+i*2+i;
// }
// console.log(msg);

//6.
// 阻止默认事件：
// e.preventDefault()
// e.returnValue = false  (IE)