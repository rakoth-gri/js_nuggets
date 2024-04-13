// Генераторы - вид функций, поддерживающий дискретный вызов, вызов до конкретного значения
// с гибким управлением выводом конечного результата

function* G() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

// создали генератор, вернули -->> итерируемый объект, с методом next и другими...
const generator = G();

// Метод Next ------

// console.log( generator.next());
// console.log( generator.next());
// console.log( generator.next());
// console.log( generator.next());
// console.log( generator.next());
// 5 вызов:  value: undefined, done: true}

// Перебор

for (const v of generator) {
  console.log(v);
}
// 1,2,3

// функции генераторы с параметрами:

function* Range(s, e) {
  for (let i = s; i <= e; i++) {
    yield i;
  }
}

let arr = [];

for (const iterator of Range(1, 100)) {
  if (iterator > 50) break;
  arr = arr.concat(iterator);
}

// console.log(arr);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

// Композиция генераторов ------

// коды цифр с 48 по 57
// коды Больших латинских букв с 65, 90
// коды Маленьких латинских букв с 97,122

function* G_Char(s, e) {
  for (let i = s; i <= e; i++) {
    yield String.fromCharCode(i);
  }
}

function* Compose_G() {
  yield* G_Char(48, 57);
  yield* G_Char(97, 122);
  yield* G_Char(65, 90);
}

let str = "";

for (const gen of Compose_G()) {
  str += gen + "  ";
}

console.log(str);
// 0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z  A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z

// Пишем свой упрошенный генератор:

class CustomGenerator {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    // method
    return {
      start: this.start,
      end: this.end,
      next() {
        if (this.start <= this.end) {
          return { v: this.start++, done: false };
        }
        return { done: true };
      },
    };
  }
}

// const iterator = new CustomGenerator(100, 200);

// for (let i = 0; i <= 100; i++) {
//   console.log(iterator.next());
// }

