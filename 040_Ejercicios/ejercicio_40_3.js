/*
EJERCICIOS VIDEO 40_3
Programa una función que valide que un texto sea un email valido
ej:  miFuncion("jonmircha@gmail.com")
devuelve: true
*/


console.log("EJERCICIOS VIDEO 40_3");
//CON FUNCION EXPRESADA
const validarEmail=(email="")=>{
    if (!email) return console.warn("NO ingresaste un email");
    if (typeof email !== "string") return console.error(`El valor ${email} ingresado, no es una cadena de texto`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z09-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return (expReg)
        ? console.log(`${email}, es un nombre válido`)
        : console.log(`${email}, NO es un nombre válido`);
}

validarEmail();
validarEmail(123);
validarEmail("jon,mir,cha@gmail");
validarEmail("jonmircha@gmail.com");