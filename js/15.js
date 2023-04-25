const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 500 },
    { nombre: "Television 50 pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Telcado", precio: 50 },
    { nombre: "iPhone 13", precio: 800 }
];

// ForEach
meses.forEach(function(mes){
    if(mes == "Marzo"){
        console.log("Marzo sí existe");
    }    
});

// Includes
let resultado = meses.includes("Marzo");
console.log(resultado);

// Some ideal para arreglos de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === "iPhone 13";
});
console.log(resultado);
resultado = carrito.some(producto => producto.nombre === "iPhone 14");
console.log(resultado);

// Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio;
},0);
console.log(resultado);
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

// Filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400;
});
console.log(resultado);
resultado = carrito.filter(function(producto){
    return producto.nombre !== "iPhone 13";
});
console.log(resultado);
