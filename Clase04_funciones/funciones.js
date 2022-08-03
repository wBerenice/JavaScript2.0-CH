// Funciones sin parametros
// function saludar () {
//     let nombre = prompt("Cual es tu nombre?")
//     console.log("Buenos dias " + nombre);
// }
// saludar();


//-------------------------------------------------------------------------

//funciones con parametros

// function sumarNumeros(num1, num2){
//         let suma = num1 + num2;
//         console.log("La suma de " + num1 + " + " + num2 + " es " + suma); 

//     }
//     sumarNumeros(3,11);

//     let primerNum = parseInt(prompt("Ingresa el primer numero a sumar")); //2
    
//     let segundoNum = parseInt(prompt("Ingresa el segundo numero a sumar")); //1
    
//     sumarNumeros(primerNum, segundoNum);

//     //manera corta
//     sumarNumeros(parseInt(prompt("Ingresa el primer nuemro a sumar")),parseInt(prompt("Ingresa el segundo numero a sumar")));

    
//-------------------------------------------------------------------------
    
//Funciones con parametros y return


// function calcularIva (precio){
        // let precioConIva = precio * 1.21;
        // console.log("El precio con iva es $" + precioConIva);
        // return precioConIva; 
// }

    //calcularIva(100); //RETORNA 121 (este valor 121, tiene que ser recibido por algo). Siempre que retorno algo, ese resultado tiene que ser recibido por una variable en el exterior.

    // let conIva = calcularIva(100); //La variable (conIva) se va a quedar con el valor retornado (121)
    // console.log("El precio con el IVA es $"+conIva);



// function aplicarDescuento(precio){
    //aplico 10% de descuento al precio
    // return precio * 0.9
// }

// let precioConDesc = aplicarDescuento(1000);
// console.log("El precio con el descuento es $" + precioConDesc);

// let precioConDesc = aplicarDescuento(calcularIva(parseInt(prompt("Ingresa el precio y te dire el valor final con iva y descuento"))));
// console.log(precioConDesc);

// -------------------------------------------------------------------------

//FUNCIONES ANONIMAS

// const suma = function (a,b) {return a + b}
// console.log(suma(5,10));

// -------------------------------------------------------------------------


//FUNCIONES FLECHA =>

// const suma = (a,b) => {return a + b}

// //Si es una funcion de una sola linea CON RETORNO podemos evitar escribir el cuerpo {}
// const resta = (a,b) => a - b;
// console.log(suma(15,20))
// console.log(resta(20,5))



// -------------------------------------------------------------------------
//Ejemplo: calcular precio



// const sumaExtra = (a,b) => a + b
// const restaExtra = (a,b) => a - b

// //Si una funcion es una sola linea con retorno y tiene solo UN PARAMETRO, entonces puedes evitar escribir los ()

// const iva = x => x * 0.21
// let precioProducto = 500;
// let descuento = 50;

// //Calculo el precioProducto + IVA - descuento
// let nuevoPrecio = restaExtra(sumaExtra(precioProducto, iva (precioProducto)), descuento)
// console.log(nuevoPrecio);




// -------------------------------------------------------------------------

//Ejemplo en clase= Funcion flecha

// const direccion = (calle, numero) => calle + " " + numero;

// console.log(direccion("Uruguay", "1256"));
// console.log(direccion("Av. Rivadavia", "501"));

// alert(direccion("9 de Julio", "2000"));
// let direccionCompleta = direccion ("Av. Maipu", "1090");

// const areaReact = (base, altura) => (base*altura)/2;

// console.log("El area es: " + areaReact(10,5));


// const saludo = () => {
//     let nombre = prompt("Ingresa tu nombre")
//     let apellido = prompt("Ingresa tu apellido")
//     console.log("Tu nombre completo es "+ nombre + " " + apellido)

// }

// saludo();
