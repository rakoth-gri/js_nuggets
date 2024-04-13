// --Closures--

// const decorator = () => {
//   let counter = 0;
//   return () => {
//     counter++; // counter = counter + 1
//     console.log(counter);
//   };
// };

// const incrementCounter = decorator();

// for (let i = 0; i < 10; i++) {
//   incrementCounter();
// }

const decorator = {
  counter: 0,
  incrementCounter() {
    this.counter++; // counter = counter + 1
  },
  get currentCounter() {
    return this.counter;
  },

  set changeCounter(value) {
    if (typeof value === "number") {
      this.counter += value;
      return;
    }
    console.log(`the value is not "Number TYPE"`);
  },
};

// Invoking
for (let i = 0; i < 10; i++) {
  decorator.incrementCounter();
}

// SET / GET
console.log(decorator.currentCounter);
decorator.changeCounter = 50;
console.log(decorator.currentCounter);

const inClosure = () => {
  counter = 0;

  function inc() {
    counter++;
  }

  function dec() {
    counter--;
  }

  function getCounter() {
    return counter;
  }

  return {
    counter,
    inc,
    dec,
    incInObject() {
      this.counter++;
    },
    decInObject() {
      this.counter--;
    },
    getCounter,
  };
};

const obj = inClosure();

obj.dec();
obj.dec();

console.log(obj.counter);

console.log(obj.getCounter());

function Sum(a, b, c) {
  return a + b + c;
}

Sum(a1, b2, c2);

Sum(a1)()(b2)()()()(c2);

// YANDEX TASK

const Decorator = () => {
  counter = 0;

  function inc() {
    counter++;
  }

  function dec() {
    counter--;
  }

  function getCounter() {
    return counter;
  }

  return {
    counter,
    inc,
    dec,
    incInObject() {
      this.counter++;
      const dem = () => {
        console.log(this);
      };
      dem();
    },
    decInObject() {
      this.counter--;
    },
    getCounter,
  };
};

const decorated = Decorator();
