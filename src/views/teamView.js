import { getAllUsers } from '../api/crud.js';
import { body, main } from '../app.js';
import { addUserMember } from '../controllers/addUser.js';
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
    <div id="addMemberModal" class="modal">
        <div class="modal-container">
            <form id="modal-form">
                <h2>Add Member</h2>
                <label for="addMember">Members:</label>
                <select name="addMember" id="addMember" >
                    <option class="userList"></option>
                    ${teamMembers.results.map( r => html`
                    <option class="userList" @click=${addUserMember}>${r.username}</option>
                    `)}
                </select>
                <div>
                    <input type="button" name="addMember" id="addMember" value="Add">
                    <input type="button" name="cancel" id="cancel-assign" data-modalType="addMemberModal" value="Cancel">
                </div>
            </form>
        </div>
    </div>
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);
}