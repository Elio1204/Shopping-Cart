///Elementos fijos

let carritoFijo = [
    {
        id: 1,
        nombre: "Monstera Deliciosa",
        imagen: "https://i.pinimg.com/564x/2c/1e/0e/2c1e0ed3f8518e9504fdc3942ffaf782.jpg",
        precio: 19.99,
        descripcion: "La Monstera Deliciosa es una planta de interior fácil de cuidar, con grandes hojas verdes que purifican el aire y añaden un toque tropical al hogar."
    },
    {
        id: 2,
        nombre: "Ficus Elastica",
        imagen: "https://i.pinimg.com/564x/8b/b2/f4/8bb2f4a1a92dc959525aa518d1d74250.jpg",
        precio: 24.99,
        descripcion: "El Ficus Elastica es una planta de interior resistente y fácil de cuidar, ideal para mejorar la calidad del aire en interiores gracias a sus hojas brillantes y su adaptabilidad a la luz baja."
    },
    {
        id: 3,
        nombre: "Alocasia Polly",
        imagen: "https://i.pinimg.com/564x/3d/3f/82/3d3f82badc8487574b66578402fd6625.jpg",
        precio: 14.99,
        descripcion: "La Alocasia Polly es una planta de interior conocida por sus llamativas hojas verdes con vetas blancas. Ayuda a purificar el aire y agrega un toque de elegancia a cualquier espacio."
    },
    {
        id: 4,
        nombre: "Calathea Orbifolia",
        imagen: "https://i.pinimg.com/564x/60/0b/1f/600b1f8ecd9ee056eaeb441861ffdc23.jpg",
        precio: 29.99,
        descripcion: "La Calathea Orbifolia es una planta de interior con hojas grandes y redondas con patrones únicos. Es conocida por ser una planta purificadora de aire y por su capacidad para añadir color y textura a cualquier habitación."
    }];


for (let i = 0; i < carritoFijo.length; i++) {
    $('.cardsss').prepend(`
        <div id='cartas' class="card mb-3 container bg-dark text-white" style="max-width: 700px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${carritoFijo[i].imagen}" class="img-fluid rounded-start card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${carritoFijo[i].nombre}</h5>
                    <p class="card-text">${carritoFijo[i].descripcion}</p>
                    <h5 ><small>$ ${carritoFijo[i].precio}</small></h5>
                    <button class='btn btn-outline-success text-white' id='agrega' onclick="agregarCarrito('${carritoFijo[i].id}')">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    </div>
    `)

}


class Planta {
    constructor(id, nombre, imagen, precio, descripcion) {
        this.id = parseInt(id)
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = parseFloat(precio);
        this.descripcion = descripcion;
    }
}

function datosFormulario() {
    let id = document.getElementById('idProducto').value;
    let nombre = document.getElementById('nombreProducto').value;
    let imagen = document.getElementById('imagenProducto').value;
    let precio = document.getElementById('precioProducto').value;
    let descripcion = document.getElementById('descripProducto').value;

    let nuevaPlanta = new Planta(id, nombre, imagen, precio, descripcion)
    carritoFijo.push(nuevaPlanta)
    crearTarjeta(nuevaPlanta);
    console.log(carritoFijo)
}


function crearTarjeta(planta) {
    $('.cardsss').prepend(`
    <div id='cartas' class="card mb-3 container bg-dark text-white" style="max-width: 700px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${planta.imagen}" class="img-fluid rounded-start card-img" alt="${planta.nombre}">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${planta.nombre}</h5>
                <p class="card-text">${planta.descripcion}</p>
                <h5 ><small>$ ${planta.precio}</small></h5>
                <button class='btn btn-outline-success text-white' id='agrega' onclick="agregarCarrito('${planta.id}')">Agregar al Carrito</button>
            </div>
        </div>
    </div>
</div>
    `);
}


$('#cartver').on('click', () => {
    if (carrito.length == 0) {
        $('.modal-body').prepend(`
        <h1>El carrito está vacio </h1>
        `)
        $('#finCompra').hide()

    }

})


