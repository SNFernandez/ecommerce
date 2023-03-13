fetch("json/productos.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error));

const listado = document.getElementById("listado")
const listadoproductos = "json/productos.json"

fetch(listadoproductos)
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(error => console.error(error));

let carrito = []
