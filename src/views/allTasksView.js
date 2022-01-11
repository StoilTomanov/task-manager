import { html } from '../lib/lit-html.js';

export function showAllTasks(results) {
    return html `
        ${results.length == 0 ? html`<h1 style="text-align: center">No tasks available</h1>` : html`
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
                            <button class="deleteBtn">Cancel</button>
                        </div>
                    </td>
                </tr>
                `
                )}
                </tbody>
            </table>
        `}
    `
        // Create pop out for the Assign button
}