// Global scope / window scope
        /* var j = 2;
        
        // Local scope
        function coba() {
            var k = 4;
            console.info(j);
        }
        
        coba();
        console.info(k); */

        // Global scope / window scope
       /* var i = 8;

       function latihan() {
        // Name conflict
           var i = 14;
           console.info(window.i);
       }
       latihan(); */


      /* "use strict"; // "use strict" mendefinisikan bahwa js harus dijalankan dalam "mode ketat". 

       function tes() {
          var a = 2;
           console.info(a);
        }
        
       tes();  */

       var b = 3;

       function coba(b) {
           console.info(b);
       }
       
    //    coba(5);
       coba(b);
       console.info(b);