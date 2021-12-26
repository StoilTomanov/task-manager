import { html } from '../lib/lit-html.js';

export function navigationBar() {
    return html `
    <nav id="navbar">
        <button id="toggleOpen">&#9776;</button>
        <button id="toggleClose">&#10006;</button>
        <li class="navLi"><img src="./img/dashboard.png" alt="dashboard" class="img" id="dashboard"><a href="/dashboard">Dashboard</a></li>
        <li class="navLi"><img src="./img/team.png" alt="team" class="img" id="team"><a href="/myteam">My Team</a></li>
        <li class="navLi"><img src="./img/settings.png" alt="settings" class="img" id="settings"><a href="/settings">Settings</a></li>
    </nav>
    `
}