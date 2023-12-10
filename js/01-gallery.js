import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", galleryMarkupCreator(galleryItems));

function galleryMarkupCreator(images) {
  return images
    .map((image) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${image.original}">
                    <img
                        class="gallery__image"
                        src="${image.preview}"
                        data-source="large-image.jpg"
                        alt="${image.description}"
                    />
                </a>
            </li>`;
    })
    .join("");
}
