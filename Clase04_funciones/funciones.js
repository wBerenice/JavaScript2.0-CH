//Funciones sin parametros
// function saludar () {
//     let nombre = prompt("Cual es tu nombre?")
//     console.log("Buenos dias " + nombre);
// }

// saludar ();

//funciones con parametros

// function sumarNumeros(num1, num2){
//     let suma = num1 + num2;
//     console.log("La suma es " + suma);
// }

// sumarNumeros(2,8);

// let primerNum = parseInt(prompt("Ingresa el primer numero a sumar")); //2

// let segundoNum = parseInt(prompt("Ingresa el segundo numero a sumar")); //1

// sumarNumeros(primerNum, segundoNum)


// function sumarNumeros(num1, num2){
//     let suma = num1 + num2;
//     console.log("La suma de " + "+ num1 +" + );
// }

// sumarNumeros(2,8);

// let primerNum = parseInt(prompt("Ingresa el primer numero a sumar")); //2

// let segundoNum = parseInt(prompt("Ingresa el segundo numero a sumar")); //1

// sumarNumeros(primerNum, segundoNum)



//Funciones con parametros y return
// function calcularIva (precio){
//     let precioConIva = precio * 1.21;
//     // console.log("El precio con iva es $" + precioConIva);
//     return precioConIva;
// }

// let conIva = calcularIva(125); //retorna 121
// console.log("El precio con el IVA es $" + conIva)

// function aplicarDescuento(precio){
//     //aplico 10% de descuento al precio
//     return precio * 0.9
// }

// let precioConDesc = aplicarDescuento(1000);
// console.log("El precio con el IVA es $" + precioConDesc);


const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log( suma(15,20) )
console.log( resta(15,5) )




