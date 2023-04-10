import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

(function () {
  const markup = galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img 
              class="gallery__images"
              src="${preview}"
              alt="${description}"
              width="100%"
            />
          </a>
        </li>`).join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup)
})()

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
});












