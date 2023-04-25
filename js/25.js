const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 500 },
    { nombre: "Television 50 pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Telcado", precio: 50 },
    { nombre: "iPhone 13", precio: 800 }
];

// ForEach
carrito.forEach(function(producto){
    console.log(producto.nombre);
    console.log(producto.precio);
});
console.log("");

// Map
carrito.map(function(producto){
    console.log(producto.nombre);
    console.log(producto.precio);
});

const arr = carrito.map(producto => `${producto.nombre} - ${producto.precio} €`);
console.log(arr);