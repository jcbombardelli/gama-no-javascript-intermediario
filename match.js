const cpf = 'Meu CPF é 371.428.569-22';

console.log(cpf.match('CPF'));

console.log(cpf.match(new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}')));
