import { main } from '../app.js';
import { html, render } from '../lib/lit-html.js';

export function showHome() {
    const template = html `
    <section id="homeView">
            <img id="logo" src="./img/Logos_1.png">
            <div>
                <h1 id="header">
                    Task Manager 2022
                </h1>
            </div>
            <button id="sign-in">Sign in</button>
            <div id="sign-case">
                <p id="para">Don't have an account? <a href="#" id="sign-up">Sign up</a></p>
            </div>
        </section>
    `
    render(template, main);
}