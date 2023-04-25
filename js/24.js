// For loop
for(let i=0;i<10;i++){
    console.log(i);
}
console.log("");

for(let i=1;i<=100;i++){
    if(i%2 === 0){
        console.log(`El número ${i} es PAR`);
    }
    else{
        console.log(`El número ${i} es IMPAR`);
    }
}
console.log("");

const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 500 },
    { nombre: "Television 50 pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Telcado", precio: 50 },
    { nombre: "iPhone 13", precio: 800 }
];

for(let i=0;i<carrito.length;i++){
    console.log(`${carrito[i].nombre}: ${carrito[i].precio} €`);
}
console.log("");

// While loop
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
console.log("");

i = 1;
while(i <= 100){
    if(i%2 === 0){
        console.log(`El número ${i} es PAR`);
    }
    else{
        console.log(`El número ${i} es IMPAR`);
    }
    i++;
}
console.log("");

// Do While loop
i = 0;
do{
    console.log(i);
    i++;
} while(i < 10);
console.log("");