//1
// var a = 10;
// function a() {}
// console.log(typeof a);//number
//变量提升优先级高于函数提升
//需要注意es6的let  和 const 不会提升
// let a = 10;
// function a() {}
// console.log(typeof a);//SyntaxError
// const a = 10;
// function a() {}
// console.log(typeof a);//SyntaxError

//2
// Promise.reject(123).finally(a => {
//     console.log(a);
// });
//需要 catch 被 reject 的 Promise，才能不抛出错误

//3
(function() {

    var x=foo();

    var foo=function foo() {
        return "foobar"
    };
    return x;
})();