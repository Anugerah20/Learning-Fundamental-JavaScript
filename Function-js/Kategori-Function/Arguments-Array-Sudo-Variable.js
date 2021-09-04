// Cara Pertama
      /* function tambah(){
           return arguments;
       }
       var total = tambah(5,10,15,true,"Hello Array");
       console.info(total); */

        // Cara Kedua Kali
        /* function kali() {
            var nilaiAwal = 1;
            for(var i = 0; i < arguments.length; i++){
                nilaiAwal *= arguments[i];
            }
            return nilaiAwal;
        }
        var total = kali(1,2,3,4,5);
        console.info(total); */

        // Cara Ketiga Tambah
        function tambah() {
            var nilaiTambah = 0;
            for(var j = 0; j < arguments.length; j++) {
                nilaiTambah += arguments[j];
            }
            return nilaiTambah;
        }
            var total = tambah(1,2,3,4,5);
            console.info(total); 