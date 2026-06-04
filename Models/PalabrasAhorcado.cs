namespace TP_03.Models;

public class PalabrasAhorcado{
        private List <string> palabras{};

    public PalabrasAhorcado(){
        palabras = new List<string>();
        palabras.Add("COMPUTADORA", "LABORATORIO", "PROCESADOR", "PROGRAMACION", "GABINETE", "PROFESORES", "ESTUDIANTE", "VISUALSTUDIO");
    }

 public string obtenerPalabra(){
    Random rnd = new Random();
    int indice = rnd.Next(palabras.Count);
    string stringRandom = palabras[indice];
    return stringRandom;
    }
}