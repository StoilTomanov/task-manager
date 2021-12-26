import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export function showDashboard() {

    body.style.background = 'rgb(255, 255, 255)';

    const template = html `
    <section id="dashboardView">
        <div id="navigation">
            
        </div>
    </section>
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);
}