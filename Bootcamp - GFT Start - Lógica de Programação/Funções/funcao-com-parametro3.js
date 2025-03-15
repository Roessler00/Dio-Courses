torrar("pão de forma", undefined, "Felipe");
// Isso é gambiarra - NÃO FAÇA
// O correto é deixar o valor que é opcional no final da function, e deixar ele vazio na chamada...

function torrar(pao, valor = 99.9, nome) {
  console.log("Torrada feita com " + pao);
  console.log("Ela é um pedido de " + nome);
  console.log("O Valor total é " + valor);
}
