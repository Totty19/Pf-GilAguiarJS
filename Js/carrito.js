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
    location.reload();
}

function eliminarProducto(id) {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id == id) {
            if (carrito[i].cantidad > 1) {
                carrito[i].cantidad--
            }
            else {
                carrito.splice(i,1);
            }
            break;
        } 
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito(carrito);
}

function finCompra() {
    Swal.fire({
        title: 'Desea confirmar su compra?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirmar compra',
        denyButtonText: `Cancelar compra`,
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Compra realizada', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Compra cancelada con exito!', '', 'info')
        }
    })
}
