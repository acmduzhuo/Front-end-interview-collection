// function factorial(num){
//     var sum = 1;
//     if(num <= 1){
//         return sum;
//     } else {
//         for(let i=2;i<=num;i++){
//             sum *= i;
//         }
//         return sum;
//     }
// }
// console.log(factorial(3));
// function factorial(num){
//     var sum = 1;
//     if(num <= 1){
//         return sum;
//     } else {
//         return num*factorial(num-1);
//     }
// }
// console.log(factorial(3));
function factorial(num){
    var sum = 1;
    if(num <= 1){
        return sum;
    } else {
        return num*arguments.callee(num-1);
    }
}
console.log(factorial(3));