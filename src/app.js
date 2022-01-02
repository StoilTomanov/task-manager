import page from './lib/page.mjs';
import { showDashboard } from './views/dashboardView.js';
import { showHome } from './views/homeView.js';
import { showSignIn } from './views/loginView.js';
import { showSignUp } from './views/registerView.js';
import { showSettings } from './views/settingsView.js';
import { showTeam } from './views/teamView.js';
import * as crud from './api/crud.js';

export const main = document.getElementById('main');
export const body = document.querySelector('html');

window.login = crud.login;
window.register = crud.register;
window.logout = crud.logout;
window.deleteUser = crud.deleteUser;

page('/', showHome);
page('/signin', showSignIn);
page('/signup', showSignUp);

if (sessionStorage.sessionToken != undefined) {
    page('/dashboard', showDashboard);
    page('/myteam', showTeam);
    page('/settings', showSettings);
} else {
    page.redirect('/');
}

page.start();