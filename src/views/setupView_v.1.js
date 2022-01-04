import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';

export function showSetup() {

    body.style.background = 'rgb(255, 255, 255)';

    // const template =
    return html `
    <section id="setting-up">
        <h2>Congrats! You are all set.</h2>
        <p>Your Team identifier is:</p>
        <div class="id-box">
            <input id="next-id" type="text" readonly value="aa1cf008-24f2-40c7-9bb8-ba98e4f3b96a"><button>&#128203;</button>
        </div>
        <p>Share this ID with your teammates so they can join your team.</p>
    </section>
        `
        // render(template, main);

}