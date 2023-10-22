'use strict';

function mostrarInformacion() {
    var elemento = document.getElementById("tarjetaInformacion1");
    elemento.classList.toggle("active");
}

function mostrarInformacionDos(){
    var elemento = document.getElementById("tarjetaInformacion2");
    elemento.classList.toggle("active");
}

// Palabras a mostrar y tiempos de espera
const textArray = ["Hola, mundo! 👋", "Soy Juan David Rojas" ,"¡ Hola Mundo ! 👋", "Me encanta la programacion "];
const speed = 250; // Velocidad de escritura en milisegundos
let index = 0; // Índice de la palabra actual
let isDeleting = false; // Indicador de si está borrando

function type() {
  const text = textArray[index];
  const textContainer = document.getElementById('text-container');

  if (isDeleting) {
    // Borrando
    textContainer.textContent = text.substring(0, textContainer.textContent.length - 1);
  } else {
    // Escribiendo
    textContainer.textContent = text.substring(0, textContainer.textContent.length + 1);
  }

  // Velocidad de escritura o borrado
  let typeSpeed = isDeleting ? speed / 2 : speed;

  // Verificar si debe cambiar de palabra
  if (!isDeleting && textContainer.textContent === text) {
    typeSpeed = 1000; // Esperar un segundo antes de borrar
    isDeleting = true;
  } else if (isDeleting && textContainer.textContent === '') {
    isDeleting = false;
    index = (index + 1) % textArray.length; // Cambiar a la siguiente palabra
  }

  setTimeout(type, typeSpeed);
}

// Iniciar la animación
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(type, speed);
});