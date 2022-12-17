import {isEscapeKey} from "./util.js";
'use strict';
const COMMENTS_AMOUNT = 5;
const bigPicture = document.querySelector('.big-picture');
const commentTemplate = document.querySelector('.social__comment');
const closeButton = document.querySelector('.big-picture__cancel');
const img = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likes = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsList = bigPicture.querySelector('.social__comments');
const description = bigPicture.querySelector('.social__caption');
let commentsAmount = 0;

const closeBigPicture  = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', closeEscape);
  commentsAmount = 0;
};

const closeEscape = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const addComments = (comments) => {
  comments.slice(commentsAmount, commentsAmount + COMMENTS_AMOUNT).forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    const image = newComment.querySelector('.social__picture');
    image.src = comment.avatar;
    image.alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;
    commentsList.append(newComment);
    commentsAmount++;
  });
  socialCommentCount.innerHTML = `${commentsAmount} из <span class="comments-count">${comments.length}</span> комментариев`;
  if (commentsAmount === comments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const setPhotoData = (photo) => {
  img.src = photo.url;
  description.textContent = photo.description;
  likes.textContent = photo.likes;
  commentsList.innerHTML = '';
  addComments(photo.comments);
  commentsLoader.addEventListener('click',() => addComments(photo.comments));
};

const bigPictureRender = (photo) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  setPhotoData(photo);
  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', closeEscape);
};

export {bigPictureRender};