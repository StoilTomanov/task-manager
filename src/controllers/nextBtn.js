import { main } from "../app.js";
import { render } from "../lib/lit-html.js";
import page from "../lib/page.mjs";
import { showSetup } from "../views/setupView_v.2.js";

export function onNext() {
    render(showSetup(), main);
}

export function onDone() {
    page.redirect('/dashboard');
}