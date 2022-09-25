/*
Promise
*/

//en las Promesas NO hace falta enviar como parámetro otra función (Callback)
function cuadradoPromise(value) {
    //retorna una instancia del objeto Promise 
    //las Promesas recibe una función con los valores resolve y reject
    //el resolve es el return positivo de la Promesa en caso de que se cumpla
    //el reject es el return negativo de la Promesa
    if (typeof value !== "number") return Promise.reject(`Error, el valor "${value}" no es un número`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //formo un objeto dentro del resolve
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random() * 1000);
    });
}

//ejecuto una función que devuelve una promesa hay DOS métodos para ir trabajando la Asincronía:
// método .then()   se ejecuta una vez se cumpla la promesa, tendremos tantos métodos then necesarios
// método .catch()  captura el error resultante del reject de la Promesa
cuadradoPromise(0)
    //en este caso el then recibe un objeto ya que es lo que hemos indicado en el resolve de la Promesa
    .then((obj) => {
        //console.log(obj);
        console.log("Inicio Promise");
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise("3");
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        console.log("FIN de la Promesa");
    })
    //en este caso manejamos el error que hemos indicado en el método .reject del objeto Promise 
    .catch(err => console.error(err)
    );