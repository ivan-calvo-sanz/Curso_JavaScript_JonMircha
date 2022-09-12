/*
EJERCICIOS VIDEO 39_3
Programa una función que dada una fecha válida determine cuantos años han pasado
hasta el dia de hoy
ej: miFuncion(new Date(1984,4,23))
devolverá: 35 años (en 2020)
*/


console.log("EJERCICIOS VIDEO 39_3");
//CON FUNCION EXPRESADA
const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste la fecha");
    //if (typeof fecha !== "object") 
    if (!(fecha instanceof Date)) return console.warn("El valor introducido NO es una fecha válida");

    //calcula los milisegundos que han pasado desde 1970 hasta hoy
    //.getTime()
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        aniosEnMiliSegundos = 1000 * 60 * 60 * 24 * 365,
        edadAnios = Math.floor(hoyMenosFecha / aniosEnMiliSegundos);

    return (Math.sign(edadAnios) === -1)
        ? console.log(`Faltan ${Math.abs(edadAnios)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(edadAnios) === 1)
            ? console.log(`Han pasado ${edadAnios} años desde ${fecha.getFullYear()}`)
            : console.log(`Estamos en el año actual ${fecha.getFullYear()}`);
}

calcularAnios();
calcularAnios("1984,4,23");

calcularAnios(new Date(2025, 4, 23));
calcularAnios(new Date(1984, 4, 23));
calcularAnios(new Date(2022, 4, 23));