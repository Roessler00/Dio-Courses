const num: number = 14;

if (num > 15) {
  console.log("Num maior que 15");
} else if (num === 15) {
  console.log("Num igual a 15");
} else {
  console.log("Num menor que 15");
}

// Usando Objeto Literal como ALTERNATIVA ao if/else.
const userType = {
  admin: "Seja bem vindo admin",
  student: "Você é um estudante",
  viewer: "Você pode visualizar",
};

function validateUser(user: string) {
  console.log(userType[user as keyof typeof userType]);
}

const user1 = "admin";

validateUser(user1);
