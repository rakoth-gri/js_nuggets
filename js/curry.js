// Simple example

/*

sum(a,b,c) => RES
sum(a)(b)(c) => RES

*/

// Классический вариант
// function sum(...args) {
//     return args.reduce((acc, item) => acc + item);
// }
// console.log(sum(10,10,30,100));

// Продвинутый вариант
function sum(param) {
  if (!param) return null;
  let sum = param;
  return function Curry(nextParam) {
    if (nextParam) {
      sum += nextParam;
      return Curry;
    }
    return sum;
  };
}
// console.log(sum(5)(5)(10)());

// Универсальный вариант (с рекурсией)

function callback(a, b, c) {
  return a + b + c;
}

// function decorator(cb) {
//   return function recur(...args1) {
//     if (args1.length >= cb.length) {
//       return cb(...args1);
//     }
//     return (...args2) => {
//       return recur(...args1, ...args2);
//     };
//   };
// }

// перепишем ф-цию decorator через ES^5:
function decorator(cb) {
  return function recur() {
    let args1 = [...arguments];
    console.log(args1);

    if (args1.length >= cb.length) {
      return cb(...args1);
    }
    return function () {
      let args2 = [...arguments];
      console.log(args2);
      return recur(...args1, ...args2);
    };
  };
}

console.log(decorator(callback)(5, 5)()()()(7));
/*
[ 5, 5 ]
[]
[ 5, 5 ]
[]
[ 5, 5 ]
[]
[ 5, 5 ]
[ 7 ]
[ 5, 5, 7 ]
Итоговая сумма: 17
*/
