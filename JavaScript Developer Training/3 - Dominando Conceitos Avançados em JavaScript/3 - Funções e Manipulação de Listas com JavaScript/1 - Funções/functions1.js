// First Class Functions
// Higher Order Functions

function falarMeuNome() {
  console.log("Meu nome é João");
}

function falarMeuNomeCompleto(falarMeuNome) {
  falarMeuNome();
  console.log("Roessler");
}

falarMeuNomeCompleto(falarMeuNome);

// Os nomes da functions são meramente ilustrativos
// As functions acabam se tornando objetos
