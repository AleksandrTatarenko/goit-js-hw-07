import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createPictureCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createPictureCard(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
        })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', { captureData:'alt', captureDelay:250,});
