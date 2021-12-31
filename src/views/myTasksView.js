import { html } from '../lib/lit-html.js';

export function showMyTasks() {

    return html `
    <table>
        <thead id="table-head">
            <div>
                <tr id="t-header">
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
                    <input type="text" readonly value="17.12.2021">
                </td>
                <td>
                    <input type="text" readonly value="21.01.2022">
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
                    <button>Start</button>
                    <button>Delete</button>
                    <button>Finish</button>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" readonly value="17.12.2021">
                </td>
                <td>
                    <input type="text" readonly value="21.01.2022">
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
                    <button>Start</button>
                    <button>Delete</button>
                    <button>Finish</button>
                </td>
            </tr>
        </tbody>
    </table>
    `
        // Create pop out for the Assign button
}