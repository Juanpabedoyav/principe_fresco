// const url = ' http://localhost:4000/articulos'

const getData = async(url)=>{
const resp = await fetch (url);
const data = await resp.json()
return data;
// const {nombre,imagenP,imagen1, imagen2, descripcion,precio,talla, id} = data
}
const urlCar = 'http://localhost:40001/carrito'     
const agregarCarrito = document.getElementById('agregarCarrito');
agregarCarrito.addEventListener('click', async()=>{
    await fetch(urlCar, {
        method: "POST",
        body: JSON.stringify({
            nombre,
            imagenP,
            descripcion,
            precio,
            talla
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    console.log("agregaste al carrito")
})

  
const carrito = document.getElementById('carrito');
carrito.addEventListener('click', ()=>{
console.log("ingresaste al carrito")
// const cajaCar = document.createElement('div')
// cajaCar.classList.add('caja__car')
})
let contenidoCompra = document.querySelector('.offcanvas-body');
const comprar = document.getElementById('comprar');
comprar.addEventListener('click',async()=>{
 const  dataCompra = await getData(url)
dataCompra.forEach(info=>{
const {imagenP, nombre, precio} = info
    console.log(info)


    contenidoCompra.innerHTML = " ";
    contenidoCompra.innerHTML +=`
        <div class"cajaVenta">
                 <div class="venta">
                    <img  src="${imagenP}">
                </div>   
            
            <h3>${nombre}</h3>
            <span>${precio}</span>
      <p>Shipping, taxes, and discount codes calculated at checkout<p>
      <p>Subtotal<span>${precio}</span></p>
      <button type="button" class="btn btn-chekout">CHECK OUT</button>

        </div>  
         <p>Please Note: All items are pre-order and will ship in 6-10 weeks. Guaranteed holiday delivery</p>

        `

})

})






// muestra productos en collecion
let productos = document.getElementById('productos')

let mostrador=document.getElementById('mostrador')

const url = ' http://localhost:4019/articulos';
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
                           <a href="#" onClick="(${id})" class="">BUY IT</a>
                           </div>
                           `

    })
})