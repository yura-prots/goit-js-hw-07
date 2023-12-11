import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkupCreator(galleryItems));

function galleryMarkupCreator(images) {
  return images
    .map((image) => {
      return `<li class="gallery__item">
                    <a class="gallery__link" href="${image.original}">
                        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
                    </a>
              </li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
