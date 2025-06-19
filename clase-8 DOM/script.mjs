// CAPTURAR ELEMENTOS DE MI HTML

const containerID = document.querySelector('#container');
// const containerID = document.getElementById('container');
console.log(containerID);

// forma recomendada para capturar por id

// const containerClass = document.getElementsByClassName('container');
const containerClass = document.querySelectorAll('.container');
console.log(containerClass);
// nos captura todos los elementos que posean esta clase, muestra un array

const containerAttribute = document.querySelectorAll('[data-example]');
console.log(containerAttribute);
// ponemos el nombre del atributo
// tenemos querySelector y nos va a capturar el primer elemento que cumpla la condicional y queryselectorAll nos va a capturar todos los elementos que cumplan con la condicional)
// el querySelector nos devuelve un array puro cuando manipulamos multiples elementos

// methods tenemos como entarda una acction (get, set) normalmente usamos parentesis con get o los metodos.
console.log(containerID.getAttributeNames());
console.log(containerID.getAttribute('data-example'));
// properties
console.log(containerID.id);
console.log(containerID.className);

// con class Name podemos obtener el valor de la clase y la otra funcion es para sobreescribir la propiedad)
// containerID.className = 'newClass';
// tenemos un control mas selectivo, togggle (para esconder o mostrar una clase)
containerID.classList.add('newClass');
containerID.classList.remove('example');

console.log(containerID.textContent);
// esta tiene dos funciones, mostrar el valor o sobreescribir
containerID.textContent = 'hello world';

// para agregar elementos de html, la ventaja es que cumple doble funcion
containerID.innerHTML = '<button>Go</button>';
console.log(containerID.innerHTML);


 