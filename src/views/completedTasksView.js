import { html } from '../lib/lit-html.js';

export function showCompletedTasks() {

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
            <tr>
                <td>
                    <input type="text" readonly value="21.01.2022">
                </td>
                <td>
                    <input type="text" readonly value="TODO">
                </td>
                <td>
                    <input type="text" readonly value="Completed">
                </td>
                <td>
                    <div class="actions">
                        <button class="assignBtn">Re-assign</button>
                        <button class="deleteBtn">Remove</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" readonly value="21.01.2022">
                </td>
                <td>
                    <input type="text" readonly value="TODO">
                </td>
                <td>
                    <input type="text" readonly value="Completed">
                </td>
                <td>
                    <div class="actions">
                        <button class="assignBtn">Re-assign</button>
                        <button class="deleteBtn">Remove</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    `
}