//1.
// var a = new Boolean();
// var b = new Boolean(false);
// console.log(a);
// console.log(b);
// if(a){
//     console.log("a");//a
// }
// if(b){
//     console.log("b");//b
// }
// console.log(typeof a);
//document.write自动调对象的toString，
// [Boolean: false]展示位false

//2.
// const str = 'qwbewrbbeqqbbbweebbbbqee';
// console.log(str.match(/b*/g));

//3.
// var arr = [];
// arr[0] = 0;
// arr[1] = 1;
// console.log(arr);//[ 0, 1 ]

//4.
// const g = {b:3};
// console.log(g.b);//3
// g.b = 12;
// console.log(g.b);//12
// let [head,...tail] = [1,2,3,4];
// console.log(tail);//[2, 3, 4]

//5.
//preventDefault() 取消时间默认行为
//stopImmediatePropagation()取消事件冒泡并阻止当前节点上事件处理程序被调用
//stopPropagation()仅取消事件冒泡
//cancelBubbe()取消事件冒泡
//returnValue()取消事件默认行为

//6.
// var str = "Hellllo world";
// str = str.replace(/(l)(l)(l)(l)/g, '$1');
// console.log(str);//Hello world

//7.
// +的处理机制是：新建一个临时字符串，将新字符串赋值为a+b，
// 然后返回这个临新字符串并同时销毁原始字符串，所以字符串连接效率较低。
// 所以用Array.join()不会新建临时字符串效率更高。
// var str = [1, 2, 3];
// console.log(str.join('!'));//1!2!3

//8.
// var p1 = {
//     name:'小明',
//     age:'12',
//     action:function(where,doing){
//         console.log(this.age + '岁的'+this.name + '在' + where + doing);
//     }
// }
// p1.action('操场上','运动');//12岁的小明在操场上运动

//9.
// var m= 1, j = k = 0;
// function add(n) {
//     n = n+1;
//     console.log(n);
// }
// add(m);
// function add(n) {
//     n = n + 3;
//     console.log(n);
//     console.log('running');
// }
// add(m);
//function add(){}定义的函数会优先解析，而不是顺序解析

//10.
// 下面结果为不为真的表达式是：()
// A null == undefined  Object.prototype;
// B [1,2,3].splice(1,1,1) == [2]
// C let Mi = new Function();Mi.__proto__.__proto__ == Object.prototype;
// D '1' === true
// let Mi = new Function();
// console.log(Mi.__proto__.__proto__ == Object.prototype);
// console.log([1,2,3].splice(1,1,1) == [2]);
// console.log(null == undefined);//true
// console.log(Object.prototype);
// console.log('1' === true);//false
let Mi = new Function();
console.log(Mi.__proto__ === Function.prototype);//true
console.log(Function.__proto__ === Function.prototype);//true
console.log(Function.prototype.__proto__ === Object.prototype);//true
console.log(Object.prototype);
console.log(null == undefined);//true
console.log(null === undefined);//false
console.log(Mi.__proto__.__proto__ == Object.prototype);//true