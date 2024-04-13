// MAX VALUE

const numberArr = [-15, 759, 15, 30];
let counter = 0;
let max = 0;
while (counter < numberArr.length) {
  if (max < numberArr[counter]) max = numberArr[counter];
  counter++;
}
// console.log(max);

let max2 = numberArr.reduce((acc, item, _, arr) => {
  if (acc < item) acc = item;
  return acc;
});
// console.log(max2);

// --DELETE DUPLICATES--
const arr2 = ["LENA", "OLEG", "LENA", 100, 22, 22, 50, 80, 66, 66];

function delDuplicates(list) {
  let arr = [];
  list.forEach((num) => !arr.includes(num) && arr.push(num));
  console.log(arr);
}
// delDuplicates(arr2);

function delDuplicates2(list) {
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    if (arr.indexOf(list[i]) < 0) arr.push(list[i]);
  }
  console.log(arr);
}
// delDuplicates2(arr2);

let delDuplicates3 = arr2.filter((item, i, arr) => i === arr.indexOf(item));
// console.log("FILTER METHOD: " + delDuplicates3);

// --SORT

let list = [
  "Anna",
  "Zoya",
  4,
  "Max",
  "Max",
  "Zoya",
  4,
  "Zoya",
  4,
  "Anna",
  "Max",
  "Max",
  4,
];

function SortByAmount(arr) {
  let obj = arr.reduce(
    (acc, i) => ({ ...acc, [i]: acc[i] ? acc[i] + 1 : 1 }),
    {}
  );
  return Object.keys(obj).sort((a, b) => (obj[b] > obj[a] ? 1 : -1));
}

// SortByAmount([...list]);

// --SORT--

let sortEx = [1, 15, 12, 2, 6];
// console.log(sortEx.sort());

//  CORRECT BRACKETS TASK --------

const str = `{{[()]}}`;

const openBracks = ["{", "[", "(", "<"];

const map = {
  "{": "}",
  "[": "]",
  "(": ")",
  "<": ">",
};

function Parsing(str) {
  let c = 0;

  let buffer = [];

  while (c < str.length) {
    if (openBracks.includes(str[c])) buffer.push(str[c]);
    else {
      if (map[buffer.pop()] !== str[c]) {
        return false;
      }
    }
    c++;
  }
  return true;
}

// console.log(Parsing(str));

//  My OWN SORT --------

const entry = [7, -100, -21, 0, 1000, -878, 2000, 55, 155];

function getMin(index, arr) {
  let min = arr[index];

  for (let i = index; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }

  return min;
}

function MySort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currMin = getMin(i, arr);
    let indexMin = arr.indexOf(currMin);

    let temp = arr[i];
    arr[i] = currMin;
    arr[indexMin] = temp;
  }
}

MySort(entry);

console.log(entry);

// BUBBLE SORT ------------------------------

// for (let i = 0; i < entry.length; i++) {
//   for (let j = 0; j < entry.length - 1; j++) {
//     if (entry[j] > entry[j + 1]) {
//       const temp = entry[j];
//       entry[j] = entry[j + 1];
//       entry[j + 1] = temp;
//     }
//   }
// }
// console.log(entry);

// MAP FROM REDUCE

const ex = [2, 4, 8, 7];

/*
[4,8,16]

*/

const mappFromReduce = (list, mapper) => {
  return list.reduce((acc, item) => {
    acc.push(mapper(item));
    return acc;
  }, []);
};

// console.log(mappFromReduce(ex, (item) => item * 2));

const filterFromReduce = (list, mapper) => {
  return list.reduce((acc, item) => {
    mapper(item) ? acc.push(mapper(item)) : false;
    return acc;
  }, []);
};
// console.log(filterFromReduce(ex, (item) => item % 2 && item));

// Mapper ДЗ ------------

const Mapper = (list, cb) => list.reduce((acc, v, i) => [...acc, cb(v)], []);
console.log(Mapper(ex, (item) => (item % 2 ? item * 2 : item)));
