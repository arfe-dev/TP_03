namespace TP_03.Models;

public class PalabrasAhorcado{
    private List <string> palabras;

    public PalabrasAhorcado(){
        palabras = new List<string>(){
            "COMPUTADORA", "LABORATORIO", "PROCESADOR", "PROGRAMACION", "GABINETE", "PROFESORES", "ESTUDIANTE", "VISUALSTUDIO", "ARGENTINA", "CABLEADO"
        };
    }

    public string obtenerPalabra(){
        Random rnd = new Random();
        int indice = rnd.Next(palabras.Count);
        return palabras[indice];
    }
}