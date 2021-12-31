import { body, main } from '../app.js';
import { onTaskChoice } from '../controllers/dashboard.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export function showDashboard() {

    body.style.background = 'rgb(255, 255, 255)';

    const template = html `
        <section id="dashboardView">
            <div id="navigation">
                    
            </div>
            <table id="tabs" @click=${onTaskChoice}>
                <th id="firstTab" class="tab">My tasks</th>
                <th id="secondTab" class="tab">Create task</th>
                <th id="thirdTab" class="tab">Assign task</th>
                <th id="forthTab" class="tab">Completed tasks</th>
            </table>
            <hr>
            <div id="container">
                <table>
                    <thead>
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
                    </thead>
                    <tbody>
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
            </div>
        </section>
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);
}