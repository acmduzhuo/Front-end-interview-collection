//防抖
function f(fn, delay) {
   let timer;
   return function () {
       let context = this;
       let args = arguments;
       clearTimeout(timer);
       timer = setTimeout(function () {
           fn.apply(context, args);
       }, delay);
   }
}
//节流
let f = function (fn, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        if(!timer){
            setTimeout(() => {
                fn.apply(context, args);
                clearTimeout(timer);
                timer = null;
            }, delay);
        }
    }
}