import { register } from "../api/crud.js";
import { formHandler } from "../api/formHandler.js";
import { main } from "../app.js";
import { render } from "../lib/lit-html.js";
// import page from "../lib/page.mjs";
import { showOgrSetup } from "../views/setupView_v.1.js";

export async function onRegisterInd(ev) {
    ev.preventDefault();
    const form = document.getElementById(ev.target.id);
    const formData = formHandler(form);

    Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!')
        }
    })
    if (formData["re-password"] != formData.password) {
        alert('Passwords must match!')
    } else {
        await register({ username: formData.username, password: formData.password, isTeam: false, });
        render(showOgrSetup(), main);
        // page.redirect('/dashboard');
    }

}

export async function onRegisterTeam(ev) {
    ev.preventDefault();
    const form = document.getElementById(ev.target.id);
    const formData = formHandler(form);

    Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!');
        }
    });
    if (formData["re-password"] != formData.password) {
        alert('Passwords must match!')
    } else {
        await register({ username: formData['team-name'], password: formData.password, teamName: formData['team-name'], isTeam: true, });
        render(showOgrSetup(), main);
        // page.redirect('/dashboard');
    }
}