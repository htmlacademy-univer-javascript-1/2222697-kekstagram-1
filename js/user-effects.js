const EFFECTS = {
    none: {name: 'none', filter: '', unit: '', options: { range: { min: 0, max: 100 }, step: 1, start: 100 }},
    chrome: {name: 'chrome', filter: 'grayscale', unit: '', options: { range: { min: 0, max: 1 }, step: 0.1, start: 1 }},
    sepia: {name: 'sepia', filter: 'sepia', unit: '', options: { range: { min: 0, max: 1 }, step: 0.1, start: 1 }},
    marvin: {name: 'marvin', filter: 'invert', unit: '%', options: { range: { min: 0, max: 100 }, step: 1, start: 100 }},
    phobos: {name: 'phobos', filter: 'blur', unit: 'px', options: { range: { min: 0, max: 3 }, step: 0.1, start: 3 }},
    heat: {name: 'heat', filter: 'brightness', unit: '', options: { range: { min: 1, max: 3 }, step: 0.1, start: 3 },}
};

const image = document.querySelector('.img-upload__preview').querySelector('img');
const slider = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const sliderWrapper = document.querySelector('.img-upload__effect-level');

const createSlider = () => {
    sliderWrapper.classList.add('hidden');
    noUiSlider.create(slider, {
        range: {min: 0, max: 100}, start: 100, step: 0.1,
        format: {
            to: (value) => (Number.isInteger(value)) ? value.toFixed(0) : value.toFixed(1),
            from: (value) => parseFloat(value),
        },
    });
};

const updateSliderSettings = (evt) => {
    const effect = evt.target.value;
    if (effect === 'none') {
        sliderWrapper.classList.add('hidden');
        image.style.filter = 'none';
        return;
    }
    sliderWrapper.classList.remove('hidden');
    image.removeAttribute('class');
    image.classList.add(`effects__preview--${effect}`);
    slider.noUiSlider.updateOptions(EFFECTS[effect].options);
    slider.noUiSlider.on('update', () => {
        sliderValue.value = slider.noUiSlider.get();
        image.style.filter = `${EFFECTS[effect].filter}(${sliderValue.value}${EFFECTS[effect].unit})`;
    });
};

const setDefaultSettings = () => {
  sliderWrapper.classList.add('hidden');
  slider.noUiSlider.updateOptions(EFFECTS['none'].options);
  image.style.filter = 'none';
};

export {createSlider, updateSliderSettings, setDefaultSettings};