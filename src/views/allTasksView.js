import { html } from '../lib/lit-html.js';

export async function showAllTasks() {

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
            <tr>
                <td>
                    <input type="text" readonly value='sth'>
                </td>
                <td>
                    <input type="text" readonly value='sth'>
                </td>
                <td>
                    <input type="text" readonly value='sth'>
                </td>
                <td>
                    <input type="text" readonly value='sth'>
                </td>
                <td>
                    <input type="text" readonly value='sth'>
                </td>
                <td>
                    <div class="actions">
                        <button class="deleteBtn">Cancel</button>
                    </div>
                </td>
            </tr>
    </tbody>
</table>
`
        // Create pop out for the Assign button
}