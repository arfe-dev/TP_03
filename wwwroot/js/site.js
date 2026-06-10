let palabra = document.getElementById("palabra").value;
let palabraOculta = [];
let intentos = 10;

// Crear los _
for(let i = 0; i < palabra.length; i++){
    palabraOculta[i]="_";
}

document.getElementById("palabraOculta").innerHTML = palabraOculta.join(" ");

function ArriesgarLetra()
{
    let letra = document.getElementById("letra").value.toUpperCase();
    let encontrada = false;

    // Validaciones
    if(letra == ""){
        alert("Ingrese una letra");
        return;
    }

    // Buscar la letra
    for(let i = 0; i < palabra.length; i++){
        if(palabra[i] == letra){
            palabraOculta[i] = letra;
            encontrada = true;
        }
    }
    if(encontrada == false && intentos > 0){
        intentos--;
        document.getElementById("intentos").innerHTML = intentos;
    }

    // Actualizar palabra mostrada
    document.getElementById("palabraOculta").innerHTML = palabraOculta.join(" ");

    // Limpiar input
    document.getElementById("letra").value = "";

    // Mensaje final
    if(!palabraOculta.includes("_")){
        document.getElementById("mensaje").innerHTML = "¡GANASTE!";
    }
    if(intentos <= 0){
        document.getElementById("mensaje").innerHTML = "PERDISTE. La palabra era: " + palabra;
    }
}