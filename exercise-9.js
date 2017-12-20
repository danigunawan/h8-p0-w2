//Tugas 1
var nama = "Haidar";
var angkaPembilang = 10;
var angkaPenyebut = 2;
var hasilBagi = angkaPembilang / angkaPenyebut;
console.log("Halo "+nama+", "+angkaPembilang+" dibagi "+angkaPenyebut+" adalah sama dengan "+hasilBagi);

//Tugas 2
var alas = 10;
var tinggi = 5;
var luasSegitiga = alas * tinggi / 2;
console.log("Luas Segitiga: "+luasSegitiga);

//Tugas 3
var tahun = 2000;
if(tahun % 4 == 0){
  if(tahun % 100 != 0){
    console.log(tahun +" adalah tahun kabisat");
  } else {
    if(tahun % 400 == 0){
      console.log(tahun + " adalah tahun kabisat");  
    } else {
      console.log(tahun+ " adalah bukan tahun kabisat");
    }
  }
} else {
  console.log(tahun +" adalah bukan tahun kabisat");
}

