var arr = [1, 2, 1, undefined, null, undefined, 'a', 'b', 'a'];
//1.
//ES6
// var arr_1 = Array.from(new Set(arr));
// //先Set转为一个唯一值对象，然后Array.from转为数组
// console.log(arr_1);

//2.
//ES5 for循环双指针去重
// for(var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[i] === arr[j]){
//             arr.splice(j, 1);
//         }
//     }
// }
// console.log(arr);//[ 1, 2, 'a', 'b' ]

//3.
//indexof 空间换时间
// var arr_1 = [];
// for(var i=0;i<arr.length;i++){
//     if(arr_1.indexOf(arr[i]) === -1){
//         arr_1.push(arr[i]);
//     }
// }
// console.log(arr_1);//[ 1, 2, 'a', 'b' ]

//4.
//sort 与2 3有异曲同工之处
// arr.sort();
// //console.log(arr);
// var arr_1 = [];
// arr_1.push(arr[0]);
// for(var i=1;i<arr.length;i++){
//     if(arr[i] !== arr[i-1]){
//         arr_1.push(arr[i]);
//     }
// }
// console.log(arr_1);//[ 1, 2, 'a', 'b' ]

//5.
//对象属性唯一性，存在问题，像关键字与“关键字”
// var arr = [1, 2, 1, undefined, null, undefined, 'a', 'b', 'a',true,true,'true'];
// var arr_1 = [];
// var obj = {};
// for(var i=0;i<arr.length;i++){
//     if(!obj[arr[i]]){
//         arr_1.push(arr[i]);
//         obj[arr[i]] = 1;
//     } else {
//         obj[arr[i]]++;
//     }
// }
// console.log(arr_1);

//6.
//利用 includes，与indexOf相似
// var arr_1 = [];
// for(var i=0;i<arr.length;i++){
//     if(!arr_1.includes(arr[i])){
//         arr_1.push(arr[i]);
//     }
// }
// console.log(arr_1);

//7.
//hasOwnPropery判断是否在存在对象属性 ??
function f(arr) {
    var obj = {};
    return arr.filter(function (item, index, arr) {
        console.log(obj);
        return obj.hasOwnProperty(typeof item+item) ? false : (obj[typeof item+item])=true;
    })
}
console.log(f(arr));