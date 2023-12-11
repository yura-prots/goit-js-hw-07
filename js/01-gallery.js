import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkupCreator(galleryItems));
galleryEl.addEventListener("click", clickHandler);

function galleryMarkupCreator(images) {
  return images
    .map((image) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${image.original}">
                    <img
                        class="gallery__image"
                        src="${image.preview}"
                        data-source="${image.original}"
                        alt="${image.description}"
                    />
                </a>
            </li>`;
    })
    .join("");
}

function clickHandler(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  galleryEl.addEventListener("keydown", (e) => {
    if (e.key === "Escape") instance.close();
  });
}
