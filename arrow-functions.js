function soma(x, y) {
  return x + y;
}

//Modo ES5
const multiplicacao = function(x, y) {
  return x * y;
};

let mult = multiplicacao(2, 5);
console.log(mult);

//Modo ES6
const dividir = (x, y) => {
  return x / y;
};

const mensagem = () => {
  console.log('Hello Gama!');
};

const objetos = () => ({ nome: 'JC', sobrenome: 'Bombardelli' });

const divisao = (a, b) => a / b;


Mais conteudos no curso de nodeJS sobre manipulação de listas