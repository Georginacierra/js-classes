const usuario = 'Fenomenoide'
const saludo = `Bienvenido ${usuario}.`

console.log(saludo)
console.log('Bienvenido ' + usuario + '.')

// Length devuleve cantidad de caracteres de uns string
console.log(saludo.length)
console.log(saludo.replace('Fenomenoide', 'Georgi'))
console.log(saludo.replaceAll('o', '*'))
console.log(saludo.slice(0, 5))

const nombreArchivo = 'nombre-ejemplo-cool'
console.log(nombreArchivo.split('-'))

console.log(Math.random())
