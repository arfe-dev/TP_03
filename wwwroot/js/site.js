let palabra = document.getElementById("palabra").value;
let palabraOculta = [];
let intentos = 10;

// Crear los _
for(let i = 0; i < palabra.length; i++)
{
    palabraOculta.push("_");
}

document.getElementById("palabraOculta").innerHTML = palabraOculta.join(" ");

function ArriesgarLetra()
{
    let letra = document.getElementById("letra").value.toUpperCase();

    // Validaciones
    if(letra == "")
    {
        alert("Ingrese una letra");
        return;
    }

    if(letra.length != 1)
    {
        alert("Ingrese una sola letra");
        return;
    }

    let encontrada = false;

    // Buscar la letra en la palabra
    for(let i = 0; i < palabra.length; i++)
    {
        if(palabra[i] == letra)
        {
            palabraOculta[i] = letra;
            encontrada = true;
        }
    }

    // Si no se encontró, pierde un intento
    if(encontrada == false && intentos > 0)
    {
        intentos--;
        document.getElementById("intentos").innerHTML = intentos;
    }

    // Actualizar palabra mostrada
    document.getElementById("palabraOculta").innerHTML = palabraOculta.join(" ");

    // Limpiar input
    document.getElementById("letra").value = "";

    // Ganó
    if(!palabraOculta.includes("_"))
    {
        document.getElementById("mensaje").innerHTML = "🎉 ¡GANASTE!";
    }

    // Perdió
    if(intentos <= 0)
    {
        document.getElementById("mensaje").innerHTML =
            "❌ PERDISTE. La palabra era: " + palabra;
    }
}