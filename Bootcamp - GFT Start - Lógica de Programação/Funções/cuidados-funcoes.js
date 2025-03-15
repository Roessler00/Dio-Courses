// Evitar iniciar com números: 5funcao, 123...
// Nomes com espaço: enviar email...
// Usar como fosse verbo: ao invés de "bancoDeDados" use "salvarNoBancoDeDados"

// Executar somente uma coisa por função, para facilitar manutenções

// Chama a função
main();

// Função(Pai) para chamar todas as outras funções junto
function main() {
  getData();
  checkValues();
  sendToDataBase();
}

// Função que pega todos os dados
function getData() {
  console.log("Pegando dados do usuário");
  //lógica implementada aqui
  // Quantas linhas quiser... mas com o mesmo intuíto
}

// Função para checar os valores dos dados
function checkValues() {
  console.log("Validando dados");
  //lógica implementada aqui
  // Quantas linhas quiser... mas com o mesmo intuíto
}

// Função para enviar para o Banco de Dados
function sendToDataBase() {
  console.log("Cadastrando dados");
  // lógica implementada aqui
  // Quantas linhas quiser... mas com o mesmo intuíto
}
