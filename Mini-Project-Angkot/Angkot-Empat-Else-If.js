var jmlAngkot = 10;
        var angkotBeroperasi = 6;
        var noAngkot = 1;

        for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
            if(noAngkot <= angkotBeroperasi) {
            console.info(`Angkot No. ${noAngkot} sedang beroperasi dengan baik.`);
        } else if(noAngkot === 8) {
             console.info(`Angkot No. ${noAngkot} sedang lembur.`);
        } else {
            console.info(`Angkot No. ${noAngkot} sedang tidak beroperasi.`)
        }
    } 