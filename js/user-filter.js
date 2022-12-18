import { debounce, getRandomUniqueElements } from './util.js';
import { renderPictures } from './render.js';

const MAX_COUNT_RANDOM_PHOTO = 10;
const Filter = {DEFAULT: 'filter-default', RANDOM: 'filter-random', DISCUSSED: 'filter-discussed',};
const filtersContainer = document.querySelector('.img-filters');
const filtersForm = filtersContainer.querySelector('.img-filters__form');
let photos = [];

const comparePicturesByComments = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const removePictures = () => {
    const pictures = document.querySelectorAll('.picture');
    pictures.forEach((picture) => {
        picture.remove();
    });
};

const getFilteredPhotos = (idFilter) => {
    switch(idFilter) {
        case Filter.RANDOM:
            return getRandomUniqueElements(photos).slice(0, MAX_COUNT_RANDOM_PHOTO);
        case Filter.DISCUSSED:
            return photos.slice().sort(comparePicturesByComments);
        default:
            return photos.slice();
    }
};

const removeActiveClass = () => {
    const active = document.querySelector('.img-filters__button--active');
    active.classList.remove('img-filters__button--active');
};

const onFiltersClick = (evt) => {
    const button = evt.target;
    removeActiveClass();
    removePictures();
    renderPictures(getFilteredPhotos(button.id));
    button.classList.add('img-filters__button--active');
};

const showPictures = (pictures) => {
    renderPictures(pictures);
    photos = pictures.slice();
    filtersContainer.classList.remove('img-filters--inactive');
    filtersForm.addEventListener('click', debounce(onFiltersClick));
};

export { showPictures };