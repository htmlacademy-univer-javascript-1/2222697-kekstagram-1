
import {photos} from './data.js';
import {bigPictureRender} from './full-version.js';

const picturesContainer = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

const createUserThumbnail = (image) => {
  const userPicture = template.cloneNode(true);
  userPicture.querySelector('.picture__img').src = image.url;
  userPicture.querySelector('.picture__comments').textContent = image.comments.length;
  userPicture.querySelector('.picture__likes').textContent = image.likes;
  return userPicture;
};

const renderPicture = (image) => {
  const picture = templateFragment.cloneNode(true);
  picture.querySelector('.picture__img').src = image.url;
  picture.querySelector('.picture__likes').textContent = image.likes;
  picture.querySelector('.picture__comments').textContent = image.comments.length;
  bigPictureRender(picture, image);
  
  return picture;
};

const renderPictures = () => {
  photos.forEach((photo) => {
    picturesContainer.appendChild(renderPicture(photo));
  });
};

export {renderPictures};