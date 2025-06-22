// const photos = [
//   './photos/photo01.png',
//   './photos/photo02.png',
//   './photos/photo03.png',
//   './photos/photo04.png',
//   './photos/photo05.png',
// ];

const photos = [
  {
    name: 'Photo 1',
    url: './photos/photo01.png',
  },
  {
    name: 'Photo 2',
    url: './photos/photo02.png',
  },
  {
    name: 'Photo 3',
    url: './photos/photo03.png',
  },
  {
    name: 'Photo 4',
    url: './photos/photo04.png',
  },
  {
    name: 'Photo 5',
    url: './photos/photo05.png',
  },
];

let gallery = '';

photos.forEach((image) => {
  gallery += `<img src="${image.url}" class="image"  alt="${image.name}"></img>`;
  // gallery = gallery + ''
  // de forma abreviada de puede poner += (valor original + el nuevo valor)
});

const containerPhotos = document.querySelector('#container');
containerPhotos.innerHTML = gallery;

// containerPhotos.textContent = gallery;
// no va a transformar lo elementos a nodos, en algunos casos son elementos de html

console.log(gallery);
