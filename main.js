const url0 = "../json/productos.json";

fetch(url0)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("teclado", JSON.stringify(data));
    })
    .catch(error => console.error(error))

const listado = document.getElementById("listado")

const listadoproductos = "../json/productos.json";




fetch(listadoproductos)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.map(producto => {
            if (producto.class === "teclado"){
            listado.innerHTML += `
            <div class="container-card">
            <div class="card" "id="${producto.id}"><img src="${producto.img}" alt="${producto.nombre}">
                <div>
                    <hr class="hr-card">
                </div>
                <div class="name-card">${producto.nombre}</div>
                <div class="precio-card">${producto.precio}</div>
                <button class="button-card" id="${producto.boton}">Agregar al Carrito</button>
            </div>
            </div>
            `}
        })
    })
    .catch(error => console.error(error));



const agregarAlCarrito = (id) => {
    const productoCarrito = carrito.find (producto => producto.id === id)
    if (productoCarrito){
        productoCarrito.cantidad++
    }else {
        const producto = data.find(producto => producto.id === id)

        carrito.push(producto)
    }
    console.log(carrito)
}
let carrito = []