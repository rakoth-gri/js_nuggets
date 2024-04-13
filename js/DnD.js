const CARDS = document.querySelector(".cards");
const FORM = document.querySelector("#form");
const FORM_ELEMS = [...FORM.elements];


let CARD_WRAPPERS = null;

CARDS.insertAdjacentHTML(
  "beforeend",
  `
    ${new Array(30)
      .fill("")
      .map((_, i) => `<article class="card__wrapper" id="${i}"></article>`)
      .join("")}
`
);

CARD_WRAPPERS = [...document.querySelectorAll(".card__wrapper")];

CARD_WRAPPERS.forEach((c) => {
  // непрерывной эвент, при нахождение перетаскиваемого элемента в пределах элемента с эвентом dragover
  c.addEventListener("dragover", dragover);
  // событие попадания в пределы элемента, в который можно дропнуть карточку (элемент должен включать событие dragover) - срабатывает единоразово!
  c.addEventListener("dragenter", dragenter);
  c.addEventListener("dragleave", dragleave);
  c.addEventListener("drop", drop);
});

function dragover(e) {
  // обеспечиваем событие 'drop'
  e.preventDefault();
}

function dragenter(e) {
  e.preventDefault();
  this.classList.toggle("hovered");
}

function dragleave(e) {
  this.classList.toggle("hovered");
}

function drop(e) {
  if (!FORM_ELEMS.every((e) => e.value) || this.children.length) {
    this.innerHTML = `<h3 class="warning"> Заполните данные! </h3>`;    
    CARD_WRAPPERS.find((wrap) => wrap.id === e.target.id).classList.remove(
      "hovered"
    );
    setTimeout(() => (this.innerHTML = ""), 500);
    return;
  }
  this.innerHTML = `
    <div class="card">
      <div class="card__header">
        <span class="card__name"> ${FORM.name.value}</span>
        <span class="card__cvc"> ${FORM.cvc.value}</span>        
      </div>
      <p class="card__number"> ${FORM.number.value}</p>      
    </div>    
  `;
  CARD_WRAPPERS.find((wrap) => wrap.id === e.target.id).classList.remove(
    "hovered"
  );
  FORM.reset();
}

function dragStart(e) {}

FORM.addEventListener("dragstart", dragStart);
