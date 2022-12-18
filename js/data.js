'use strict'
import {getRandomNumber, getRandomArrayElement} from './util.js';

const PHOTOS_COUNT = 25;
const LIKES = {min: 15, max: 200}
const NAMES = ["Александр", "Денис", "Степан", "Павел", "Петр"];

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = ["Шишкины иголки", "Потребители контента", "Радужные мысли", "Что бы написать", "Ем суп"];

const createComment = (id) => ({
    id: getRandomNumber(1, 500),
    avatar: `img/avatar-${id}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
});

const createPublication = (id) => ({
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(LIKES.min, LIKES.max),
    comments: Array.from({length: getRandomNumber(1, 11)}).map((value, index) => createComment(index + 1))
});

const photos = Array.from({length: PHOTOS_COUNT}).map((value, index) => createPublication(index + 1));

export {photos};