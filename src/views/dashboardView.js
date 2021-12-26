import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export function showDashboard() {

    body.style.background = 'rgb(255, 255, 255)';

    const template = html `
    <section id="dashboardView">
        <div id="navigation">
                
        </div>
        <table id="tabs">
            <th class="tab">My tasks</th>
            <th class="tab">Create task</th>
            <th class="tab">Assign task</th>
            <th class="tab">Completed tasks</th>
        </table>
        <hr>
        <div id="container">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ullam id vero recusandae fugit voluptate non molestiae delectus et fugiat labore possimus cumque excepturi a eligendi tempora quae, vitae deserunt.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ullam id vero recusandae fugit voluptate non molestiae delectus et fugiat labore possimus cumque excepturi a eligendi tempora quae, vitae deserunt.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ullam id vero recusandae fugit voluptate non molestiae delectus et fugiat labore possimus cumque excepturi a eligendi tempora quae, vitae deserunt.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ullam id vero recusandae fugit voluptate non molestiae delectus et fugiat labore possimus cumque excepturi a eligendi tempora quae, vitae deserunt.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ullam id vero recusandae fugit voluptate non molestiae delectus et fugiat labore possimus cumque excepturi a eligendi tempora quae, vitae deserunt.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ullam id vero recusandae fugit voluptate non molestiae delectus et fugiat labore possimus cumque excepturi a eligendi tempora quae, vitae deserunt.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ullam id vero recusandae fugit voluptate non molestiae delectus et fugiat labore possimus cumque excepturi a eligendi tempora quae, vitae deserunt.
        </div>
    </section>
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);
}