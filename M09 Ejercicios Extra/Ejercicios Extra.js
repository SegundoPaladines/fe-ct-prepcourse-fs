/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = [];
   for(par in objeto){
      arreglo.push([par, objeto[par]])
   }
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var objeto = {
      'a': 0,
      'b': 0,
      'c': 0,
      'd': 0,
      'e': 0,
      'f': 0,
      'g': 0,
      'h': 0,
      'i': 0,
      'j': 0,
      'k': 0,
      'l': 0,
      'm': 0,
      'n': 0,
      'o': 0,
      'p': 0,
      'q': 0,
      'r': 0,
      's': 0,
      't': 0,
      'u': 0,
      'v': 0,
      'w': 0,
      'x': 0,
      'y': 0,
      'z': 0,
   }
   var str = string.split('');
   str.forEach(letra => {
      objeto[letra] = objeto[letra] + 1;
   });

   for(par in objeto){
      if(objeto[par] === 0){
         delete objeto[par];
      }
   }

   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayuscula = function(letra) {
      const exp_reg_letra_May = /^[A-Z]+$/;
      return  exp_reg_letra_May.test(letra)
   };

   var min = [];
   var may = [];
   for(i = 0; i<string.length; i++){
      if(mayuscula(string[i])){
         may.push(string[i]);
      }else{
         min.push(string[i]);
      }
   }
   return may.join('') + min.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var voltear = function(palabra){
      var reverso = [];
      palabra = palabra.split('');
      for(i = 0; i < palabra.length; i++){
         reverso[i] = palabra[palabra.length - i- 1];
      }
      return reverso.join('');
   }

   var array = frase.split(' ');
   var volteados = [];
   for(j = 0; j < array.length; j++){
      if(array[j].length > 1){
         volteados[j] = voltear(array[j]);
      }else{
         volteados[j] = array[j];
      }
   }

   return volteados.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   return numero+"" === asAmirror(numero+"") ? "Es capicua": "No es capicua"; 
}


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   string = string.replace('a', '');
   string = string.replace('b', '');
   string = string.replace('c', '');
   
   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arreglo = arrayOfStrings;
   for(i = 0; i < arreglo.length; i++){
      for(j = i + 1; j < arreglo.length; j++){
         if(arreglo[j].length < arreglo[i].length){
            var temp = arreglo[i];
            arreglo[i] = arreglo[j];
            arreglo[j] = temp;
         }
      }
   }
   return arreglo;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var tieneElemento = function(arr, num){
      var bandera = false;
      for(k = 0; k < arr.length; k++){
         if(arr[k] === num){
            bandera = true;
            break;
         }
      }
      return bandera;
   }

   var comunes = [];
   for(i = 0; i < array1.length; i++){
      for(j = 0; j < array2.length; j++){
         if(array1[i] === array2[j]){
            if(!tieneElemento(comunes, array1[i])){
               comunes.push(array1[i]);
            }
         }
      }
   }
   return comunes;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
