// Arrays
const numeros = [10,20,30,40,50];
console.log(numeros);
console.table(numeros);


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
console.log(meses);
console.table(meses);

//const array = ["Hola", 10, true, "Si", null, {nombre: "Juan",trabajo: "programador"},[1,2,3]];
//console.log(array);
//console.table(array);
//
//// Acceder a valores de un array
//console.log(numeros[4]);
//console.log(numeros[200]);
//
//// Conocer la extension de un array
//console.log(meses.length);
//
//meses.forEach(function(mes){
//    console.log(mes);
//})

numeros[5] = 60;
numeros.push(70);           // Agrega al final
numeros.push(80,90);        // Agrega al final
numeros.unshift(-20,-10);   // Agrega al inicio
console.table(numeros);

//meses.pop();    // Elimina el ultimo elemento
//meses.shift();  // Elimina el primer elemento
//meses.splice(2,1);
console.table(meses);

// Rest operator o Spread operator
const nuevoArr = [...meses, "Junio"];
console.table(nuevoArr);