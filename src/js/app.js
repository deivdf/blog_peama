document.addEventListener("DOMContentLoaded", function() {
    inciarApp();
});

function inciarApp() {
    crearGaleria();
}
function crearGaleria() {
    //selecciona el contenedor de las imagenes de la galeria
    const galeria = document.querySelector('.galeria-imgaenes');
    //crea un ciclo para recorrer las imagenes de la galeria
    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        //añade codigo html para la galeria e inserta las imagenes
        imagen.innerHTML = `
        <source srcset="./build/img/thumb/${i}.webp" type="image/webp">
        <source srcset="./build/img/thumb/${i}.jpg" type="image/jpg">
        <img loading="lazy" src="./build/img/thumb/${i}.jpg" alt="imagen Galeria">`;
        //añade la imagen al contenedor de la galeria
        galeria.appendChild(imagen);
        //agrega la funcion de mostrar imagen al hacer click
        imagen.onclick = function(){
            mostrarImagen(i);
        }
    }
    
}
