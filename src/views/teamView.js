import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export function showTeam() {

    body.style.background = 'rgb(255, 255, 255)';

    const template = html `
    <section id="teamView">
        ${sessionStorage.sessionToken == undefined ? html `<h2>You need to <a id="sign-in" href="/signin">Login</a> or <a href="/signup"> Register</a> to access this page.</h2>`
        : html`<div id="navigation">
                    
                    </div>
                    
                    <div id="members">
                        <table>
                            <thead id="theader">
                                <tr>
                                    <th>Username</th>
                                    <th>Position</th>
                                    <th>Assignments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Peter</td>
                                    <td>JS Developer</td>
                                    <td>8 Tasks</td>
                                </tr>
                                <tr>
                                    <td>Mike</td>
                                    <td>C# Developer</td>
                                    <td>7 Tasks</td>
                                </tr>
                            </tbody>
                            <tfoot class="totalMembers">
                                <tr>
                                    <td colspan="3">
                                        Total Members: 2
                                    </td>
                                </tr>
                            </tfoot>
            
                        </table>
                    </div>`}
            <div id="memberAction">
                <button class="membersBtn" id="addMemeber">Add Member</button>
                <button class="membersBtn" id="removeMember">Remove Member</button>
            </div>
    </section>
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);
}