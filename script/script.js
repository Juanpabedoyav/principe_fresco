const url = ' http://localhost:4000/articulos'

const getData = async(url)=>{
const resp = await fetch (url);
const data = await resp.json()
const {nombre,imagenP,imagen1, imagen2, descripcion,precio,talla, id} = data
}
const agregarCarrito = document.getElementById('agregarCarrito');
agregarCarrito.addEventListener('click', ()=>{
let urlCar = 'http://localhost:4000/articulos'     
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



