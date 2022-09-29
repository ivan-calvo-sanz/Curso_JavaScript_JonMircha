/*
Proxies
*/

// creo un Objeto Literal
// Objeto Original
const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}


//creo un Objeto será el manejador (handler)
//El manejador tiene un método -> set  que es donde se realizan todas las validaciones
//Dentro del método set recibe 3 parámetros (Objeto, cada una de las propiedades que se quieran evaluar y el valor de la propiedad)
const manejador = {
    set(obj, prop, valor) {
        //realizo comprobación para que a través del Proxy NO se puedan añadir más atributos al objeto que los declarados inicialmente
        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error(`La propiedad ${prop} NO existe en el Objeto persona`);
        }
        //validacion de nombre y apellido sea String
        if ((prop === "nombre" || prop === "apellido") && !(/^[A-Za-z]+$/g.test(valor))) {
            return console.error(`La propiedad "${prop}" sólo acepta letras y espacios en blanco`);
        }
        obj[prop] = valor;
    }
}


//genero varias Personas typo Proxy
//typo Proxy recibe (Objeto base del que se parte) , (y el manejador)
const jon = new Proxy(persona, manejador);

jon.nombre = "Jon";
jon.apellido = "MirCha";
jon.edad = 35;

// el Proxy realiza una vinculación entre la copia del Objeto y el propio Objeto 
// si indico un nuevo atributo que inicialmente No lo tiene el objeto me lo genera en el objeto
// ahora en persona tb voy a tener el atributo twitter
//para NO poder introducir nuevos atributos al Objeto referencia, se valida en el set que ese atributo exista en el objeto de partida
jon.twitter = "@jonmircha";

console.log(jon);