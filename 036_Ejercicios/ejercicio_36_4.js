/*
EJERCICIOS VIDEO 36_4
Programa una función que elimine cierto patrón de caracteres
de un texto dado
ejem: miFuncion("xyz1,xyz2,xyz3,xyz4,xyz5")
devolverá "1,2,3,4 y 5"
*/


console.log("EJERCICIOS VIDEO 36_4");
//CON FUNCION EXPRESADA
// mediante expresiones regulares
const eliminarCracteres = (texto = "", patron = "") =>
    (!texto)
        ? console.warn("NO ingresaste el texto")
        : (!patron)
            ? console.warn("NO ingresaste patron")
            //creo una expresión regular con el patron
            //y con las banderas i-> indica que no distingue entre mayuscula o minuscula
            // g -> no se para en la primera coincidencia
            // como NO quiero reemplazar con nada indico ""
            : console.info(texto.replace(new RegExp(patron, "ig"), ""));


eliminarCracteres();
eliminarCracteres("", "");
eliminarCracteres("xyz1,xyz2,xyz3,xyz4,xyz5", "xyz");