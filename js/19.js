function sumar(n1, n2) {
    return n1 + n2;
}
let resultado = sumar(10,10);
console.log(resultado);

let total = 0;
function agregarCarrito(precio){
    total+=precio;
}

function calcularImpuesto(total){
    return total*1.21;
}

agregarCarrito(200);
agregarCarrito(100);
console.log(`El total a pagar (con IVA) es: ${calcularImpuesto(total)} €`);