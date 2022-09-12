/*
EJERCICIOS VIDEO 36_3
Programa una función que valide una palabra o frase dada,
es un palíndromo (que se lee igual en un sentido que en otro)
ejem. miFuncion("Salas"); 
devolverá true
*/


console.log("EJERCICIOS VIDEO 36_3");
//CON FUNCION EXPRESADA
const palindromo = (texto = "") => {
    if (texto === "") return console.warn("El texto NO puede estar vacio");

    texto = texto.toLowerCase();
    let textoAlReves = texto.split("").reverse().join("");
    return (texto === textoAlReves)
        ? console.info(`Si es palíndromo, texto original ${texto}, texto al reves ${textoAlReves}`)
        : console.info(`NO es palíndromo, texto original ${texto}, texto al reves ${textoAlReves}`);
}


palindromo();
palindromo("");
palindromo("Salas");
palindromo("Salass");