let ehLigado = false;

if (ehLigado) {
  // Só vai executar se for "true"
  console.log("Executou comando");
}

if (1 === 1) {
  console.log("Executou comando");
}

// -------------------------------------------------------------

let possuiOvos = true;
let itensComprados = "";

// Só vai executar se for "true"
if (possuiOvos) {
  itensComprados = "Leite";
}

// Vai executar em qualquer cirscunstância, pois,
// está fora da condição if{}
console.log("Item comprado: " + itensComprados);
