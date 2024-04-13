// set a value with comparing nodes
// Left side - min values
// right side - max values

// making NOde

export class Node {
  constructor(v) {
    this.r = null;
    this.v = v;
    this.l = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  implement(v) {
    // чекаем на тип ------
    if (typeof v !== "number") throw new Error("Invalid Type");

    if (!this.root) {
      this.root = new Node(v);
      return;
    }

    const currNode = new Node(v);

    let level = this.root;

    while (true) {
      // идем в правую ветку...
      if (currNode.v > level.v) {
        if (!level.r) {
          level.r = currNode;
          break;
        }
        level = level.r;
      }
      // идем в левую ветку...
      else if (currNode.v < level.v) {
        if (!level.l) {
          level.l = currNode;
          break;
        }
        level = level.l;
      }
      // если равны
      else {
        return;
      }
    }
  }
}

const biTree = new BinaryTree();

// дершаем метод

biTree.implement(10);

biTree.implement(9);

biTree.implement(8);

biTree.implement(7);

biTree.implement(40);

biTree.implement(3);

biTree.implement(3);

biTree.implement(40);

// biTree.implement("NEO");

// Decorator -------------

function getPerim(a, b) {
  return 2 * (a + b);
}

const typeChecking = (num) => typeof num === "number";

const decorator = (check, calc) => {
  return (...args) => {
    try {
      for (const i of args) {
        if (!check(i)) throw new TypeError("You should pass only numbers");
      }
      return calc(...args);
    } catch (error) {
      return error.message;
    }
  };
};

const decorated = decorator(typeChecking, getPerim);

console.log(decorated(20, "8"));

console.log("HELLO BRO");
