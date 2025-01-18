const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarcarritoBtn = document.getElementById('vaciar-carrito');

/*Desde aqui es para que el boton nos redireccione a Youtube*/
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el enlace dentro de .header-txt
    const youtubeLink = document.querySelector('.header-txt a');
    
    // Añade el evento de clic
    youtubeLink.addEventListener('click', (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        window.location.href = 'https://www.youtube.com/watch?v=5CKtm7icp3Q&ab_channel=KrisR.'; // Redirige a YouTube
    });
});
/*Aqui finaliza*/

cargarEventListeners();

function cargarEventListeners() {

    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarcarritoBtn.addEventListener('click', vaciarCarrito);

}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);

}

function insertarCarrito(elemento) {

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src="${elemento.imagen}" width=100 >
    </td>
     <td>
         ${elemento.titulo}
    </td>
     <td>
         ${elemento.precio}
    </td>
     <td>
         <a href="#" class="borrar" data-id="${elemento.id}">X </a>
    </td>
    
    `;

    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
    elementoId;
    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
