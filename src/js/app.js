import * as pictures from "./modules/functions.js";
import { getHeaderMenu } from './modules/header-menu.js';
import { getHeaderSearch } from "./modules/header-search.js";
import { getScrollTop } from './modules/scroll-top.js';
import { getInputEdit} from './modules/input-edit.js';
import { getSurvey} from './modules/survey.js';
import { getStars} from './modules/stars.js';
import { getMoreText} from './modules/more-text.js';

pictures.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

document.addEventListener('DOMContentLoaded', () => {
	getHeaderMenu();
	getHeaderSearch();
	getScrollTop();
	getInputEdit();
	getSurvey();
	getStars();
	getMoreText();
});