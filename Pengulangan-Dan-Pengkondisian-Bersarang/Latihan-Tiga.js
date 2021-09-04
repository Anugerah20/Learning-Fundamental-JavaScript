var a = '';
    for(var i = 10; i > 0; i--) {
        for(var j = 1; j < i; j++){
            a += '';
        }
        for(var m = 10; m > j; m--) {
            a += '*';
        }
        for(var n = 10; n >= m; n--) {
            a += '*';
        }
            a += '\n';
    }
    console.info(a);