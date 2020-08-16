//https://www.jianshu.com/p/2975c25e4d71

//实现一个add方法，使计算结果满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
    var _args = Array.prototype.slice.call(arguments);

    // return _args;
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}
console.log(add(1)(2)(3) == 6)
// add(1, 2, 3)(4)             // 10
// add(1)(2)(3)(4)(5)          // 15
// add(2, 6)(1)                // 9)