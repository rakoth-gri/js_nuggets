// ПАТТЕРН ИНТЕРФЕЙС ****************************************************************************
class Calc {
  // constructor(...args) { }

  plus(num1, num2) {
    return num1 + num2;
  }

  minus(num1, num2) {
    return num1 - num2;
  }

  multy(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

class Controller {
  constructor() {
    this.calc = new Calc();
  }

  operation(action, ...args) {
    if (this.calc[action]) {
      return this.calc[action](...args);
    } else {
      return "We dont have such method...";
    }
  }
}

// const controller = new Controller();
// console.log(controller.operation("integral", 10, 2));
// console.log(controller.operation("plus", 10, 2));
// console.log(controller.operation("minus", 10, 2));

// Генерация фигур ****************************************************************************

const colors = ["red", "whitesmoke", "brown", "teal", "green", "pink", "black"];

const figures = [
  {
    br: "2%",
    border: "none",
    bg: Math.floor(Math.random() * colors.length),
  },
  {
    br: "50%",
    border: "none",
    bg: Math.floor(Math.random() * colors.length),
  },
  {
    br: "none",
    border: "none",
    bg: Math.floor(Math.random() * colors.length),
  },
  {
    br: "15%",
    border: "none",
    bg: Math.floor(Math.random() * colors.length),
  },
];

class Figure {
  constructor({ br, border, bg }) {
    this.$root = document.querySelector(".figures");
    this.br = br;
    this.border = border;
    this.bg = bg;
    // method ---
    this.createFigure();
    this.addEventListenerToRoot();
  }

  createFigure() {
    let figure = document.createElement("div");
    figure.classList.add("figure");
    this.css(figure);
  }

  css = (el) => {
    el.style.cssText = `border-radius: ${this.br}; border: ${
      this.border
    };background:${colors[this.bg]};`;
    this.render(this.$root, el);
  };

  render(container, el) {
    container.insertAdjacentElement("beforeend", el);
  }

  toggleClass = (e) => {
    if (e.target.matches(".figures")) {
      console.log(e.target);
      e.target.classList.toggle("active");
    }
  };

  addEventListenerToRoot() {
    this.$root.addEventListener("mouseover", this.toggleClass);
    this.$root.addEventListener("mouseout", this.toggleClass);
  }
}
// new Figure(figures[0]);
// setInterval(() => figures.forEach((fig) => new Figure(fig)), 3000)

// GETTER SETTER PRIVATE PROP ****************************************************************************

class Car {
  #owner = "GRI_Corp";

  constructor({ brand, type }) {
    this.brand = brand;
    this.type = type;
    this.start = false;
    this.speed = 0;
  }

  startEngine() {
    this.start = true;
    return this;
  }

  speedUp(val) {
    if (typeof val !== "number") {
      console.warn("Wrong Type");
      return;
    }

    if (!this.start) {
      console.warn("Check the Engine");
      return;
    }
    this.speed += val;
    return this;
  }

  stop() {
    setTimeout(() => {
      this.speed = 0;
      this.start = false;
      console.log(this);
    }, 2000);
  }

  get ownerInfo() {
    return this.#owner;
  }

  set setOwnerInfo(val) {
    if (typeof val !== "string") return;
    this.#owner = val;
  }
}

const car = new Car({ brand: "Tayota", type: "Crossover" });

// Заводимся ---
// car.startEngine();

// Разгоняемся ---
// car.speedUp(5);

// Глушим и проверяем объект ---
// car.stop();

// Достаем приватное свойство
// console.log(car.#owner);
// Свойство "#owner" недоступно вне класса "Car", так как оно имеет закрытый идентификатор.

// Используем Геттер:
// console.log(car.ownerInfo);
// GRI_Corp

// Изменим Владельца
// car.setOwnerInfo = "ALICE COOPER";
// console.table("AFTER SETTING: ", car.ownerInfo);

// Паттерн chain of Responsibility: ****************************************************************************
car.startEngine().speedUp(10).stop();
