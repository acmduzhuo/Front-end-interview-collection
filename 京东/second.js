//1、
//JS实现继承的几种方法
//（1）借助构造函数来实现继承
// function Parent1() {
//     this.name = '大黄';
//     this.age = 18;
// }
// function Child1() {
//     Parent1.call(this);
//     this.address = '山东省';
// }
// var s1 = new Child1();
// console.log(s1.name);
// Parent1.prototype.say= function() {
//   console.log('say bye bye');
// };
// console.log(s1.say);//undefined
//构造函数继承法只能实现部分继承，
// 如果在父类Parent1的原型链上添加属性或者方法的时候子类的实例无法继承到。
//（2）借助原型链实现继承
// function Parent2() {
//     this.name  = '大黄';
//     this.age = 19;
//     this.play = [1, 2, 3];
// }
// Parent2.prototype = {
//     say() {
//         console.log('say bye bye');
//     }
// };
// function Child2() {
//     this.address = '山东省';
// }
// Child2.prototype = new Parent2();//子类原型等于父类实例
// var s2 = new Child2();
// var s3 = new Child2();
// console.log(s2.name);//大黄
// console.log(s2.say());//say bye bye  undefined
// // s2.say();//say bye bye
// s2.play.push(4);
// console.log(s2.play);//[ 1, 2, 3, 4 ]
// console.log(s3.play);//[ 1, 2, 3, 4 ]
//浅拷贝
// 通过子类的实例对象修改父类上的属性和方法，
// 那么所有子类的所有实例对象上的属性和方法都会被改变。
//（3）组合继承（4）原型式继承（5）寄生式继承（6）寄生组合式继承