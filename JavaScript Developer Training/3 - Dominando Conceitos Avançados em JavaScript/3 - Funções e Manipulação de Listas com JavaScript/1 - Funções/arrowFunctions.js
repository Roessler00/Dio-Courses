// Declaração Explícita e Arrow Function

// Function Declaration - nominal
function funcao1() {
  console.log(this);
}

// Arrow Function
const funcao2 = () => {
  console.log(this);
};

const joao = {
  nome: "João",
  funcao1,
  funcao2,
};

joao.funcao1();
joao.funcao2();
