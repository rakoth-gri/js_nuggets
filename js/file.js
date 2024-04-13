const CONTENT = document.querySelector(".content");
const INPUT_FILE = document.querySelector(".fileInput");
const TABLE = document.querySelector("TABLE");

INPUT_FILE.addEventListener("change", handler);

// TXT -------------------

// function handler(e) {
//     const content = this.files[0];

//     let reader = new FileReader()

//     reader.readAsText(content)

//     reader.onload = () => {
//         console.log(reader.result);
//         CONTENT.textContent(reader.result)
//     }

// }

// CSV ---------------

function handler(e) {
  const content = this.files[0];

  let reader = new FileReader();

  reader.readAsText(content);

  reader.onload = () => {
    //     reader.result.split("\r\n").forEach((row, i) => {
    //         let $TR = document.createElement('tr')

    //         row.split(",").forEach(td => {

    //             let $TD;

    //             i === 0 ? $TD = document.createElement("th"): $TD = document.createElement("td")

    //             $TD.textContent = td

    //             $TR.append($TD)
    //         })
    //         TABLE.append($TR)
    //     })

    let html = reader.result
      .split("\r\n")
      .map(
        (row, i) => `
        <tr>
            ${row
              .split(",")
              .map(
                (td) => `
                <${i > 0 ? "td" : "th"}> ${td} </${i > 0 ? "td" : "th"}>
            `
              )
              .join("")}
        </tr>    
    `
      )
      .join("");

    TABLE.insertAdjacentHTML("afterbegin", html);
  };
}

// IMAGE -----

function handler(e) {
  const content = this.files[0];

  let reader = new FileReader();

  reader.readAsDataURL(content);

  reader.onload = () => {    
    const img = new Image();
    img.src = reader.result;
    CONTENT.append(img);
  };

  // reader.onerror = () => {
  //   console.log(reader.error);
  // }
}
