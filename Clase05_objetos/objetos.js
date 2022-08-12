//todo                      Objetos literales

//Este objeto especifica algo puntual
const cafe = {
    marca: "Cabrales",
    tipo: "tostado molido",
    peso: 500,
    precio: 1000    
}

//Ordenado alfabeticamente
// console.log(cafe)
// console.log("La marca del cafe es " + cafe.marca)

//Poco inusual, pero es util despues
//?  console.log("La marca del cafe es "+ cafe["marca"])

cafe.precio = 1200;
// console.log(cafe)


//todo               Objetos Constructores (MOLDE)
//función constructora (manera de crear objetos)

function Automovil(marca, color, modelo, anio){
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.anio = anio;
}

const auto1 = new Automovil("Volvo", "Celeste", "C30", 2013);
const auto2 = new Automovil("Fiat", "rojo", "Palio", 2006);

// console.log(auto2); //Automovil {marca: 'Fiat', color: 'rojo', modelo: 'Palio', anio: 2006}


//Creacion de objeto con los datos ingresados por el usuario

// let marca = prompt("Ingresa la marca");
// let color = prompt("Ingresa el color");
// let modelo = prompt("Ingresa el modelo");
// let anio = parseInt(prompt("Ingresa el año"));


// const auto3 = new Automovil(marca,color, modelo, anio);
// console.log(auto3);


function Contacto(objLiteral) {
    this.nombre = objLiteral.nombre; //pepe
    this.celular = objLiteral.celular; //9013284
}

const cont1 = new Contacto({nombre: "Pepe",celular: "9013284"})

//En "alert", se deben especificar las propiedades del objeto 

// alert(cont1.nombre + " " + cont1.celular); //Pepe 9013284
// alert(cont1); //[object Object]


//TODO           Propiedades y Métodos de String
//* Propiedad length (propiedad interna JS de los objetos tipo String)
// string.length gives you the length of the string, which is a property of the string. It doesn’t do anything to the string itself.

let frase = "Persevera y TRIUNFARAS"
let longitud = frase.length;
// console.log("La longitud es: " + longitud);


//--------------------------------------------

//*Método de objeto String: Pasar a minúscula
// string.toLowerCase() converts the string to lower case, that is it does something to the string and then returns it.

//! No olvidar los (paréntesis). Porque son Métodos.

let minusculas = frase.toLowerCase();
// console.log(minusculas)

//Método de objeto String: Pasar a mayúscula

let mayusculas = frase.toUpperCase();
// console.log(mayusculas)


//DIAPO 28
//todo                  Métodos Personalizados ()


function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar(); //HOLA SOY Homero
persona2.hablar(); //HOLA SOY Marge


//Ejemplo de método personalizado
function Computadora(tipo, sistema){
    this.tipo = tipo;
    this.sistema = sistema;
    this.mostrarSistema = function() {console.log("Mi sistema operativo es "+ this.sistema)}
    this.modificarSistema = function(nuevoSistema){this.sistema = nuevoSistema};
}

const compu1 = new Computadora("notebook", "Linux");
const compu2= new Computadora("notebook", "MacOS");
compu1.mostrarSistema(); //Mi sistema operativo es Linux
compu2.mostrarSistema(); //Mi sistema operativo es MacOS


compu2.modificarSistema("Windows"); 
compu2.mostrarSistema(); //Mi sistema operativo es Windows



//todo              OPERADOR   IN (existe?) & FOR...IN (ciclo)
//El operador IN devuelve true si la propiedad especificada existe en el objeto.
//El bucle FOR...IN permite acceder a todas las propiedades del objeto


const person1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in person1); //true
//devuelve false porque la clave "origen" no existe en el objeto person1
console.log( "origen" in person1); //false
//recorremos todas las propiedades del objeto con el ciclo for...in

for (const propiedad in person1) {
    console.log(person1[propiedad]); //Homero, 39, Av. Siempreviva 742

    // console.log(propiedad) //Devuelve cada PARÁMETRO: NOMBRE, EDAD, CALLE.
    //No incluye los valores: "Homero", 39, "Av. Siempreviva 742")

}




//todo                      CLASES (similar a JAVA)

//Las clases van a actuar como "funciones constructoras" = actuan como un MOLDE

class PersonaFantastic {
    constructor(name, age, street){ //este constructor recibe los parametros.
        this.name = name;
        this.age = age;
        this.street = street;
    }
}

const personal = new PersonaFantastic ("Homero", 39, "Av. Siempreviva 742"); //Esta forma de crear objetos tambien usa la palabra reservada NEW


//Ejemplo de CLASE con Bicicleta
class Bicicleta { //Clases siempre en SINGULAR. Nunca se utilizan verbos.
    constructor(marca, rodado, condicion){
        this.marca = marca;
        this.rodado = rodado;
        this.condicion = condicion;
    }
}

const bicil1 = new Bicicleta("Olmo", 26, "usada");
const bicil2 = new Bicicleta("Raleigh", 28, "nueva");


console.log(bicil1);




//todo              CLASES Y MÉTODOS (personalizados) - JAVA
//Hoy en dia se trabaja mucho con class!
//todo      Las CLASS son formas en las que vos CREAS OBJETOS de un MISMO TIPO a partir de un MOLDE 


class Foco {
    constructor(color, watts, tipo){
        this.colores = color;
        this.watts = watts;
        this.tipo = tipo;
    }
    descripcion(){
        console.log("Este foco tiene " + this.watts + " Watts\nSu color es " +this.colores + ". Y es del tipo "+ this.tipo + ".")
    }
}

const foco1 = new Foco("amarillo", 60, "incandescente");
const foco2 = new Foco("blanco", 100, "LED");
foco1.descripcion(); //Llamando a la function foco1 (que tiene el nuevo objeto basado en el molde/template). Y agregándole el MÉTODO (personalizado) "descripcion". //! El console.log ya está incorporado dentro del método 

foco2.descripcion(); // Este foco tiene 100 Watts
                    //  Su color es blanco. Y es del tipo LED.


for (const propi in foco1) {
    
    //! MÉTODOS (propiedades?)
        console.log(propi); //colores
                            //watts
                            //tipo

    //! VALORES
    // console.log(foco1[propi]) //amarillo
                                //60
                                //incandescente
}


//todo                  Ejemplo: CLASE PRODUCTO


class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender(); //El ARROZ se ha vendido = true


console.log(producto1);// Producto {nombre: 'ARROZ', precio: 151.25, vendido: true}
console.log(producto2);//Producto {nombre: 'FIDEO', precio: 60.5, vendido: false}

























