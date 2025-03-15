torrar("pão integral", 10.9, "Anita");
torrar("pão de forma", 9.98);

function torrar(pao, valor, nome = "Cliente") {
  // Caso não seja atribuido um parametro, pode criar um parametro default
  // default para não ficar undefined.
  console.log("Torrada feita com " + pao);
  console.log("Ela é um pedido de " + nome);
  console.log("O Valor total é: " + valor);
}
