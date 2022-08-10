
//DESAFIO COMPLEMENTARIO ARRAYS + Objetos

//Creación de 5 objetos en total con sus respectivas propiedades 

//Parte 1) 
//Aquí creé 3 objetos que corresponden con los 3 trajes de baño de *MUJER* mostrados en el HTML. Cada uno tiene dos propiedades: color y estampado y sus respectivos valores.
const Mtraje1 = {color: "blanco", estampado: "hojas"}
const Mtraje2 = {color: "negro", estampado: "flores"}
const Mtraje3 = {color: "blanco", estampado: "pluma"}


//Parte 2)
//Aquí creé 2 objetos que corresponden con los 2 trajes de baño de *HOMBRE* mostrados en el HTML. Cada uno tiene dos propiedades: color y estampado y sus respectivos valores.
const Htraje4 = {color: "gris", estampado: "boomerang"}
const Htraje5 = {color: "negro", estampado: "N/A"}


//En esta parte estoy creando un Array juntando todos los trajes disponibles (Mujer y Hombre)
const todosLosTrajes = [Mtraje1, Mtraje2, Mtraje3, Htraje4, Htraje5];


//El evento .onclick lo investigué por mi cuenta para poder realizar el ejercicio. Pensé que era posible con un IF, pero al parecer era más complejo. 
//-------------------------------------------

//Aquí una vez que el usuario hace click en el botón (con ID "button"), se activa todo el código de la función.
//1) Le pido al usuario que ingrese un dato (mujer || hombre) para después mandarle los trajes de baño correspondientes.
//2) Esto lo hice con un IF:

    //Si la persona escoge ver los trajes para *MUJER*, se le mostrará una parte específica del Array todosLosTrajes.splice(0,3);

    //Si la persona escoge ver los trajes para *HOMBRE*, se le mostrará una parte específica del Array todosLosTrajes.splice(3,2);

    //Para ambos casos, usé el método SPLICE para "filtrar"/eliminar ciertos elementos del Array. Al final, mostré cada elemento en forma de tabla.

document.getElementById('button').onclick = function() {

    let respuestaGenero = prompt("Has ganado acceso a los productos exclusivos...¡Trajes de baño! \n ¿Quisieras ver las características de los trajes de Hombre o Mujer?").toLowerCase();


    if (respuestaGenero == "mujer"){
                alert("Estas son las características \n de los trajes de MUJER disponibles")
                let trajesMujer = todosLosTrajes.splice(0,3);
                console.table(trajesMujer);


        }else if(respuestaGenero == "hombre"){
            alert("Estas son las características \n de los trajes de HOMBRE disponibles")
            let trajesHombre = todosLosTrajes.splice(3,2);
            console.table(trajesHombre);

        }else {
            alert("No sé quién eres \n Por favor intenta de nuevo")
        }

   }









// Desafío Funciones (simulador interactivo)

// alert("Bienvenido a Tienda Sunny. Debido al limitado stock, sólo puedes elegir hasta 5 productos de nuestra tienda.")

// function sumaProductos(pr1, pr2, pr3, pr4, pr5){
//         let suma = pr1 + pr2 + pr3 + pr4 + pr5;
//         console.log("El precio total de tus productos sería de: $" + suma); 
//         if (suma >= 300){
//             alert("Gracias por haber comprado más de $300. La tienda te regala un 20% de descuento en tu compra!")
//             let precioDescuento = suma * 0.8;
//             // console.log("$" + suma + " era el precio que ibas a pagar, pero ahora con tu 20% de descuento vas a pagar sólo $" + precioDescuento)
//             console.log("$" + suma + " era el precio que ibas a pagar, pero ahora con tu 20% de descuento vas a pagar sólo $" + precioDescuento)
//         }
//     }
    
    
//     let producto1 = parseInt(prompt("¿Cuál sería el precio de tu 1er producto? \n Gafas:  $40 \n Sombrero:  $100 \n Flotador:  $150 \n Bloqueador:  $50 \n Googles:  $20"));
    
//     let producto2 = parseInt(prompt("¿Cuál sería el precio de tu 2do producto? \n Gafas:  $40 \n Sombrero:  $100 \n Flotador:  $150 \n Bloqueador:  $50 \n Googles:  $20"));

//     let producto3 = parseInt(prompt("¿Cuál sería el precio de tu 3er producto? \n Gafas:  $40 \n Sombrero:  $100 \n Flotador:  $150 \n Bloqueador:  $50 \n Googles:  $20")); 

//     let producto4 = parseInt(prompt("¿Cuál sería el precio de tu 4to producto? \n Gafas:  $40 \n Sombrero:  $100 \n Flotador:  $150 \n Bloqueador:  $50 \n Googles:  $20")); 
    
//     let producto5 = parseInt(prompt("¿Cuál sería el precio de tu 5to producto? \n Gafas:  $40 \n Sombrero:  $100 \n Flotador:  $150 \n Bloqueador:  $50 \n Googles:  $20")); 
    
//     sumaProductos(producto1, producto2, producto3, producto4, producto5);

//     alert("Gracias por comprar en Tienda Sunny!")
   






