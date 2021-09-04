  // Manipulasi Array

        // 1. Menambahkan Isi Array
        /* var ab = [];
        ab[0] = "Nabil";
        ab[1] = "Anugerah";
        ab[2] = "Pangestu";
        ab[5] = "Rara";
        console.info(ab); */

        // 2. Menghapus Isi Array (cara manual)
        /* var hapus = ['Nabil', 'Anugerah', 'Pangestu'];
        hapus[0] = undefined;
        console.info(hapus); */

         // 3. Menampilkan Isi Array (length = mengecek ada berapa jumlah nilai pada string)
         /* var mhs = [];
             mhs = ["Nabil", "Anugerah", "Pangestu", "Dwi", "Wahyu"];
             for(var j = 0; j < mhs.length; j++) {
                 console.info('Mahasiswa ke- ' + (j+1) + ' = ' + mhs[j]);
             } */



        // Method Pada Array (1. Join = mengubah array menjadi string)
        // var nama = ['Nama','Saya','Angga', 'Saputra'];
        
        // Method Pada Array (2. Push = Memasukan Element Array Diakhir)
        /* nama.push('Saputra');
        console.info(nama.join(' ')); */

        // Method Pada Array (3. Pop = Mengilangkan Element Terakhir Di Array)
        /* nama.pop('Saputra');
        console.info(nama.join(' ')); */

        // Method Pada Array (4. Unshift = Menambahkan Element Pertama Di Array)
        /* nama.unshift('Halo Guys');
        console.info(nama.join(' ')); */

        // Method Pada Array (5. Shift = Menghapus Element Pertama Di Array)
        /* nama.shift('Halo Guys');
        console.info(nama.join(' ')); */


       // Method Pada Array (6. Splice = untuk menyisipkan elemen di tengah-tengah)
      // Rumus  (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2...)
     /* var arr = ['Nabil','Anugerah','Pangestu'];
      arr.splice(2, 3, 'Wahyu', 'Subandi');
      console.info(arr.join(' ')); */

    //   Method Pada Array (7. Slice = mengiris sebuah array menjadi array baru)
    //  Rumus (indexAwal(akan terbawa di array yg baru), indexAkhir)
    // Let
    /* let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
    let citrus = fruits.slice(1, 3);
    console.info(citrus.join(' '));

    // var
    var myBeat = ['Red','Wheels Two', 'cc 100'];
    var mySpeak = myBeat.slice(2);
    console.info(mySpeak.join(' ')); */


    // Method Looping Pada Array (8. Forech = )
    /* var angka = [1,2,3,4,5,6,7,8];
    for(var j = 0; j < angka.length; j++) {
        console.info(angka[j]);
    } */

    /* var angka = [1,2,3,4,5,6,7,8];
    angka.forEach(function(e){
        console.info(e);
   }); */

   /* let number = [20,21,22,23,24,25,26,27,28,29,30];
       number.forEach(function(e){
           console.info(e);
       }); */

   /* var mhs = ['Nabil','Risky','Bayu','Putra','Putri','Anisa'];
   mhs.forEach(function(e,i){
       console.info('Mahasiswa ke- ' + (i+1) + ' ' + e);
   }); */

    // Method Looping Pada Map (9. Map)
       /* var angka = [1,2,3,4,7,9];
        var angkaDua = angka.map(function(e){
                return e * 3;
            });
           console.info(angkaDua.join(' ')); */

    // Method Mengurutkan Isi Array (10. Short)
        // var angkaUrut = [2,3,10,5,7,8,11,9,12,1,6];
        //     angkaUrut.sort(function(a,b){
        //         return a-b;
        //     });
        //     console.info(angkaUrut.join(' '));

        // var angkaUrut = [10,9,8,7,6,5,4,3,2,1];
        //     angkaUrut.sort(function(a,b){
        //         return a-b;
        //     });
        //         console.info(angkaUrut.join(','));

    // Method Filter Mengembalikan Banyak Nilai Pada Array
   /* var myNumber = [1,2,3,4,5,6,7,10,12,14,20];
   var myNumbers = myNumber.filter(function(a){
       return a >= 10;
   });
    console.info(myNumbers.join(' - ')); */

    //  Method Find Mengembalikan Satu Nilai Pada Array
    /* var myNumber = [1,2,3,4,5,6,7,10,12,14,20];
    var myNumbers = myNumber.find(function(a){
       return a > 10;
    });
    console.info(myNumbers); */

    var myArray = [1,'Hai',false,'true'];
    console.info(myArray.toString());