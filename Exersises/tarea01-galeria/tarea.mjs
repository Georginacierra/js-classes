// fruits.forEach(fruit => {
//   console.log("I like " + fruit);
// });

// import { hello } from './greetings.js';
// console.log(hello()); // Output: Hello, World!

// import photo01 from './photos/photo01.jpg';
// import photo02 from './photos/photo02.jpg';
// import photo03 from './photos/photo03.jpg';
// import photo04 from './photos/photo04.jpg';
// import photo05 from './photos/photo05.jpg';

// const photos = [photo01, photo02, photo03, photo04, photo05];

// // const containerPhotos = document.querySelector('#container');
// // containerPhotos.textContent = { photos };

// allPhotos(photos);
// console.log(allPhotos);

const photos = [
  './photos/photo01.png',
  './photos/photo02.png',
  './photos/photo03.png',
  './photos/photo04.png',
  './photos/photo05.png',
];

console.log(photos);

const allPhotos = (gallery) => {
  const container = document.getElementById('container');

  gallery.forEach((photo) => {
    const img = document.createElement('img');
    img.src = photo;
    img.alt = 'foto';
    img.style.width = '200px';
    container.append(img);
  });
};

allPhotos(photos);

const container = document.getElementById('container');

console.log(container);


