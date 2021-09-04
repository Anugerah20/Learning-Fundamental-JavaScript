// Selamat Datang
alert('Hai, Selamat bermain digame\n yang buat kamu ketagihan 😂\n Kamu Mempunyai 2 Nyawa');
var total = '';
var main = true;
var compt = Math.floor((Math.random() * 9) + 1);

while(main){

    for(ulang = 2; ulang >= 0; ulang--) {
        user = prompt('Kuy Masukan Angka Tebakan Kamu: ');
        if(user) {
            if(user == compt) {
                total = alert('Selamat Tebakan Kamu Berhasil \n Kamu Menebak ' + user);
            } else if(ulang == 0) {
                total = alert('Haduh Jawaban Kamu Salah. Nyawa Kamu Habis\n Angka Yang Dicari Itu ' + compt);
            } else if(user > compt) {
                total = alert('Tebakkan Kamu Terlalu Besar');
                alert('Kamu Masih Mempunyai Nyawa ' + ulang + ' Kali Nyawa');
            } else if(user < compt) {
                total = alert(' Tebakkan Kamu Terlalu Kecil');
                alert('Kamu Masih Mempunyai ' + ulang + ' Kali Nyawa');
            } else {
                total = alert('Kamu salah Isi!');
                alert('Kamu Masih Mempunyai' + ulang + 'Kali Kesempatan');
            }
        }
        main = confirm('Mau Bermain Lagi Gak?');
    }

// Terima Kasih
alert('Terima kasih sudah bermain game ini 😊');

}