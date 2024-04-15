function muestraCarrito() {
    $('.modal-body').empty()
    for (let i = 0; i < carrito.length; i++) {
        $('.modal-body').prepend(`
        <div id='cartas' class="card mb-3" style="max-width: 700px;">
        <div class="row g-0">
             <div class="col-md-4" style=' min-height: 100px;' >
                 <img src="${carrito[i].imagen}" class="img-fluid rounded-start " alt="${carrito[i].nombre}">
             </div>
             <div class="col-md-8">
                 <div class="card-body">
                    <h5 class="card-title">${carrito[i].nombre}</h5>
                    <p class="card-text">${carrito[i].descripcion}</p>
                    <h5 ><small>$ ${carrito[i].precio}</small></h5>
                    <button class='btn btn-outline-danger' id='eliminaElemento'  onclick="eliminarCarrito('${carrito[i].id}')" > Eliminar   </button>
                 </div>
             </div>
         </div>
    </div>
        `);
    }
    contadorTotalCarrito()
}

// $(document).ready(function(){
// $('#vercarrito').click(()=>{
//     $('#modal').modal('show')
// })
// })
