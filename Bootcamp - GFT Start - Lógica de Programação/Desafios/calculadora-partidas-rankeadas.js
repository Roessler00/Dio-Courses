let resultado = saldoVitorias(10000, 1);
let nivel;

function saldoVitorias(numVitorias, numDerrotas) {
  let saldo = numVitorias - numDerrotas;
  return saldo;
}

if (resultado < 10) {
  nivel = "Ferro";
} else if (resultado <= 20) {
  nivel = "Bronze";
} else if (resultado <= 50) {
  nivel = "Prata";
} else if (resultado <= 80) {
  nivel = "Ouro";
} else if (resultado <= 90) {
  nivel = "Diamante";
} else if (resultado <= 100) {
  nivel = "Lendário";
} else {
  nivel = "Imortal";
}

console.log("O Herói com saldo de " + resultado + " está no nível " + nivel);
