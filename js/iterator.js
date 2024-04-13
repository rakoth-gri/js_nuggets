const ex = {
  start: 1,
  end: 10,
};

// помещаем свойство, возращающее итератор
ex[Symbol.iterator] = function () {
  return {
    from: this.start,
    to: this.end,
    next() {
      if (this.from <= this.to) {
        return { value: this.from++, done: false };
      } else {
        return { done: true };
      }
    },
  };
};

// проверяем работу
// for (const v of ex) {
//   console.log(v);
// }
// 1 2 3 4 5 6 7 8 9 10

// Пишем метод для итерации литерального объекта --------------------------------------:

class Iterator {
  constructor(obj) {
    this.obj = obj;
    this.addTheIterator(this.obj);
  }

  addTheIterator(obj) {
    if (!Object.keys(obj).length) return console.error(`The target is empty`);

    if (Object.keys(obj).length > 2) return console.error(`Too many fileds`);

    obj[Symbol.iterator] = function () {
      return {
        min: Math.min(...Object.values(this)),
        max: Math.max(...Object.values(this)),
        next() {
          if (this.min <= this.max) return { value: this.min++, done: false };
          return { done: true };
        },
      };
    };
    return console.log(`Свойство [Symbol.iterator] добавлено!`);
  }
}

new Iterator({ start: 18, end: 30 });
new Iterator({ start: 22, end: 26 });
new Iterator({});

// Тест на значения:
const t_o = { start: -5, end: -10 };
new Iterator(t_o);
for (const iterator of t_o) {
  console.log(iterator);
}
