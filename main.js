const url = "../json/productos.json";
fetch(url)
    .then(response => response.json())
    .then(data => {
        const teclado = [];
        const mouse = [];
        const auricular = [];
        const microfono = [];

        data.forEach(producto => {
            switch (producto.class) {
                case "teclado":
                    teclado.push(producto);
                    break;
                case "mouse":
                    mouse.push(producto);
                    break;
                case "auricular":
                    auricular.push(producto);
                    break;
                case "microfono":
                    microfono.push(producto);
                    break;
            }
        });

        localStorage.setItem("teclado", JSON.stringify(teclado));
        console.log("teclado", teclado)
        localStorage.setItem("mouse", JSON.stringify(mouse));
        console.log("mouse", mouse)
        localStorage.setItem("auricular", JSON.stringify(auricular));
        console.log("auricular", auricular)
        localStorage.setItem("microfono", JSON.stringify(microfono));
        console.log("microfono", microfono)


        const listadoTeclado = document.getElementById("listado");
        teclado.forEach(producto => {
            const divProducto = document.createElement("div")
            divProducto.innerHTML += `
                <div class="container-card">
                    <div class="card" id="${producto.id}">
                        <img src="${producto.img}" alt="${producto.nombre}">
                        <div><hr class="hr-card"></div>
                        <div class="name-card">${producto.nombre}</div>
                        <div class="precio-card">${producto.precio}</div>
                        <button class="button-card" id="boton${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>`;
                listadoTeclado.appendChild(divProducto)
            const boton = document.getElementById(`boton${producto.id}`)
            boton.addEventListener("click", () => {
                agregarAlCarrito(teclado,producto.id)
            })
        });

        const listadoMouse = document.getElementById("listado1");
        mouse.forEach(producto => {
            const divProducto = document.createElement("div")
            divProducto.innerHTML += `
                <div class="container-card">
                    <div class="card" id="${producto.id}">
                        <img src="${producto.img}" alt="${producto.nombre}">
                        <div><hr class="hr-card"></div>
                        <div class="name-card">${producto.nombre}</div>
                        <div class="precio-card">${producto.precio}</div>
                        <button class="button-card" id="boton${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>`;
                listadoMouse.appendChild(divProducto)
            const boton = document.getElementById(`boton${producto.id}`)
            boton.addEventListener("click", () => {
                agregarAlCarrito( mouse,producto.id)
            })
        });

        const listadoAuricular = document.getElementById("listado2");
        auricular.forEach(producto => {
            const divProducto = document.createElement("div")
            divProducto.innerHTML += `
                <div class="container-card">
                    <div class="card" id="${producto.id}">
                        <img src="${producto.img}" alt="${producto.nombre}">
                        <div><hr class="hr-card"></div>
                        <div class="name-card">${producto.nombre}</div>
                        <div class="precio-card">${producto.precio}</div>
                        <button class="button-card" id="boton${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>`;
                listadoAuricular.appendChild(divProducto)
            const boton = document.getElementById(`boton${producto.id}`)
            boton.addEventListener("click", () => {
                agregarAlCarrito(auricular,producto.id)
            })
        });

        const listadoMicrofono = document.getElementById("listado3");
        microfono.forEach(producto => {
            const divProducto = document.createElement("div")
            divProducto.innerHTML += `
                <div class="container-card">
                    <div class="card" id="${producto.id}">
                        <img src="${producto.img}" alt="${producto.nombre}">
                        <div><hr class="hr-card"></div>
                        <div class="name-card">${producto.nombre}</div>
                        <div class="precio-card">${producto.precio}</div>
                        <button class="button-card" id="boton${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>`;
                listadoMicrofono.appendChild(divProducto)
            const boton = document.getElementById(`boton${producto.id}`)
            boton.addEventListener("click", () => {
                agregarAlCarrito( microfono ,producto.id)
            })
        });
    })
    .catch(error => console.error(error));


let carrito = []

const agregarAlCarrito = (data, id) => {
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
