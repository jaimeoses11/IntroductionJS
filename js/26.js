// This
const reserva = {
    nombre: "Juan",
    apellido: "De la torre",
    total: 5000,
    pagado: false,
    info: function(){
        console.log(`El cliente ${this.nombre} ${this.apellido} debe pagar ${this.total} €`)
    }
}

reserva.info();

