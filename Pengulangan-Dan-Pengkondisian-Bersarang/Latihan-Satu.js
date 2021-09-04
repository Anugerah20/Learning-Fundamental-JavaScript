var a = '';
        for(var b = 15; b > 0; b--)  {
            for(var c = 15; c > b; c--) {
                a += '';
            }
            for(var d = 0; d < b; d++){
                a += '*';
            }
                a += '\n';
        }
        console.info(a);