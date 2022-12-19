const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const image = document.querySelector('.img-upload__preview').querySelector('img');
const fileChooser = document.querySelector('.img-upload__input');

const uploadImage = () => {
    fileChooser.addEventListener('change', () => {
        const file = fileChooser.files[0];
        const fileName = file.name.toLowerCase();
        const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
        if (matches) {
            image.src = URL.createObjectURL(file);
        }
    });
};

export {uploadImage};