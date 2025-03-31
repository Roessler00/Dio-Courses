interface Pessoa {
  nome: string;
  idade: number;
  profissao?: string; // ? - Quer dizer que é Opcional
}

const pessoa: Pessoa = {
  nome: "João",
  idade: 24,
};

const outraPessoa: Pessoa = {
  nome: "Paulo",
  idade: 25,
  profissao: "Desenvolvedor",
};

const arrayPessoa: Array<Pessoa> = [pessoa, outraPessoa];

const arrayNum: number[] = [1, 2, 3];

const arrayString: string[] = ["1", "2", "3"];
