 /* var number = prompt('Silakan masukkan angka: \n cth: 4 / 3');

        if(number % 2 === 0) {
            alert('Ini adalah angka genap');
        } else if(number % 2 === 1) {
            alert('Ini adalah angka ganjil');
        } else {
            alert('Angka yang anda cari tidak tersedia..');
        }

        var angka = parseInt(prompt('Silakan Masukan Angka: '));

        if(angka === 1) {
            alert('Anda memasukan angka 1');
        } else if(angka == 2) {
            alert('Anda memasukan angka 2');
        } else if(angka == 3){
            alert('Anda memasukan angka 3');
        } else {
            alert('Angka yang anda masukkan salah!');
        } */



        // SWITCH Sederhana

        /* var angka = prompt('Masukkan Angka: ');

        switch(angka) {
            case '1' :
                alert('Anda memasukkan angka 1');
                break;
            case '2' :
                alert('Anda memasukkan angka 2');
                break;
            case '3' :
                alert('Anda memasukkan angka 3');
                break;
            default :
                alert('Angka yang anda masukkan salah!');
                break;
        } */


        //  SWITCH KASUS MAKANAN CARA 1

        /* var item = prompt('Masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

        switch(item) {
            case 'nasi' :
                alert('makanan / minuman SEHAT!');
                break;

            case 'daging' :
                alert('makanan / minuman SEHAT!');
                break;

            case 'susu' :
                alert('makanan / minuman SEHAT!');
                break;

            case 'hamburger' :
                    alert('makanan / minuman TIDAK SEHAT!');
                    break;

            case 'softdrink' :
                    alert('makanan / minuman TIDAK SEHAT!');
                    break;

            default :
                alert('makanan / minuman yang anda cari tidak tersedia...');
                break;
        } */

        // SWITCH KASUS MAKANAN Cara 2

        var item = prompt('masukkan makanan / minuman: \n (cth: nasi, daging, susu, hamburger, softdrink)');

        switch(item) {
            case 'nasi' :
            case 'daging' :
            case 'susu' :
                alert('makanan / minuman SEHAT!');
                break;

            case 'hamburger' :
            case 'softdrink' :
                alert('makanan / minuman TIDAK SEHAT!');
                break;

            default :
                alert('makanan / minuman yang anda cari tidak tersedia...');
                break;
        }