import page from './lib/page.mjs';
import { showHome } from './views/homeView.js';
import { showSignIn } from './views/signInView.js';
import { showSignUp } from './views/signupView.js';

export const main = document.getElementById('main');
export const body = document.querySelector('html');

page('/', showHome);
page('/signin', showSignIn);
page('/signup', showSignUp);

page.start();