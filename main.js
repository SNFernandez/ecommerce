const url = "../json/productos.json";
fetch(url)
    .then(response => response.json())
    .then(data => {
        const teclados = [];
        const mouses = [];
        const auriculares = [];
        const microfonos = [];

        data.forEach(producto => {
            switch (producto.class) {
                case "teclado":
                    teclados.push(producto);
                    break;
                case "mouse":
                    mouses.push(producto);
                    break;
                case "auricular":
                    auriculares.push(producto);
                    break;
                case "microfono":
                    microfonos.push(producto);
                    break;
            }
        });

        localStorage.setItem("teclado", JSON.stringify(teclados));
        console.log("teclado", teclados)
        localStorage.setItem("mouse", JSON.stringify(mouses));
        console.log("mouse", mouses)
        localStorage.setItem("auricular", JSON.stringify(auriculares));
        console.log("auricular", auriculares)
        localStorage.setItem("microfono", JSON.stringify(microfonos));
        console.log("microfono", microfonos)


        const listadoTeclado = document.getElementById("listado");
        teclados.forEach(producto => {
            listadoTeclado.innerHTML += `
                <div class="container-card">
                    <div class="card" id="${producto.id}">
                        <img src="${producto.img}" alt="${producto.nombre}">
                        <div><hr class="hr-card"></div>
                        <div class="name-card">${producto.nombre}</div>
                        <div class="precio-card">${producto.precio}</div>
                        <button class="button-card" id="boton${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>`;
                const boton = document.getElementById(`boton${producto.id}`)
                boton.addEventListener("click", () => {
                    agregarAlCarrito(producto.id)
                })
        });

        const listadoMouse = document.getElementById("listado1");
        mouses.forEach(producto => {
            listadoMouse.innerHTML += `
                <div class="container-card">
                    <div class="card" id="${producto.id}">
                        <img src="${producto.img}" alt="${producto.nombre}">
                        <div><hr class="hr-card"></div>
                        <div class="name-card">${producto.nombre}</div>
                        <div class="precio-card">${producto.precio}</div>
                        <button class="button-card" id="boton${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>`;
                const boton = document.getElementById(`boton${producto.id}`)
                boton.addEventListener("click", () => {
                    agregarAlCarrito(producto.id)
                })
        });

        const listadoAuricular = document.getElementById("listado2");
        auriculares.forEach(producto => {
            listadoAuricular.innerHTML += `
                <div class="container-card">
                    <div class="card" id="${producto.id}">
                        <img src="${producto.img}" alt="${producto.nombre}">
                        <div><hr class="hr-card"></div>
                        <div class="name-card">${producto.nombre}</div>
                        <div class="precio-card">${producto.precio}</div>
                        <button class="button-card" id="boton${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>`;
                const boton = document.getElementById(`boton${producto.id}`)
                boton.addEventListener("click", () => {
                    agregarAlCarrito(producto.id)
                })
        });

        const listadoMicrofono = document.getElementById("listado3");
        microfonos.forEach(producto => {
            listadoMicrofono.innerHTML += `
                <div class="container-card">
                    <div class="card" id="${producto.id}">
                        <img src="${producto.img}" alt="${producto.nombre}">
                        <div><hr class="hr-card"></div>
                        <div class="name-card">${producto.nombre}</div>
                        <div class="precio-card">${producto.precio}</div>
                        <button class="button-card" id="boton${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>`;
                const boton = document.getElementById(`boton${producto.id}`)
                boton.addEventListener("click", () => {
                    agregarAlCarrito(producto.id)
                })
        });
    })
    .catch(error => console.error(error));

    let carrito = []
const agregarAlCarrito = (id) => {
    const productoCarrito = carrito.find(producto => producto.id === id)
    console.log(productoCarrito)
    if (productoCarrito) {
        productoCarrito.cantidad++
        console.log()
    } else {
        const producto = data.find(producto => producto.id === id)
        carrito.push(producto)
    }
    console.log(carrito)
}
