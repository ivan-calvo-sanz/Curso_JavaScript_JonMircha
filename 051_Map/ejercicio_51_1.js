/*
Map
*/

const mapa = new Map();

mapa.set("nombre", "Jon");
mapa.set("apellido", "MirCha");
mapa.set("edad", 35);
mapa.set(19, "diecinueve");
mapa.set(false, "false");

console.log(mapa);
console.log(mapa.size);

console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));

console.log(mapa.get("nombre"));

mapa.set("nombre", "Jonathan MirCha");
console.log(mapa);

mapa.delete("apellido");
console.log(mapa);

for (let [key, value] of mapa) {
    console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
    ["nombre", "Kenai"],
    ["edad", "7"],
    [null, "nulo"]
]);
console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];
console.log(llavesMapa2);
console.log(valoresMapa2);