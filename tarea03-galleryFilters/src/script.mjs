import { images } from './utils.mjs';

// DOM elements
const search = document.getElementById('search');
const gallery = document.getElementById('gallery');

// step 1: rendering all images
const renderingImages = (imagesArray) => {
  let HTMLtext = '';

  imagesArray.forEach((image) => {
    HTMLtext += `<img src="${image.url}" alt="${image.name}"/>`;
  });
  console.log(HTMLtext);
  gallery.innerHTML = HTMLtext;
};

renderingImages(images);

// step 2: Input filter by name
const filtering = (e) => {
  const value = e.target.value;
  const filteredArray = images.filter((image) =>
    image.name.toLowerCase().includes(value.toLowerCase())
  );
  renderingImages(filteredArray);
};

search.addEventListener('input', filtering);

// Eventos del "input" : input, change, focus y blur
// el change funciona igual que input con la diferencia de que no se va activar hasta que haya un blur
// input se activa de forma inmediata al presionar teclas.