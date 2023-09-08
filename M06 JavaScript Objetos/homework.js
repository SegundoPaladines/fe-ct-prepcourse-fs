/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   return {
      nombre:nombre,
      edad:edad,
      meow: function(){
         return "Meow!";
      }
   }
}

function nuevoUsuario(nombre, email, password) {
   return {
      nombre:nombre,
      email:email,
      password:password
   }
}

function agregarPropiedad(objeto, propiedad) {
   objeto[propiedad] = null;
   return objeto;
}

function invocarMetodo(objeto, metodo) {
   objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   return objetoMisterioso.numeroMisterioso*5;
}

function eliminarPropiedad(objeto, propiedad) {
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   return objetoUsuario.email != null ? true: false;
}

function tienePropiedad(objeto, propiedad) {
   return objeto.hasOwnProperty(propiedad);
}

function verificarPassword(objetoUsuario, password) {
   return objetoUsuario.password == password;
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   objetoMuchosUsuarios.forEach(usuario => {
      usuario.esPremium = true;
   });
   return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   var posts = objetoUsuario.posts;
   var likes = 0;
   posts.forEach(post => {
      likes = likes + post.likes;
   });
   return likes;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function (){
      return this.precio - this.precio*this.porcentajeDeDescuento;
   };

   return objetoProducto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
