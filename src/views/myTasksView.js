import { html } from '../lib/lit-html.js';

export function showMyTasks() {

    return html `
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
                        Assignor
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
            <tr>
                <td>
                    <input type="text" readonly value="12.17.2021">
                </td>
                <td>
                    <input type="text" readonly value="01.21.2022">
                </td>
                <td>
                    <input type="text" readonly value="TODO">
                </td>
                <td>
                    <input type="text" readonly value="My Colleague">
                </td>
                <td>
                    <input type="text" readonly value="In Progress">
                </td>
                <td>
                    <div class="actions">
                        <button class="startBtn">Start</button>
                        <button class="deleteBtn">Delete</button>
                        <button class="finishBtn">Finish</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" readonly value="12.17.2021">
                </td>
                <td>
                    <input type="text" readonly value="01.21.2022">
                </td>
                <td>
                    <input type="text" readonly value="TODO">
                </td>
                <td>
                    <input type="text" readonly value="My Colleague">
                </td>
                <td>
                    <input type="text" readonly value="In Progress">
                </td>
                <td>
                    <div class="actions">
                        <button class="startBtn">Start</button>
                        <button class="deleteBtn">Delete</button>
                        <button class="finishBtn">Finish</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    `
        // Create pop out for the Assign button
}