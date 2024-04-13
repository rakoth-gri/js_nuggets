// Binding Сontext

const controller = {
  summ(...args) {
    return args.reduce((acc, item) => acc + item);
  },
  multy: function () {
    if(!(this instanceof Array)) return "TYPE ERROR: you must pass the Array instance"
    return this.reduce((acc, item) => acc * item);
  },
};

console.log(controller.multy.call([1, 5, 100]));
