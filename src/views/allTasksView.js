import { onDeleteTask } from '../controllers/deleteTask.js';
import { closeModal, loadModal } from '../controllers/modals.js';
import { html } from '../lib/lit-html.js';

export function showAllTasks(results) {
    console.log(results);
    return html `
        ${results.length == 0 ? html`<h1 style="text-align: center">No tasks available</h1>
            <div>
                <button>Refresh</button>
            </div>
            ` : html`
            <table class="table-tasks">
            <thead id="table-head">
                <div>
                    <tr>
                        <th>
                            Date assigned
                        </th>
                        <th>
                            Date expected
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Assigned to
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </div>
            </thead>
            <tbody id="table-body">
                ${results.map(r => html`
                <tr>
                    <td>
                        <input type="text" readonly value=${r.assignedOn == '' ? ' - ' : r.assignedOn}>
                    </td>
                    <td>
                        <input type="text" readonly value=${r.expectedOn}>
                    </td>
                    <td>
                        <input type="text" readonly value=${r.description}>
                    </td>
                    <td>
                        <input type="text" readonly value=${r.assignedTo == undefined ? ' - ' : r.assignedTo}>
                    </td>
                    <td>
                        <input type="text" readonly value=${r.status}>
                    </td>
                    <td>
                        <div class="actions">
                            <button class="deleteBtn" data-id=${r.objectId} @click=${loadModal} data-modalType="cancelModal">Cancel</button>
                        </div>
                    </td>
                </tr>
                `
                )}
                </tbody>
            </table>
            <div>
                <button>Refresh</button>
            </div>
            <div id="cancelModal" class="modal">
                <div class="modal-container">
                    <h3>Canceling will delete this record. Are you sure you want to proceed?</h3>
                    <div class="confirm">
                        <button id="cancelConfirm" data-modalType="cancelModal" @click=${onDeleteTask}>Yes</button>
                        <button data-modalType="cancelModal" @click=${closeModal}>No</button>
                    </div>
                </div>
            </div>
        `}
    `
        // Create pop out for the Assign button
}