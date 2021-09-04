 //  Menggunakan Pengkodisian

       /* var konfirmasi = confirm('Apakah Password Anda Sudah Benar?');
       if(konfirmasi === true) {
           alert('Anda Berhasil Login');
       } else {
           alert('Maaf Silakan Isi Password Dengan Benar');
       } */

    //  Menggunakan Pengulangan While

    alert('Selamat Datang Guys');
    var konfirmasi = true;

    while(konfirmasi) {
        var nama = prompt('Masukan Nama Anda');
        alert(`Selamat Malam ${nama}`);

        konfirmasi = confirm('Mau Masukan Nama Ulang?');
    }
        alert('Terima Kasih Sudah Berkunjung');