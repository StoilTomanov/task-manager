import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export function showSettings() {

    body.style.background = 'rgb(255, 255, 255)';

    const template = html `
        <section id="settingsView">
        <div id="navigation">
                    
        </div>
        <div>
            <form id="settings">
                <div id="toggle">
                <label for="toggle-dark">Light</label>
                    <input type="checkbox" id="toggle-btn">
                    <label for="toggle-light">Dark</label>
                </div>
                <div class="box">
                    <label for="username" class="change-value">Change username</label>
                    <input type="text" name="username" id="username">
                </div>
                <div class="box">
                    <label for="teamName" class="change-value">Change Team name</label>
                    <input type="text" name="teamName" id="teamName">
                </div>
                <div class="box">
                    <label for="teamName" class="change-value">Change password</label>
                    <input type="password" name="old-pass" id="old-pass" placeholder="Old password">
                    <input type="password" name="new-pass" id="old-pass" placeholder="New password">
                    <input type="password" name="re-pass" id="old-pass" placeholder="Repeat password">
                </div>
                <div>
                    <input type="submit" value="Apply" class="applyBtn">
                </div>
            </form>
        </div>
    </section>
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);
}