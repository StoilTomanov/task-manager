import { html } from '../lib/lit-html.js';

export function showCompletedTasks(results) {

    return html `
    <table class="table-tasks">
        <thead id="table-head">
            <th>
                Date completed
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
                    <input type="text" readonly value=${new Date(r.completedOn.iso).toLocaleDateString(undefined,{ year: 'numeric', month: 'long', day: '2-digit' })}>
                </td>
                <td>
                    <input type="text" readonly value=${r.description}>
                </td>
                <td>
                    <input type="text" readonly value=${r.status}>
                </td>
                <td>
                    <div class="actions">
                        <button class="assignBtn">Re-assign</button>
                        <button class="deleteBtn">Remove</button>
                    </div>
                </td>
            </tr>
            `)}
        </tbody>
    </table>
    `
}