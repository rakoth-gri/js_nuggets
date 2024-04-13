// ОСНОВЫ. Создание инстансов Промиса: ------------------

// console.log("start");

const arr = [];

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    arr.push({ a: 1 });
    resolve(arr);
  }, 500);
});

// console.log(console.log(arr))

// p
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// console.log("end")

// Цепочки промисов ------------------

// let p_c = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5)
//   }, 500)
// })

// p_c
//   .then((data) => data * 5)
//   .then((data2) => data2 * 5)
//   .then((data3) => console.log(data3))
//   .catch((err) => console.log(err))

// Хорошая практика ------------------

// function getPromise() {
//   return new Promise((res) => {
//     res("HELLO")
//   })
// }

// getPromise()
//   .then(d => console.log(d))

// СТАТИЧЕСКИЕ МЕТОДЫ КЛАССА Promise: ------

// Promise.resolve(5)
//     .then(num => console.log(num))

// Promise.reject(666)
//     .catch(num => console.log(num))

// КОМБИНАЦИЯ ПРОМИСОВ. PROMISE ALL:

// setTimeout(() => console.log(1), 1000)
// setTimeout(() => console.log(2), 500)
// setTimeout(() => console.log(3), 1200)

// const p1 = new Promise((res, rej) => setTimeout(() => rej(1), 1000));
// const p2 = new Promise((res, rej) => setTimeout(() => res(2), 500));
// const p3 = new Promise((res, rej) => setTimeout(() => res(3), 1200));

// Promise.all([p1, p2, p3])
//   .then(([a,b,c]) => console.log(a,b,c))
//   .catch(err => console.warn(err))

// Реализация PROMISE_ALL -----------------------------------------------

// function myPromiseAll(p_list) {

//   let arr = [];
//   let cnt = 0

//   return new Promise((res, rej) => {
//     p_list.forEach((p, i) => {
//       p
//         .then(data => {
//           arr[i] = data
//           cnt++;
//           if(cnt === p_list.length) res(arr)
//         })
//         .catch(err => {
//           rej(err)
//         })
//     })
//   })
// }

// myPromiseAll([p1, p2, p3])
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// КОМБИНАЦИЯ ПРОМИСОВ. PROMISE_ALLSETTLED: -----------------------------------------------

// const p_all_settled = Promise.allSettled([p3, p1, p2]);

// p_all_settled
//     .then(arr => console.log(arr))

/*

0: {status: 'rejected', reason: 'fuck'}
1: {status: 'fulfilled', value: 'start'}
2: {status: 'fulfilled', value: 'end'}

*/

// Запросы к серверу -----------------------------------------------

let info = {};

function fetchingData(url) {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((data) => data.json());
}

// fetchingData(USERS)
//   .then((data) => {
//     let id = data[2].id;
//     info.user = data[2];
//     return fetchingData(`${COMMENTS}/${id}`);
//   })

//   .then((comment) => {
//     info.comment = comment;
//     return fetchingData(`${PHOTOS}/${comment.id}`);
//   })

//   .then((photo) => {
//     info.photo = photo;
//     console.log(info);
//   })
//   .catch((e) => console.log(e.message))
//   .finally(() => {
//     console.log(info);
//   });

// Запросы к серверу c помощью Promise ALL

// Promise.all([fetchingData(USERS), fetchingData(COMMENTS)])
//   .then(([users, comments]) => console.log([users, comments]))
//   .catch((e) => console.log(e.message));

// ЕЩЕ ВАРИК С PROMISE ALL ---------------------------------------------

// Promise.all([USERS, COMMENTS].map(url => {
//     return fetch(url).then(raw => raw.json())
// }))
// .then(arr => console.log(arr))

// ASYNC AWAIT ---------------------------------------------

const USERS = "https://jsonplaceholder.typicode.com/users";
const COMMENTS = "https://jsonplaceholder.typicode.com/comments";
const PHOTOS = "https://jsonplaceholder.typicode.com/photos";

async function A_A_FETCHING(list) {
  const [users, comments, photos] = list

  try {
    let res = await fetch(users, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    const user = (await res.json())[3]    
    const id = user.id
    info.user = user
    // 2 запрос
    let comment = await fetchingData(`${COMMENTS}/${id}`)
    info.comment = comment
    // 3 запрос
    let photo = await fetchingData(`${PHOTOS}/${id}`)       
    info.photo = photo
   
  } catch (error) {
    console.error(error.message)
  }
  finally {
    console.log(info)
  } 
}

A_A_FETCHING([USERS, COMMENTS, PHOTOS]);
