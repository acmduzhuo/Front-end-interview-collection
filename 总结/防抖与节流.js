//防抖
function f(fn, delay){
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        } ,delay);
    }
}
//节流
function f1(fn, delay) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        if(!timer){
            setTimeout(()=>{
                fn.apply(context, args);
                clearTimeout(timer);
                timer = null;
            }, delay);
        }
    }
}