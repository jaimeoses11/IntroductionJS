// Arrow functions
const sumar2 = (n1, n2) => console.log(n1+n2); 
sumar2(5,10);

const aprendiendo = tecnologia => {
    console.log(`Aprendiendo ${tecnologia}`); 
};
aprendiendo("JavaScript");


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
meses.forEach(mes => {
    if(mes == "Marzo"){
        console.log("Marzo sí existe");
    }    
});

// Some ideal para arreglos de objetos
let resultado = carrito.some( producto => producto.nombre === "iPhone 13");
console.log(resultado);

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

// Filter
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);
resultado = carrito.filter(producto => producto.nombre !== "iPhone 13");
console.log(resultado);
