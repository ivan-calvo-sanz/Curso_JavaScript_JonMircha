/*
Set
*/

const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOLA"]);
console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(true);
set2.add(false);

for (const item of set) {
    console.log(item);
}

set2.forEach(item => console.log(item));

//convierto el tipo de dato Set a un array
let arr = Array.from(set);
console.log(arr);

console.log(arr.length);

console.log(arr[0]);

set.delete(1);
console.log(set);

console.log(set.has("hola"));

set2.clear();
console.log(set2);