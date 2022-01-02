import { login } from "../api/crud.js";
import { formHandler } from "../api/formHandler.js";
import page from "../lib/page.mjs";

export async function onLogin(ev) {
    ev.preventDefault();
    const form = document.getElementById(ev.target.id);
    const formData = formHandler(form);
    console.log(formData);

    Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!')
        }
    })

    await login({ username: formData.name, password: formData.password });
    if (sessionStorage.hasOwnProperty('sessionToken')) {
        page.redirect('/dashboard');
    }
}