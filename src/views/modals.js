import { main } from '../app.js';
import { html, render } from '../lib/lit-html.js';

const modal = {
    assign: html `
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
                    <input type="button" name="cancel" data-modalType="assignModal" id="cancel-assign" @click=${closeModal} value="Cancel">
                </div>
            </form>
        </div>
    </div>
    `
}

export function loadModal(ev) {
    const assignModal = document.getElementById('assignModal');
    if (ev.target.dataset.id != '') {
        render(modal.assign, document.getElementById('container'));
    }
}

function closeModal(ev) {
    document.getElementById(ev.target.dataset.modalType).style.display = 'none';
}

//TODO finish show/hide modal