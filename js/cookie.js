// Cookie - это небольшие строки данных, хранящиеся неспосредтсвенно в браузере

// Получение cookie ------

console.log(document.cookie);

// Запись cookie

/*
Существует несколько ограничений:
  После encodeURIComponent пара name=value не должна занимать более 4Кб. Таким образом, мы не можем хранить в куки большие данные.
  Общее количество куки на один домен ограничивается примерно 20+. Точное ограничение зависит от конкретного браузера.
*/

// document.cookie = `${encodeURIComponent("name")}=${encodeURIComponent("GRI")}`;
// document.cookie = `age=23`;
// document.cookie = `profession=it`;

const person = {
  name: "GRI",
  age: 30,
  prof: 'teacher',
}

// for (const key of Object.keys(person)) {
//   document.cookie = key + "=" + person[key];
// }

// СВОЙСТВА задаются через "; " !!!

// PATH, как правило идет корень

// for (const key of Object.keys(person)) {
//   document.cookie = `${key}=${person[key]}; path=/;`;
// }


console.log(document.cookie);

// EXPIRES / MAX-AGE, задаем когда истекают куки

// EXPIRES принимает датовый формат Tue, 19 Jan 2038 03:14:07 GMT:

// let expires = new Date(Date.now() + 60e3)
 
// for (const key of Object.keys(person)) {
//   document.cookie = key + "=" + person[key] + "; " +  `path=/` + "; " + 'expires=' + expires;
// }

// MAX-AGE принимает время в секундах (работает):

const maxAge = 60
 
// for (const key of Object.keys(person)) {
//   document.cookie = key + "=" + person[key] + "; " +  `path=/` + "; " + 'max-age=' + maxAge;
// }

// Удаление COOKIE - установка нулевого или отрицательного времени: 

// document.oncontextmenu = function(e) {
//   e.preventDefault()
//   for (const key of Object.keys(person)) {
//   document.cookie = key + "=" + person[key] + "; " +  `path=/` + "; " + 'max-age=' + -1;
// }
// }