// String o Cadenas de texto
const producto = "Monitor de 20 pulgadas";
const producto2 = String('Monitor de 30 "');
const producto3 = new String("Monitor de 50 \"");

console.log(typeof producto.length); // lenght es propiedad no metodo
console.log(typeof producto2);
console.log(typeof producto3);

// Index of
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo"
const email = "correo@correo.com";
console.log(tweet.indexOf("JavaScript"));
console.log(producto2.indexOf("Tablet"));
console.log(email.indexOf("@"));

// Includes (return true o false)
console.log(tweet.includes("JavaScript"));
console.log(producto2.includes("Tablet"));
console.log(email.includes("@"));