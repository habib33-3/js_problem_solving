function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray) || typeof totalDue !== "number") {
    return "Please enter valid input";
  } else {
    if (changeArray.length === 0) {
      return "please enter elements into the array";
    } else {
      let sum = 0;
      for (const item of changeArray) {
        sum += item;
      }
      if (sum >= totalDue) {
        return true;
      } else {
        return false;
      }
    }
  }
}

let arr = [];
let n = 10;
console.log(canPay(arr, n));
