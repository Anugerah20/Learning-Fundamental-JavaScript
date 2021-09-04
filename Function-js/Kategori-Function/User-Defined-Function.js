 // 1. Contoh Dengan Deklarasi / function declaration
 function jumlahDuaBilangan(a, b) {
    var total;
    total = a + b;

    return total;
}

alert(jumlahDuaBilangan(1,2));
alert(jumlahDuaBilangan(25,30));
alert(jumlahDuaBilangan(1500,17,5));

// 2. Contoh Dengan Ekspresi / function expression
var jumlahDuaBilangan = function(a, b) {
    var total;
    total = a + b;

    return total;
}

alert(jumlahDuaBilangan(11, 12));
alert(jumlahDuaBilangan(8, 22));
alert(jumlahDuaBilangan(88, 2));