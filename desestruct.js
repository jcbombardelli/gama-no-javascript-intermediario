const pessoa = {
  nome: 'JC',
  sobrenome: 'Bombardelli',
  idade: 28,
  profissao: 'Reporter'
};

console.log(pessoa);

// let nome = pessoa.nome;
// let sobreome = pessoa.sobrneome;
// let idade = pessoa.idade;
// let profissao = pessoa.sobreome;

let { nome, sobrenome, idade, profissao } = pessoa;

console.log(nome, sobrenome, idade, profissao);
