let data = {
  person: "marie",
  prof: "frontend",
  age: 22,
};

function messGen(phrase, ...params) {
  console.log(params);

  return `${this.person} says ${phrase}`;
}

// call
// console.log(messGen.call(data, "I'm happy", "John"));

// bind--> returns new Function
// let bindedMessGen = messGen.bind(data)("I'm happy", "John")
// console.log(bindedMessGen);

// --Custom Bind method--

function checkMethod(methodName) {
  if (!Function.prototype[methodName]) {
    Function.prototype.myOwnBind = function myOwnBind(context, ...args) {
      return (...args2) => {
        return this.apply(context, args.concat(args2));
      };
    };
    return;
  }
  console.warn(`${methodName} has already exist!`);
}

checkMethod(`myOwnBind`);
console.log(messGen.myOwnBind(data, "I'm happy", "John")("Earth"));
