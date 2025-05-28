// const estudiante1 = {
//     nombre: 'Federico',
//     puntosTotales: 6.5,
//     trabajoExtra: {
//         entregado: false,
//         puntos: 0,
//     }
// }

// const estudiante2 = {
//     nombre: 'Amanda',
//     puntosTotales: 5,
//     trabajoExtra: {
//         entregado: true,
//         puntos: 2,
//     }
// }

// const calificacion = (estudiante)=>{
//     const {nombre, puntosTotales, trabajoExtra:{
//         entregado: trabajoExtra, puntos: puntosExtras
//     }} = estudiante

//     if (trabajoExtra === true) {
//         const notaFinal = puntosTotales + puntosExtras

//         if (notaFinal >= 7){
//             console.log(`El estudiante: ${nombre}, aprobo la materia con ${notaFinal}`)
//         }
//         else {
//             console.log(`El estudiante: ${nombre}, reprobo la materia con ${notaFinal} es un PERDEDOR`)
//         }
//     }
//     else {
//         if (puntosTotales >= 7){
//             console.log(`El estudiante: ${nombre}, aprobo la materia con ${puntosTotales}`)
//         }
//         else {
//             console.log(`El estudiante: ${nombre}, reprobo la materia con ${puntosTotales} es un PERDEDOR`)
//         }
//     }
// }

// calificacion (estudiante1)
// calificacion (estudiante2)

// // dentro de las funciones y condicionales podemos anidar mas funciones y condicionales indefinidamente
// // las variables y funciones declaradas dentro de una funcion o condicional existiran dentro de la misma

