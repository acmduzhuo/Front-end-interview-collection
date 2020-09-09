//1.对于大部分已有序的数据，排序最好使用插入排序，
// 参考百度百科，当数据越接近有序，直接插入的算法性能就越好

//2.
//Linux进程中的内存地址排序：栈>堆>数据段>代码段

//3.
//进程间通信的八种方式：
//管道：无名管道、高级管道、有名管道
//消息队列
//信号量、信号
//共享内存
//套接字socket

//4.设计模式一般用来解决 同一问题的不同表相

//5.TCP与UDP的区别， 参考牛客网前端面经

//6.
// 删除大量冗余内存
// delete from table_name where id < maxId limit 1000
// 每次删除一些数据，循环往复，直到数据被全部删除

//7.
//alter table drop 删除

//8.
// |等同于+

//9.
//协程https://www.jianshu.com/p/6dde7f92951e

//10
//命令模式的角色：
//命令角色 Command
//具体命令角色 Concrete Command
//客户角色 Client
//请求者角色 Invoker
//接受者角色 Receiver

//11
// 关系数据库与非关系数据库
// https://www.jianshu.com/p/fd7b422d5f93

//12
//分治算法的思想将规模为n的问题分解为k个规模较小的子问题，这些子问题相互独立且与原问题性质相同
//排序中使用到该思想有快排、堆、归并

// console.log(String.fromCodePoint(65));//A
// console.log(String.fromCodePoint(97));//a
// console.log("a".charCodeAt());//97