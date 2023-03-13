const url0 = "/json/productos-teclado.json"
fetch(url0)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("teclado", JSON.stringify(data));
    })
    .catch(error => console.error(error))
const listado = document.getElementById("listado")
const listadoproductos = "/json/productos-teclado.json"


const url1 = "/json/productos-mouse.json"
fetch(url1)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("mouse", JSON.stringify(data));
    })
    .catch(error => console.error(error))



    const url2 = "/json/productos-auricular.json"
    fetch(url2)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            localStorage.setItem("auricular", JSON.stringify(data));
        })
        .catch(error => console.error(error))



        const url3 = "/json/productos-microfono.json"
        fetch(url3)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("microfono", JSON.stringify(data));
            })
            .catch(error => console.error(error))



fetch(listadoproductos)
    .then(response => response.json())
    .then(data => {
        data.forEach( producto =>{
            listado.innerHTML += `
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

let carrito = []
