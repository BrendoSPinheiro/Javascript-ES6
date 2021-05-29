// funções criadas com a keyword function tem seu próprio arguments
function functionArgumentos(primeiroParam, ...argumentos) {
  console.log({ primeiroParam });
  console.log({ argumentos });
  const arrowFunctionArgumentos = () => {
    console.log(Object.values(arguments));
  };

  arrowFunctionArgumentos();
}

functionArgumentos(1, 5, 4, 'Brendo', 'Teste', 5.5);

// funções criadas como arrow functions herdam o arguments de onde ela foi criada
// const arrowFunctionArgumentos = (...argumentos) => {
//   console.log(argumentos);
// };

// arrowFunctionArgumentos(1, 2, 3, 4, 5, 6, 'Brendo');
