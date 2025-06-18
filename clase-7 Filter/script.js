const usuarios = [
  { id: 123, nombre: 'Pablo' },
  {
    id: 123,
    nombre: 'Armando',
  },
  {
    id: 486,
    nombre: 'Georgina',
  },
];

// usuarios.filter(()=>{}) estructura de los statements de mis loops

const filtradoPorId = usuarios.filter(({ id }, index) => id === 123);
console.log(filtradoPorId);
// no devolvera un arreglo con los elementos que cumplen con la condicional
// en una funcion el parametro ya esta siendo definida tambien por lo que podemos decontruir


// las funciones pueden retornar valores o tipos de datos

// const suma = (a, b) => {
//   return a + b;
// };

// forma abreviada de una funcion

const suma = (a, b) => a + b;

// cuando agregamos un parentisis (a veces es necesario o no), cuando no van llaves despues de la flecha estamos poniendo un return implicito y que nos devuelva un valor. En este caso nos devuelve un tipo de dato numerico

const resultado = suma(5, 8);
console.log(resultado);


