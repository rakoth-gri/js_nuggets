// --Recursion--

// Summ
// const decor = () => {
//   let arr = [1, 5, 8, 22],
//     summ = 0,
//     step = 0;

//   return function recur() {
//     if (step < arr.length) {
//       summ += arr[step];
//       step++;
//       return recur();
//     } else
//         return summ;
//   };
// };
// console.log(decor()());

// SUMM OF ARRAY case-2
let arr = [1, 5, 8, 22];

// Summ 2
const summOfArray = (index) =>
  index === 0 ? arr[index] : arr[index] + summOfArray(index - 1);

let res = summOfArray(arr.length - 1);
console.log(res);

// Factorial Recur
const factorial = (number) =>
  number <= 1 ? 1 : number * factorial(number - 1);
console.log(factorial(1));

// Loop
function factorial2(number) {
  if (number <= 1) return 1;
  for (let i = number; i > 1; i--) {
    number = number * (i - 1);
  }
  return number;
}
console.log(factorial2(1));

// --Реализуем Flatten рекурсией--

let nestedArr = [[2, 4, 5], [[2]], 1];

// const flatRec = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] instanceof Array) {
//       res = res.concat(flatRec(arr[i]));
//     }
//     else res.push(arr[i]);
//   }
//   return res;
// };

const flatRec = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      res.push(...flatRec(arr[i]));
    } else res.push(arr[i]);
  }
  return res;
};

console.log(flatRec([...nestedArr]), nestedArr);

// object ByPass ******************************************************************

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

console.log(temp?.a?.b?.d?.e?.a);

function byPass(obj, path) {
  if (path.length === 1) return obj[path];

  if (obj[path[0]] instanceof Object)
    return byPass(obj[path[0]], path.slice(1));
}

let fi = byPass(temp, "k");
console.log(fi);

// UNIVERSAL CURRY --------------

function sum(a, b, c) {
  return a * b * c;
}

/*
  a = 3, b = 3, c = 1 

  let curried = curry(sum)

  curried(a)(b)(c) === 9
  curried(a,b)(c) === 9
  curried(a,b,c) === 9

  curried(a)()()(b)(c) === 9

*/

function curry(cb) {
  return function curried(...args) {
    if (args.length >= cb.length) {
      return cb(...args);
    } else return (...args2) => curried(...args, ...args2);
  };
}

let curried = curry(sum);

// console.log(curried(3)(3)(1));
// console.log(curried(3, 3)(1));
// console.log(curried(3, 3, 1));
// console.log(curried(3)()()(3)(1));

// ARRAY TREE ****************************************
// ARRAY IS A BASE RECUR CASE

const tree = {
  fruits: {
    berries: [
      {
        amount: 50,
        value: "blackberry",
      },
      {
        amount: 1000,
        value: "strawberry",
      },
    ],
    tropical: {
      abroad: [
        {
          amount: 50,
          value: "mango",
        },
        {
          amount: 2000,
          value: "ananas",
        },
        {
          amount: 2000,
          value: "coconut",
        },
      ],
      local: [
        {
          amount: 4000,
          value: "bananas",
        },
      ],
    },
    berriesMidRange: [
      {
        amount: 10000,
        value: "currant",
      },
    ],
    middleRegions: [
      {
        amount: 10000,
        value: "currant",
      },
      {
        amount: 10000,
        value: "actinidia",
      },
      {
        amount: 10000,
        value: "shadberry",
      },
    ],
  },
  largeFruitTree: [
    {
      amount: 200,
      value: "watermelon",
    },
    {
      amount: 500,
      value: "melon",
    },
  ],
};

function byPassTree(tree) {
  let res = [];

  for (const val of Object.values(tree)) {
    if (Array.isArray(val)) res = res.concat(val.map((item) => item.amount));
    else res = res.concat(byPassTree(val));
  }

  return res;
}

console.log(byPassTree(tree).reduce((a, i) => a + i));
// 49800

// BINARY TREE ****************************************
// VALUE IS A BASE RECUR CASE

const BT = {
  left: {
    left: {
      left: {
        value: 25,
      },
      value: 25,
      right: {
        value: 25,
        left: {
          value: 25,
          right: {
            value: 25,
          },
        },
      },
    },
  },
  right: {
    right: {
      value: 25,
      left: {
        value: undefined,
      },
      right: {
        value: 25,
      },
    },
    left: {
      value: 25,
      right: {
        value: 25,
      },
    },
  },
};

// function byPassBT(tree) {
//   let sum = 0;

//   if (tree.value) {
//     sum += tree.value;
//   }

//   if (tree.right) {
//     sum += byPassBT(tree.right);
//   }

//   if (tree.left) {
//     sum += byPassBT(tree.left);
//   }

//   return sum;
// }

// console.log(byPassBT(BT));

function byPassBT2(tree) {
  let sum = 0;

  for (let val of Object.values(tree)) {
    if (typeof val === "object") {
      sum += byPassBT2(val);
    } else {
      if (val) sum += val;
    }
  }

  return sum;
}

console.log(byPassBT2(BT));

// циклический обход ------

function byPassBTLoop(arr) {
  let sum = 0;

  while (arr.length) {
    let popped = arr.pop();
    if (popped instanceof Object) {
      arr.push(...Object.values(popped));
      continue;
    }
    if (popped) sum += popped;
  }

  return sum;
}

console.log(byPassBTLoop([BT]));
