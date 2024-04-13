// FACTORY (Простая) ---------------------------------------------------------------

// class Musician {
//     constructor(name, genre) {
//         this.name = name;
//         this.genre = genre;
//     }
// }

// class FactoryMusic {
//     static create(...args) {
//         return new Musician(...args)
//     }
// }

// const musician1 = FactoryMusic.create("Garry", "POP")
// const musician2 = FactoryMusic.create("LEON", "BLUES")
// console.log( musician1, musician2);

// FACTORY (Усложним) ---------------------------------------------------------------

class Musician {
  constructor({ name, cost }) {
    this.name = name;
    this.cost = cost;
  }
}

class Factory {
  static ranks = {
    beginner: "500$",
    honored: "1000$",
    peoples: "1500$",
  };

  static create(rank, name) {
    return new Musician({ name, cost: Factory.ranks[rank] });
  }
}

const art1 = Factory.create("beginner", "MITYA");
const art2 = Factory.create("honored", "Luka");
const art3 = Factory.create("peoples", "Svyatoslav");
// console.log(art1, art2, art3);

// SINGLETON ---------------------------------------------------------------

class Single {
  constructor(url) {
    if (Single.instance) {
      return Single.instance;
    }
    this.url = `https://www.${url}.com`;
    Single.instance = true;
    Single.instance = this;
  }
}

const s1 = new Single("pop");
const s2 = new Single("church");

// console.log(s1,s2);

// DECORATOR (функция-обертка) -----------------------------------------------------

class Engineer {
  constructor(name, company) {
    this.name = name;
    this.company = company;
  }
}

// Создаем обертку и возвращаем результат
function decor(instance) {
  instance.hasFamily = true;
  instance.info = function () {
    return `name: ${this.name}; \n company: ${this.company}; \n family: ${this.hasFamily}`;
  };
  return instance;
}

const decoratedEngineer = decor(new Engineer("Vasya", "BULKI-PLUSHKI"));

// console.log(decoratedEngineer.hasFamily, decoratedEngineer.info());

// INTERFACE  -----------------------------------------------------

class Calc {
  static sum(...args) {
    return args.reduce((acc, i) => acc + i);
  }

  static max(...args) {
    return Math.max(...args);
  }

  static min(...args) {
    return Math.min(...args);
  }

  static pow(...args) {
    if (args.length > 2) {
      console.error("Вы передали более 2-х аргументов...");
      return false;
    }
    return Math.pow(...args);
  }

  static cube(...args) {
    console.log(args);
    if (args.length > 1) {
      console.error("Вы передали более 1-го аргумента...");
      return false;
    }
    return args[0] ** 3;
  }
}

class Dispatcher {
  constructor() {
    this.calc = Calc;
  }

  op(method, ...args) {
    if (this.calc[method]) {
      return this.calc[method](...args);
    } else {
      console.error("Такого метода не существует...");
      return false;
    }
  }
}

const dispatcher = new Dispatcher();
// console.log(dispatcher.op('cube', 5));
// console.log(dispatcher.op('pow', 5, 4, 7));
// console.log(dispatcher.op('min', 5, 4, 7, -100));
// console.log(dispatcher.op('max', 5, 4, 7, -100));
// console.log(dispatcher.op('sum', 5, 4, 7, -100));
// console.log(dispatcher.op('no', 5, 4, 7, -100));

// BUILDER -----------------------------------------------------

class Builder {
  constructor(selector, cls, container) {
    this.selector = selector;
    this.cls = cls;
    this.container = container;
  }
  build(selector, cls, container) {
    const EL = this.createEl(selector);
    this.styleEl(EL, cls);
    this.render(container, EL);
  }
}

class Element extends Builder {
  constructor(selector, cls, container) {
    super(selector, cls, container);
    this.build(this.selector, this.cls, this.container);
  }

  createEl(EL) {
    return document.createElement(EL);
  }

  styleEl(EL, cls) {
    EL.classList.add(cls);
  }

  render(container, EL) {
    container.append(EL);
  }
}

const element = new Element("DIV", "DIV", document.body);
