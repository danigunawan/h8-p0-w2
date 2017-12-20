var nama = 'Mikael';
var peran = 'Penyihir';
var tahunLahir = 1995;
var umur = 2017 - tahunLahir;
var playerHealth =  tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster =  Math.floor(Math.pow(100,Math.random));

if(nama === ""){
  peran = "kacung";
}

if (peran === 'Ksatria') {
	console.log("Selamat datang di Dunia Proxytia, "+nama);
	console.log("Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!");
}else if(peran === 'Tabib') {
	console.log("Selamat datang di Dunia Proxytia, "+nama);
	console.log("Halo Tabib "+nama+", kamu akan membantu temanmu yang terluka.");
} else if(peran === 'Penyihir'){
	console.log("Selamat datang di Dunia Proxytia, "+nama);
	console.log("Halo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
} else {
	console.log("Halo "+nama+", Pilih peranmu untuk memulai game!");
}


for(var i = 0; i < tahunLahir; i++){
var kelipatanKodeMonster = i % kodeMonster;
var kelipatanUmur = i % umur;  
  
  if(kelipatanUmur  == 0){
    console.log(peran+" " + nama + " menyerang monster!");
    monsterHealth -= umur;
  } else if(kelipatanKodeMonster == 0){
     console.log("monster menyerang "+peran+" "+ nama +"!");
     playerHealth -= kodeMonster;

  } else if (kelipatanUmur == 0 && kelipatanKodeMonster == 0 ){
   console.log("Health keduannya bertambah");
   playerHealth += kodeMonster;
   monsterHealth += umur;  
  }
}

if(playerHealth > monsterHealth){
  
  console.log("Selamat, "+peran + " "+ nama + " memenangkan pertarungan!");
 
} else {
  console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}
