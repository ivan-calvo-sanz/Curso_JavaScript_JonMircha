/*
EJERCICIOS VIDEO 35_3
Programa una función dada un String te devuelva un Array
de textos separados por cierto caracter
ejem. 
miFuncion("hola que tal",' ') devolverá ['hola','que','tal']
*/

//FUNCION EXPRESADA
const cadenaAArray = (cadena = "", separador = undefined) =>
    (!cadena)
        ? console.warn("No ingresaste cadena de texto")
        : (separador === undefined)
            ? console.warn("NO has introducido separador")
            : console.info(cadena.split(separador));

cadenaAArray("hola que tal", " ");
cadenaAArray();
cadenaAArray("hola que tal");
cadenaAArray("", " ");