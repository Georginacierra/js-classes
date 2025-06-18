// condicionales
// ddeclaraciones de logica en la que obtendremos la respuesta de verdadero o falto 

// 5<4= falso 

// OPERADORES LOGICOS < > <= >= === ==
console.log(4 > 5)

console.log('3' === 3)
// evalua contenido y tipo de datos, como buena practica usamos este 
console.log('3' == 3)
// == comparar contenido y no el tipo de datos
console.log(4 <= 5)
console.log(5 <= 5)
console.log(6 <= 5)

const numero1 = 4
const numero2 = 5
console.log(numero1 <= numero2)
// podemos comparar variables y crear const 

//  OPERADOR && (I)  Y OPERADOR || (O)
// EN && Todas los puntos a evaluar deben de cumplirse para que la sentencia sea verdadera
// con O basta con que uno de los puntos se cumpla para que la sentencia sea verdadera. o es completamente falso o es verdadero aunque no se cumplan todas las condiciones. el || es mas flexibles, y lo usaremos para mas condiconales.

// EJEMPLO CONDICIONAL

const edad = 17
const permiso = false
const familiarDelPresi = false

// ESTRUCTURAS condicional IF y ELSE
if(edad >= 18 || permiso === true){
    console.log('No va a recibir multa')
} else if(familiarDelPresi === true) {
    console.log('hacer vista gorda')
}
else {
    console.log('al Cecot')
}

