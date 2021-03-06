import { body, main } from '../app.js';
import { onTaskChoice } from '../controllers/dashboard.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export function showDashboard() {

    body.style.background = 'rgb(255, 255, 255)';

    const template = html `
        <section id="dashboardView">
            ${sessionStorage.sessionToken == undefined ? html `<h2>You need to <a id="sign-in" href="/signin">Login</a> or <a href="/signup"> Register</a> to access this page.</h2>`
             : html`<div id="navigation">   
                    </div>
                    <table id="tabs" @click=${onTaskChoice}>
                        <th id="firstTab" class="tab">${sessionStorage.isTeam == 'true' ? html`All tasks` : html`My tasks`}</th>
                        <th id="secondTab" class="tab">Create task</th>
                        ${sessionStorage.isTeam == 'true' ? html`<th id="thirdTab" class="tab">Assign task</th>` : null}
                        <th id="forthTab" class="tab">Completed tasks</th>
                    </table>
                    <hr>
                    <div id="container">
                </div>`}
        </section>
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);

}