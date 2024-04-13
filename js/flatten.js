// --Реализуем Flatten итерацией--
let nestedArr = [[2, 4, 5], [[2]], 1];

// function Flat(arr) {
//   let res = [];
//   while (arr.length) {
//     let last = arr.shift();
//     if (Array.isArray(last)) {
//       arr.unshift(...last);
//       continue;
//     }
//     res.push(last);
//   }
//   return res;
// }


Flat([...nestedArr]);