import { body, main } from '../app.js';
import { onBack } from '../controllers/backBtn.js';
import { onTypeChoice } from '../controllers/typeBtn.js';
import { html, render } from '../lib/lit-html.js';

export function showSignUp() {
    body.style.background = 'rgb(255, 255, 255)';
    const template = html `
    <section id="registerView">
        <button class="backBtn" @click=${onBack}>&#8592</button>
        <h3>Register</h3>
        <div @click=${onTypeChoice}>
            <button class="type" id="team">Team</button>
            <button class="type" id="individual">Individual</button>
        </div>
        <div class="container-forms">
            <div class="form">
                <form id="team-form">
                    <label for="team-name">Team name</label>
                    <input type="text" name="team-name" id="team-name" placeholder="Enter team name...">
                    <label for="identifier">Team ID</label>
                    <input type="text" name="identifier" id="identifier" placeholder="Enter team id...">
                    <!-- <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter username..."> -->
                    <label for="password">Password</label>
                    <input type="password" name="name" id="password" placeholder="Enter password...">
                    <label for="re-password">Repeat password</label>
                    <input type="password" name="re-password" id="re-password" placeholder="Repeat password...">
                    <input type="submit" value="Register" class="submitBtn">
                </form>
            </div>
            <div class="form">
                <form id="ind-form">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter username...">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password...">
                    <label for="re-password">Repeat password</label>
                    <input type="password" name="re-password" id="re-passwords" placeholder="Repeat password...">
                    <input type="submit" value="Register" class="submitBtn">
                </form>
            </div>
        </div>
        <div class="container-signin">
            <p>Already have an accout?<a href="/signin"> Log in</a></p>
        </div>
    </section>
    `
    render(template, main);
}