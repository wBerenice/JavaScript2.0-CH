//Ciclos por conteo - FOR
// for(let i=1; i<=5; i++){
//     console.log("Vuelta no.1 " +i);
// }

// From [Tutor] Julio Caro to Everyone 08:20 AM
// Recuerden, el FOR lleva las 3S: for (start;  stop; step)

// From [Tutor]Javier Gimenez to Everyone 08:20 AM
// I viene de inicio/inicializacion/index, etc...

//i = iteration (repeticion)


// Solicitamos un valor al usuario
// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición, calculamos el número ingresado x el número de repetición (i)
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     console.log(ingresarNumero +" X "+ i +" = "+ resultado);
// }


//Diapo 18
// for (let i = 1; i <= 20; i++) {
//     // En cada repetición solicitamos un nombre.
//     let ingresarNombre = prompt("Ingresar nombre");
//     // Informamos el turno asignado usando el número de repetición (i).
//     alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
// }


//Break
// for(let i=1; i<=3; i++){
//     let password=prompt("Ingresa la contraseña");
//     if(password == "1234"){
//         console.log("Bienvenido al sistema")
//         break;
//     }else{
//         let intentosRestantes = 3-i;
//         if(intentosRestantes = 1){
//             console.log("La contraseña no es correcta, te queda " + intentosRestantes + " intento")
//         }else{
//             console.log("La contraseña no es correcta, te quedan " +intentosRestantes+ " intentos");
//         }
//     }
// }


//Diapo 20
// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es 5, no se interpreta la repetición
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }


//Ciclo While
// let miNombre = prompt("Ingresa tus Nombres y apellidos de a uno (s- para salir");
// let nombreCompleto = "";
// while (miNombre != "s"){
//     nombreCompleto = nombreCompleto + miNombre + " ";
//     miNombre = prompt("Ingresa tus nombres y apellidos de a uno (s - para salir");
// }
// console.log ("Tu nombre completo es: "+ nombreCompleto);


// //otro con While
// let note = parseInt(prompt("Ingresa tu nota (-1 para salir"));
// let sumaNotas = 0;
// let cantidadNotas = 0;
// while(nota != -1){
//     sumaNotas = sumaNotas + nota;// 0+8 = 8
//     cantidadNotas = cantidadNotas + 1; //0+1= 1 nota ingresada
//     nota = parseInt(prompt("Ingresa tu nota (-1 para salir"));

// }


// for (let i=0; i <= 10; i++){
//     console.log(i);
// }

// Solicitamos un valor al usuario
// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición, calculamos el número ingresado x el número de repetición (i)
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     alert(ingresarNumero +" X "+ i +" = "+ resultado);
// }

// for (let i = 1; i <= 20; i++) {
//     // En cada repetición solicitamos un nombre.
//     let ingresarNombre = prompt("Ingresar nombre");
//     // Informamos el turno asignado usando el número de repetición (i).
//     alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
// }

// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es igual 5 interrumpo el for. 
//     if(i == 5){
//         break;
//     }
//     alert(i);
// }

// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es 5, no se interpreta la repetición
//     if(i == 5){
//         continue;
//     }
//     alert(i);
// }

// let entrada = prompt("Ingresar un dato");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "ESC" ){
//     alert("El usuario ingresó "+ '"' + entrada +'"');
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Ingresar otro dato");
//     if(entrada == "ESC"){
//         alert("Felicidades, lograste descubrir la palabra");
//     }
// }


// let numero = 0;
// do{
//    //Repetimos con do...while mientras el usuario ingresa un n°
//    numero = prompt("Ingresar Número");
//    console.log(numero);
// //Si el parseo no resulta un número se interrumpe el bucle.   
// }while(parseInt(numero));



let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
//    switch (entrada) {
//        case "ANA":
//             alert("HOLA ANA");
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;
//        default:
//            alert("¿QUIÉN SOS?")
//            break;
//    }
   entrada = prompt("Ingresar un nombre");
}





























































