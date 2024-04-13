console.log("Begin");

// TypeError ----

// try {
//   console.log("str".map((i) => i));
// } catch (error) {
//   console.log(error.name);
// }

// ReferenceError ----

try {
  let b = 25;
  console.log(b + num1);
} catch (error) {
  console.log(error);
} finally {
  console.log("Выполнится в любом случае...");
}

// SynthaxError не ЛОВИТСЯ ----

// try {
//     let num1 = 5,
//     num2 = 20;

//     function Ex(a,b) {
//         console.log(a + b);
//     }

//     Ex(num1, num2)

//   } catch (error) {
//     console.log(error);
//   }

// Try Catch Синхронен! ----

// try {
//   setTimeout(() => {
//     console.log(smth + 5);
//   }, 100);
// } catch (error) {
//   console.log(error.message);
// }

// Создание исключения ------

// try {
//   let someData = null;

//   if (!someData) {
//     throw new TypeError("FALSY TYPE....");
//   }

//   console.log("Concat " + someData);
// } catch (error) {
//   console.error(error.name);
// }

console.log("End");

// Запрос к серверу JSONP ------

const URL = "https://jsonplaceholder.typicode.com/comments";

const GET = document.querySelector(".GET");
const DELETE = document.querySelector(".DELETE");
const POST = document.querySelector(".POST");
const PUT = document.querySelector(".PUT");

const USP_O = {
  _page: 1,
  _limit: 100,
};

const totalCount = 500;

// GET

async function fetchData(baseUrl, method, params, id = null, body = null) {
  let route;

  switch (method) {
    case "GET":
      route = "?" + new URLSearchParams(params);
      break;
    case "DELETE":
      route = `/${id}`;
      break;
    case "POST":
      route = ``;
      break;
    default:
      route = `/${id}`;
      break;
  }

  try {
    const res = await fetch(`${baseUrl}${route}`, {
      method,
      headers: {
        "Content-type": "Application/json;utf-8",
      },
      body: body && JSON.stringify(body),
    });

    if (!res.ok) {
      console.log(res);
      throw new Error("Ошибка в запросе данных...");
    }

    return await res.json();
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log("End Fetching");
  }
}

fetchData(URL, "GET", USP_O);

GET.addEventListener("click", async function () {
  USP_O._page = USP_O._page + 1;

  if (USP_O._page * USP_O._limit > totalCount) {
    USP_O._page = 1;
  }

  let res = await fetchData(URL, this.className, USP_O);

  console.log(res);
});

DELETE.addEventListener("click", async function () {
  let res = await fetchData(URL, this.className, null, this.id);
  console.log(res);
});

POST.addEventListener("click", async function () {
  let res = await fetchData(URL, this.className, null, this.id, {
    body: "ut aut maxime officia sed aliquam et magni autem\nveniam repudiandae nostrum odio enim eum optio aut\nomnis illo quasi quibusdam inventore explicabo\nreprehenderit dolor saepe possimus molestiae",
    email: "Lura@rod.tv",
    id: Math.floor(Math.random() * 100),
    name: "perspiciatis magnam ut eum autem similique explicabo expedita",
    postId: Math.floor(Math.random() * 100),
  });
});

PUT.addEventListener("click", async function () {
  let res = await fetchData(URL, this.className, null, this.id, {
    body: "changing Body",
  });
});
