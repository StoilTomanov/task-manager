import { html } from '../lib/lit-html.js';
import { onCreateTask } from '../controllers/createTask.js'

export function showCreateTask() {

    return html `
    <div>
        <form id="create-task-form" @submit=${onCreateTask}>
            <label for="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10" placeholder="enter your task description..."></textarea>
            <label for="expected-date">Expected date</label>
            <input type="date" id="calendar">
            <input id="submit-btn" type="submit" value="Create">
            <p id="message" class="notify">Task has been created. Check <span>Assign task</span> section to assign this task.</p>
        </form>
    </div>
    `
}