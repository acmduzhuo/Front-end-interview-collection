// this有四种情况
// 1)当在函数调用的时候指向widow
// 2)当方法调用的时候指向调用对象
// 3)当用apply和call上下文调用的时候指向传入的第一个参数
// 4)构造函数调用指向实例对象