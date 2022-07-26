//Estructuras condicionales

//condicional simple
// let planeta = prompt("Cual es el planeta mas cercano al sol?")
// if (planeta == "mercurio") {
//     console.log("Excelente!!!")

// }else{
//     console.log("No, es mercurio")

// }

//condicionales anidados

/* let satelite = prompt("Cual es el satelite de la Tierra?")
if (satelite == "luna") {
    console.log("Excelente!!")

}else if (satelite == "LUNA"){
    console.log("Excelente!!")
}else if (satelite == "Luna"){
    console.log("Excelente!!")
}else {
    console.log("No, es la luna")
} */

//otro ejemplo con numeros
//EJERCICIO: preguntamos al usuario su edad, si es menor de 18 anios, le mostramos "Eres menor de edad"
//si es mayor o igual a 18 anios, le mostramos "Eres mayor de edad"


// let edad = parseInt(prompt("Cuántos años tienes?"));
// if (edad < 18) {
//     console.log("Eres menor de edad")
// }else if(edad == 18){
//     console.log("Acabas de empezar a ser mayor de edad")
// }else {
//     console.log("Eres mayor de edad")
// }


// let esMayorDeEdad = (edad >= 18); //true or false
// console.log(esMayorDeEdad);


//operador ===
// let num1 = 1;
// let numUno = "1";
// let sonIguales = (num1 == numUno); //1 == "1"???
// console.log("son iguales?  " + sonIguales);

// let sonEstrictamenteIguales = (num1 === numUno)
// console.log("Son estrictamente iguales???  "  + sonEstrictamenteIguales)


// let letraUno = true
// let letraDos = "1"
// let comparacion = (letraUno == letraDos)
// console.log(comparacion)

/* From [Tutor] Julio Caro to Everyone 09:29 AM
Internamente, true lo toma como "encendido" (1) y False como "apagado" (0)
Por eso true == 1 o true == "1" lo evalúa como true
Para JS, es como evaluar 1 == "1" o 1 == 1
 */


//mercurio mejorado
// let planeta1 = prompt("Cual es el planeta mas cercano al sol?")
// if ((planeta1 == "mercurio") || (planeta1 == "MERCURIO") || (planeta1 == "Mercurio")) {
//     console.log("Excelente!!!")

// }else{
//     console.log("No, es mercurio")

// }


//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
let num = parseInt(prompt("Ingrese un numero"))
if ((num >= 10) && (num <= 50)){
    alert("El numero esta entre 10 y 50");

}else {
    alert("El numero esta fuera de rango");
}

