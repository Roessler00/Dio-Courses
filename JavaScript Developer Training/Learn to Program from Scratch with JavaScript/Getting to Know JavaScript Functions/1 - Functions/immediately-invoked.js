function bmiCalculate(weight, height) {
  return weight / Math.pow(height, 2);
}

function classifyBmi(bmi) {
  if (bmi < 18.5) {
    return `Your BMI is: ${bmi} - And you are Underweight.`;
  } else if (bmi < 25) {
    return `Your BMI is: ${bmi} - And you are at a Normal weight.`;
  } else if (bmi < 30) {
    return `Your BMI is: ${bmi} - And you are Overweight.`;
  } else if (bmi < 40) {
    return `Your BMI is: ${bmi} - And you are in Obesity.`;
  } else {
    return `Your BMI is: ${bmi} - And you are in Severe Obesity.`;
  }
}

// (PT-BR) Função Imediatamente Invocada, não necessita chamar o main() fora da função.
// Pode deixar sem nomear a função... (function (){})()

// (EN) Immediately Invoked Function, no need to call main() outside the function.
// You can leave the function unnamed... (function (){})()

// Main
(function () {
  const weight = 85;
  const height = 1.8;

  const bmi = bmiCalculate(weight, height).toFixed(2);
  console.log(classifyBmi(bmi));
})();
