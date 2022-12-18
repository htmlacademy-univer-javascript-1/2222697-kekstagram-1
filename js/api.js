const URL_GET = 'https://26.javascript.pages.academy/kekstagram/data';
const URL_POST = 'https://26.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onError) => {
    fetch(URL_GET)
        .then((response) => {
            if (response.ok){
                return response.json();
            }
            throw new Error();
        })
        .then((data) => onSuccess(data))
        .catch(() => onError())
};

const sendData = (onSuccess, onError, body) => {
    fetch(URL_POST, {
        method: 'POST',
        body: body
    })
        .then((response) => {
            if (response.ok){
                onSuccess();
            }
            else {
                onError();
            }
        })
        .catch(() => onError());
};

export {getData, sendData};