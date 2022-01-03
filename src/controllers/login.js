import { login } from "../api/crud.js";
import { formHandler } from "../api/formHandler.js";
import page from "../lib/page.mjs";

export async function onLoginInd(ev) {
    ev.preventDefault();
    const form = document.getElementById(ev.target.id);
    const formData = formHandler(form);

    Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!');
        }
    })

    await login({ username: formData.username, password: formData.password, isTeam: false, });
    page.redirect('/dashboard');

}

export async function onLoginTeam(ev) {
    ev.preventDefault();
    const form = document.getElementById(ev.target.id);
    const formData = formHandler(form);

    Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!');
        }
    })

    console.log(formData);
    console.log({ username: formData['team-name'], password: formData.password, teamName: formData['team-name'], teamId: formData.identifier, isTeam: true, });
    // await login({ username: formData['team-name'], password: formData.password, teamName: formData['team-name'], teamId: formData.identifier, isTeam: false, });
    // page.redirect('/dashboard');

}