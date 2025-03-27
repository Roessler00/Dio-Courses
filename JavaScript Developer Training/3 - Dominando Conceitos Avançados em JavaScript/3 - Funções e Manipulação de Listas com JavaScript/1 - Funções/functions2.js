// Function Declaration - é nominada --- Pode 'sofrer' o Hoisting
function nomeDaFuncao() {
  console.log("nomeDaFuncao");
}

// Function Expression - não é nomidada, é atribuída a uma variável
// --- Não pode 'sofrer' o Hoisting
const nomeDeOutraFuncao = function () {
  console.log("nomeDeOutraFuncao");
};

nomeDaFuncao();
nomeDeOutraFuncao();
