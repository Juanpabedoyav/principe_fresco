let formulario= document.getElementById("form");
let btnNombre= document.getElementById("btnNombre");
let url='http://localhost:4000/articulos';
let btnEditar= document.getElementById("btnEditar");

//la siguiente funcion es el metodo post, y se utiliza para añadir informacion
formulario.addEventListener("submit",async(e)=>{
    e.preventDefault();
console.log("inica boton")
    let nombre=document.getElementById("name").value;
    let imagenP=document.getElementById("imagen1").value;
    let imagen1=document.getElementById("imagen2").value;
    let imagen2=document.getElementById("imagen3").value;
    let descripcion=document.getElementById("description").value;
    let precio=document.getElementById("precio").value;

    await fetch(url,{
        method: 'POST',//TIPO DE METODO igual a postman
        body: JSON.stringify({     //para convertitr tipo json
           nombre,
           imagenP,
           imagen1,
           imagen2,
           descripcion,
           precio
           
        }),
        headers:{//se utiliza igual que en postman
            "Content-Type":"application/json; charset=UTF-8" 
        }    //para convertir a json
    })
})
// lo siguiente funcion  es para buscar por medio del nombre

btnNombre.addEventListener("click",async()=>{
    let nombre1 = document.getElementById("name").value;
    //console.log(email);
    const datos =await fetch(url);
    const data= await datos.json();
    //document.getElementById("nombre").setAttribute("readonly",true);//preguntar que hace esto?
    console.log(data);    
    let buscado=data.find(elemento => elemento.nombre.toLowerCase()===nombre1.toLowerCase());//find es una funcion para recorrer listas, o arreglos, un objeto no se recorre.
    console.log(buscado);    
    const {id,nombre,descripcion,precio,imagenP}= buscado;
    document.getElementById("name").value=nombre;
    document.getElementById("description").value=descripcion;
    
    document.getElementById("precio").value=precio;
    document.getElementById("id").value=id;
    document.getElementById("imagen1").value=imagenP;
    document.getElementById("imagen2").value=imagen1;
    document.getElementById("imagen3").value=imagen2;
})
//la siguiente es para modificar datos 
btnEditar.addEventListener("click",async()=>{

    let id=document.getElementById("id").value;//.value por que es el valor de la caja de texto
    let nombre=document.getElementById("name").value;
    let descripcion=document.getElementById("description").value;
    
    let precio=document.getElementById("precio").value;
    let imagenP=document.getElementById("imagen1").value;
    let imagen1=document.getElementById("imagen2").value;
    let imagen2=document.getElementById("imagen3").value;

    await fetch(url+"/"+id,{
        method: 'PUT',//TIPO DE METODO igual a postman
        body: JSON.stringify({     //para convertitr tipo json
           nombre,
           imagenP,
           imagen1,
           imagen2,
           descripcion,
           precio
        }),
        headers:{//se utiliza igual que en postman
            "Content-Type":"application/json; charset=UTF-8" 
        }    //para convertir a json
    })
})
// El siguiente es para eliminar con el correo buscado.
let btnEliminar=document.getElementById("btnEliminar");
btnEliminar.addEventListener('click',async(e) =>{
    let id =document.getElementById('id').value
    //console.log(id)
   
        await fetch(`${url}/${id}`,{
            method:'DELETE'    
          })
         })
        
    //boton regresar
let regresar=document.getElementById("regresar");
    regresar.addEventListener('click', (e) =>{//items es el id de la division que contiene todas las tarejetas
      
        window.location.href = 'index.html';
    })