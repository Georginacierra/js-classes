const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');
const exitButton = document.querySelector('#exitButton');

menuButton.addEventListener('click', () => {
  menu.classList.remove('hide');
});

exitButton.addEventListener('click', () => {
  menu.classList.add('hide');
});
