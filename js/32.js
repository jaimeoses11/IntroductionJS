// Async/Await
function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log("Descargando clientes... espere...")

        setTimeout(function(){
            resolve("Clientes descargados");
        }, 5000);
    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve => {
        console.log("Descargando pedidos... espere...")

        setTimeout(function(){
            resolve("Pedidos descargados");
        }, 3000);
    });
}

async function app(){
    try {
        //const clientes = await descargarNuevosClientes();
        //const pedidos = await descargarUltimosPedidos();
        //console.log(clientes);
        //console.log(pedidos);
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log("Este codigo no se bloquea");