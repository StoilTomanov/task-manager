import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export function showSettings() {

    body.style.background = 'rgb(255, 255, 255)';

    const template = html `
        <!-- <section id="settingsView">
        <div id="navigation">
                    
        </div>
        <div>
            <form id="settings">
                <div id="toggle">
                <label class="change-value">Change theme</label>
                <label for="toggle-dark" class="toggle-txt">Light</label>
                    <input type="checkbox" id="toggle-btn">
                <label for="toggle-light" class="toggle-txt">Dark</label>
                </div>
                <div class="box" id="ch-username">
                    <label for="username" class="change-value">Change username</label>
                    <input type="text" name="username" id="username">
                </div>
                <div class="box" id="ch-teamName">
                    <label for="teamName" class="change-value">Change Team name</label>
                    <input type="text" name="teamName" id="teamName">
                </div>
                <div class="box" id="ch-password">
                    <label for="password" class="change-value">Change password</label>
                    <input type="password" name="old-pass" id="old-pass" placeholder="Old password">
                    <input type="password" name="new-pass" id="old-pass" placeholder="New password">
                    <input type="password" name="re-pass" id="old-pass" placeholder="Repeat password">
                </div>
                <div>
                    <input type="submit" value="Apply" class="applyBtn">
                </div>
            </form>
        </div>
    </section> -->
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);
}