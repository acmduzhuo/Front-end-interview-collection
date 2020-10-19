var deepCopy = function (obj) {
    if(typeof obj !== 'objedct'){
        return ;
    }
    var newObj = (obj instanceof Array) ? {} : [];
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = (obj[key] instanceof Object) ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}