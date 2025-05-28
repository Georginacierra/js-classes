// tarea: en la calificacion final de los parciales, queremos ver si los estudiantes aprueban o no la materia. Para ello, debemos evaluar que el total sea mayor a 7. Si es menor a 7 los estudiantes reprueban, si es mayor o igual a 7 los estudiantes aprueban.Pero se debe tomar en cuenta que al total, opcionalmente se le puede sumar los puntos extras de un trabajo anterior. Con esta informacion evalua los siguientes dos estudiantes

const estudiante1 = {
    nombre: 'Fererico',
    puntosTotales: 6.5,
    trabajoExtra: {
        entregado: false,
        puntos: 0,
    }
}

const estudiante2 = {
    nombre: 'Amanda',
    puntosTotales: 5,
    trabajoExtra: {
        entregado: true,
        puntos: 2,
    }
}



// indicaciones generales
// usar deconstruccion de objetos
// generar un mensaje dinamico en la consola con el resultado en el que se mostrara el nombre del estudiante, su nota final y si aprobo o no
// aplicar correctamente condicionales
// solo con el estudiante 1 y el estudiante 2 lo trabajaremos despues
// en la condicional, primero veo si a entregado el trabajo y si lo ha entregado se suman los puntos y su no lo entrego no se suma nada. 

// deconstruccion estudiante 1

const{
    nombre,
    puntosTotales,
    trabajoExtra: {
        entregado, puntos
    }
} = estudiante1

// deconstruccion estudiante 2

const{
    nombre: nombre2,
    puntosTotales: puntosTotales2,
    trabajoExtra: {
        entregado: entregado2, puntos: puntos2
    }
} = estudiante2

// variable nota final?

// const notaFinal = {
//     nota: puntosTotales + puntos
// }



// PRUEBA 2 ESTUDIANTE 1
if(entregado === true){
    console.log(`la nota de ${nombre} es igual a ${puntosTotales + puntos}`)
}
else{
    console.log(`la nota de ${nombre} es igual a ${puntosTotales}`)
}

if(puntosTotales + puntos >=7){
    console.log(`${nombre} esta aprobado`)
}
else{
    console.log(`${nombre} esta reprobado`)
}

// PRUEBA 3 ESTUDIANTE 1

if(entregado === true && puntosTotales + puntos >=7){
    console.log(`la nota de ${nombre} es igual a ${puntosTotales + puntos} estado: aprobado`)
}
else if (entregado === false && puntosTotales >=7){
    console.log(`la nota de ${nombre} es igual a ${puntosTotales} estado: aprobado`)
}
else{
    console.log(`la nota de ${nombre} es igual a ${puntosTotales} de ${nombre} esta reprobado`)
}

// PRUEBA 3 ESTUDIANTE 2

if(entregado === true && (puntosTotales2 + puntos2) >=7){
    console.log(`la nota de ${nombre2} es igual a ${puntosTotales2 + puntos2} estado: aprobado`)
}
else if (entregado === false && puntosTotales >=7){
    console.log(`la nota de ${nombre2} es igual a ${puntosTotales2} estado: aprobado`)
}
else{
    console.log(`${nombre2} esta reprobado`) 
}

// // estudiante 1 prueba 1
// if(entregado === true) {
//     console.log(puntosTotales + puntos)
// }
// else {
//     console.log(puntosTotales)
// }

// if(puntosTotales >= 7 || entregado === true){
//     console.log(`el estudiante: ${nombre} aprobado`)
// }
// else{
//     console.log(`el estudiante: ${nombre} no ha aprobado con una nota final de ${notaFinal}`)
// }

// // estudiante 2 prueba 2

// if(entregado2 === true) {
//     console.log(puntosTotales2 + puntos2)
// }
// else {
//     console.log(puntosTotales2)
// }

// if(puntosTotales2 >= 7 && entregado2 === true){
//     console.log(`el estudiante: ${nombre2} aprobado`)
// }
// else{
//     console.log(`el estudiante: ${nombre2} no ha aprobado`)
// }



