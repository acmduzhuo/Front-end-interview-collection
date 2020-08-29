//1.
//在文件/home/somebody/workspace/somemodule.js中第一行引用了一个模块：require(‘othermodule‘)，请问required 的查找模块的顺序
// A. /home/somebody/workspace/node_modules/othermodule/index.js
// B. /home/somebody/workspace/node_modules/othermodule. Js
// C.CORE MODULES named othermodule
// D./home/somebody/node_modules/othermodule/index.js
// C B A D
// (1):首先，Node在当前目录下查找package.json(CommonJS包规范定义的包描述文件)，通过JSON.parse()解析出包描述对象，从中取出main属性指定的文件名进行定位。如果文件缺少扩展名，将会进入扩展名分析的步骤。 　　
// (2):而如果main属性制定的文件名错误，或者压根没有package.json文件，Node会将index当做默认文件名，然后依次查找index.js、index.node、index.json. 　　
// (3):如果在目录分析的过程中没有定位成功任何文件，则自定义模块进入下一个模块路径进行查找。如果模块路径数组都被遍历完毕，依然没有查找到目标文件，则会抛出查找失败异常。 　　
// 按照上面的思路，首先应该查找package.json文件，看看里面有没有核心模块，应该是C最先，
// othermodule不是核心模块，那么接着应该进入扩展名分析的步骤，就应该是查找othermodule. js，对应B，
// 紧接着就是以index为默认文件名，也就是A，再接下来就是上一个文件目录D了，

//2.
//以下哪些选项可以获取ID为a的DOM元素
//document.getElementById('a')
//document.querySelector('#a')

//3.
//在不手动改变this指向的前提下，this总是指向函数的直接调用对象
//如果有new关键字，this指向new出来的那个对象
//this总是指向函数的直接接调用者，call和apply属于改变指向
//IE中attachEvent中的this总是指向全局对象window

//4.
//静态语言（强类型语言）
// 静态语言是在编译时变量的数据类型即可确定的语言，多数静态类型语言要求在使用变量之前必须声明数据类型。
// 例如：C++、Java、Delphi、C#等。
// 动态语言（弱类型语言）
// 动态语言是在运行时确定数据类型的语言。变量使用之前不需要类型声明，通常变量的类型是被赋值的那个值的类型。
// 例如PHP/ASP/Ruby/Python/Perl/ABAP/SQL/JavaScript/Unix Shell等等。

//5.
//以下哪些语句触发了隐式的类型转换？
// parseInt(12.34, 10) string到number
// 0 ? 1 : 2 number到boolean
// 2e1 * 0xaa
// 1 + '1' number到string