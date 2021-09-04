// Program Pengelolaan Angkot
var penumpang = ['Nabil',undefined,'Anugerah'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // Jika Angkot Kosong
       if(penumpang.length == 0){
        // Tambah Penumpang Di Awal Array
        penumpang.push(namaPenumpang);
        // Kembalikan Isi Array & Keluar Dari Function
        return penumpang;
    } else {
        // Telusuri Seluruh Kursi Dari Awal
        for(var i = 0; i < penumpang.length; i++){
            // Jika Ada Kursi Kosong
            if(penumpang[i] == undefined) {
                // Tambah Penumpang Di Kursi Tersebut
                penumpang[i] = namaPenumpang;
                // Kembalikan Isi Array & Keluar Dari Function
                return penumpang;
            }
            // Jika Sudah Ada Nama Yang Sama
            else if(penumpang[i] == namaPenumpang){
                // Tampilkan Pesan Kesalahannya
                console.info(namaPenumpang + ' Sudah ada di dalam angkot.');
                // Kembalikan Isi Array & Keluar Dari Function
                return penumpang;
            }
            // Jika Seluruh Kursi Terisi
            else if(i == penumpang.length - 1) {
                // Tambah Penumpang Di Akhir Array
                penumpang.push(namaPenumpang);
                // Kembalikan Isi Array & Keluar Dari Function
                return penumpang;
            }
        }
    }
}