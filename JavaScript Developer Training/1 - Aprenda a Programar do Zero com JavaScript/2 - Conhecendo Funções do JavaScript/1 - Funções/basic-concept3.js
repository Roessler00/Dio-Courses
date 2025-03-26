function increaseInterest(value, interestPercent) {
  const increaseValue = (interestPercent / 100) * value;
  return value + increaseValue;
}

console.log(increaseInterest(100, 10));
console.log(increaseInterest(100, 15));
console.log(increaseInterest(100, 20));
