function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
randomNumber(0, 5);
function stringCheck(text, length) {
    return text.length <= length;
}
stringCheck("pamparam", 8);

const getRandomArrayElement = (elements) => elements[randomNumber(0, elements.length - 1)];

export {randomNumber, getRandomArrayElement, stringCheck};