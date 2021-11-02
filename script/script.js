let productos = document.getElementById('productos')

productos.addEventListener('click', async () => {
    producto.innerHTML = ''
const url = ' http://localhost:4000/articulos'
const getData = async(url)=>{
const resp = await fetch (url);
const data = await resp.json()
console.log(data);
data.forEach(art => {
    const { nombre, imagenP, id } = art;
    producto.innerHTML += `<div class="" style="width: XXrem;" id="cardProducto">
                           <img src="${imagenP}" class="" alt="...">
                           <div class="">
                           <h5 class=""><strong>${nombre}</strong></h5>
                           <a href="#" onClick="(${id})" class="">BUY IT</a>
                           </div>
                           `
})}
})