// ! = NOT Lógico - nega uma afirmação
let tempo = "chuva";
let resultado = tempo === "chuva";

console.log(!resultado);

tempo = "chuva";
let horario = 8;
resultado = !tempo !== "chuva" && horario > 6;
console.log(resultado);
