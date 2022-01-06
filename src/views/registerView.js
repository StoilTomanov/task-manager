import { body, main } from '../app.js';
import { onBack } from '../controllers/backBtn.js';
import { onTypeChoice } from '../controllers/typeBtn.js';
import { html, render } from '../lib/lit-html.js';
import { onRegisterInd, onRegisterTeam } from '../controllers/register.js';
import { onPassCheck } from '../controllers/validation.js';

export function showSignUp() {
    body.style.background = 'rgb(255, 255, 255)';
    const template = html `
    <section id="registerView">
        ${sessionStorage.sessionToken == undefined ? html`<button class="backBtn" @click=${onBack}>&#8592</button>
        <h3>Register</h3>
        <div @click=${onTypeChoice}>
            <button class="type" id="team">Team</button>
            <button class="type" id="individual">Individual</button>
        </div>
        <div class="container-forms">
            <div class="form">
                <form id="team-form" @submit=${onRegisterTeam}>
                    <label for="team-name">Team name</label>
                    <input type="text" name="team-name" id="team-name" placeholder="Enter team name...">
                    <label for="password">Password</label>
                    <input type="text" name="password" id="password" @keyup=${onPassCheck} placeholder="Enter password...">
                    <div class="check" >
                        <div class="check-field" id="f-1"></div>
                        <div class="check-field" id="f-2"></div>
                        <div class="check-field" id="f-3"></div>
                        <div class="check-field" id="f-4"></div>
                        <div class="check-field" id="f-5"></div>
                        <div class="check-field" id="f-6"></div>
                    </div>
                    <label for="re-password">Repeat password</label>
                    <input type="password" name="re-password" id="re-password" placeholder="Repeat password...">
                    <input type="submit" value="Register" class="submitBtn">
                </form>
            </div>
            <div class="form">
                <form id="ind-form" @submit=${onRegisterInd}>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter username...">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" @keyup=${onPassCheck} placeholder="Enter password...">
                    <div class="check" >
                        <p>Secure</p>
                        <div class="check-field" id="f-1"></div>
                        <div class="check-field" id="f-2"></div>
                        <div class="check-field" id="f-3"></div>
                        <div class="check-field" id="f-4"></div>
                        <div class="check-field" id="f-5"></div>
                        <div class="check-field" id="f-6"></div>
                    </div>
                    <label for="re-password">Repeat password</label>
                    <input type="password" name="re-password" id="re-passwords" placeholder="Repeat password...">
                    <input type="submit" value="Register" class="submitBtn">
                </form>
            </div>
        </div>
        <div class="container-signin">
            <p>Already have an account?<a href="/signin"> Log in</a></p>
        </div>`: html`<h2>Seems that you are logged in. Did you meant to go to <a id="sign-in" href="/dashboard">Dashboard</a>?</h2>`}
        
    </section>
    `
    render(template, main);
}