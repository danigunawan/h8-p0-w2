for(var i = 1; i < 101; i++){
  if(i % 2 == 0){
    console.log('GENAP');
  } else {
  console.log('GANJIL');
  }
}
for (var i = 1; i < 101; i += 2){
  if(0 == (i % 3)){
    console.log(i +' KELIPATAN 3');
  } else {
    console.log('');
  }
}
for(var i =  1; i < 101; i += 5){

  if(0 == (i % 6)){
    console.log(i +' KELIPATAN 6');
  } else {
    console.log('');
  }
}
for(var i =  1; i < 101; i += 9){

  if(0 == (i % 10)){
    console.log(i +' KELIPATAN 10');
  } else {
    console.log('');
  }
}
