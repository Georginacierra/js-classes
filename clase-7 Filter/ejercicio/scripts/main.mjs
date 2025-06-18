import { getEstudiantesMayores, getEstudiantesMenores } from './utils.mjs';
// es buena practica tener el import arriba y agrupar todos arriba. todas mis funciones estaran arriba y no tenedremos problemas con el hoisting

const estudiantes = [
  {
    nombre: 'Karla',
    edad: 16,
  },
  {
    nombre: 'Pedro',
    edad: 19,
  },
  {
    nombre: 'Armando',
    edad: 20,
  },
  {
    nombre: 'Sofia',
    edad: 17,
  },
  {
    nombre: 'Lucia',
    edad: 15,
  },
];

const mayoriaEdad = 18;

console.log(getEstudiantesMenores(estudiantes, mayoriaEdad));
console.log(getEstudiantesMayores(estudiantes, mayoriaEdad));

// en main tenemos nuestros objetos y donde ejecutamos el codigo y las funciones la stenemos establecidas en funciones. 
