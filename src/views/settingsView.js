import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export function showSettings() {

    body.style.background = 'rgb(255, 255, 255)';

    const template = html `
        <section id="settingsView">
        ${sessionStorage.sessionToken == undefined ? html `<h2>You need to <a id="sign-in" href="/signin">Login</a> or <a href="/signup"> Register</a> to access this page.</h2>`
        : html`<div id="navigation">
            </div>
            <div>
                <aside id="settings-options">
                    <div class="theme-container">
                        <h4 class="option">Change theme</h4>
                        <label for="toggle-dark" class="toggle-txt">Light</label>
                        <input type="checkbox" id="toggle-btn">
                        <label for="toggle-light" class="toggle-txt">Dark</label>
                    </div>
                    <div class="option-container">
                        <h4 class="option">Change team name</h4>
                        <input type="text" name="team-name" id="team-name">
                    </div>
                    <div class="option-container">
                        <h4 class="option">Change username</h4>
                        <input type="text" name="username" id="username">
                    </div>
                    <div class="option-container">
                        <h4 class="option">Change email</h4>
                        <input type="email" name="username" id="username">
                    </div>
                    <div class="option-container">
                        <h4 class="option">Change employer name</h4>
                        <input type="text" name="emp-name" id="emp-name">
                    </div>
                    <div class="pass-container">
                        <h4 class="option">Change password</h4>
                        <input type="password" name="old-password" id="old-password" placeholder="old password">
                        <input type="password" name="new-password" id="new-password" placeholder="new password">
                        <input type="password" name="re-password" id="re-password" placeholder="repeat password">
                    </div>
    
                    <div id="btns">
                        <button id="save-btn">Save changes</button>
                        <button id="del-btn">Delete account</button>
                    </div>
    
                </aside>
            </div>`}
    </section>
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);
}