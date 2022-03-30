import * as pictures from "./modules/functions.js";
import { getVendor } from './vendor.js';
import { getHeaderMenu } from './modules/header-menu.js';
import { getHeaderSearch } from './modules/header-search.js';
import { getIndexSlider } from './modules/index-slider.js';
import { getScrollTop } from './modules/scroll-top.js';
import { getInputEdit} from './modules/input-edit.js';
import { getSurvey} from './modules/survey.js';
import { getStars} from './modules/stars.js';
import { getMoreText} from './modules/more-text.js';

pictures.isWebp();

document.addEventListener('DOMContentLoaded', () => {
	getVendor();
	getHeaderMenu();
	getHeaderSearch();
	getIndexSlider();
	getScrollTop();
	getInputEdit();
	getSurvey();
	getStars();
	getMoreText();
});