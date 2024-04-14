const CONTENT = document.querySelector(".content");
const INPUT_FILE = document.querySelector("input[type='file']");
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
    let result = reader.result.split("\r\n");

    result.forEach((row, ind) => {
      let tr = document.createElement("tr");

      row.split(",").forEach((w, i) => {
        const td =
          ind === 0
            ? document.createElement("th")
            : document.createElement("td");
        td.textContent = w;
        tr.append(td);
      });

      TABLE.children[0].append(tr);
    });
  };
}

// IMAGE -----

// function handler(e) {
//   const content = this.files[0];

//   let reader = new FileReader();

//   reader.readAsDataURL(content);

//   reader.onload = () => {
//     const img = new Image();
//     img.src = reader.result;
//     CONTENT.append(img);
//   };

// reader.onerror = () => {
//   console.log(reader.error);
// }
// }
