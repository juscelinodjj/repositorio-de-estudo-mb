'use strict';

// 1 - Inserir dados
localStorage.setItem('name', 'John Doe');

// 2 -Restart sem perder dados

// 3 - Resgatar item
let name = localStorage.getItem('name');
console.log('name:', name);

// 4 - Resgatar item que não existe
const lastName = localStorage.getItem('lastName');
console.log('lastName:', lastName);

// 5 - Remover item
localStorage.removeItem('name');
name = localStorage.getItem('name');
console.log('name:', name);

// 6 - Limpar todos os itens
localStorage.setItem('a', 1);
localStorage.setItem('b', 2);
// console.log(typeof localStorage.getItem('a'));
localStorage.clear();

// 7 - sessionStorage
// sessionStorage.setItem('number', 123);

// 8 - Reiniciar e perder dados
// Comente o setItem acima e reinicie o browser

// 9 - Salvar objetos
const person = {
  name: 'John Doe',
  age: 31,
  job: 'Programmer'
};
// localStorage.setItem('person', person);
localStorage.setItem('person', JSON.stringify(person));
const getPerson = localStorage.getItem('person');
console.log(typeof getPerson);
console.log('getPerson', getPerson);
const personObject = JSON.parse(getPerson);
console.log(typeof personObject);
console.log(personObject);