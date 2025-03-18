const number = 11;
const isDivisibleByFive = number % 5 === 0;

if (number === 0) {
  console.log(`The number is Invalid`);
} else if (isDivisibleByFive) {
  console.log(`The number ${number} is divisible by five.`);
} else {
  console.log(`The number ${number} isn't divisible by five.`);
}
