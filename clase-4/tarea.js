// si tengo una condicion binaria trabajo unicamente con if y else y si agregao otra condicion, trabajo con elseif

// tarea: en la calificacion final de los parciales, queremos ver si los estudiantes aprueban o no la materia. Para ello, debemos evaluar que el total sea mayor a 7. Si es menor a 7 los estudiantes reprueban, si es mayor o igual a 7 los estudiantes aprueban.Pero se debe tomar en cuenta que al total, opcionalmente se le puede sumar los puntos extras de un trabajo anterior. Con esta informacion evalua los siguientes dos estudiantes

const estudiante1 = {
    nombre: 'Fererico',
    puntosTotales: 6.5,
    trabajoExtra: {
        entregado: false,
        puntos: 0
    }
}

const estudiante2 = {
    nombre: 'Amanda',
    puntosTotales: 5,
    trabajoExtra: {
        entregado: true,
        puntos: 2
    }
}

// indicaciones generales
// usar deconstruccion de objetos
// generar un mensaje dinamico en la consola con el resultado en el que se mostrara el nombre del estudiante, su nota final y si aprobo o no
// aplicar correctamente condicionales
// solo con el estudiante 1 y el estudiante 2 lo trabajaremos despues
// en la condicional, primero veo si a entregado el trabajo y si lo ha entregado se suman los puntos y su no lo entrego no se suma nada. 

