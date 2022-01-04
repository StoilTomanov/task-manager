import uuid from '../lib/v4.js'
import { body } from '../app.js';
import { onDone } from '../controllers/nextBtn.js';
import { html } from '../lib/lit-html.js';

export function showSetup() {

    body.style.background = 'rgb(255, 255, 255)';

    return html `
    <section id="setting-up">
        <h1>Congrats! You are all set.</h1>
        <p>Your Team identifier is:</p>
        <div class="id-box">
            <input id="next-id" type="text" readonly value="${uuid()}"><button id="copy">&#128203;</button>
        </div>
        <p>Share this ID with your teammates so they can join your team.</p>
        <button id="done" @click=${onDone}>Done!</button>
    </section>
        `

}