// --Fizz buzz--

function Sequence() {
    let arr = [];
  
    for (let i = 1; i <= 100; i++) {
      switch (true) {
        case !(i % 15):
          arr[i - 1] = "fizz buzz";
          break;
        case !(i % 3):
          arr[i - 1] = "fizz";
          break;
        case !(i % 5):
          arr[i - 1] = "buzz";
          break;
        default:
          arr[i - 1] = i;
      }
    }  
    return arr;
  }
// console.log(Sequence());