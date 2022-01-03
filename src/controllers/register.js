import { register } from "../api/crud.js";
import { formHandler } from "../api/formHandler.js";
import page from "../lib/page.mjs";

export async function onRegisterInd(ev) {
    ev.preventDefault();
    const form = document.getElementById(ev.target.id);
    const formData = formHandler(form);

    Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!')
        }
    })
    await register({ username: formData.username, password: formData.password });
    page.redirect('/dashboard');

}


export async function onRegisterTeam(ev) {
    ev.preventDefault();
    const form = document.getElementById(ev.target.id);
    const formData = formHandler(form);

    Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!');
        }
    })

    await register({ username: formData['team-name'], password: formData.password, teamName: formData['team-name'], teamId: formData.identifier, isTeam: false, });
    page.redirect('/dashboard');

}