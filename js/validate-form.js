import {isEscapeKey, checkLength} from "./util.js";

const COMMENT_LENGTH = 140;
const HASHTAG_RULE = /^#[А-яа-яA-za-zёЁ]{1,19}$/;
const form = document.querySelector('.img-upload__form');

// eslint-disable-next-line no-undef
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const checkHashtags = (value) => {
  if (value === ''){
    return true;
  }
  const hashtags = value.split(' ').map((hashtag) => hashtag.toLowerCase());
  return value === '' || hashtags.every((hashtag) => HASHTAG_RULE.test(hashtag));
};

const checkUniqueHashtags = (value) => {
  if (value === '') {
    return true;
  }
  const hashtags = value.split(' ').map((el) => el.toLowerCase());
  const unique = [... new Set(hashtags)];
  return hashtags.length === unique.length;
};
const checkCommentLength = (value) => checkLength(value, COMMENT_LENGTH);
const checkHashtagsAmount = (value) => value === '' || value.split(' ').length <= 5;

const addPristineValidators = (hashtags, comment) => {
  pristine.addValidator(hashtags, checkHashtags, 'Хештег должен начинаться с решётки и быть не более 20 символов');
  pristine.addValidator(comment, checkCommentLength, 'Комментарий не более 140 символов');
  pristine.addValidator(hashtags, checkHashtagsAmount, 'Может быть указано не более 5 хештегов');
  pristine.addValidator(hashtags, checkUniqueHashtags, 'Могут быть указаны только уникальные хештеги')
};

const isPristineValidate = () => pristine.validate();

const onFocusPreventClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

export {onFocusPreventClose, isPristineValidate, addPristineValidators};