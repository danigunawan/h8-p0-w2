var iteration = 1;

console.log('LOOPING PERTAMA');

while(iteration < 20) {
  iteration++;
  if(iteration % 2 == 0 ) {
  console.log(iteration+' - I love coding');
  }
}
iteration = 20;
console.log('LOOPING KEDUA');
while(iteration > 1) {
 if(iteration % 2 == 0 ) {
  console.log(iteration + ' - I will become fullstack developer');
 }
 iteration--;
}
