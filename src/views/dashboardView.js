import { body, main } from '../app.js';
import { onTaskChoice } from '../controllers/dashboard.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export function showDashboard() {

    body.style.background = 'rgb(255, 255, 255)';

    const template = html `
        <section id="dashboardView">
            <div id="navigation">
                    
            </div>
            <table id="tabs" @click=${onTaskChoice}>
                <th id="firstTab" class="tab">My tasks</th>
                <th id="secondTab" class="tab">Create task</th>
                <th id="thirdTab" class="tab">Assign task</th>
                <th id="forthTab" class="tab">Completed tasks</th>
            </table>
            <hr>
            <div id="container">
            </div>
        </section>
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);

}