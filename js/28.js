// Clases
class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio} €`;
    }
}

const p1 = new Producto("iPhone 13", 800);
const p2 = new Producto("iPad Air", 600);

// Herencia
class Libro extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}
const libro = new Libro("JavaScript",120,"2534524");

console.log(p1);
console.log(p2);
console.log(libro);
console.log(libro.formatearProducto());
