// Even = par, Odd = ímpar

const number = 0;
const isEvenNumber = number % 2 === 0;

if (isEvenNumber) {
  console.log(`${number} is an Even Number ? - ${isEvenNumber}`);
} else {
  console.log(`${number} is an Odd Number ? - ${!isEvenNumber}`);
}
