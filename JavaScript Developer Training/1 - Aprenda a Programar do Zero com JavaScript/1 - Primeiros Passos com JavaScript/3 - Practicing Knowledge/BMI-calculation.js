const weight = 90;
const height = 1.65;

const bmi = (weight / (height * height)).toFixed(2);

if (bmi < 18.5) {
  console.log(`Your BMI is: ${bmi} - And you are Underweight.`);
} else if (bmi < 25) {
  console.log(`Your BMI is: ${bmi} - And you are at a Normal weight.`);
} else if (bmi < 30) {
  console.log(`Your BMI is: ${bmi} - And you are Overweight.`);
} else if (bmi < 40) {
  console.log(`Your BMI is: ${bmi} - And you are in Obesity.`);
} else {
  console.log(`Your BMI is: ${bmi} - And you are in Severe Obesity.`);
}
