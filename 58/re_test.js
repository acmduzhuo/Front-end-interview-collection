const obj ={
    name : 'aaa',
    child : {
        name : 'bbb',
        child : {
            name : 'ccc'
        }
    }
};
function foo(obj, num) {
    var str = "";
    for(var i=0;i<num;i++){
        str += "-";
    }
    if(obj['name']){
        obj['name'] = str + obj['name'];
        num++;
        if(!obj['child']){
            return ;
        }
        return foo(obj['child'], num);
    }
}
foo(obj, 1);
console.log(obj);

// function foo(obj) {
//     if(obj['name']){
//         console.log(obj['name']);
//     }
// }
// foo(obj);


