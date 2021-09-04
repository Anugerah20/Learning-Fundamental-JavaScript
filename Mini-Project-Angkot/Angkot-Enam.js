 // CARA PERTAMA

        // var jmlAngkot = 10;
        // var angkotBeroperasi = 4;
        // var noAngkot = 1;

        // for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
        //     if(noAngkot <= angkotBeroperasi) {
        //         console.info(`Angkot No. ${noAngkot} sedang beroperasi dengan baik.`);
        //     } else if(noAngkot === 6){
        //         console.info(`Angkot No. ${noAngkot} sedang beroperasi dengan baik.`);
        //     } else if(noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
        //         console.info(`Angkot No. ${noAngkot} sedang lembur.`);
        //     } else {
        //         console.info(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
        //     }
        // }

        // CARA KEDUA

        let jmlAngkot = 10;
        let angkotBeroperasi = 6;
        let noAngkot = 1;

        for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
            if(noAngkot <= angkotBeroperasi && noAngkot != 5) {
                console.info(`Angkot No. ${noAngkot} sedang beroperasi dengan baik.`);
            } else if(noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
                console.info(`Angkot No. ${noAngkot} sedang lembur.`);
            } else {
                console.info(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
            }
        }