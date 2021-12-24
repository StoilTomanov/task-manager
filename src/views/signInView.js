import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';

export function showSignIn() {
    body.style.background = 'rgb(255, 255, 255)';
    const template = html `
    <section id="loginView">
        <h3>Sign In</h3>
        <button class="type">Organization</button>
        <button class="type">Individual</button>
        <div class="container signin">
            <p>Dont have an account?<a href="#">Sign up</a>.</p>
        </div>
    </section>
    `
    render(template, main);
}