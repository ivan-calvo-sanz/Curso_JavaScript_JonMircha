/*
EJERCICIOS VIDEO 36_2
Programa una función para contar el número de veces
que se repite una palabra en un texto largo,
ejem. miFuncion("hola mundo adios mundo","mundo") 
devolverá 2
*/


console.log("EJERCICIOS VIDEO 36_2");
//CON FUNCION EXPRESADA
const contarPalabra = (texto = "", palabra = "") => {
    if (!texto) return console.warn("No ingresaste el texto");
    if (!palabra) return console.warn("No ingresaste palabra a evaliar");

    let i = 0,
        contador = 0;

    while (i !== -1) {
        i = texto.indexOf(palabra, i);
        if (i !== -1) {
            i++;
            contador++;
        }
    }
    return console.log(`La palabra ${palabra} aparece ${contador} veces`)
}  


contarPalabra("hola mundo adios mundo","mundo");
contarPalabra("hola mundo adios mundo","");
contarPalabra("hola mundo adios mundo");