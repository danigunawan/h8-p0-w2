/*
TODOLIST 
//////////////
Ini adalah Simpel TO DO List App yang bisa menampilkan apa aja saja tugas yang kita miliki, 
menampilkan tugasnya berdasarkan prioritas, menyelesaikan tugas nya dan mengetahui tugas 
mana saja yang sudah di selesaikan.
//////////////
*/
var daftarTugas = [
                    ["Belajar Html",10 ],
                    ["Belajar CSS", 7],
                    ["Belajar Javascript", 100]
                    
                    ];
var daftarTugasSelesai = [];

function tampilkanDaftarTugas(daftarTugas) {
  var tampilanDaftarTugas = "Daftar Tugas: \n";
  for(var i = 0; i < daftarTugas.length; i++){
   var namaTugas = daftarTugas[i][0];
   var prioritasTugas = daftarTugas[i][1];
   tampilanDaftarTugas += "Nama Tugas: "+namaTugas + " || Prioritas: "+ prioritasTugas+" \n";
  }

  return tampilanDaftarTugas;
}
function tampilkanPrioritasTugas(daftarTugas){
  var indexPrioritasTugas =  urutkanIndexDaftarTugasPrioritas(daftarTugas);
  var urutkanTugasPerprioritas = "Daftar Tugas Berdasarkan Prioritas Tertinggi \n";
  for (var i = 0; i < indexPrioritasTugas.length; i++) {
    var namaTugas = daftarTugas[indexPrioritasTugas[i]][0];
    urutkanTugasPerprioritas += namaTugas + "\n";
  }
   return urutkanTugasPerprioritas;
}
/*function untuk menyelesaikan tugas
parameter =>
tugas : adalah index dari tugas yang akan di selesaikan
daftarTugas : adalah daftar tugas yang tersedia
/////////////
proses :
masukkan data tugas yang akan di selesaikan ke kelompok (array) tugas yang sudah di selesaiakan
tampilkan tulisan yang menandkan tugas sudah di selesaikan
//////////////
hasil output :
mengeluarkan string yang menandakan tugas selesai

*/
function selesaikanTugas(tugas,daftarTugas){
  var tugasDikerjakan = daftarTugas[tugas][0];
  daftarTugasSelesai.push(tugasDikerjakan);
  menyelesaikanTugas = "Sedang Mengerjakan Tugas : "+tugasDikerjakan+"\n===30%\n===== 50%\n=======70%\n==========100%\nTugas ";
  return menyelesaikanTugas + tugasDikerjakan +" Selesai! \n";
}

/*

Function urutkanIndexDaftarTugasPrioritas
TUJUAN :  membuat array baru beriisi nomor index yang sudah di proses berdasarkan angka prioritas tertinggi
////////////
PARAMETER =>
daftarTugas : adalah berisi daftar tugas yang akan di urutkan berdasarkan prioritas
///////////
PROSES :

*/
function urutkanIndexDaftarTugasPrioritas(daftarTugas){
  var urutanKe = 0;
  var indexUrutan = [];
  var selesaiUrutkan = false;
  var operasiDaftarTugas = daftarTugas;
  var tugas = daftarTugas;
  while(selesaiUrutkan == false){
   var angkaTerbesar = 0;
  for(var i = 0; i < operasiDaftarTugas.length; i++){
    //bandingkan hanya yang bukan undefined
    if(operasiDaftarTugas[i][1] != undefined){
       if(angkaTerbesar < operasiDaftarTugas[i][1]){
        angkaTerbesar = operasiDaftarTugas[i][1];
        urutanKe = i; 
        }
    }  
  }
  //ubah operasiDaftarTugas nya yang terbesar jadi undefine
  delete operasiDaftarTugas[urutanKe][1];
  indexUrutan.push(urutanKe);
  //jika jumlah data daftarTugas dengan index urutannya sudah sama selesaikan looping
  if(indexUrutan.length == daftarTugas.length){
    selesaiUrutkan = true;
  }
} //endwhile

return indexUrutan;
}

function tampilkanTugasSelesai(daftarTugasSelesai){
  var tugasSelesai = "Daftar Tugas Sudah Selesai : \n";
  if(daftarTugasSelesai.length == 0){
    tugasSelesai += "Belum Ada Tugas Yang Di Selesaikan!\n";
  } else {
    for (var i = 0; i < daftarTugasSelesai.length; i++) {
    tugasSelesai += daftarTugasSelesai[i] +"\n";
    }
  }
  return tugasSelesai;
}

console.log(tampilkanDaftarTugas(daftarTugas));
console.log(tampilkanPrioritasTugas(daftarTugas));
console.log(tampilkanTugasSelesai(daftarTugasSelesai));
var tugasCss = 1;
var tugasJavascript = 2;
console.log(selesaikanTugas(tugasCss,daftarTugas));
console.log(selesaikanTugas(tugasJavascript,daftarTugas));
console.log(tampilkanTugasSelesai(daftarTugasSelesai));
