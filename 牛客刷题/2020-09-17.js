var foo = {n:1};
(function (foo) {
    var foo;//在任何地方给一个已经声明且赋值的变量再重新声明，重新声明是无效的。因此第一个console会打印形参的n，即1
    console.log(foo.n);
    foo.n = 3;//实参已改变
    console.log("实参为：", foo.n);//3
    var foo = {n:2};//指向了新空间新内存
    console.log(foo.n);
})(foo);
console.log(foo.n);