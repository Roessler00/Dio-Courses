const pessoa = {
  nome: "João",
  idade: 24,
};

// Invocação Direta -------------------------------------
function teste() {
  console.log("João");
}

teste();

// Apply ------------------------------------------------

function gritar(prefixo) {
  console.log(prefixo, this.nome);
}

gritar.apply(pessoa, ["Olaaaaaa"]);

// Call --------------------------------------------------

gritar.call(pessoa, "Olaaaaaaaaaaaaa");

// Operador New ------------------------------------------
