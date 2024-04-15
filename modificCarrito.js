function eliminarCarrito(productoEliminar){
    // console.log(productoEliminar)
    carrito = carrito.filter(producto => producto.id != productoEliminar); //dejo todos menos este

    $('.modal-body').empty()
    for (let i = 0; i < carrito.length; i++) {
        $('.modal-body').prepend(`
        <div id='cartas' class="card mb-3" style="max-width: 700px;">
        <div class="row g-0">
             <div class="col-md-4" style=' min-height: 100px;' >
                 <img src="${carrito[i].imagen}" class="img-fluid rounded-start " alt="...">
             </div>
             <div class="col-md-8">
                 <div class="card-body">
                    <h5 class="card-title">${carrito[i].nombre}</h5>
                    <p class="card-text">${carrito[i].descripcion}</p>
                    <h5 ><small>$ ${carrito[i].precio}</small></h5>
                    <button class='btn btn-outline-danger' id='eliminaelemento' onclick="eliminarCarrito('${carrito[i].id}')" > Eliminar   </button> |
                    <button class='btn btn-outline-success' onclick="" > Agregar   </button>
                 </div>
             </div>
         </div>
    </div>
        `);

    }

    console.log(`New Cart ${carrito}`)

    if(carrito.length == 0){
        $('.modal-body').prepend(`
        <h2 class="title" > Carrito vacio :( </h2>

        <button class='btn btn-outline-primary' id='recarga' > Seguir comprando </button>
        `)
        $('#recarga').click(()=>{
            window.location.reload()
        })

        $('#finCompra').hide()
        $('.btn-close').hide()
        $('#cancel').hide()

    }
    contadorTotalCarrito()

}
function contadorTotalCarrito() {
    let count = 0;
    for (let i = 0; i < carrito.length; i++) {
        let precio = carrito[i].precio;
        count += precio;
    }

    $('#totalGeneral').text(count);

}






