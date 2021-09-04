// Rekursif memakai pengulangan For
        /* var i = 10;
            for(var i = 10; i >= 1; i--) {
            console.info(i);
        } */


        // Rekursif Function
        /* function tampilAngka(n) {
            if(n === 0){
                return;
            }
            console.info(n);
            return tampilAngka(n-1);
        }

        tampilAngka(20); */


        // Rekursif faktrorial function
        function faktorial(n) {
            if(n === 0) return 1;
            console.info(n);
            return n * faktorial(n-1);
        }
        faktorial(5);