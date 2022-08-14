class Camisa {
    constructor(id, nombre, descripcion, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.foto = foto;
    }
}

// function cargarCamisasHombre() {
//     productos.push(new Producto(1, 'Muffin', 1.99, './img/muffin.jpg'));
//     productos.push(new Producto(2, 'Pastel de Bodas', 1256.96, './img/wedding_cake.jpg'));
//     productos.push(new Producto(3, 'Brownie', 4.23, './img/brownie.jpg'));
//     productos.push(new Producto(4, 'Chocotorta', 80.98, './img/chocotorta.jpg'));
//     productos.push(new Producto(5, 'Pay de limón', 23.98, './img/pay_limon.png'));
//     productos.push(new Producto(6, 'Croissant', 23.98, './img/croissant.jpg'));
//     productos.push(new Producto(7, 'Creme brulee', 23.98, './img/creme_brule.jpg'));
//     productos.push(new Producto(8, 'Flan', 23.98, './img/flan.jpg'));
// }
const camisasMujer = [];

function cargarCamisasMujer() {
    camisasMujer.push(new Camisa(1, 'Dalila', "Camiseta de manga corta tipo bahama", 299, './img/01-mujer-morado-claro.png'));
    camisasMujer.push(new Camisa(2, 'Nancy', "Camiseta de manga corta tipo bahama", 150, './img/02-mujer-blanco.png'));
    camisasMujer.push(new Camisa(3, 'Lisa', "Camiseta de manga corta tipo bahama", 120, './img/03-mujer-azul-marino.png'));
    camisasMujer.push(new Camisa(4, 'Ludmila', "Camiseta de manga corta tipo bahama", 140, './img/04-mujer-azul-cielo.png'));
    camisasMujer.push(new Camisa(5, 'Lucia', "Camiseta de manga corta tipo bahama", 299, './img/05-mujer-azul-puntos.png'));
    camisasMujer.push(new Camisa(6, 'Ximena', "Camiseta de manga corta tipo bahama", 199, './img/06-mujer-coral.png'));
    camisasMujer.push(new Camisa(7, 'Mabel', "Camiseta de manga corta tipo bahama", 150, './img/07-mujer-azul-rey.png'));
    camisasMujer.push(new Camisa(8, 'Madison', "Camiseta de manga corta tipo bahama", 250, './img/08-mujer-azul-tercio.png'));
    camisasMujer.push(new Camisa(9, 'Aurora', "Camiseta de manga corta tipo bahama", 130, './img/09-mujer-verde.png'));
    camisasMujer.push(new Camisa(10, 'Amelia', "Camiseta de manga corta tipo bahama", 130, './img/10-mujer-amarillo.png'));

}


cargarCamisasMujer();

console.table(camisasMujer);

// crearCards();

// function crearCards(camisasMujer){
//     //Imagen
//     let imagen = document.createElement("img");
//     imagen.src = camisa.foto;
//     imagen.className = "card-img-top";
//     imagen.alt = producto.nombre;


//     //Contenedor Card
//     let contenedorCarta = document.createElement("div");
//     contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
//     contenedorCarta.append(carta);

// }


// let newImg = document.createElement("img");
// console.log(newImg)

let newH1 = document.createElement("h5");

let newElemento = document.getElementById("estoEsNuevo");
console.log(newElemento)

newElemento.append(newH1)


function crearCarta() {
    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio} USD</p>
    `;
    cuerpoCarta.append(botonAgregar);
    
}



























