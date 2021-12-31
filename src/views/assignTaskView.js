import { html } from '../lib/lit-html.js';

export function showAssignTask() {

    return html `
    <table>
        <thead>
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
        <tbody>
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
                    <button>Assign</button>
                    <button>Delete</button>
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
                    <button>Assign</button>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    `
}