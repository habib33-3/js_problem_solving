function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "Please enter a array";
  } else {
    if (arr[0] < 0 || arr[1] < 0) {
      return "invalid input";
    } else {
      if (arr[0] === arr[1]) {
        return "equal";
      } else if (arr[1] > arr[0]) {
        let temp = arr[1];
        arr[1] = arr[0];
        arr[0] = temp;
        return arr;
      } else {
        return arr;
      }
    }
  }
}

let arr = [7, -2];

console.log(sortMaker(arr));
