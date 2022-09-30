/*
Propiedades Dinámicas de los Objetos
*/

//*** generar atributos de forma dinámica a partir de un array de valores ***
const objUsuarios = {
    //Lo que queremos es por ejemplo que el nombre del atributo id_1 se genere dinámicamente
    //id_1
}
console.log(objUsuarios);

const usuarios = ["Jon", "Irma", "Miguel", "Kala"];
//para generar un atributo de un objeto despues de que ha sido generada es mediante la notacion del punto o mediante corchetes
//recorro el array usuarios mediante forEach
//en una array function donde paso por parámetros el valor del array (usuario) y su indice (index) y mediante corchetes
// genero un nuevo atributo del objeto identificándole con el paámetro indice y como valor el usurio del array
usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);
console.log(objUsuarios);

//*** generar atributos de forma dinámica directamente en la definición del propio Objeto ***
let aleatorio = Math.round(Math.random() * 100);
const objUsuarios_v2 = {
    //propiedad:"Valor"
    [`id_${aleatorio} `]: "Valor Aleatorio"
};
console.log(objUsuarios_v2);

usuarios.forEach((usuario, index) => objUsuarios_v2[`id_${index}`] = usuario);
console.log(objUsuarios_v2);