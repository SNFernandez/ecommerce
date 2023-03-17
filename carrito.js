const dolar = "https://criptoya.com/api/dolar"
const dolarDiv = document.getElementById("dolarDiv")
setInterval(() => {

    fetch(dolar)
        .then(response => response.json())
        .then(({ oficial, blue })=>{
            dolarDiv.innerHTML = `
            <h4>Cotizacion</h4>
            <p>Dolar-Oficial: $${oficial}</p>
            `
        })
.catch(error => console.error(error))
}, 500)


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
                    <button class="button-card" id="eliminar${producto.id}">Eliminar</button>
                </div>
            </div>`;
        carritoProducto.appendChild(divProducto)
        agregarAlCarrito()
    })
}