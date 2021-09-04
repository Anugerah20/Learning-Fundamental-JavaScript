// 1. Tambah Penumpang Angkot

// var penumpang = [];
var penumpang = ['Syifa',undefined,'Rahmat'];
var tambahPenumpang = function(namaPenumpang,penumpang) {

                if(!penumpang.length) {
                    penumpang.push(namaPenumpang);
                    return penumpang;
                } else {
                    for(var j = 0; j < penumpang.length; j++) {
                    if(penumpang[j] == undefined) {
                        penumpang[j] = namaPenumpang;
                        return penumpang;
                    } else if(penumpang[j] == namaPenumpang) {
                        console.info('Perhatian! ' + namaPenumpang + ' sudah ada');
                        return penumpang;
                    } else if(j == penumpang.length - 1) {
                        penumpang.push(namaPenumpang);
                        return penumpang;

            }
        }
    }
}

// 2. Hapus Penumpang Angkot
var hapusPenumpang = function(namaPenumpang,penumpang){
    if(!penumpang.length) {
        console.info('Angkot tidak ada penumpang');
    } else {
        for(var i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
            } else if(i == penumpang.length - 1){
                console.info(namaPenumpang + ' tidak di dalam angkot');
                return penumpang;
            }
        }
    }
} 