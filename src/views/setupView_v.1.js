import { body } from '../app.js';
import { html } from '../lib/lit-html.js';

export function showSetup() {

    body.style.background = 'rgb(255, 255, 255)';

    return html `
    <section id="org-set">
        <h1>Type your organization name (if any) so your team/teammates can find you easily.</h1>
        <p>*Only members/teams who work with the same organization will be able to add you.</p>
        <div class="id-box">
            <input type="text" id="org-name" placeholder="Organization name...">
        </div>
        <button>&#10140;</button>
    </section>
        `
}