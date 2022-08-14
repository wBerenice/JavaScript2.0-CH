
//Molde para la creacion de objetos tipo Camisa
class Camisa {
    constructor(id, nombre, material, precio, foto, color) {
        this.id = id;
        this.nombre = nombre;
        this.material = material;
        this.color = color;
        this.precio = precio;
        this.foto = foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}


//Array principal= almacena todas las camisas
const productos = [];

//Array secundario = almacena todas las camisas en el carrito
const elementosCarrito = [];


//Llamando los contenedores padre donde se irá mostrando cada camisa (Card)
const contenedorProductos = 
    document.getElementById('contenedor-productos').getElementsByClassName('row');


const rowContenedorProductos = contenedorProductos[0];

const contenedorCarritoCompras = document.querySelector("#items")


//Se llama a las funciones:

//1) Camisas para Mujer
//2) Camisas para Hombre
cargarProductosMujer();
cargarProductosHombre();

//3) Crea la plantilla para ir mostrando cada Camisa y sus características con su correspondiente columna
dibujarCarrito();
dibujarCatalogoProductos();

//(Camisas de Mujer y Hombre)
//Funciones pusheando nuevos valores a cada propiedad previamente descrita en el Molde Camisa 

function cargarProductosMujer() {
    productos.push(new Camisa(1, 'Dalila',"Lino", 299, '../img/01-mujer-morado-claro.png', "Lila"));
    productos.push(new Camisa(2, 'Nancy',"Lana", 150, '../img/02-mujer-blanco.png', "Blanco"));
    productos.push(new Camisa(3, 'Lisa', "Algodón", 120, '../img/03-mujer-azul-marino.png', "Azul marino"));
    productos.push(new Camisa(4, 'Ludmila', "Lino", 140, '../img/04-mujer-azul-cielo.png', "Azul cielo"));
    productos.push(new Camisa(5, 'Lucia', "Lana" ,299, '../img/05-mujer-azul-puntos.png', "Azul con puntos"));
    productos.push(new Camisa(6, 'Ximena',"Lino", 199, '../img/06-mujer-coral.png', "Coral"));
    productos.push(new Camisa(7, 'Mabel', "Algodón", 150, '../img/07-mujer-azul-rey.png', "Azul Rey"));
    productos.push(new Camisa(8, 'Madison', "Lino", 250, '../img/08-mujer-azul-tercio.png', "Azul Tercio"));
    productos.push(new Camisa(9, 'Aurora', "Algodón",130, '../img/09-mujer-verde.png', "Verde"));
    productos.push(new Camisa(10, 'Amelia', "Algodón", 160, '../img/10-mujer-amarillo.png', "Amarillo"));
}


function cargarProductosHombre() {
    productos.push(new Camisa(11, 'Jacob',"Algodón", 199, '../img/01-hombre-negro.png', "Negro"));
    productos.push(new Camisa(12, 'Alexander',"Lino", 250, '../img/02-hombre-rojo.png', "Rojo"));
    productos.push(new Camisa(13, 'Julian', "Algodón", 99, '../img/03-hombre-azul.png', "Azul"));
    productos.push(new Camisa(14, 'leonardo', "Lino", 200, '../img/04-hombre-azul-claro.png', "Azul Claro"));
    productos.push(new Camisa(15, 'Charlie', "Lana" , 150, '../img/05-hombre-tierroso.png', "Tierroso"));
    productos.push(new Camisa(16, 'William',"Algodón", 120, '../img/06-hombre-rosa.png', "Rosa"));
    productos.push(new Camisa(17, 'Noah', "Lana", 189, '../img/07-hombre-naranja.png', "Naranja"));
    productos.push(new Camisa(18, 'Jack', "Algodón", 130, '../img/08-hombre-azul-cielo.png', "Azul Cielo"));
    productos.push(new Camisa(19, 'Paul', "Lino",140, '../img/09-hombre-verde-pasto.png', "Verde Pasto"));
    productos.push(new Camisa(20, 'Daniel', "Algodón", 160, '../img/10-hombre-naranja-farol.png', "Naranja Farol"));
}




function dibujarCarrito() {
    let renglonesCarrito = '';

    elementosCarrito.forEach(
        (elemento) => {
            renglonesCarrito+=`
                <tr>
                    <td>${elemento.producto.id}</td>
                    <td>${elemento.producto.nombre}</td>
                    <td>${elemento.producto.color}</td>
                    <td>${elemento.producto.material}</td>
                    <td>${elemento.cantidad}</td>
                    <td>$ ${elemento.producto.precio}</td>
                </tr>
            `;
        }
    );

    contenedorCarritoCompras.innerHTML = renglonesCarrito;
}

//Funciones para la creación de tarjetas (manipulando el DOM)
//Se incluyen: los botones con su texto ("Comprar"), el cuerpo principal de la Card con sus elementos (h2, h5, <button>)

function crearCard(camisas) {
    
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-info";
    botonAgregar.innerText = "Comprar";

    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h2>${camisas.nombre}</h2>
        <h5>$ ${camisas.precio}</h5>
    `;
    //Aquí se anexa (append) el <button> al final de todos los elementos de la Card (h2 & h5)
    cuerpoCarta.append(botonAgregar);
    

    let imagen = document.createElement("img");
    imagen.src = camisas.foto;
    imagen.className = "card-img-top";
    imagen.alt = camisas.nombre;

    let carta = document.createElement("div");
    carta.className = "card";
    carta.append(imagen);
    carta.append(cuerpoCarta);


    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
    contenedorCarta.append(carta);


    //Evento: Al hacer click en el botonAgregar ("Comprar"), añadimos (pusheamos) la camisa seleccionada al carrito (componente MODAL en bootstrap)
    botonAgregar.onclick = () => {
        
        let elementoCarrito = new ElementoCarrito(camisas, 1);
        elementosCarrito.push(elementoCarrito);
        
        alert("La camisa \"" + camisas.nombre + "\" ha sido agregada al carrito! \n" + "Puedes ver el material y su número identificador en el carrito.");
        dibujarCarrito();

    } 
    
    return contenedorCarta;

}

function dibujarCatalogoProductos() {
    rowContenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            rowContenedorProductos.append(contenedorCarta);
        }
    );

}

