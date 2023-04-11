
let limpiarCarr = document.querySelector('.vaciar');
let total = carrito.reduce((acc,ite) =>acc + ite.precio * ite.cantidad, 0);
let itemTotal = carrito.reduce((acc,ite) => acc + ite.cantidad, 0);


function totalItems() {
    itemTotal === 0 ?(item.textContent = "Vacio") : (item.textContent = itemTotal);
}

function precioFinalll() {
    precioTotal.textContent = total;
}

function eliminarProducto(id) {
    const carrit= mostrarCarrito();
    const productos = carrit.filter(ite => ite.id !== id);
    agregarAlCarrito(productos);
    crearCards();
}

precioFinalll();
totalItems();