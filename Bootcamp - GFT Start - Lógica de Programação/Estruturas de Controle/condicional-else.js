let possuiOvos = false;
let itensComprados = "";

// Só vai executar se for "true"
if (possuiOvos) {
  itensComprados = "Leite";
} else {
  //Se a condição do if{} for false, vai executar o else{}
  console.log("Passou na sessão de congelados");
  itensComprados = "Lasanha Congelada";
}

// Vai executar em qualquer cirscunstância, pois,
// está fora da condição if{}
console.log("Item comprado: " + itensComprados);
