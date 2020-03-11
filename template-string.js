let meuNome = 'JC';
let meuSobrenome = 'Bombardelli';
let minhaProfissao = 'Blockchain Developer';

//Sem Template String
console.log(
  'Olá, eu sou' +
    meuNome +
    ' ' +
    meuSobrenome +
    ' e atualmente minha profissão é: ' +
    minhaProfissao
);

//Com Template String
console.log(
  `Olá, eu sou ${meuNome} ${meuSobrenome} e atualmente minha profissão é: ${minhaProfissao}`
);

console.log(`O resultado de 1 + 1 é: ${1 + 1}`);
console.log(`O resultado de 1 + 1 é: ${{ chave: 'valor' }}`);
