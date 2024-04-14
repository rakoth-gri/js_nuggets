const store = {
  _player: "FOMIN",
  team: "Some",
  height: 188,
  get player() {
    return this._player;
  },
};

const obj = { name: "XXX" };
const obj1 = { name: "YYY" };

const getMin = (list) => {
  if (!Array.isArray(list)) throw new TypeError("Invalid Argument...");
  return Math.min(...list);
};

// Корректно экспортировать внизу модуля:
export { obj, obj1, getMin };
export default store;
