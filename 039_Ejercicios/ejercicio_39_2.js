/*
EJERCICIOS VIDEO 39_2
Programa una función que devuelva el total despues de aplicar un descuento a una
cantidad dada
ej: miFuncion(1000,20)   
devolverá:  800
*/


console.log("EJERCICIOS VIDEO 39_2");
//CON FUNCION EXPRESADA
const aplicarDescuento = (cantidad = undefined, descuento = 0) => {
    if (cantidad === undefined) return console.warn("NO has ingresado cantidad");
    if (cantidad === 0) return console.warn("No ingresaste la cantidad");
    if (typeof cantidad !== "number") return console.error("La cantidad debe ser un número");
    if (Math.sign(cantidad) === -1) return console.warn("La cantidad NO puede ser nergativo");
    if (typeof descuento !== "number") return console.warn("El descuento debe ser un número");
    if (Math.sign(descuento) === -1) return console.warn("El descuento No puede ser negativo");

    return console.log(`${cantidad} - ${descuento}% = ${cantidad - (cantidad * descuento) / 100}`);

}

aplicarDescuento();
aplicarDescuento(0);
aplicarDescuento(1000);
aplicarDescuento("ER");
aplicarDescuento(-100,5);
aplicarDescuento(1000,"ER");
aplicarDescuento(1000,-20);

aplicarDescuento(1000,20);