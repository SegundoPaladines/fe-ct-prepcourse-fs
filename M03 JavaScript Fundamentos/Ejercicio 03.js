/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   return x == y;
}

function tienenMismaLongitud(str1, str2) {
   return str1.length == str2.length;
}

function menosQueNoventa(num) {
   return num < 90;
}

function mayorQueCincuenta(num) {
   return num > 50;
}

function esPar(num) {
   return (num % 2) == 0;
}

function esImpar(num) {
   return (num % 2 ) != 0;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
