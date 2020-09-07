//1.
// console.log(Boolean([]));
// console.log(Boolean(''));
// console.log(Number([]));
// console.log(Number(""));
// console.log(Boolean(Number("")))

//2.
var arr = [1, 2, 3, 4];
Array.prototype.remove=function(dx){
    if(isNaN(dx)||dx>this.length){
        return false;
    }
    for(var i=0,n=0;i<this.length;i++){　　　　
        if(this[i]!=this[dx]){　　　　　　
            this[n++]=this[i];　　　　
        }　　
    }　　
    this.length-=1　
}
Array.prototype.remove.call(arr, 2);
console.log(arr);