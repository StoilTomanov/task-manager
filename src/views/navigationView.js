import { onLogout } from '../controllers/logout.js';
import { toggleNav } from '../controllers/navbar.js';
import { html } from '../lib/lit-html.js';

export function navigationBar() {
    return html `
    <nav id="navbar">
        <button id="toggleOpen" @click=${toggleNav}>&#9776;</button>
        <button id="toggleClose" @click=${toggleNav}>&#10005;</button>
        <li class="navLi"><img src="./img/dashboard.png" alt="dashboard" class="img" id="dashboard"><a href="/dashboard">Dashboard</a></li>
        <li class="navLi"><img src="./img/team.png" alt="team" class="img" id="team"><a href="/myteam">My Team</a></li>
        <li class="navLi"><img src="./img/settings.png" alt="settings" class="img" id="settings"><a href="/settings">Settings</a></li>
        <li class="navLi"><img src="./img/logout.png" alt="logout" class="img" id="logout"><a href="javascript:void(0)" @click=${onLogout}>Logout</a></li>
    </nav>
    `
}