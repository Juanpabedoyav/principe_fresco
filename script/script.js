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