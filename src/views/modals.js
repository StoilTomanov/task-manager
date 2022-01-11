import { getAllUsers } from '../api/crud.js';
import { getUnassignedTasks } from '../api/tasks.js';
import { onAssignTask } from '../controllers/assign.js';
import { html, render } from '../lib/lit-html.js';
import { showAssignTask } from './assignTaskView.js';

const allUsersList = await getAllUsers();
console.log(allUsersList.results);

const modal = {
        assignModal: html `
    <div id="navigation">   
    </div>
    <div id="assignModal" class="modal">
        <div class="modal-container">
            <form id="modal-form" @submit=${onAssignTask}>
                <h2>Assign task</h2>
                <label for="assignTo">Assign to:</label>
                <select name="emp-username" id="emp-username">
                    <option></option>
                    ${allUsersList.results.map( r => html`
                    <option value=${r.username}>${r.username} | <span>8 tasks</span></option>
                    `)}
                </select>
                <div>
                    <input type="submit" name="confirm" id="submit-confirm" value="Confirm">
                    <input type="button" name="cancel" data-type="assignModal" id="cancel-assign" @click=${closeModal} value="Cancel">
                </div>
            </form>
        </div>
    </div>
    `,
    deleteModal: html `
    <div id="deleteModal" class="modal">
        <div class="modal-container">
            <h3>Are you sure you want to delete this record?</h3>
            <div class="confirm">
                <button>Yes</button>
                <button data-type="deleteModal" @click=${closeModal}>No</button>
            </div>
        </div>
    </div>
    `
}

export async function loadModal(ev) {

    if (ev.target.dataset.id != '') {
        if (ev.target.textContent == 'Assign') {
            render(modal.assignModal, document.querySelector('[class="table-tasks"]'));
        } else if (ev.target.textContent == 'Delete') {
            render(modal.deleteModal, document.querySelector('[class="table-tasks"]'));
        }

    }
}

async function closeModal(ev) {
console.log('works');
//Close the modals
}