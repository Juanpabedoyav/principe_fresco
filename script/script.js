// const url = ' http://localhost:4000/articulos'

const getData = async(url)=>{
const resp = await fetch (url);
const data = await resp.json()
const {nombre,imagenP,imagen1, imagen2, descripcion,precio,talla, id} = data
}
const agregarCarrito = document.getElementById('agregarCarrito');
agregarCarrito.addEventListener('click', ()=>{
let urlCar = 'http://localhost:40001/carrito'     
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
})



let productos = document.getElementById('productos')
let mostrador=document.getElementById('mostrador')
let url = ' http://localhost:4019/articulos';
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
