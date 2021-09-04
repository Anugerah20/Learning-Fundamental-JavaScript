 // 1. Cara Tidak Diinputkan Oleh User
       /* function tambah(a,b) {
            return a + b;
        }

        var a = 13;
        var b = 22;

        var total = tambah(a,b)
        console.info(total); */

        // 2. Cara Diinputkan Oleh User
        /* function tambah(f,g) {
            return f + g;
        }

        var f = parseInt(prompt('Masukkan Angka Pertama: '));
        var g = parseInt(prompt('Masukkan Angka Kedua: '));

        var total = tambah(f,g);
        console.info(total); */

        // 3. Argument function ke function
        function tambah(a,b){
            return a + b
        }
        function kali(a,b){
            return a * b;
        }
        var total = kali(tambah(3,4), tambah(5,5));
        console.log(total);
