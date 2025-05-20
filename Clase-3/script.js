const usuario = {
  nombre: 'Agustin',
  apellido: 'Garcia',
  edad: 25,
  correo: ['9f5dU@example.com', 'oYtT7@example.com'],
  ciudad: 'Cordoba',
  pais: 'España',
  estudiante: {
    universidad: 'universidad de cordoba',
    carrera: {
      nombre: 'Ingenieria en sistemas',
      modalidad: 'Presencial'
    },
    anioIngreso: 2021
  }
}

const usuario2 = {
  nombre: 'Agustin',
  apellido: 'Garcia',
  edad: 25,
  correo: ['9f5dU@example.com', 'oYtT7@example.com'],
  ciudad: 'Chalatenango',
  pais: 'El Salvador',
  estudiante: {
    universidad: 'universidad de cordoba',
    carrera: {
      nombre: 'Ingenieria en sistemas',
      modalidad: 'Presencial'
    },
    anioIngreso: 2021
  }
}

const {
  ciudad,
  pais,
  estudiante: {
    carrera: { nombre: nombreCarrera, modalidad }
  }
} = usuario

// const ciudad = usuario.ciudad
// const pais = usuario.pais
// const nombreCarrera = usuario.estudiante.carrera.nombre
// const modalidad = usuario.estudiante.carrera.modalidad

//Asignando alias en caso las propiedades tenagn el mismo nombre
const { ciudad: ciudad2, pais: pais2 } = usuario2

console.log(
  `Residencia Usuario1: ${ciudad}, ${pais}. 
Carrera: ${nombreCarrera} (Modalidad ${modalidad})`
)

console.log(`Residencia Usuario2: ${ciudad2}, ${pais2}`)
