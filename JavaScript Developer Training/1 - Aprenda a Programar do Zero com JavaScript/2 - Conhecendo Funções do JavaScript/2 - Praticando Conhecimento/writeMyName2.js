function writeMyName(name) {
  return `Your name is ${name}`;
}

function checkAge(age) {
  if (age >= 18) {
    return `your age is ${age}, you are of legal age!`;
  } else {
    return `your age is ${age}, you are a minor!`;
  }
}

(function () {
  console.log(`${writeMyName("John")}, and ${checkAge(24)}`);
})();
