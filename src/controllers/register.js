import { register } from "../api/crud.js";
import { formHandler } from "../api/formHandler.js";
import { main } from "../app.js";
import { render } from "../lib/lit-html.js";
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
        await register({ username: formData.username.trim(), password: formData.password.trim(), isTeam: false, });
        render(showOgrSetup(), main);
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
        await register({ username: formData['team-name'].trim(), password: formData.password.trim(), teamName: formData['team-name'].trim(), isTeam: true, });
        render(showOgrSetup(), main);
    }
}