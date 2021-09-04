// Selamat Datang
alert('Selamat Datang Di Game Sederhana Ini');

var tanya = true;
while (tanya) {
// Menangkap Pilihan Player
var p = prompt('Pilih: Gajah, Semut, Orang');

// Membangkitkan Bilangan Random
var comp = Math.random()

// Menangkap Pilihan Komputer
if(comp < 0.34) {
    comp = 'Gajah';
} else if( comp >= 0.34 && comp < 0.67) {
    comp = 'Orang';
} else {
    comp = 'Semut';
}
console.log(comp);

// Menetukan Rules
var hasil = '';

if(p == comp) {
   hasil = 'SERI';
} else if(p == 'Gajah') {
//     if(comp == 'Orang') {
//         hasil = 'MENANG'
//     } else {
//         hasil = 'KALAH';
//     }

hasil = (comp == 'Orang') ? 'MENANG' : 'KALAH';

} else if (p == 'Orang') {
    hasil = (comp == 'Gajah') ? 'KALAH' : 'MENANG';
} else if(p == 'Semut') {
    hasil = (comp == 'Semut') ? 'KALAH' : 'MENANG';
} else {
    hasil = 'Memasukkan Pilihan Yang Salah';
}

// Tampilkan Hasilnya

alert('Kamu Memilih: ' + p + ' dan komputer memilih: ' + comp + '\nMaka hasilnya: kamu ' + hasil);

tanya = confirm('Mau Coba Lagi?');

}

alert('Terima Kasih Sudah Bermain');