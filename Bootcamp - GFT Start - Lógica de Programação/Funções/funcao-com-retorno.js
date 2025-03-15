let resultado = soma(5, 10);
//Cria uma variável com o resultado da função, podendo usar o valor fora dela

function soma(numA, numB) {
  let somatorio = numA + numB;
  return somatorio; //Retorna o valor para o parâmetro
}

//Utilizando o resultado da função fora dela...
console.log("O resultado dessa função é: " + resultado);
