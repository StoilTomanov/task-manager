import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';

export function showSignUp() {
    const template = html `
    <section id="dashboardView">
        <div id="navigation">
            <nav id="navbar">
                <button id="toggleOpen">&#9776;</button>
                <button id="toggleClose">&#10006;</button>
                <li><img src="./img/dashboard.png" alt="dashboard" class="img" id="dashboard"><a href="/dashboard">Dashboard</a></li>
                <li><img src="./img/team.png" alt="team" class="img" id="team"><a href="/myteam">My Team</a></li>
                <li><img src="./img/settings.png" alt="settings" class="img" id="settings"><a href="/settings">Settings</a></li>
            </nav>
        </div>
    </section>
    `
    render(template, main);
}