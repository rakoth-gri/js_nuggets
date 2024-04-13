// Структура Map

let store =  new Map([['name', "GRI"]])

console.log(store);

if (!store.has({})) console.log("not exists");

store.set((e) => e**3, "func")

console.log(store);

store.set(13, "number")
console.log(store.get(13));


// create a keys Array
const arr = []
store.forEach((_, key) => arr.push(key))
console.log( arr);



