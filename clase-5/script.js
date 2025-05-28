// FUNCIONES

function prueba1 (){}
// variable function + nombre + (){}, es la forma clasica de declarar funciones. 
// hoisting indica que todas las variables que se declaren se van a colocar sobre sl scope (la seccion de un proyecto), gracias al hoisting podemos llamar una funcion al inicio de mi codigo. 
// las funciones se pueden llegar a sobreescribir al igual que var 
// para evitar eso ahora se estan haciendo funciones declarativas con las const

const prueba2 = ()=>{
    // es una funcion declarativa que tiene dentro una funcion anonima porque no tiene nombre, function arrow, 
    // la constante sera una forma para mandar a llamar una funcion, la ventaja es que estan protegida y que no se puede sobrescribir y la desventaja es que perdemos el hoisting, no podemos volverla a llamar antes de donde este escrita. 
}

//* <button onClick={()=>{}}>hello</button> //
// en react nos deja interactuar con html y js, en el boton podemos inyectar codigo de js. Una forma de usar las funciones anonimas podemos meterlo dentro de las llaves.
// usamos esa funcion en ese momento, a diferencia de una funcion declarativa

// las llaves son normalmente para indicar las acciones a realizar en las funciones
// en los parentesis agregamos los parametros, son elementos o valores que podemos pasar de forma dinamica en las funciones.
// los parametros son opcionales, no todas las funciones tienen que tenerlos . estas de pueden usar como variables a las cuales puedo acceder

const suma = (a, b)=>{
    const resultado = a + b 
    console.log(resultado)
}
// hemos realizado planteado el algoritmo, los algoritmos a relizar, los passo a seguir de forma ordenada
suma(2, 5)
suma(1.5, 3.5)
// asignamos los valores de los parametros, los asignamos por orden a va valer 2 y b va a valer 5

const saludo = ()=>{
    console.log('hola mundo')
}

saludo()