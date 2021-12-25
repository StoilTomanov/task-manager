import { body, main } from '../app.js';
import { onTypeChoice } from '../controllers/typeBtn.js';
import { html, render } from '../lib/lit-html.js';

export function showSignIn() {
    body.style.background = 'rgb(255, 255, 255)';
    const template = html `
    <section id="loginView">
        <h3>Sign In</h3>
        <div @click=${onTypeChoice}>
            <button class="type"  id="team">Team</button>
            <button class="type"  id="individual">Individual</button>
        </div>
        <div class="container-forms">
            <div class="form">
                <form id="team-form">
                    <label for="name">Team name</label>
                    <input type="text" name="name" id="name" placeholder="Enter team name...">
                    <label for="name">Team ID</label>
                    <input type="text" name="name" id="name" placeholder="Enter team id...">
                    <label for="name">Password</label>
                    <input type="password" name="name" id="name" placeholder="Enter password...">
                    <input type="submit" value="Sign In" class="submitBtn">
                </form>
            </div>
            <div class="form">
                <form id="ind-form">
                    <label for="name">Username</label>
                    <input type="text" name="name" id="name" placeholder="Enter username...">
                    <label for="name">Password</label>
                    <input type="password" name="name" id="name" placeholder="Enter password...">
                    <input type="submit" value="Sign In" class="submitBtn">
                </form>
            </div>
        </div>
        <div class="container-signin">
            <p>Dont have an account?<a href="#">Sign up</a>.</p>
        </div>
    </section>
    `
    render(template, main);
}