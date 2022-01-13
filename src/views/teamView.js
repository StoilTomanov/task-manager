import { getAllUsers } from '../api/crud.js';
import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export async function showTeam() {

    body.style.background = 'rgb(255, 255, 255)';
    const teamMembers = await getAllUsers();

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
                                ${teamMembers.results.map( r => html`
                                <tr>
                                    <td>${r.username}</td>
                                    <td>${r.jobPosition}</td>
                                    <td>To be completed</td>
                                </tr>
                                `)}
                            </tbody>
                            <tfoot class="totalMembers">
                                <tr>
                                    <td colspan="3">
                                        Total Members: ${teamMembers.results.length}
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