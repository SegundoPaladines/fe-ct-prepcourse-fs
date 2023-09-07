/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   var resultado = false;
   if(num > 0){
      resultado = "Es positivo";
   }else if(num < 0){
      resultado = "Es negativo"
   }
   return resultado;
}

function agregarSimboloExclamacion(str) {
   return str + "!";
}

function combinarNombres(nombre, apellido) {
   return nombre +" "+apellido;
}

function obtenerSaludo(nombre) {
   return "Hola "+nombre+"!";
}

function obtenerAreaRectangulo(alto, ancho) {
   return alto*ancho;
}

function retornarPerimetro(lado) {
   return lado*4;
}

function areaDelTriangulo(base, altura) {
   return (base*altura)/2;
}

function deEuroAdolar(euro) {
   return euro*1.2;
}

function esVocal(letra) {
   var resultado = "Dato incorrecto";
   const vocales = "aeiou";
   if((letra.length == 1) && (vocales.indexOf(letra) != -1)){
      resultado = "Es vocal";
   }
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
