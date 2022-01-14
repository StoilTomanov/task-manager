import { onDeleteTask } from '../controllers/deleteTask.js';
import { loadModal, closeModal, onAssignTaskForm } from '../controllers/modals.js';
import { html } from '../lib/lit-html.js';

export function showAssignTask(resultsTask, resultsUsers) {
    console.log(resultsTask);
    return html `
    ${resultsTask.length == 0 ? html`<h1 style="text-align: center">No unassigned tasks available</h1>`: html`
    <table class="table-tasks">
        <thead id="table-head">
            <th>
                Date expected
            </th>
            <th>
                Description 
            </th>
            <th>
                Status
            </th>
            <th>
                Action
            </th>
        </thead>
        <tbody id="table-body">
            ${resultsTask.map( r => html`
            <tr>
                <td>
                    <input type="text" readonly value=${r.expectedOn}>
                </td>
                <td>
                    <input type="text" readonly value=${r.description}>
                </td>
                <td>
                    <input type="text" readonly value=${r.status}>
                </td>
                <td >
                    <div class="actions">
                        <button class="assignBtn" data-id=${r.objectId} @click=${loadModal} data-modaltype="assignModal">Assign</button>
                        <button class="deleteBtn" data-id=${r.objectId} @click=${loadModal} data-modalType="deleteModal">Delete</button>
                    </div>
                </td>
            </tr>
            `)}
        </tbody>
    </table>
    <div id="assignModal" class="modal">
        <div class="modal-container">
            <form id="modal-form" @submit=${onAssignTaskForm}>
                <h2>Assign task</h2>
                <label for="assignTo">Assign to:</label>
                <select name="emp-username" id="emp-username">
                    <option class="userList"></option>
                    ${resultsUsers.map( r => html`
                    <option class="userList" value=${r.username}>${r.username}</option>
                    `)}
                </select>
                <div>
                    <input type="submit" name="confirm" id="submit-confirm" value="Confirm">
                    <input type="button" name="cancel" id="cancel-assign" @click=${closeModal} data-modalType="assignModal" value="Cancel">
                </div>
            </form>
        </div>
    </div>
    <div id="deleteModal" class="modal">
        <div class="modal-container">
            <h3>Are you sure you want to delete this record?</h3>
            <div class="confirm">
                <button id="deleteConfirm" data-modalType="deleteModal" @click=${onDeleteTask}>Yes</button>
                <button data-modalType="deleteModal" @click=${closeModal}>No</button>
            </div>
        </div>
    </div>
    `}
    `
}