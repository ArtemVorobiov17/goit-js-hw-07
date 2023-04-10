import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
//const galleryItems = document.querySelector('.gallery-item');

/*function createGalleryMarkup(images) {
    return galleryItems.map(({ oridginal, preview, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${oridginal}">
            <img 
              class="gallery__images"
              src="${preview}"
              data-sourse="${oridginal}"
              alt="${description}"
              width="100%"
            />
          </a>
        </li>`

    ).join("");
}*/
/*const markup = galleryItems.map(({ oridginal, preview, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${oridginal}">
            <img 
              class="gallery__images"
              src="${preview}"
              data-sourse="${oridginal}"
              alt="${description}"
              width="100%"
            />
          </a>
        </li>`);*/

(function () {
  const markup = galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img 
              class="gallery__images"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              width="100%"
            />
          </a>
        </li>`).join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup)
})()


/*const galleryMarkup = createGalleryMarkup(galleryItems);*/
/*galleryContainer.insertAdjacentHTML('beforeend', markup.join(""));*/



galleryContainer.addEventListener('click', onClick);
//console.log(galleryContainer)

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src= "${evt.target.dataset.source}" width="600" height="800">`,
  )
  
  instance.show();
}