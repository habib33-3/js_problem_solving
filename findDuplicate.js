const number = [1, 3, 4, 6, 23, , 6, 2, 4, 6, 2, 4, 6, 8, 5, 5];

const duplicate = number.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});

console.log(duplicate);
