// THIS
    // This adalah sebuah keywords spesial yang secara otomatis didefinisikan setiap function.

    /* console.info(this === window);
    var x = 20;
    console.info(this.x); */


        // Cara membuat dan memanggil object

        // Cara 1 - Menggunakan Function Declaration
        // This mengembalikan object global.
        /* function tes(){
            console.info(this);
            console.info('tes');
        }
        this.tes(); */

        //  Cara 2 - Object Literal
        //  This mengembalikan object yang bersangkutan / diri sendiri.
         /* var obj = {car : 'Civic', cc : 5000, made: 'Japan'};
        obj.halo = function() {
            console.info(this);
            console.info('Object Literal');
        }
        obj.halo(); */

        // Cara 3 - Constructor
        // This mengembalikan object yang baru di buat.
        function Hai() {
            console.info(this);
            console.info('hai');
        }
        new Hai();
        // var obj1 = new Hai();
        // var obj2 = new Hai();