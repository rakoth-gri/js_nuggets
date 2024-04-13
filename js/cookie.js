// Запись:

const person = {
  name: "Milya",
  age: 45,
  hasFamily: true,
  hobbies: "SPORT;COOKING",
};

// Устанавливаем Куки с спериод жизни 60 секунд через max-age:
// Object.entries(person)
//     .forEach(([key, value]) => document.cookie = `${key}=${value}; max-age=60;path="/"`)

// Устанавливаем Куки с спериод жизни 60 секунд через expires:

Object.entries(person).forEach(
  ([key, value]) =>
    (document.cookie = `${key}=${value}; expires=${new Date(
      Date.now() + 60e3
    ).toUTCString()};path="/"`)
);

// Удаление Куки
button.onclick = () => {
  console.log(document.cookie);
  // Object.entries(person)
  // .forEach(([key,value]) => document.cookie = `${key}=${value};max-age=-1`)
};

// Собираем объект из полученнызх Куки:
const fromCookie = {};

document.cookie.split("; ").forEach((item) => {
  const assoc = item.split("=");
  fromCookie[assoc[0]] = assoc[1];
});

console.log(fromCookie);
