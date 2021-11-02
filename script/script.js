const url = ' http://localhost:4000/articulos'
const getData = async(url)=>{
const resp = await fetch (url);
const data = await resp.json()
console.log(data);

}
console.log(getData(url));