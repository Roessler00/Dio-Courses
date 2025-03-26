// Variável do tipo var, consegue vazar do escopo(bloco) pelo Hoisting.
// Só não vaza em Functions e Globais.
// Pode-se alterar o valor durante o código
if (true) {
  console.log("var");
  var var1 = 10;
}

console.log(var1);
var1 = 11;
console.log(var1);
console.log("-----");

// -----------------------------------------------------------------

// Varíavel do tipo let, não consegue vazar do escopo(bloco) pelo Hoisting.
// Pode-se alterar o valor durante o código
if (true) {
  console.log("let");
  let var2 = 20;
  console.log(var2);
  var2 = 21;
  console.log(var2);
}
console.log("-----");

// -----------------------------------------------------------------

// Constante do tipo const, não consegue vazar do escopo(bloco) pelo Hoisting.
// Não se pode alterar o valor durante o código
if (true) {
  console.log("const");
  const var3 = 30;
  console.log(var3);
}
console.log("-----");
