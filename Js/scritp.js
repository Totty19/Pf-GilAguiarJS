
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let Prodc = document.querySelector('.Prodc');
let cart = document.querySelector('.carrito');
let item = document.querySelector('.item');
let precioTotal = document.querySelector('.total');



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
        })
    })
}

function agregarAlCarrito(prod) {

    let existe = carrito.some(element => element.id === prod.id);
    
    if (existe === false) {
        prod.cantidad = 1;
        carrito.push(prod);
    } else {
        let miProd = carrito.find((element) => element.id === prod.id);
        miProd.cantidad++;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}


function mostrarCarrito() {
    carrito.length === 0 
        ? (cart.innerHTML = `<h4 class="titCarr">No hay ningun producto seleccionado!</h4>`)
        : (cart.innerHTML = '');    
    carrito.forEach((prod) => {
            cart.innerHTML += ` <section class="contProducto">
                                    <div class="producto">
                                        <img src="${prod.img}" alt="${prod.nombre}">
                                        <h3 class="producto__titulo">${prod.nombre}</h3>
                                        <p class="precio">$${prod.precio}</p>
                                        <p>Cantidad: ${prod.cantidad}</p>
                                        <button class="btnCont" onclick="eliminarProducto(${prod.id})">Eliminar <i class="fa-solid fa-trash-can"></i></button>
                                    </div>
                                </section>`;
        });
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
}

mostrarCarrito();
crearCards();







