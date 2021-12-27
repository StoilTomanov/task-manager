import page from './lib/page.mjs';
import { showDashboard } from './views/dashboardView.js';
import { showHome } from './views/homeView.js';
import { showSignIn } from './views/loginView.js';
import { showSignUp } from './views/registerView.js';
import { showSettings } from './views/settingsView.js';
import { showTeam } from './views/teamView.js';

export const main = document.getElementById('main');
export const body = document.querySelector('html');

page('/', showHome);
page('/signin', showSignIn);
page('/signup', showSignUp);
page('/dashboard', showDashboard);
page('/myteam', showTeam);
page('/settings', showSettings);

page.start();