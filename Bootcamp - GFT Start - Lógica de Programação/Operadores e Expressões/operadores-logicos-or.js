// || = OR Lógico - nosso boneco so pode sair se tiver sem chuva OU com guarda-chuva
let tempo = "sol";
let item = "guarda chuva";
let podeSair = tempo !== "chuva" || item === "guarda chuva";

console.log("O nosso personagem pode sair ? " + podeSair);

tempo = "chuva";
podeSair = tempo !== "chuva" || item === "guarda chuva";

console.log("O nosso personagem pode sair ? " + podeSair);

tempo = "chuva";
item = "casaco";
podeSair = tempo !== "chuva" || item === "guarda chuva";

console.log("O nosso personagem pode sair ? " + podeSair);
