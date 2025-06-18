const colores = [
  'green',
  'pink',
  'black',
  'white',
  'black',
  'organde',
  'purple',
];
// recorrido va dando vueltas segun la cantidad de elementos que tenga

console.log('for 1');
for (let i = 1; i <= 5; i++) {
  console.log(i);
} // dentro del parentesis vamos a definir una variable, una condicional y una accion en base a la condicional
// ++ es equivalente a incrementar en uno o podemos reducir -- o incremendo incremenciales i*2 i+1
// hay que tener cuidados con los ciclos y podemos generar ciclos infinitos.
// el ciclo funciona como un recorrido
// i de index, a nuestra i de nuestra accion podemos llamarla de otra forma

console.log('for 2');
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

console.log(colores.length);

// length me ayuda a saber la cantidad de elementos, pero en este caso cuenta desde uno y las posiciones en un array comienzan en cero, por eso ponemos que sea menor a
// en las funciones de arriba nosotros estamos haciendio la logica, es una ecriture expresiva

console.log('for 3');
for (let i = 0; i in colores; i++) {
  console.log(colores[i]);
}
// programacion declarativa, nos dan una idea de que estan haciendo las funciones aunque no sabemos que hace js detras

// los ciclos son para los arreglos,

console.log('for 4');
// for each es una funcion y recibe como parametro otra funtion arrow o funcion anonima
colores.forEach((color, index) => {
  console.log(`${index + 1}. ${color}`);
});

// si agrego segundo parametro es la posicion, el primer es el elemento de cada posicion.

console.log('for 5');
// for each es una funcion y recibe como parametro otra funtion arrow o funcion anonima
colores.forEach((color, index) => {
  if (index !== 1) {
  // !== no es igual,
  // if (!tieneMascotas) {} aqui estamos diciendo si la variable es false y sin el signo estamos diciendo que es true. Por defecto si solo ponemos la variable if (tieneMascotas) por defecto se dice que es verdadero.
    console.log(`${index + 1}. ${color}`);
  } else {
    console.log('color censurado');
  }
});

console.log('for 6');
const validacionColor = (colorAValidar) => {
  let validacion = false;

  colores.forEach((color) => {
    if (color === colorAValidar) {
      validacion = true;
    }
  });

  console.log(validacion);
};

validacionColor('green');
validacionColor('azul');

// colores.forEach((_ ,index)
// en el caso que necesite el index (la posicion del recorrido)
