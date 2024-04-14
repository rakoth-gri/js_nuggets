import { store } from "./store.js";
const form = document.forms[0];

// Запись (API обычного JS-объекта):

window.localStorage["string"] = "Hello world";
window.localStorage["number"] = 23;

// Считывание (API обычного JS-объекта):

console.log(localStorage["string"]);
console.log(localStorage["number"]);

// Длина -----

console.log(localStorage.length);

// Удаление по конкретному ключу -----

// localStorage.removeItem('number')

// Перебор в цикле:

// for (const key in localStorage) {
//     if (Object.hasOwnProperty.call(localStorage, key)) {
//         console.log("Ключ:", key)
//     }
// }

// ПОЧЕМУ setItem, getItem для записи и считывания??
// Потому как, при записи/чтении хранилища через API обычного JS-объекта нельзя использовать названия встроенных методов:

localStorage.setItem(`length`, "НИ ХЕРА");

// Только строки: !!!!!

console.log(JSON.parse(localStorage.getItem("data") || '{"name": "GRI"}'));

// Практика: Записываем посты в LS

const setToLS = (key, data) =>
  window.localStorage.setItem(key, JSON.stringify(data));

store.observer(setToLS);

form.addEventListener("submit", handler);

function handler(e) {
  e.preventDefault();

  const data = [...this.elements]
    .slice(0, -1)
    .reduce((acc, el) => ({...acc, [el.name]: el.value}),{})  

  store.addPost(data);

  this.reset();
}


