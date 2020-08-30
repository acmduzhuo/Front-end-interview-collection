console.log(parseFloat(0.2+0.4));//0.6000000000000001
console.log(parseFloat(0.2+0.4).toFixed(1));//0.6 保留一位小数
console.log(Math.round(0.2+0.4));//1 四舍五入为最接近的整数， 如果为0.5则四舍五入到正无穷上的整数
console.log(parseFloat((0.2+0.4).toPrecision(1)));//0.6 数字格式化为指定长度