import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';

export function showSignIn() {
    body.style.background = 'rgb(255, 255, 255)';
    const template = html `
    <section id="loginView">
        <h3>Sign In</h3>
        <button class="type">Team</button>
        <button class="type">Individual</button>
        <div class="container-forms">
            <div class="form">
                <form id="org-form">
                    <label for="name">Team name</label>
                    <input type="text" name="name" id="name">
                    <label for="name">Team ID</label>
                    <input type="text" name="name" id="name">
                    <label for="profile-type">Access type</label>
                    <select name="type" id="access-type">
                        <option value="none"></option>
                        <option value="admin">Admin</option>
                        <option value="regular">Regular</option>
                    </select>
                    <label for="name">Username</label>
                    <input type="text" name="name" id="name">
                    <label for="name">Password</label>
                    <input type="password" name="name" id="name">
                </form>
            </div>
            <div class="form">
                <form id="ind-form">
                    <label for="name">Username</label>
                    <input type="text" name="name" id="name">
                    <label for="name">Password</label>
                    <input type="password" name="name" id="name">
                </form>
            </div>
        </div>
        <div class="container-signin">
            <p>Dont have an account?<a href="#">Sign up</a>.</p>
        </div>
    </section>
    `
    render(template, main);
}