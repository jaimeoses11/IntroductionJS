// Objetos
"use strict" // Correr JS en modo estricto
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto);
Object.seal(producto); // Permite modificar propiedades existentes

//producto.imagen = 'imagen.jpg';
delete producto.precio;

console.log(Object.isFrozen(producto));
console.log(producto);