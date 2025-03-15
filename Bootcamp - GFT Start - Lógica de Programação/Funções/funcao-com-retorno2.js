let userName = getFirstName("Luiz Pedro Pereira da Silva", " ");
console.log("Seja bem vindo " + userName);

userName = getFirstName("Jonas-Rodrigo-Oliveira", "-");
console.log("Seja bem vindo " + userName);

function getFirstName(name, splitChar) {
  let firstName = name.split(splitChar)[0];
  return firstName;
}
