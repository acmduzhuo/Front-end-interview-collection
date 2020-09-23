//ready
//1.
// function Sort(arr){
//    if(arr.length <= 1){
//        return arr;
//    }
//    var mid = Math.floor(arr.length/2);
//    var key = arr.splice(mid, 1)[0];
//    var left = [];
//    var right = [];
//    for(var i=0;i<arr.length;i++){
//        if(arr[i]<key){
//            left.push(arr[i]);
//        } else {
//            right.push(arr[i]);
//        }
//    }
//    return Sort(left).concat(key, Sort(right));
// }
// var arr = [1, 3, 5, 2, 4];
// console.log(Sort(arr));

//2.
//JS的平方开方
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(9));
// console.log(Math.pow(8, 1/3));
// console.log(Number(1.23));//1.23
// console.log(parseInt(1.23));//1

//3.
//分页与分段
//连续分配方式会产生许多的碎片，可以通过“紧凑”的方法将其拼接位可用的大块空间，但是开销是很大的
// 分页将程序地址分为若干个固定大小区域，一般为为1KB，同时也将内存分为若干个物理框或者页框，与页相等
// 并放入任一物理框中
// 分段储存，分段定义一组完整的信息，可以不邻接，也实现了等离分配
// 区别：分页透明，分段需要程序员手动划分
// 分页是一维的，分段是二维的
// 分页大小不变，分段可变

//4.
// 二叉树
