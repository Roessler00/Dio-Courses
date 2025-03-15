torrar("pão de forma", "João");
torrar("pão integral", "Ana");
//let nome = "Felipe" - não ira conseguir puxar dentro da função
var nome = "Felipe"; // var é global, então consegue puxar para dentro da função - NÃO RECOMENDADO

function torrar(pao) {
  nome = "Felipe"; // Precisa definir a variável dentro da função - NÃO RECOMENDADO
  console.log("Torrada feita com " + pao);
  console.log(nome);
}

// Toda variável criada dentro de uma função, só existe dentro da função
// Se eu tentar puxar console.log(pao)
// Irá dar erro que pao não está definido

function torrar(pao, nome) {
  console.log("Torrada feita com " + pao);
  console.log("Ela é um pedido de " + nome);
}
