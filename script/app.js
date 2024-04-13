// Paso 1: Obtener los elementos del DOM
let nextDom = document.getElementById('next'); // Botón "Siguiente"
let prevDom = document.getElementById('prev'); // Botón "Anterior"

let carouselDom = document.querySelector('.carousel'); // Contenedor del carrusel
let SliderDom = carouselDom.querySelector('.carousel .list'); // Contenedor de los slides
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail'); // Contenedor de las miniaturas
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); // Miniaturas
let timeDom = document.querySelector('.carousel .time'); // Tiempo de transición

// Mover la primera miniatura al final para mostrarla en primer lugar
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Configuración de tiempos
let timeRunning = 3000; // Tiempo de transición de un slide a otro
let timeAutoNext = 7000; // Tiempo para pasar automáticamente al siguiente slide

// Evento al hacer clic en el botón "Siguiente"
nextDom.onclick = function(){
    showSlider('next');    
}

// Evento al hacer clic en el botón "Anterior"
prevDom.onclick = function(){
    showSlider('prev');    
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click(); // Pasa automáticamente al siguiente slide después de cierto tiempo
}, timeAutoNext)

// Función para mostrar el slide siguiente o anterior
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]); // Mover el primer slide al final
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]); // Mover la primera miniatura al final
        carouselDom.classList.add('next'); // Aplicar clase de animación "next"
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]); // Mover el último slide al principio
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]); // Mover la última miniatura al principio
        carouselDom.classList.add('prev'); // Aplicar clase de animación "prev"
    }
    
    clearTimeout(runTimeOut); // Limpiar el timeout anterior
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next'); // Eliminar clase de animación "next"
        carouselDom.classList.remove('prev'); // Eliminar clase de animación "prev"
    }, timeRunning);

    clearTimeout(runNextAuto); // Limpiar el timeout de auto avance
    runNextAuto = setTimeout(() => {
        next.click(); // Pasar automáticamente al siguiente slide
    }, timeAutoNext)
}
