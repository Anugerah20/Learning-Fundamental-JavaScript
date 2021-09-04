var i = '';
for(var a = 4; a > 0; a--) {
    for(var b = 5; b > 0; b--) {
        if(i % 2 == 0) {
            i += '#';
        } else {
            i += '#';
        }
    }
    i += '\n';
}
console.info(i);