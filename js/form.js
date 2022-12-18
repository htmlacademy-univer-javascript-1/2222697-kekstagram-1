'use strict';
import {isEscapeKey} from './util.js';
import {isPristineValidate, onFocusPreventClose, addPristineValidators} from './validate-form.js';
import {onScaleButtonClick} from "./user-scale.js";
import {updateSliderSettings, createSlider, setDefaultSettings} from "./user-effects.js";

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const uploadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const uploadEffects = document.querySelector('.img-upload__effects');

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeFormOverlay();
  }
};

const closeFormOverlay = () => {
  document.body.classList.remove('modal-open');
  overlay.classList.add('hidden');
  document.removeEventListener('keydown', onEscapeKeydown);
  cancelButton.removeEventListener('click', closeFormOverlay);
  commentInput.removeEventListener('keydown', onFocusPreventClose);
  hashtagsInput.removeEventListener('keydown', onFocusPreventClose);
  setDefaultSettings();
  form.reset();
};

const openFormOverlay = () => {
  document.body.classList.add('modal-open');
  overlay.classList.remove('hidden');
  document.addEventListener('keydown', onEscapeKeydown);
  cancelButton.addEventListener('click', closeFormOverlay);
  commentInput.addEventListener('keydown', onFocusPreventClose);
  hashtagsInput.addEventListener('keydown', onFocusPreventClose);
  uploadEffects.addEventListener('change', updateSliderSettings);
};

const renderForm = () => {
  onScaleButtonClick();
  createSlider();
  addPristineValidators(hashtagsInput, commentInput);
  uploadButton.addEventListener('change', openFormOverlay);
  form.addEventListener('submit', (evt) => {
    if (!isPristineValidate()) {
      evt.preventDefault();
    }
  });
};

export {renderForm};