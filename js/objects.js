// --OBJECTS--

let foo = {
  target: "store",
  bananas: 100,
  apples: 255,
  geo: "Munich",
  // 1: 100,
};

// CLONING foo *******************************************************
// foo = Object.keys(foo).reduce(
//   (acc, key) =>
//     typeof foo[key] === "number"
//       ? { ...acc, [key]: foo[key] * 3 }
//       : { ...acc, [key]: foo[key] },
//   {}
// );

// Transforming foo *******************************************************

// const transformed = transFoo(foo);
function transFoo({ ...obj }) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "number") obj[key] = obj[key] * 3;
    }
  }
  return obj;
}

// Object.assign для мутации
Object.assign(foo, { sphere: "food" });
console.log(foo);

// Property descriptors
let ex = Object.create(
  {},
  {
    name: { value: "Ramil", enumerable: true, configurable: true },
    age: { value: 35, enumerable: true, configurable: false },
  }
);

console.log(ex);
delete ex["name"];
console.log(ex);

// --CLONING THE OBJECT--
const fruitStore = {
  bananas: 100,
  apple: 500,
  lemon: 200,
  cherries: 100,
  orange: 200,
};

const fruitStoreClone = Object.keys(fruitStore).reduce(
  (acc, fruit, _, arr) => ({ ...acc, [fruit]: fruitStore[fruit] }),
  {}
);
fruitStoreClone.strawberry = 800;
console.group(fruitStore, fruitStoreClone);


// task: byPass object below
// keys must be unique -----
// ex: path = 'abde' =>> null
// примеры path = 'k' =>> ''

const temp = {
  a: {
    b: {
      c: "end",
      d: {
        e: null,
      },
    },
  },
  j: {
    h: {
      i: "end",
    },
  },
  k: "",
};


function bypass(obj, path) {   

    if(path.length === 1) return obj[path]

    while(path.length) {
        obj = obj[path[0]]
        if (!(obj instanceof Object)) return obj
        path = path.slice(1)
    }
}

let res = bypass(temp, 'jhi')
console.log(res, temp);
