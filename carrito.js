const dolar = "https://criptoya.com/api/dolar"
const dolarDiv = document.getElementById("dolarDiv")
setInterval(() => {

    fetch(dolar)
        .then(response => response.json())
        .then(({ oficial, blue }) => {
            dolarDiv.innerHTML = `
            <h4>Cotizacion</h4>
            <p>Dolar-Oficial: $${oficial}</p>
            <p>Dolar-Blue: $${blue}</p>
            `
        })
        .catch(error => console.error(error))
}, 500)

const url = "../json/productos.json";

const carrito = JSON.parse(localStorage.getItem("Producto-Carrito")) || []
const carritoProducto = document.getElementById("carritoProducto")


const mostrarCarrito = () => {
    carritoProducto.innerHTML = ""
    carrito.forEach(producto => {
        const divProducto = document.createElement("div")
        divProducto.innerHTML += `
            <div class="container-card">
                <div class="card" id="${producto.id}">
                    <img src="${producto.img}" alt="${producto.nombre}">
                    <div><hr class="hr-card"></div>
                    <div class="name-card">${producto.nombre}</div>
                    <div class="precio-card">$${producto.precio}</div>
                    <div class="precio-card">Cantidad: ${producto.cantidad}</div>
                    <button class="button-card" id="eliminar${producto.id}">Eliminar</button>
                </div>
            </div>`;
        carritoProducto.appendChild(divProducto)

        const boton = document.getElementById(`eliminar${producto.id}`)
        boton.addEventListener("click", () => {
            eliminarProducto(producto.id)

        })
    })
}
mostrarCarrito()

const eliminarProducto = (id) => {
    const index = carrito.findIndex(producto => producto.id === id)
    if (index !== -1) {
        carrito.splice(index, 1)
        mostrarCarrito()
        Swal.fire({
            icon: 'success',
            title: 'Producto Borrado',
            text: 'Borro el producto del carrito',
        })
    }
}

const borrarCarrito = document.getElementById("borrarCarrito")
borrarCarrito.addEventListener("click", () => {
    if (carrito.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El carrito esta vacio',
            footer: '<a>Hay que agregar productos al carrito</a>'
        })
    }
    else { vaciarCarrito() 
        Swal.fire({
            icon: 'info',
            title: 'Eliminado',
            text: 'A borrado todos los productos del carritto',
            footer: '<a>Borro todos los productos</a>'
        }) }

})

const vaciarCarrito = () => {
    localStorage.removeItem("Producto-Carrito")
    carrito.length = 0
    mostrarCarrito()
}



const precioFinal = document.getElementById("precioFinal");
const precio = () => {
    const precioTotal = 0
    carrito.forEach(producto => {
        precioTotal += producto.precio * producto.cantidad
        precioFinal.innerHTML = `Precio Final: $${precioTotal}`
    })
}

const finalizarCompra = document.getElementById("finalizarCompra")
finalizarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
        console.log("El carrito está vacío")
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El carrito esta vacio',
            footer: '<a>No hay productos en el carrito</a>'
        })
        return
    }
    else {
        localStorage.removeItem("Producto-Carrito")
        carrito.length = 0
        mostrarCarrito()
        console.log("Finalizo la compra")
        Swal.fire({
            icon: 'success',
            title: 'Compra completada',
            text: 'A finalizado la compra',
            footer: '<a>Gracias por confiar en nosotros</a>'
        })
    }
})