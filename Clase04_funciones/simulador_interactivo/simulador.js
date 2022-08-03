

alert("Bienvenido a Tienda Sunny. Debido al limitado stock, sólo puedes elegir hasta 5 productos de nuestra tienda.")

function sumaProductos(pr1, pr2, pr3, pr4, pr5){
        let suma = pr1 + pr2 + pr3 + pr4 + pr5;
        console.log("El precio total de tus productos sería de: $" + suma); 
        if (suma >= 300){
            alert("Gracias por haber comprado más de $300. La tienda te regala un 20% de descuento en tu compra!")
            let precioDescuento = suma * 0.8;
            console.log("$" + suma + " era el precio que ibas a pagar, pero ahora con tu 20% de descuento vas a pagar sólo $" + precioDescuento)
        }
    }
    
    
    let producto1 = parseInt(prompt("¿Cuál sería el precio de tu 1er producto? \n Gafas:  $40 \n Sombrero:  $100 \n Flotador:  $150 \n Bloqueador:  $50 \n Googles:  $20"));
    
    let producto2 = parseInt(prompt("¿Cuál sería el precio de tu 2do producto? \n Gafas:  $40 \n Sombrero:  $100 \n Flotador:  $150 \n Bloqueador:  $50 \n Googles:  $20"));

    let producto3 = parseInt(prompt("¿Cuál sería el precio de tu 3er producto? \n Gafas:  $40 \n Sombrero:  $100 \n Flotador:  $150 \n Bloqueador:  $50 \n Googles:  $20")); 

    let producto4 = parseInt(prompt("¿Cuál sería el precio de tu 4to producto? \n Gafas:  $40 \n Sombrero:  $100 \n Flotador:  $150 \n Bloqueador:  $50 \n Googles:  $20")); 
    
    let producto5 = parseInt(prompt("¿Cuál sería el precio de tu 5to producto? \n Gafas:  $40 \n Sombrero:  $100 \n Flotador:  $150 \n Bloqueador:  $50 \n Googles:  $20")); 
    
    sumaProductos(producto1, producto2, producto3, producto4, producto5);

    alert("Gracias por comprar en Tienda Sunny!")


 




