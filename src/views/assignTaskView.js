import { html } from '../lib/lit-html.js';
import { loadModal } from './modals.js';

export function showAssignTask(results) {
    console.log(results);
    return html `
    ${results.length == 0 ? html`<h1 style="text-align: center">No tasks available</h1>`: html`
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
            ${results.map( r => html`
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
                        <button class="assignBtn"fk data-id=${r.objectId} @click=${loadModal}>Assign</button>
                        <button class="deleteBtn" @click=${loadModal}>Delete</button>
                    </div>
                </td>
            </tr>
            `)}
        </tbody>
    </table>
    `}
    `
}