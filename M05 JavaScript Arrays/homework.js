/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   return array[0];
}

function devolverUltimoElemento(array) {
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   return array.length;
}

function incrementarPorUno(array) {
   return array.map((num) => {return num+1;});
}

function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento)
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   var contador = 0;
   arrayOfNums.forEach( (num) => {contador = contador + num;});
   return contador;
}

function promedioResultadosTest(resultadosTest) {
   var promedio = 0;
   resultadosTest.forEach( (num) => {promedio = promedio + num;});
   return promedio/resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   var mayor = arrayOfNums[0];
   arrayOfNums.forEach( (num) => {
      if(num > mayor){ mayor = num}
   });
   return mayor;
}

function multiplicarArgumentos() {
   //¿Por qué no funciona con el forEach ?
   var resultado = 1;
   if(arguments.length > 0){
      for(i = 0; i < arguments.length; i++){
         resultado = resultado*arguments[i];
      }
   }else{
      resultado = 0;
   }
   return resultado;
}

function cuentoElementos(array) {
   var contador = 0;
   array.forEach((num) => {if(num > 18){contador++;}})
   return contador;
}

function diaDeLaSemana(numeroDeDia) {
   return (numeroDeDia === 1 || numeroDeDia === 7) ? "Es fin de semana": "Es dia laboral";
}

function empiezaConNueve(num) {
   return (num+"")[0] == 9 ? true: false;
}

function todosIguales(array) {
   return array.every( (num) => {return num === array[0];});
}

function mesesDelAño(array) {
   var meses = [];
   array.forEach( (mes) => {
      if((mes == "Enero") || (mes == "Marzo") || (mes == "Noviembre")){
         meses.push(mes);
      }
   });

   if(!(array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre"))){
      meses = "No se encontraron los meses pedidos";
   }
   return meses;
}

function tablaDelSeis() {
   var tabla = [];
   for(i = 0; i <= 10; i++){
      tabla[i] = 6 * i;
   }
   return tabla;
}

function mayorACien(array) {
   var vector = []; 
   array.forEach((num) => {if(num > 100){ vector.push(num)}});
   return vector;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   var arreglo = [];
   for(i = 0; i < 10; i++){
      if(i === (num + 2*i)){
         arreglo = "Se interrumpió la ejecución";
         break;
      }else{
         arreglo[i] = num + 2*(i+1);
      }
   }
   return arreglo;
}

function continueStatement(num) {
   var arreglo = [];
   arreglo.push(num+2);
   for(i = 1; i < 10; i++){
      if(i === 5){
         continue;
      }else{
         arreglo.push(arreglo[arreglo.length - 1] + 2);
      }
   }
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
