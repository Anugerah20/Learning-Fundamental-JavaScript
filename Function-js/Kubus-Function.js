 // Cara Mudah Dan Simpel
 function volumKubus(a,b){
    var nilai = (a*a*a) + (b*b*b);
    return nilai;
}
document.writeln(`Volume Kubusnya Adalah ${volumKubus(8,3)}`);

// Cara Rumit Dan Panjang
function JumlahVolumeDuaBuahKubus(a, b){
    var VolumeA;
    var VolumeB;
    var total;

    var VolumeA = a * a * a;
    var VolumeB = b * b * b;
    var total = VolumeA + VolumeB;

    return total;
}
console.info(JumlahVolumeDuaBuahKubus(9, 8));

function JumlahVolumDuaKubus(a, b) {
    var nilai = (a * a * a) + (b * b * b);
    return nilai;
}
console.info(`Jumlah Volume Dua Buah Kubus Adalah ${JumlahVolumDuaKubus(8, 3)}`);