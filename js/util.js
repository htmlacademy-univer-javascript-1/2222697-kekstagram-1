const getRandomNumber =  (a, b)  => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const isEscapeKey = (evt) => evt.key === 'Escape';
const checkLength = (str, maxLength) => str.length <= maxLength;
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getRandomUniqueElements = (arr) => {
  const newArray = arr.slice();
  const elements = [];
  const newArrayLength = arr.length;
  for (let i = 0; i < newArrayLength; i++) {
    const randomId = getRandomNumber(0, newArray.length - 1);
    elements.push(newArray[randomId]);
    newArray.splice(randomId, 1);
  }
  return elements;
}

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {getRandomNumber, getRandomArrayElement, checkLength, isEscapeKey, debounce, getRandomUniqueElements};