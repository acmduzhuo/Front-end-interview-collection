//1.
//实现一个构造函数 Foo，构造函数里面实现一个属性 a，和一个方法 getA，
// 属性 a 能够在构造函数被实例化的时候通过参数设置
function Foo(a) {
    this.a = a;
}
Foo.prototype.getA = function () {
    return this.a;
};
var foo1 = new Foo(1);
var foo2 = new Foo(2);
console.log(foo1, foo1.getA(), foo1.constructor, foo1 instanceof Foo);
console.log(foo2, foo2.getA(), foo2.constructor, foo2 instanceof Foo);

//2.
// 写一个构造函数 Bar 继承上面的 Foo,
// 并且它有一个方法 getB,能够获取到 Bar 实例对象的 b 属性
// function Bar(b){
//     Foo.call(Bar);
//     this.a = 3;
//     this.b = b;
// }
// Bar.prototype.getB = function(){
//     return this.b;
// };
// Object.setPrototypeOf(Bar.prototype, Foo.prototype);
// Bar.prototype.constructor = Bar;
// var bar1 = new Bar(1);
// var bar2 = new Bar(2);
// console.log(bar1, bar1.getB(), Bar.prototype.constructor, bar1 instanceof Bar);
// console.log(bar2, bar2.getB(), Bar.prototype.constructor, bar2 instanceof Bar);

//3.
//new做得三件事
//1. 让实例可以访问到私有属性
//2. 让实例可以访问到构造函数原型所在的原型链上的属性
//3. 如果构造函数返回的不是引用类型，则返回自己创建的obj
//实现一个new
function myNew(f, ...args) {
    if(typeof f !== 'function'){
        throw 'f 必须是函数'
    }
    let obj = {};
    let ret = f.call(obj, ...args);
    Object.setPrototypeOf(obj, f.prototype);
    let retIsObject = (typeof ret === 'object') && (ret !== null);
    let retIsFunction = (typeof ret === 'function');
    if(retIsObject || retIsFunction){
        return ret;
    } else {
        return obj;
    }
}
var foo = myNew (Foo, 3);
console.log(foo.getA(), foo instanceof Foo);