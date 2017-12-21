function dataHandling2(array){
  array.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung") ;
  array.splice(4,2,"Pria","SMA Internasional Metro");
  console.log(array);
  var tanggalSplit = array[3].split("/");
  switch(Number(tanggalSplit[1])){
    case 1:
      console.log("Januari");
    break;
    case 2:
      console.log("Februari");
    break;
    case 3:
      console.log("Maret");
    break;
    case 4:
      console.log("April");
    break;
    case 5:
      console.log("Mei");
    break;
    case 6:
      console.log("Juni");
    break;
    case 7:
      console.log("Juli");
    break;
    case 8:
      console.log("Agustus");
    break;
    case 9:
      console.log("September");
    break;
    case 10:
      console.log("Oktober");
    break;
    case 11:
      console.log("November");
    break;
    case 12:
      console.log("Desember");
    break;
    default:
      //do nothingg

    }
    var tanggalSort = tanggalSplit.sort(function(a, b){return b-a});
    console.log(tanggalSort);
    tanggalSplit = array[3].split("/");
    var tanggalJoin = tanggalSplit.join("-");
    console.log(tanggalJoin);
    var namaSlice = array[1];
    namaSlice = namaSlice.slice(0,14);
    console.log(namaSlice);
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */
