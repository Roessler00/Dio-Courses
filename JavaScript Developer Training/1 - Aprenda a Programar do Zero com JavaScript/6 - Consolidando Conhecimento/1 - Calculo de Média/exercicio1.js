const { gets, print } = require("./funcoes-auxiliares-ex1");

const media = gets();

if (media < 5) {
  print("Reprovado");
} else if (media < 7) {
  print("Recuperação");
} else {
  print("Aprovado");
}
