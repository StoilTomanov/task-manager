import { html } from '../lib/lit-html.js';

export function showAssignTask() {

    return html `
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
            <tr>
                <td>
                    <input type="text" readonly value="21.01.2022">
                </td>
                <td>
                    <input type="text" readonly value="TODO">
                </td>
                <td>
                    <input type="text" readonly value="In Progress">
                </td>
                <td >
                    <div class="actions">
                        <button class="assignBtn">Assign</button>
                        <button class="deleteBtn">Delete</button>
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
                    <input type="text" readonly value="In Progress">
                </td>
                <td>
                    <div class="actions">
                        <button class="assignBtn">Assign</button>
                        <button class="deleteBtn">Delete</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    `
}