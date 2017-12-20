function balikString(string){
   var stringBaru = "";
   for(var i = string.length - 1; i >= 0; i--){
     stringBaru += string[i];
   } 
   return stringBaru;
}

console.log(balikString("hello world!"));
