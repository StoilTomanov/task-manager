import { html } from '../lib/lit-html.js';

export function showCompletedTasks() {

    return html `
    <table>
        <thead>
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
        <tbody>
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
                    <button>Re-assign</button>
                    <button>Remove</button>
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
                    <button>Re-assign</button>
                    <button>Remove</button>
                </td>
            </tr>
        </tbody>
    </table>
    `
}