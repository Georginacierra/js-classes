

/*
TIPOS DE DATOS

- String (texto)
- Number (numeros)
- Boolean (verdadero o falso)
- Null (nulo | sin valor | no existencia)
- Undefined (sin definir)

- Object (objetos)
- Array (arreglos)
*/

var variable1 = 'Hola ' // '' "" ``
var variable2 = 1
var variable3 = true
var variable4 = null
var variable5

//Objetos
var persona = {
  nombre: 'Ricardo',
  apellido: 'Garcia',
  edad: 23,
  mascotas: [
    {
      nombre: 'Mandarino',
      edad: 2
    },
    {
      nombre: 'Luna',
      edad: 1
    }
  ]
}
console.log(persona.nombre)
// we use consol to call the consol 

//Arreglos
var colores = ['rojo', 'azul', 'verde', 'amarillo']
console.log(colores[2])

//Mezclar
var usuarios = [
  {
    nombre: 'Ricardo',
    apellido: 'Garcia',
    edad: 23
  },
  {
    nombre: 'Mario',
    apellido: 'Garcia',
    edad: 22
  },
  {
    nombre: 'Rene',
    apellido: 'Garcia',
    edad: 21
  }
]

/* 
var - Original (deprecated) NO USAR!!!!
let - Actual
const - Constante
*/

let nombre = 'Mandarino'
console.log(nombre)

nombre = 'Luna'
console.log(nombre)

const nombre2 = 12345
console.log(id)

const trabajos = [
  {
    logo: 'https:://imagen.png',
    empresa: 'Google',
    tipoEmpleo: 'Full Time',
    tiempo: {
      inicio: '2020-01-01',
      fin: '2021-01-01'
    },
    roles: [
      {
        puesto: 'Desarrollador Frontend',
        tiempo: {
          inicio: '2020-01-01',
          fin: '2021-01-01'
        }
      }
    ]
  }
]
