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


//5.最长1回文字符串
var str = "adaiziguizhongrenenrgnohziugiziadb";
//(1)暴力算法 时间复杂度O(n^3) 空间复杂度O(1)
//(2)开辟一个新的P[i][j]来表示是否回文，时间复杂度为O(n^2)，空间复杂度为O(n^2)
function getP2(str) {
    var len = str.length;
    var gap = '_';
    var p = {};
    var i, j, L;
    for(i = 0;i<len;i++){
        p[i+gap+i] = true;
    }
    //len 34
    for(L=2;L<=len;L++){
        for(i=0;i<=len-L;i++){
            j = i+L-1;
            if(L === 2){
                p[i+gap+j] = (str[i] === str[j]);
            } else {
                p[i+gap+j] = (str[i] === str[j]) && p[i+1+gap+(j-1)];
            }
        }
    }
    for(var key in p){
        if(p[key] === true){
            console.log(key);
        }
    }
    var max = -Number.MAX_SAFE_INTEGER;
    var start, end;
    for(var key in p){
        if(p[key]===true && Number(key.split('_')[1]) - Number(key.split('_')[0]) > max){
            max = Number(key.split('_')[1]) - Number(key.split('_')[0]);
            start = Number(key.split('_')[0]);
            end = Number(key.split('_')[1]);
        }
    }
    console.log(start, end);
    console.log(str[start], str[end]);
    console.log(str['1_32']);
}
// console.log(getP2(str));
getP2(str);

// var s = "adaiziguizhongrenenrgnohziugiziadb";
// var longestPalindrome = function(s) {
//     let len = s.length;
//     let result;
//     let i,j,L;
//     let dp=Array(len).fill(0).map(x=>Array(len).fill(0));
//     //console.log(dp);
//     if(len<=1){
//         return s
//     }
//     // 只有一个字符的情况是回文
//     for(i = 0;i<len;i++){
//         dp[i][i] = 1
//         result = s[i]
//     }
//
//     // L是i和j之间的间隔数（因为间隔数从小到大渐增，所以大的间隔数总能包含小的间隔数）
//     // i     j
//     // abcdcba.length = L   所以 L = j-i+1; => j = i+L-1;
//     var sum = "";
//     for ( L = 2; L <= len; L++) {
//         // 从0开始
//         for ( i = 0; i <= len - L; i++) {
//             j = i + L - 1;
//             if(L == 2 && s[i] == s[j]) {
//                 dp[i][j] = 1;
//                 result = s.slice(i, i + L);
//                 if(sum.length < result.length){
//                     sum = result;
//                 }
//             }else if(s[i] == s[j] && dp[i + 1][j - 1] == 1) {
//                 dp[i][j] = 1
//                 result = s.slice(i, i + L);
//                 if(sum.length < result.length){
//                     sum = result;
//                 }
//             }
//
//         }
//     }
//     //console.log(result);
//     return sum;
// };
// console.log(longestPalindrome("adaiziguizhongrenenrgnohziugiziadb"));
