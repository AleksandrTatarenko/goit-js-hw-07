import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createPictureCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);


function createPictureCard(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>`;
        })
        .join('');
}



function onGalleryContainerClick(e) {
    e.preventDefault();
    const openUrl = e.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${openUrl}">
    `)

    instance.show()
}

