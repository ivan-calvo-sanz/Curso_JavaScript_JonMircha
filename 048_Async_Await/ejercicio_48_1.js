/*
Funciones Asíncronas
*/

//FUNCION ASINCRONA DECLARADA
//"async" indica que la función es asíncrona
async function funcionAsincronaDeclarada() {
    //manejo de errores mediante try-catch
    try {
        console.log("Inicio Async Function");

        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise("a");
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        console.log("Fin Async Function");
    } catch (err) {
        console.error(err);
    }
}

//FUNCION ASINCRONA EXPRESADA
//"async" indica que la función es asíncrona
const funcionAsincronaExpresada = async () => {
    try {
        console.log("Inicio Async Function");

        let obj = await cuadradoPromise(10);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(20);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(30);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        console.log("Fin Async Function");
    } catch (err) {
        console.error(err);
    }
}


function cuadradoPromise(value) {
    if (typeof value !== "number") {
        return Promise.reject(`Error, el valor "${value}" ingresdo NO es un número`);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });
}

funcionAsincronaDeclarada();
funcionAsincronaExpresada();