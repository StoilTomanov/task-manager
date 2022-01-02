import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';

export function showHome() {
    body.style.background = '';
    const template = html `
    <section id="homeView">
        <img id="logo" src="./img/Logos_1.png">
        <div>
            <h1 id="header">
                Task Manager 2022
            </h1>
        </div>
        <div id="sign-case">
            ${sessionStorage.sessionToken == undefined ? html`<a id="sign-in" href="/signin">Log in</a>
            <p id="para">Don't have an account? <a href="/signup" id="sign-up">Register</a></p>` 
            : html`<a id="sign-in" href="/dashboard">Dashboard</a>`}
            
        </div>
    </section>
    `
    render(template, main);
}