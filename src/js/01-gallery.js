import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const pictureMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend" , pictureMarkup)

function createGalleryMarkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
      
      return `
     
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
      
      `
   }).join('')
}


let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
lightbox.on('show.simplelightbox', function () {
   
});

