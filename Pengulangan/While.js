 // Cara terhindar dari Infinite Loop

        //  1. Dihentika Oleh User
        /* var first = true;
        while(first) {
            console.info('Hello Pengulangan While');
            first = confirm('Mau Coba Lagi?');
        } */

        //  2. Dihentikan Oleh Program

        var nilaiAwal = 1;
        while(nilaiAwal <= 20){
            console.info('Jumlah While ' + nilaiAwal + 'x');
            nilaiAwal++;
        }