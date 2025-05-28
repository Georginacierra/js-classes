const estudiante1 = {
    nombre: 'Federico',
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


const calificacion = (estudiante)=>{
    const {nombre, puntosTotales, trabajoExtra:{
        entregado: trabajoExtra, puntos: puntosExtras
    }} = estudiante
// const nombre = estudiante.nombre
// const puntosTotales = estudiante.puntosTotales
// const trabajoExtra = estudiante.trabajoExtra.entregado
// const puntosExtras = estudiante.trabajoExtra.puntos

    const status = (nota)=>{
        if (nota >= 7){
            console.log(`El estudiante: ${nombre}, aprobo la materia con ${nota}`)
        }
        else {
            console.log(`El estudiante: ${nombre}, reprobo la materia con ${nota} es un PERDEDOR`)
        }
    }

    if (trabajoExtra === true) {
        const notaFinal = puntosTotales + puntosExtras
        status(notaFinal)
    }
    else {
        status(puntosTotales)
    }
}

calificacion (estudiante1)
calificacion (estudiante2)

// incorporar si es mujer o hombre mensaje


