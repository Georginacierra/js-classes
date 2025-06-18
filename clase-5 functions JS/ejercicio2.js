const estudiante1 = {
  nombre: 'Federico',
  sexo: 'masculino',
  puntosTotales: 6.5,
  trabajoExtra: {
    entregado: false,
    puntos: 0,
  },
};

const estudiante2 = {
  nombre: 'Amanda',
  sexo: 'femenino',
  puntosTotales: 5,
  trabajoExtra: {
    entregado: true,
    puntos: 2,
  },
};

const calificacion = (estudiante) => {
  const {
    nombre,
    sexo,
    puntosTotales,
    trabajoExtra: { entregado: trabajoExtra, puntos: puntosExtras },
  } = estudiante;

  let articulo;
  // definimos una variable indefinida, luego sobrescribimos la variable
  if (sexo === 'femenino') {
    articulo = 'La';
  } else {
    articulo = 'El';
  }

  const status = (nota) => {
    if (nota >= 7) {
      console.log(
        `${articulo} estudiante ${nombre}, aprobo la materia con ${nota}`
      );
    } else {
      console.log(
        `${articulo} estudiante ${nombre}, reprobo la materia con ${nota}`
      );
    }
  };

  if (trabajoExtra === true) {
    const notaFinal = puntosTotales + puntosExtras;
    status(notaFinal);
  } else {
    status(puntosTotales);
  }
};
calificacion(estudiante1);
calificacion(estudiante2);
