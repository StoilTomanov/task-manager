import { html, render } from '../lib/lit-html.js';

const modal = {
    assignModal: html `
    <div id="navigation">   
    </div>
    <div id="assignModal" class="modal">
        <div class="modal-container">
            <form id="modal-form">
                <h2>Assign task</h2>
                <label for="assignTo">Assign to:</label>
                <select name="emp-username" id="emp-username">
                    <option></option>
                    <option value="TestUser1">TestUser1 | <span>8 tasks</span></option>
                    <option value="TestUser1">TestUser2 | <span>5 tasks</span></option>
                    <option value="TestUser1">TestUser3 | <span>7 tasks</span></option>
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

export function loadModal(ev) {

    if (ev.target.dataset.id != '') {
        if (ev.target.textContent == 'Assign') {
            render(modal.assignModal, document.querySelector('[class="table-tasks"]'));
        } else if (ev.target.textContent == 'Delete') {
            render(modal.deleteModal, document.querySelector('[class="table-tasks"]'));
        }

    }
}

function closeModal(ev) {
    document.getElementById(ev.target.dataset.type).style.display = 'none';
}