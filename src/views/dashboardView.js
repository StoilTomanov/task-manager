import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';

export function showDashboard() {
    body.style.background = 'rgb(255, 255, 255)';
    const template = html `
    <section id="dashboardView">
        
        </section>
        `
    render(template, main);
}