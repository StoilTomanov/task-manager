import { updateUser } from "../api/crud.js";
import { main } from "../app.js";
import { render } from "../lib/lit-html.js";
import page from "../lib/page.mjs";
import { showSetup } from "../views/setupView_v.2.js";

export function onNext() {
    const orgName = document.getElementById('org-name');
    const identifier = document.getElementById('next-id');
    sessionStorage.setItem('organization', orgName.value.trim());
    if (identifier != null || identifier != undefined) {
        sessionStorage.setItem('teamIdentifier', identifier.value.trim());
    }
    if (orgName != null || orgName != undefined) {
        sessionStorage.setItem('organization', orgName.value.trim());
    }

    render(showSetup(), main);
}

export async function onDone() {
    const orgName = document.getElementById('org-name');
    const identifier = document.getElementById('next-id');
    if (orgName != null || orgName != undefined) {
        sessionStorage.setItem('organization', orgName.value.trim());
    }
    if (identifier != null || identifier != undefined) {
        sessionStorage.setItem('teamIdentifier', identifier.value.trim());
    }

    sessionStorage.teamIdentifier == null ? await updateUser({ organization: sessionStorage.organization }) : await updateUser({ organization: sessionStorage.organization.trim(), teamId: sessionStorage.teamIdentifier.trim() });

    page.redirect('/dashboard');
}