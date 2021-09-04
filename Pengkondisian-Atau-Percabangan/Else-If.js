var angka = prompt('Masukan Angka: ');
if(angka % 2 === 0) {
    alert(angka + ' Ini Adalah Angka Genap.');
} else if(angka % 2 === 1) {
    alert(angka + ' Ini Adalah Angka Ganjil.');
} else {
    alert('Yang Anda Masukan Bukan Angka!');
}

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
//     if(noAngkot <= angkotBeroperasi) {
//         console.info(` Angko No. ${noAngkot} sedang beroperasi dengan baik`);
//     } else if(noAngkot === 8) {
//         console.info(`Angko No. ${noAngkot}  sedang lembur.`);
//     } else {
//         console.info(`Angko No. ${noAngkot}  sedang tidak beroperasi.`);
//     }
// }