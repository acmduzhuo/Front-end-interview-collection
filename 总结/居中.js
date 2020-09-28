// 垂直居中
// 1.margin: 0 auto; 块级作用域 相对居中，只是相对于父元素
// margin负值法，子元素设置margin-top: -190px; /*height的一半*/margin-left: -240px; /*width的一半*/
// 如果想要在行内元素实现，可以将其行内元素的 display 为 inline-block
// 2.父元素设置text-align:center 只针对行内元素
//3.父元素设置position:relative，子元素设置position:absolute;
// 然后让元素向右偏移 50%，需要注意，这个时候居中的是子元素的左边线，再使用transform: translateX(-50%);
// 4.父元素设置 display:flex; justify-content: center;
// 5.父元素设置display:table-cell 子元素vertical-align:middlegg

//水平居中：
// 1.父元素设置positon: absolute;子元素设置
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate3d(-50%, -50%, 0);
// 2.子元素设置margin-top: 50%;与transform: translateY(-50%)原理相同？？
// 3.父元素设置 display: flex;
//   justify-content: center;
//   align-items: center;