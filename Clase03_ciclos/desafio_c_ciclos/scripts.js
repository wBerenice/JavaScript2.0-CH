
let misterio = parseInt(prompt("¿Cuántos dulces hay en el tarro?"));

while(misterio != 120 ){
    if(misterio <=50){
        alert("Lástima, aún estás lejos de la respuesta correcta");
    }else if(misterio <=100){
        alert("Cerca, pero aún faltan varias cifras para la respuesta correcta!");
    }else if(misterio <=119){
        alert("Muy cerca! Solo unas cifras más!");
    }else if(misterio >120){
        alert("Lástima, te has pasado. Sigue intentando!")
    }else{
        alert("Intenta de nuevo")
    }
    misterio = parseInt(prompt("¿Cuántos dulces hay en el tarro?"));
}

if (misterio == 120){
    alert("¡Felicidades!, has ganado el premio!")
}


// console.log("Hello");
// setTimeout(() => {  console.log("World!"); }, 5000);
