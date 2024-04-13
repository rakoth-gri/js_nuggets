// let checking = (function checkProto(name) {
//   if (!Array.prototype[name]) {
//     return "free";
//   }
//   return "not allowed...";
// })("myReduce");

// console.log(checking);

Array.prototype.myReduce = function (cb, acc) {
  if (!cb) {
    throw new SyntaxError("Expected a callback as a first argument...");
  }

  if (!(cb instanceof Function)) {
    throw new TypeError(
      'Expected an instance of "Function Constructor" as a first argument...'
    );
  }

  let integral = acc || this[0];

  const start = acc ? 0 : 1;

  console.log("integral >> " + integral + "\n" + "start >> " + start);

  for (let i = start; i < this.length; i++) {
    integral = cb(integral, this[i], i, this);
  }

  return integral;
};

const exp = [100, 33, 45, -100];

let myReduceResult = exp.myReduce((acc, item, i) => {
  return item % 2
    ? { ...acc, [item]: "нечетное" }
    : { ...acc, [item]: "четное" };
}, {});

console.log(myReduceResult);
