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
    
    const lightBoxEscConfig = {
        onShow: () => {
            document.addEventListener('keydown', onEscKeyPress)
        },
        onClose: () => {
            document.removeEventListener('keydown', onEscKeyPress)
        }
    }

    const instance = basicLightbox.create(`
        <img src="${openUrl}">
    `,
        lightBoxEscConfig);

    instance.show()
    
    function onEscKeyPress(e) { 
    if (e.code === 'Escape' && instance.visible()) {
        instance.close();
    }
}
}

