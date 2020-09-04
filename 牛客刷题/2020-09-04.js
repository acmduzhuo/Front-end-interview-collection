//1.
// 数据类型	转换为true	转换为false
// boolean	true	false
// String	任何非空字符串	空字符串
// Number	任何非零数字值	0和NaN
// Object	任何对象	null
// Undefined	n/a	undefined

//2.
// Boolean([]); //true
// Number([]); //0
// Number({}); // NaN
// Number(false); //0
// console.log(typeof  []);//object
// console.log(([])?true:fasle);// => console.log((true)?true:false);
// console.log([]==false?true:false); // => console.log(0==0?true:false);
// console.log(({}==false)?true:false); // => console.log((NaN==0)?true:false);

//3.
// 1.什么是 XML?
// XML 指可扩展标记语言（EXtensible Markup Language）
// XML 是一种标记语言，很类似 HTML
// XML 的设计宗旨是传输数据，而非显示数据
// XML 标签没有被预定义。您需要自行定义标签。
// XML 被设计为具有自我描述性。
// XML 是 W3C 的推荐标准
//
// 2.XML 与 HTML 的主要差异
// XML 不是 HTML 的替代。
//
// XML 和 HTML 为不同的目的而设计：
//
// XML 被设计为传输和存储数据，其焦点是数据的内容。
//
// HTML 被设计用来显示数据，其焦点是数据的外观。
//
// HTML 旨在显示信息，而 XML 旨在传输信息。