// POO
/** Object literal */
const producto = {
    nombre: "Tablet",
    precio: 500
}

/** Object constructor */
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function(){
    return `El cliente es ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

// Crear fucniones que solo se utilizan en un objeto especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio} €`;
}

const p1 = new Producto("iPhone 13", 800);
const p2 = new Producto("iPad Air", 600);
const cliente = new Cliente("Juan","De la Torre");

console.log(p1);
console.log(p1.formatearProducto());
console.log(p2.formatearProducto());
console.log(cliente.formatearCliente());
