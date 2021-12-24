import page from './lib/page.mjs';
import { showHome } from './views/homeView.js';

export const main = document.getElementById('main');

page.redirect('/')
page('/', showHome);

page.start();