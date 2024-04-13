const palList = [
  "А вот и харя рахитова",
  "Акт у нимф - минутка",
  "Кот учён, но не чуток",
  "Аргентина манит негра",
  "Потенция - яиц нет, оп",
];

// function isPal(phrase) {
//   phrase = phrase
//     .toLowerCase()
//     .replace(/[^A-ZА-Я]/gi, "")
//     .split("");
//   return phrase.join("") === phrase.reverse().join("");
// }
// console.log(isPal(palList[0]));

function isPal2(phrase) {
  phrase = phrase
    .toLowerCase()
    .replace(/[^A-ZА-Я]/gi, "")
    .split("");

  for (let i = 0; i < Math.floor(phrase.length / 2); i++) {
    if (phrase[i] !== phrase[phrase.length - 1 - i]) {
      console.log(i, phrase.length - 1 - i);
      return false;
    }
  }
  return true;
}
console.log(isPal2(palList[0]));


