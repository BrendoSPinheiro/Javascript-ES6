// Funções que criamos com a keyword function possuem seu próprio this
function minhaFunction() {
  this.name = 'Brendo';

  const minhaArrowFunction = () => {
    this.lastName = 'Souza';
  };

  minhaArrowFunction();
}

console.log('function:', new minhaFunction());

// Funções que criamos usando arrow functions herdam o this do escopo onde foram criadas
// const minhaArrowFunction = () => {
//   this.lastName = 'Souza';
// };

// console.log('ArrowFunction:', minhaArrowFunction());
console.log('NodeThis', this);
