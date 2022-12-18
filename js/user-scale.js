const SCALE_RANGE = { MIN: 25, MAX: 100 };
const SCALE_STEP = 25;

const image = document.querySelector('.img-upload__preview').querySelector('img');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

const checkScaleValue = (val) => {
    return val > SCALE_RANGE.MAX ? SCALE_RANGE.MAX : val < SCALE_RANGE.MIN ? SCALE_RANGE.MIN : val;
};

const onClickImageResize = (val) => {
    const sliderNumber = checkScaleValue(Number(scaleValue.value.replace('%', '')) + SCALE_STEP * val);
    image.style.transform = `scale(${sliderNumber / 100})`;
    scaleValue.value = `${sliderNumber}%`;
};

const onScaleButtonClick = () => {
    buttonBigger.addEventListener('click', () => onClickImageResize(1));
    buttonSmaller.addEventListener('click', () => onClickImageResize(-1));
};

export {onScaleButtonClick};