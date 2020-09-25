//1、
//两列定宽，中间自适应
//(1) parent的div设置display:flex
// left和center设置margin-right；
// right的div设置flex:1；
//(2)使用position
//parent设置position:relative，三个子级设置position:absolute，需要计算好盒子的宽度和间隔
//(3)float+margin
// parent设置float:left， left的div添加属性margin-right， left和center间隔，right添加属性margin-left，center和right间隔
