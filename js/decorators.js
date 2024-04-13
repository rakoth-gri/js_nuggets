// DECORATOR ---------------------------------------------

const isNumber = (n) => typeof n === "number";

const sum = (a, b) => a + b;

function Decor(f, checkCB) {
  return function (...args) {
    for (let arg of args) {
      if (!checkCB(arg)) {
        console.error(`${arg} is not a number...`);
        return;
      }
    }
    return f(...args);
  };
}

const decorated = Decor(sum, isNumber);

// console.log(decorated(2, null));
// console.log(decorated(false, 10));
// console.log(decorated(undefined, 78));
// console.log(decorated(0, 78));

// DEBOUNCE  ------------------------------------------------------

const INPUT_TEXT = document.querySelector(".inputText");
const VISUAL = document.querySelector(".visual");

function debounceDecorator(cb, time) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb(...args);
    }, 500);
  };
}

// const debounced = debounceDecorator((text) => VISUAL.textContent = text, 500)

// INPUT_TEXT.addEventListener("input", handler);

// function handler(e) {
//   VISUAL.textContent += e.target.value
// }

// function handler(e) {
//   debounced(e.target.value)
// }

// THROTTLE  -----------------------------------------------

function throttleDecorator(cb, time) {
  let flag = false;

  return function (...args) {
    if (flag) return;

    flag = true;

    timeout = setTimeout(() => {
      cb(...args);
      flag = false;
    }, 500);
  };
}

const throttled = throttleDecorator((text) => (VISUAL.textContent = text), 500);

function handler(e) {
  throttled(e.target.value);
}

// CACHING -----

const cube = (n) => n ** 3;

function cachDecor(cb) {
  let store = new Map();

  return function (key) {
    if (store.has(key)) return store.get(key);

    let res = cb(key);

    store.set(key, res);

    return store;
  };
}

const cachDecorated = cachDecor(cube);

console.log(cachDecorated(1));
console.log(cachDecorated(1));
console.log(cachDecorated(2));
console.log(cachDecorated(2));
console.log(cachDecorated(3));
console.log(cachDecorated(3));

// Custom Bind *************************

(function activateMyBind() {
  if (Function.prototype.myBind) return;

  Function.prototype.myBind = function (context, ...args) {
    return (...args2) => {
      this.apply(context, args.concat(args2));
    };
  };
})();

function logThis(place) {
  console.log(`${this.name} has an interesting ${this.hobby} in ${place}`);
}

const obj = {name: "Anus", hobby: "sport"};

logThis.bind(obj, "school")()
