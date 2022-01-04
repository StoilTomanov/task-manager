import page from './lib/page.mjs';
import { showDashboard } from './views/dashboardView.js';
import { showHome } from './views/homeView.js';
import { showSignIn } from './views/loginView.js';
import { showSignUp } from './views/registerView.js';
import { showSettings } from './views/settingsView.js';
import { showTeam } from './views/teamView.js';
import uuid from './lib/v4.js'

console.log(uuid());

//TODO: create a view after login/registration to inform the unique team identifier and ask about the organization name

export const main = document.getElementById('main');
export const body = document.querySelector('html');

page('/home', '/');
page('/', showHome);
page('/signin', showSignIn);
page('/signup', showSignUp);
page('/dashboard', showDashboard);
page('/myteam', showTeam);
page('/settings', showSettings);

page.start();