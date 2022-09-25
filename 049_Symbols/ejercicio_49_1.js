/*
Symbol
*/

let id1 = "hola";
let id2 = "hola";
console.log(id1 === id2);

let id1_v1 = Symbol();
let id2_v1 = Symbol();
console.log(id1_v1 === id2_v1);


//UTILIZAR Symbol en Objeto
//se crea el dato Tipo Symbol 
//(para crear un tipo Symbol no hay que poner new)
const NOMBRE = Symbol("nombre");

//creo el objeto y dentro utilizo el dato Tipo Symbol
const persona = {
    [NOMBRE]: "Jon"
}

console.log(persona);
// declaro un nueo atributo al Objeto con el mismo nombre, al
// haber utilizado el anterior como Tipo Symbol es posible
persona.NOMBRE = "Jonathan MirCha";
console.log(persona);

console.log(persona.NOMBRE);
//acceder a los valores del objeto Tipo Symbol
console.log(persona[NOMBRE]);

//  Crear atributos de un objeto una vez ya creado el Objeto
const SALUDAR = Symbol("saludar");
persona[SALUDAR] = function () {
    console.log("Hola");
}

console.log(persona);
persona[SALUDAR]();

//recorrer el Objeto persona
for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona));