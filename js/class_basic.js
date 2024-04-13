/*
CLASS - это синтаксичечкий 'сахар' над функциями-консрукторами
*/

// ФУНКЦИИ-КОНСТРУКТОРЫ (СИНТАКСИС ES5, до 2015-16 гг.):

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.showPerson = function() {
//   console.log(`Person with name ${this.name} and age ${this.age}`)
// }

// const person1 = new Person("GRI", 30)
// console.log(new Person("BORYA", 45).showPerson())

// const inheriter = Object.create(person1)

// inheriter.name = "Kolya"
// inheriter.age = 25

// console.log(inheriter.showPerson());

// КЛАССЫ ------------------------------------------------------------------------

class Person {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
    this.showPerson();
  }

  showPerson() {
    console.log(`Person with name ${this.name} and age ${this.age}`);
  }
}

// const person = new Person({ name: "XXX", age: 19 });
// console.log(person);

// person.showPerson()

// SLIDER ------------------------------------------------------------------------

const slides = [
  "https://fakeImages.com/images/1.jpg",
  "https://fakeImages.com/images/2.jpg",
  "https://fakeImages.com/images/3.jpg",
  "https://fakeImages.com/images/4.png",
];

class Slider {
  #developer = "SECRET";

  constructor(list) {
    this._list = list;
    // логика
    this.count = 0;
  }

  // increment() {
  //   this.count++;
  // }

  // decrement() {
  //   this.count--;
  // }

  getCurrCountValue() {
    return this.count;
  }

  // GETTER / SETTERS

  get list() {
    return this._list;
  }

  set list(arr) {
    if (!(arr instanceof Array)) return;
    this._list = arr;
  }

  // PRIVATE PROP -----

  get dev() {
    return this.#developer;
  }

  set dev(v) {
    if (typeof v !== "string") return;
    this.#developer = v;
  }
}

const slider = new Slider(slides);

// GET PRIVATE LIST ----------------------
// console.log(slider.list);

// SET PRIVATE LIST ----------------------
slider.list = `IM A STRING`;

// 2 GET PRIVATE LIST ----------------------
// console.log(slider.list);

// 2 SET PRIVATE LIST ----------------------
slider.list = [
  "https://fake.com/images/111.jpg",
  "https://fake.com/images/222.jpg",
  "https://fake.com/images/333.jpg",
  "https://fake.com/images/444.png",
];

// 3 GET PRIVATE LIST ----------------------
// console.log(slider.list);

// Модификатор приватных свойств в классе ---------------------------------

// console.log(slider.#developer)

//  GET PRIVATE DEV ----------------------

// console.log(slider.dev)
// SECRET

// SET PRIVATE DEV ----------------------
slider.dev = `Nikita`;

// 2 GET PRIVATE DEV ----------------------

// console.log(slider.dev)
// Nikita

class Car {
  constructor({ brand, body }) {
    this.brand = brand;
    this.body = body;
  }

  showBrand() {
    console.log(this.brand);
  }
}

const toyota = new Car({ brand: "Toyota", body: "sedan" });
const bmw = new Car({ brand: "BMW", body: "crossover" });

console.log(toyota, bmw);

// НАСЛЕДУЕМСЯ БЕЗ МОДИФИКАЦИИ КОНСТРУКТОРА  ------------------------------------------------------------------------

// class Subaru extends Car {}

// class Subaru extends Car {
//   constructor(option) {
//     super(option)
//   }
// }

// const subaru = new Subaru({brand: "subaru", body: "hatchBack"});
// console.log(subaru);

// НАСЛЕДУЕМСЯ C МОДИФИКАЦИЕЙ КОНСТРУКТОРА  ------------------------------------------------------------------------

class SportCar extends Car {
  constructor({ brand, body, maxSpeed }) {
    super({ brand, body });
    this.maxSpeed = maxSpeed;
  }

  showBrand() {
    // Наследование ф-ла одноименного метода родительского класса
    super.showBrand();
    console.log(`${this.brand} has max-speed: ${this.maxSpeed}`);
  }
}

new SportCar({ brand: "subaru", body: "hatchBack", maxSpeed: 280 }).showBrand();

// СТАТИКА ------------------------------------------------------------------------

const URL = "https://jsonplaceholder.typicode.com/posts";

class User {
  static name = "GRI";
  static age = 30;

  static async getPosts(url) {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  }

  static getBio() {
    console.log(`Name: ${User.name} and age ${User.age}`);
  }
}

User.getPosts(URL);
User.getBio();

console.log(User.name);

// BUILDER ------------------------------------------------------------------------
// { cont, el, cls, text }
const cssText = `border: none; outline: none; padding: 0.5rem; text-slign: center; background-color: yellow; color: red;`;

// class Element {
//   constructor({cont, el, className, text }) {
//     this.$cont = document.querySelector(cont)
//     this.$el = document.createElement(el)
//     this.className = className
//     this.text = text
//   }

//   builder(cont, el, className, text ) {
//     // 1
//     this.addClass(el, className)
//     // 2
//     this.addStyles(el)
//     // 3
//     this.addText(el, text)
//     // 4
//     this.render(cont, el)
//   }
// }

// class HTMLElement extends Element {
//   constructor(...args) {
//     super(...args)
//     this.builder(this.$cont, this.$el, this.className, this.text)
//   }

//   addClass(el, className) {
//     el.classList.add(className)
//   }

//   addStyles(el) {
//     el.style.cssText = cssText
//   }

//   addText(el, text) {
//     el.textContent = text
//   }

//   render(cont, el) {
//     cont.append(el)
//   }
// }

// new HTMLElement({cont: 'body', className: "link", text: "CLICK ME!", el: "a"})

// CHAINE OF RESPONSIBILITY

class Element {
  constructor({ cont, el, cls, text }) {
    this.$cont = document.querySelector(cont);
    this.$el = document.createElement(el);
    this.cls = cls;
    this.text = text;
  }

  addClass() {
    this.$el.classList.add(this.cls);
    return this;
  }

  addStyles() {
    this.$el.style.cssText = cssText;
    return this;
  }

  addText() {
    this.$el.textContent = this.text;
    return this;
  }

  render() {
    this.$cont.append(this.$el);
  }
}

new Element({ cont: "body", cls: "link", text: "click", el: "a" })
  .addClass()
  .addStyles()
  .addText()
  .render();
