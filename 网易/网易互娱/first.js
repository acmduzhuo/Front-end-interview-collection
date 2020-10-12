// let logger = {
//
//     level: 'default',
//
// log(msg) {
//
//     console.log(this.level, msg)
//
// }
//
// };


// 下列每种绑定方式在点击时输出结果是什么

// window.onclick = logger.log
//
// window.onclick = (evt) => logger.log(evt)
//
// window.onclick = logger.log.bind(logger)
//
// window.onclick = () => logger.log.apply(logger, arguments)
// const root = {
//
//     val: 4,
//
//     left: {
//
//         val: 2,
//
//         left: {
//
//             val: 1
//
//         },
//
//         right: {
//
//             val: 3
//
//         }
//
//     },
//
//     right: {
//
//         val: 5,
//
//         right: {
//
//             val: 6,
//
//             right: {
//
//                 val: 7
//
//             }
//
//         }
//
//     }
//
// }
//
//
//
//
// function getDepth (root){
//     var sum = 0;
//     if(root){
//         var sum1 = getDepth(root.left);
//         var sum2 = getDepth(root.right);
//         var sum = sum1>sum2 ? sum1+1 : sum2+1;
//     }
//     return sum;
// }
// console.log(getDepth(root));
const arr = [88, 24, 15, 26];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}
