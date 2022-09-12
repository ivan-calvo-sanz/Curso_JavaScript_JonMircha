/*
EJERCICIOS VIDEO 37_2
Programa una función que reciba un número y evalúe
si es capicúa o no (que se lee igual en un sentido
que en el otro)
ejem: miFuncion(2002)
devolverá true
*/


console.log("EJERCICIOS VIDEO 37_2");
//CON FUNCION EXPRESADA
const capicua = (numero = 0) => {
    if (!numero) return console.warn("No ingresaste un número");

    if (typeof numero !== "number") return console.error(`El valos ${numero} NO es un número`);

    //convierto el número a String
    numero = numero.toString();

    let numeroAlReves = numero.split("").reverse().join("");

    return (numeroAlReves===numero)
    ? console.log(`SI es capicúa. Número original ${numero}, Número al revés ${numeroAlReves}`)
    : console.log(`NO es capicúa. Número original ${numero}, Número al revés ${numeroAlReves}`)
}

capicua();
capicua(100);
capicua(101);