var a = '';
for(var i = 15; i > 0; i--){
    for(var j = 0; j < i; j++){
        a += '';
    }
    for(var p = 15; p > j; p--){
        a += '*';
    }
    for(var s = 15; s >= p; s--){
        a += '*';
    }
        a += '\n';
}
for(var f = 14; f > 0; f--){
    for(var u = 15; u > f; u--){
        a += '';
    }
    for(var x = 0; x < u; x++){
        a += '*';
    }
    for(var y = 1; y < x; y++){
        a += '*';
    }
        a += '\n';
}
console.info(a);