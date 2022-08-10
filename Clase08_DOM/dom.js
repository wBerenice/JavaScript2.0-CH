//DOM

console.dir(document.body);

//getElementById
let seccion = document.getElementById("principal");

//visualizo lo que tiene esa seccion
// console.log(seccion.innerHTML); 

//Cambiando el color de fondo a amarillo
seccion.style.background = "#F75E25";


let titulo = document.getElementById("titulo");
titulo.innerText = "Hoy cambia todo!"

titulo.style.font = "bold 40px monospace"


let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);
