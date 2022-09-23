/*
TEMPORIZADORES

*/

/*
let temporizador = setTimeout(() => {
    console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez");
}, 3000);

clearTimeout(temporizador);


setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo");
}, 1000);
*/

let temporizador = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temporizador);