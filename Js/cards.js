
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let Prodc = document.querySelector('.Prodc');
let cart = document.querySelector('.carrito');

function crearCards() {
    productos.forEach((prod) => {
        Prodc.innerHTML += `<section class="contProducto">
                                <div class="producto">
                                    <img src="${prod.img}" alt="${prod.nombre}">
                                    <h3 class="producto__titulo">${prod.nombre}</h3>
                                    <p class="precio">$${prod.precio}</p>
                                    <button class="btnCont" id="book-${prod.id}">Agregar</button>
                                </div>
                            </section>`;
    });
    funcionalBtn();
}

function funcionalBtn() {
    productos.forEach((prod) => {
        document.getElementById(`book-${prod.id}`).addEventListener(`click`, () => {
            agregarAlCarrito(prod);
            talles();
        })
    })
}


mostrarCarrito();
crearCards();



