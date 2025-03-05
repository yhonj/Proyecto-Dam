// js/javascript.js

function mostrarBienvenida() {
    alert("¡Bienvenido a nuestro proyecto!");
}

// Llamar a la función cuando la página se haya cargado completamente
window.onload = mostrarBienvenida;


// js/javascript.js

function mostrarBienvenida() {
    const mensaje = document.createElement('div');
    mensaje.textContent = "¡Bienvenido a nuestro proyecto!";
    mensaje.style.position = 'fixed';
    mensaje.style.top = '500px';
    mensaje.style.right = '50%';
    mensaje.style.backgroundColor = 'lightblue';
    mensaje.style.padding = '10px';
    mensaje.style.border = '1px solid blue';
    document.body.appendChild(mensaje);
}

// Llamar a la función cuando la página se haya cargado completamente
window.onload = mostrarBienvenida;