const { gets, print } = require("./funcoes-auxiliares-ex3");

const valorSalarioBruto = gets();
const valorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarAliquota(salario) {
  if (salario <= 1100) {
    return 5;
  } else if (salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}

const aliquotaImposto = pegarAliquota(valorSalarioBruto);
const valorImposto = calcularPorcentagem(valorSalarioBruto, aliquotaImposto);

const valorSalarioLiquido = valorSalarioBruto - valorImposto;
const valorATransferir = valorSalarioLiquido + valorBeneficios;

print(`Valor do Salário Líquido: R$${valorATransferir}`);
