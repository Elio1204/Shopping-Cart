let carrito = []

function agregarCarrito(productoId){
    // $('#cuenta-carrito').empty();
    // $('#cuenta-carrito').prepend(`
    // ${contador++}
    // `)
    console.log('Agregando producto con ID:', productoId);


    // if(!carrito.some(elemento => elemento.id == productoId)) //si ningun elemento coincide lo agrega sin
    // {}
    let productosAgregados = carritoFijo.find(plantas => plantas.id == productoId) //planta = a elemento find encuentra  el primer elemento que cumple la condicion (de carritoFijo encontra)
    carrito.push(productosAgregados)
    console.log(carrito)


    $('#cuenta-carrito').text(carrito.length)

    muestraCarrito()
}

$('#finCompra').on('click',()=>{
    let aceptado = false;

function mostrarAlerta(mensaje) {
    alert(mensaje);
    aceptado = true;
}

mostrarAlerta('Gracias por tu compra! Nos comunicaremos con vos a la brevedad.');
if (aceptado) {
    window.location.reload()
}
})


// $('body').prepend(`
// <button id='rec' > recargar </button>
// `)
// $('#rec').click(()=>{
//     window.location.reload()
// })