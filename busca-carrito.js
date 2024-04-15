function buscaElemento(){
    let ingresado = document.getElementById('resultadoBusqueda').value.toLowerCase();
    
    let resultado = carritoFijo.find(producto => producto.nombre.toLowerCase() == ingresado)
    let resultadoII = carritoFijo.filter(producto => producto.nombre.toLowerCase().includes(ingresado))

    if(!resultado && resultadoII.length == 0){
        $('#cardsResul').empty(); 
        $('#cardsResul').append('<h1 style="color: white;" >El producto no existe</h1>'); 
    } else {
        $('#cardsResul').empty(); 
        if(resultado) {
            $('#cardsResul').prepend(`
                <div class="card mb-3 container bg-dark text-white" style="max-width: 700px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${resultado.imagen}" class="img-fluid rounded-start card-img" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${resultado.nombre}</h5>
                                <p class="card-text">${resultado.descripcion}</p>
                                <h5 ><small>$ ${resultado.precio}</small></h5>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        } else {
            resultadoII.forEach(producto => {
                $('#cardsResul').prepend(`
                    <div class="card mb-3 container bg-dark text-white" style="max-width: 700px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${producto.imagen}" class="img-fluid rounded-start card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">${producto.descripcion}</p>
                                    <h5 ><small>$ ${producto.precio}</small></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
            });
        }
    }
}