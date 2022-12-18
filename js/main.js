import {renderForm} from "./form.js";
import {renderPictures} from "./render.js";
import {getData} from "./api.js";
import {showMessage} from "./message.js";

getData(renderPictures, () => showMessage('url_get_error'));
renderForm();