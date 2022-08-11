

// let boton = document.getElementById("btnPrincipal")
//       boton.addEventListener("click", respuestaClick)
//       function respuestaClick(){
//         console.log("Respuesta evento");
//       }

//*Eventos del Mouse
// let boton = document.getElementById("btnPrincipal")
// boton.onclick = () => {console.log("Click")}
// boton.onmousemove = () => {console.log("Move")}


//*Eventos de Teclado
// let input1 = document.getElementById("nombre")
// let input2 = document.getElementById("edad")
// input1.onkeyup = () => {console.log("keyUp")}
// input2.onkeydown = () => {console.log("keyDown")}


//*Evento CHANGE
//*? El evento change se activa cuando se detecta un cambio en el valor del elemento. 

// let input1  = document.getElementById("nombre");
// let input2  = document.getElementById("edad");
// input1.onchange = () => {console.log("valor1")};
// input2.onchange = () => {console.log("valor2")};


//*Evento INPUT
//*?  Si queremos ejecutar una función cada vez que se tipea sobre el campo, conviene trabajar directamente con el evento input.

// let input1  = document.getElementById("nombre")
// input1.addEventListener('input', () => {
//      console.log(input1.value)
// })

// Eventos DOM
const yerbaMate ={
    id: 1,
    imagen: "./img/yerba-mate.jpg",
    nombre: "Yerba mate Taragui",
    descripcion: "Yerba mate marca Taragui con palo en paquete de 1kg",
    precio: 800
    
}



let tarjetas = document.getElementById("tarjetas")

tarjetas.innerHTML=`
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${yerbaMate.imagen}" alt="Esta image aun no se muestra">
            <div class="card-body">
                <h5 class="card-title">${yerbaMate.nombre}</h5>
                <p class="card-text">${yerbaMate.descripcion}.</p>
                <p class="card-text">${yerbaMate.precio}.</p>
                <a href="#" class="btn btn-primary" id= "myHeader">Comprar</a>
            </div>
    </div>
`

//    EVENTO OPCION 1 


let extraBoton = document.getElementById("miBoton");
extraBoton.addEventListener("click", interactuar);

function interactuar() {
    console.log("Agregaste la yerba mate Taragui al carro");
}


let botonAzul = document.getElementById("myHeader");
botonAzul.addEventListener("click", segundaInteraccion);

function segundaInteraccion() {
    console.log("BOTON-AZUL = Agregaste la yerba mate Taragui al carro");
}

//EVENTO OPCION 2

    // miBoton.onclick = () => {
    //     console.log("Agregaste el producto al carro")
    //     carrito.push(yerbaMate);
    //     console.log(carrito)
    // }


// miBoton.onmouseover=() => {
//     console.log("Quieres tomar un rico mate???");
// }

let campoEdad = document.getElementById("edad")
let campoNombre = document.getElementById("nombre")

campoEdad.onkeydown = () => console.log("Presionaste una tecla")
campoEdad.onkeyup = () => console.log("Soltaste la tecla")

campoEdad.onchange = () => {
    console.log("Cambio el contenido del campo edad")
    console.log("Contenido actualizado: " + campoEdad.value)
}

campoNombre.oninput = () => {
    if(isNaN(campoNombre.value)){
        campoNombre.style.color = "black"
    }else {
        campoNombre.style.color = "red"
    }
}


//EVENTO SUBMIT
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarForm);

function validarForm (ev) {
    if((campoNombre.value == "") || campoEdad.value == ""){
        ev.preventDefault(); //evita que se envie el form y que se vacien los campos
        alert("Ingrese nombre y/o edad")
    }
}









