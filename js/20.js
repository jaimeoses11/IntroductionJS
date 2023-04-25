const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con ID: ${id}`);
    },
    pausar: function(){
        console.log("Pausando...");
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}
reproductor.borrarCancion = function(id){
    console.log(`Borrando canción con ID: ${id}`);
}
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(3840);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");