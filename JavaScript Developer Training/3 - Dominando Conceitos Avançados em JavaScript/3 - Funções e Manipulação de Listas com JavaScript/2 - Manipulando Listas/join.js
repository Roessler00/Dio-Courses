const lista = [{ nome: "João" }, { nome: "Ricardo" }, { nome: "Roessler" }];

console.log(lista.map((e) => e.nome).join("; "));
console.log(
  lista
    .map((e) => e.nome)
    .filter((e) => e.startsWith("R"))
    .join("; ")
);
