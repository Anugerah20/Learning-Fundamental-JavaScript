// Membuat Object Angkot
function juraganAngkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0) {
            alert('Angkot tidak ada penumpang!');
            return false;
        }

        for(var i = 0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var juraganAngkotSatu = new juraganAngkot('Sandhika Galih', ['Cicaheum', 'Cibiru'], [], 0);

var juraganAngkotDua = new juraganAngkot('Nabil Anugerah', ['Pasar Lembang', 'Parung Serab'], [], 0);
