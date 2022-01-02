import { logout } from "../api/crud.js";
import page from "../lib/page.mjs";

export async function onLogout() {
    await logout();
    page.redirect('/');
}