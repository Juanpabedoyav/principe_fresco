// const url = ' http://localhost:4000/articulos'

const getData = async(url)=>{
const resp = await fetch (url);
const data = await resp.json()
return data;
// const {nombre,imagenP,imagen1, imagen2, descripcion,precio,talla, id} = data
}

  
/*const carrito = document.getElementById('carrito');
carrito.addEventListener('click', ()=>{
console.log("ingresaste al carrito")
// const cajaCar = document.createElement('div')
// cajaCar.classList.add('caja__car')
})*/


// muestra productos en collecion
let productos = document.getElementById('productos')
let mostrador=document.getElementById('mostrador')
let url = ' http://localhost:4019/articulos';
let carrito=document.getElementById('carrito')

productos.addEventListener('click', async () => {
    console.log("hola")
    mostrador.innerHTML = ''
let resp = await fetch(url);
let data = await resp.json();
console.log(data);
data.forEach(art => {
    const { nombre, imagenP, id, precio } = art;
    mostrador.innerHTML += `<div class="container card" style="width: 14rem;" id="cardproducto">
                           <img src="${imagenP}" class="" alt="...">
                           <div class="card-body">
                           <h5 class="card-title d-flex justify-content-center"><strong>${nombre}</strong></h5>
                           <h5 class="card-title d-flex justify-content-center"><strong>${precio}</strong></h5>
                           <a href="#" onClick="shop(${id})" class="">BUY IT</a>
                           </div>
                           `
    })
})


const shop = async(id) =>{
    productos.innerHTML = 'Buy Products'
    let resp = await fetch(url)
    let data = await resp.json()
    
    let img1=data[0].imagenP
    let img2=data[1].imagenP
    let img3=data[2].imagenP

    
    let arregloid = data.find(elegir => elegir.id == id)
    let imagenP = arregloid.imagenP;
    let imagen1 = arregloid.imagen1;
    let imagen2 = arregloid.imagen2;

    mostrador.innerHTML = `<div class="container">
                          <div class="row">
                          <div class="col-2">
                          <a href="#" onClick="cambio('${imagenP}')" class="d-flex ">
                          <img style="width:100px" src="${imagenP}" alt=""></a>
                          <a href="#" onClick="cambio('${imagen1}')" class="d-flex mt-3">
                          <img style="width:100px" src="${imagen1}" alt=""></a>
                          <a href="#" onClick="cambio('${imagen2}')" class="d-flex mt-3">
                          <img style="width:100px" src="${imagen2}" alt=""></a>
                          </div>
                          <div class="col-4">
                          <img id="imagecambio" style="width:100%" src="${imagenP}" alt=""></div>
                          <div class="col-5">
                          <strong><h3 class="d-flex justify-content-left">${arregloid.nombre}</h3></strong>
                          <h5 class="d-flex justify-content-left">$ ${arregloid.precio}.00</h5>
                          <span class="d-flex mt-4">Size</span>
                          <div class="d-flex mt-3">
                          <a Style="color:black;" href="#" class="d-row p-4">S</a>
                          <a Style="color:black;" href="#" class="d-row p-4">M</a>
                          <a Style="color:black;" href="#" class="d-row p-4">L</a>
                          <a Style="color:black;" href="#" class="d-row p-4">XL</a>
                          <a Style="color:black;" href="#" class="d-row p-4">XXL</a>
                          </div>
                          <button id="agregarCarrito" class="aggCar btn">ADD TO CARD</button>
                          <button id="comprar"class="btn btn btnComprar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">BUY NOW</button>
                          <span class="d-flex justify-content-left mt-2"> ${arregloid.descripcion}</span></div></div>
                          
                          <div id="visual-productos">
                          <h1> YOU MAY ALSO LIKE</h1>
                          <img style="width:100px" src="${img1}" alt=""></a>
                          <img style="width:100px" src="${img2}" alt=""></a>
                          <img style="width:100px" src="${img3}" alt=""></a>
                          </div>

                          `


                          let contenidoCompra = document.querySelector('.offcanvas-body');
                          const comprar = document.getElementById('comprar');
                          comprar.addEventListener('click',async()=>{
                              contenidoCompra.innerHTML = " ";
                              contenidoCompra.innerHTML +=`
                                  <div class"cajaVenta">
                                           <div class="venta">
                                              <img  src="${arregloid.imagenP}">
                                              <div class="detalle">

                                              <h3>${arregloid.nombre}</h3>
                                              <span>$ ${arregloid.precio}</span>
                                              </div>
                                              
                                          </div>   
                                       
                                          <p>Subtotal${arregloid.precio}</p>
                                        
                                <p>Shipping, taxes, and discount codes calculated at checkout<p>
                                <button type="button" class="btn btn-chekout">CHECK OUT</button>
                          
                                  </div>  
                                   <p>Please Note: All items are pre-order and will ship in 6-10 weeks. Guaranteed holiday delivery</p>
                          
                                  `     
                          })
                        const urlCar = 'http://localhost:4021/carrito'     
                        const agregarCarrito = document.getElementById('agregarCarrito');
                        agregarCarrito.addEventListener('click', async()=>{
                        await fetch(urlCar, {
                        method: "POST",
                        body: JSON.stringify({
                        nombre:`${arregloid.nombre}`,
                        imagenP:`${arregloid.imagenP}`,
                        descripcion:`${arregloid.descripcion}`,
                        precio:`${arregloid.precio}`
                        
                         }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                     },
                    });
         console.log("agregaste al carrito")
        })
    
        
        }


        const urlCar = 'http://localhost:4021/carrito' 
        const carritofuncion = async() => {

            let rest = await fetch(urlCar);
            let data = await rest.json()
            let pagar = Object.values(data).reduce((acc, { cantidad, precio }) => acc + 1* Number(precio), 0)
            let cantidad = Object.values(data).reduce((acc, { cantidad }) => acc + 1, 1)
            mostrador.innerHTML = '';
            mostrador.innerHTML = `<div class="container">
                                  <table class="table">
                                  <thead class="table-gray">
                                  <tr> 
                                  <th scope="col m-0">Items</th>
                                  <th scope="col">Nombre</th>
                                  <th scope="col">Precio</th>
                                  <th scope="col">Cantidad</th>
                                  </tr>
                                  </thead>
                                  <tbody id="detalle">
                                  </tbody>
                                  <tfoot>
                                  <td scope="row" class=""> 
                                  <a class="btn btn-gray">Comprar todo</a> 
                                  <a  class="btn btn-yellow" onclick="">Limpiar</a></td>
                                  <td></td>
                                  <td>$ ${pagar}.00</td>
                                  <td>${cantidad}</td>
                                  </tfoot>
                                  </table>
                                  </div>`
            let pintarCarro = document.getElementById('detalle')
            data.forEach(info => {
                const { nombre, imagenP, precio, } = info;
                pintarCarro.innerHTML += `<td scope="row">
                <img style="height: 20%; width: 20%"  src="${imagenP}" alt=""> 
                </td><td>${nombre}</td><td>${precio}</td><td>${1}</td>`
            })}
const cambio = (i) => {
    document.getElementById('imagecambio').setAttribute('src', i);
}
