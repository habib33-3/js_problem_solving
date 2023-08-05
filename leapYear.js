function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(1000));
console.log(isLeapYear(2004));
console.log(isLeapYear(2010));
