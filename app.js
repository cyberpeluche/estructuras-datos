 const resultado=document.getElementById("txtresultados");
function mensaje(texto){
    console.log(texto);
    alert(texto);
    const resultado=document.getElementById("txtresultados");
    resultado.textContent=texto
}
mensaje("El Varon es el señor variga")
function agregar(palabras){
    resultado.textContent=palabras
}
function buscar(palabras){

}
function eliminar(palabras){

}
function modificar(palabras){

}
const btnagregar=document.getElementById("btnagregar");
const btnbuscar=document.getElementById("btnbuscar");
const btneliminar=document.getElementById("btneliminar");
const btnmodificar=document.getElementById("btnmodificar");
btnagregar.addEventListener("click", agregar("klk"));
btnbuscar.addEventListener("click", buscar("omega el fuerte"));
btneliminar.addEventListener("click", eliminar("nairan apecosea al varon"));
btnmodificar.addEventListener("click", modificaer("vladi coronamo"));