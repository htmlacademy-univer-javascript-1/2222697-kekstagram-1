import {renderForm} from "./form.js";
import {showPictures} from "./user-filter.js";
import {getData} from "./api.js";
import {showMessage} from "./message.js";

getData(showPictures, () => showMessage('url_get_error'));
renderForm();