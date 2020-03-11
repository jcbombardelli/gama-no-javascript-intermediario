var lista = [1, 2, 5];
var listaIncluir = [3, 4];

for (var i = 0; i < listaIncluir.length; i++) {
  for (var j = 0; j < lista.length; j++) {
    if (lista[j] >= listaIncluir[i]) {
      lista.splice(j, 0, listaIncluir[i]);
      j++;
    }
  }
}

console.log(lista);

const listaResult = [1, 2, ...listaIncluir, 5];

console.log(listaResult);

//Outro exemplo

let arr = ['a', 'b', 'c'];
let arr2 = arr;

console.log('Arr = ', arr);
console.log('Arr2 = ', arr2);

// arr2.push('d');
// console.log('Arr = ', arr);
// console.log('Arr2 = ', arr2);

// arr2 = [...arr];
// arr2.push('d');

// console.log('Arr = ', arr);
// console.log('Arr2 = ', arr2);
