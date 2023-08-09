function findAddress(obj) {
  if (typeof obj !== "object") {
    return "Please enter a object";
  } else {
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";

    return street + "," + house + "," + society;
  }
}

let obj = { street: 10 };

console.log(findAddress(obj));
