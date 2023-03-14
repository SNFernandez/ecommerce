const url0 = "/json/productos.json"
fetch(url0)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("teclado", JSON.stringify(data));
    })
    .catch(error => console.error(error))
const listado = document.getElementById("listado")
const listadoproductos = "/json/productos.json"


const url1 = "/json/productos.json"
fetch(url1)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("mouse", JSON.stringify(data));
    })
    .catch(error => console.error(error))
const listado1 = document.getElementById("listado1")
const listadoproductos1 = "/json/productos.json"



const url2 = "/json/productos.json"
fetch(url2)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("auricular", JSON.stringify(data));
    })
    .catch(error => console.error(error))
const listado2 = document.getElementById("listado2")
const listadoproductos2 = "/json/productos.json"



const url3 = "/json/productos.json"
fetch(url3)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("microfono", JSON.stringify(data));
    })
    .catch(error => console.error(error))
const listado3 = document.getElementById("listado3")
const listadoproductos3 = "/json/productos.json"



fetch(listadoproductos)
    .then(response => response.json())
    .then(data => {
        data.forEach(producto => {
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
            `
        })
    })
    .catch(error => console.error(error));

fetch(listadoproductos1)
    .then(response => response.json())
    .then(data => {
        data.forEach(producto => {
            listado1.innerHTML += `
            <div class="container-card">
            <div class="card" id="${producto.id}"><img src="${producto.img}" alt="${producto.nombre}">
                <div>
                    <hr class="hr-card">
                </div>
                <div class="name-card">${producto.nombre}</div>
                <div class="precio-card">${producto.precio}</div>
                <button class="button-card" id="${producto.boton}">Agregar al Carrito</button>
            </div>
            </div>
            `
        })
    })
    .catch(error => console.error(error));

fetch(listadoproductos2)
    .then(response => response.json())
    .then(data => {
        data.forEach(producto => {
            listado2.innerHTML += `
            <div class="container-card">
            <div class="card" id="${producto.id}"><img src="${producto.img}" alt="${producto.nombre}">
                <div>
                    <hr class="hr-card">
                </div>
                <div class="name-card">${producto.nombre}</div>
                <div class="precio-card">${producto.precio}</div>
                <button class="button-card" id="${producto.boton}">Agregar al Carrito</button>
            </div>
            </div>
            `
        })
    })
    .catch(error => console.error(error));

fetch(listadoproductos3)
    .then(response => response.json())
    .then(data => {
        data.forEach(producto => {
            listado3.innerHTML += `
            <div class="container-card">
            <div class="card" id="${producto.id}"><img src="${producto.img}" alt="${producto.nombre}">
                <div>
                    <hr class="hr-card">
                </div>
                <div class="name-card">${producto.nombre}</div>
                <div class="precio-card">${producto.precio}</div>
                <button class="button-card" id="${producto.boton}">Agregar al Carrito</button>
            </div>
            </div>
            `

            const boton = document.getElementById(`${producto.boton}`);
            boton.addEventListener("click",() =>{
                agregarAlCarrito(producto.id)
            })
        })
    })
    .catch(error => console.error(error));

const agregarAlCarrito = (id) => {
    const productoCarrito = carrito.find (producto => producto.id === id)
    if (productoCarrito){
        productoCarrito.cantidad++
    }else {
        const producto = producto.find(producto === producto.id === id)
        carrito.push(producto)
    }
    console.log(carrito)
}
z
let carrito = []
