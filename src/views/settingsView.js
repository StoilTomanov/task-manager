import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export function showSettings() {

    body.style.background = 'rgb(255, 255, 255)';

    const template = html `
        <section id="settingsView">
        <div id="navigation">
                    
        </div>
        <table id="options-table">
            <tr id="switch-theme">
                <th class="option">
                    Switch theme
                </th>
                <td class="toggle">
                    <label for="toggle-dark">Light</label>
                    <input type="checkbox" id="toggle-btn">
                    <label for="toggle-light">Dark</label>
                </td>
            </tr>
            <tr id="ch-username">
                <th class="option">
                    Change username
                </th>
                <td class="value">
                    <input type="text" name="username" id="username" class="change-value">
                </td>
            </tr>
            <tr id="ch-teamName">
                <th class="option">
                    Change Team name
                </th>
                <td class="value">
                    <input type="text" name="username" id="username" class="change-value">
                </td>
            </tr>
            <tr id="ch-password">
                <th class=" ">
                    Change password
                </th>
                <td class="value">
                    <input type="password" name="old-pass" id="old-pass" class="change-value" placeholder="Old password">
                </td>
                <td class="value">
                    <input type="password" name="new-pass" id="old-pass" class="change-value" placeholder="New password">
                </td>
                <td class="value">
                    <input type="password" name="re-pass" id="old-pass" class="change-value" placeholder="Repeat password">
                </td>
            </tr>
        </table>
    </section>
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);
}