/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   return Math.max(x, y);
}

function mayoriaDeEdad(edad) {
   return edad >= 18 ? "Allowed": "Not allowed";
}

function conection(status) {
   return status === 1 ? "Online" : (status === 2 ? "Away" : "Offline");
}

function saludo(idioma) {
   var saludo = "Hola!";
   switch(idioma){
      case "aleman": saludo = "Guten Tag!"; break;
      case "mandarin": saludo = "Ni Hao!"; break;
      case "ingles": saludo = "Hello!"; break;
   }
   return saludo;
}

function colors(color) {
   var resultado = "Color not found";
   switch(color){
      case "blue": resultado = "This is blue"; break;
      case "red": resultado = "This is red"; break;
      case "green": resultado = "This is green"; break;
      case "orange": resultado = "This is orange"; break;
   }
   return resultado;
}

function esDiezOCinco(num) {
   return (num === 10 || num === 5) ? true : false;
}

function estaEnRango(num) {
   return (num < 50 && num > 20) ? true : false;
}

function esEntero(num) {
   return Number.isInteger(num);
}

function fizzBuzz(num) {
   var resultado = false;
   if(num % 3 === 0){
      resultado = "fizz";
   }
   if(num % 5 === 0){
      resultado ? resultado = resultado+"buzz": resultado = "buzz";
   }
   return resultado;
}

function operadoresLogicos(num1, num2, num3) {
   resultado = false;
   if((num1 > 0) && (num1 > num2) && (num1 > num3)){
      resultado = "Numero 1 es mayor y positivo";
   }
   if((num1 < 0) || (num2 < 0) || (num3 < 0)){
      resultado = "Hay negativos";
   }
   if((num3 > num2) && (num3 > num1)){
      resultado = num3 + 1;
   }
   if((num1 === 0)&& (num2 === 0) && (num3 === 0)){
      resultado = "Error";
   }
   return resultado;
}

function esPrimo(num) {
   var divisiores = 0;
   var recorredor = 1;
   while(recorredor <= num){
      if(num % recorredor === 0){divisiores++;}
      recorredor++;
   }
   return ((divisiores === 2) && (num > 1)) ? true: false;
}

function esVerdadero(valor) {
   return valor ? "Soy verdadero": "Soy falso";
}

function tieneTresDigitos(num) {
   return (num+"").length === 3? true: false;
}

function doWhile(num) {
   var contador = 0;
   do{
      num += 5;
      contador++;
   }while(contador < 8);
   return num;
}

console.log(doWhile(5));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
