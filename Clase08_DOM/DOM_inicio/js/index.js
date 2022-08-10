class Producto {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
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

//Definiciones de constantes

//formateo numerico
//thousands (Los separa por comas)
const estandarDolaresAmericanos = Intl.NumberFormat('en-US');

//Arrays donde guardaremos cada catalogo de productos y elementos en carrito
const productos = [];
const elementosCarrito = [];

const contenedorProductos = document.getElementById("contenedor-productos").getElementsByClassName('row');

const rowContenedorProductos = contenedorProductos[0];

const contenedorCarritoCompras = document.querySelector('#items')


//Ejecucion de funciones 
cargarCarrito();
cargarProductos();
dibujarCarrito();

//Definiciones de funciones 

function cargarProductos() {
    productos.push(new Producto(1, 'Muffin', 1.99, './img/muffin.jpg'));
    productos.push(new Producto(2, 'Pastel de Bodas', 1256.96, './img/wedding_cake.jpg'));
    productos.push(new Producto(3, 'Brownie', 4.23, './img/brownie.jpg'));
    productos.push(new Producto(4, 'Chocotorta', 80.98, './img/chocotorta.jpg'));
    productos.push(new Producto(5, 'Pay de limón', 23.98, './img/pay_limon.png'));
    productos.push(new Producto(6, 'Croissant', 23.98, './img/croissant.jpg'));
    productos.push(new Producto(7, 'Creme brulee', 23.98, './img/creme_brule.jpg'));
    productos.push(new Producto(8, 'Flan', 23.98, './img/flan.jpg'));
}

function cargarCarrito() {
    let elementoCarrito = new ElementoCarrito(
        new Producto (1, 'Muffin', 1.99, './img/muffin.jpg'),
        1
    );
    elementosCarrito.push(elementoCarrito);
}


function dibujarCarrito() {
    let renglonesCarrito = '';
    
    elementosCarrito.forEach(
        (elemento) => {
            renglonesCarrito+= `
                <tr>
                    <td>${elemento.producto.id}<td/>
                    <td>${elemento.producto.nombre}<td/>
                    <td>${elemento.cantidad}<td/>
                    <td>$ ${elemento.producto.precio}<td/>
                <tr/>
            `;
        }
    );

    contenedorCarritoCompras.innerHTML = renglonesCarrito;

}


function crearCard(producto) {

    //Boton
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerHTML = "Agregar";

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card.body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio}</p>
    `;

    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top"
    imagen.alt = producto.nombre;

    //Card
    let carta = document.createElement("div")
    carta.className = "card";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    //Contenedor de la carta
    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2"
    contenedorCarta.append(carta);

    //Agregar algunos eventos
    botonAgregar.onclick = () => {
        // alert("Hiciste click en el producto" + producto.nombre);
        
        let elementoCarrito = new ElementoCarrito(producto, 1);
        elementoCarrito.push(elementoCarrito);

        dibujarCarrito();
    }

    return contenedorCarta;
}


function dibujarCatalogoProductos() {
    rowContenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto)
        
            rowContenedorProductos.append(contenedorCarta);
        }
    );
}












