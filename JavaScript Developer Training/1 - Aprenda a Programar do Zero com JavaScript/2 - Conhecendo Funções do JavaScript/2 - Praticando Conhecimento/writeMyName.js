function writeMyName(name) {
  console.log(`Your name is ${name}`);
}

writeMyName("John");
writeMyName("Richard");

function checkAge(age) {
  if (age >= 18) {
    console.log(`Your age is ${age}, and you are of legal age!`);
  } else {
    console.log(`Your age is ${age}, and you are a minor!`);
  }
}

checkAge(17);
