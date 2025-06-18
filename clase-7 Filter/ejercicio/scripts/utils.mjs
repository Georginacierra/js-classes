export const getEstudiantesMenores = (estudiantes, mayoriaEdad) =>
  estudiantes.filter(({ edad }) => edad < mayoriaEdad);

export const getEstudiantesMayores = (estudiantes, mayoriaEdad) =>
  estudiantes.filter(({ edad }) => edad >= mayoriaEdad);

// tenemos nuestras funciones modalizadas
// esta funcion es valida ya que no dependemos de valores externos, es completamente modular 
// js le da prioridad a los nombres de mis parametros que a los valores que tengo

// otras funciones, MAP, nos desvuelve una copia de nuestro arreglo original pero completamente desvinculado. Es decir es un nuevo arreglo. Sirve mucho para react native. el forEach a veces genera errores porque esta vinculado al array. 

// INDEX OF me va a devolver la posicion de ciertos elementos de mi objeto