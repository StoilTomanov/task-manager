import { html } from '../lib/lit-html.js';

export function showCreateTask() {

    return html `
    <div>
        <form id="create-task-form">
            <label for="description">Description</label>
            <textarea name="description" cols="30" rows="5" placeholder="enter your task description..."></textarea>
            <label for="expected-date">Expected date</label>
            <input type="date" placeholder="mm / dd / yyyy">
            <input id="submit-btn" type="submit" value="Create">
        </form>
    </div>
    `
}