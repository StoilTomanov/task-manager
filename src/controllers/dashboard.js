import { render } from '../lib/lit-html.js'
import { showAssignTask } from '../views/assignTaskView.js';
import { showCompletedTasks } from '../views/completedTasksView.js';
import { showCreateTask } from '../views/createTaskView.js';
import { showMyTasks } from '../views/myTasksView.js';
import { showAllTasks } from '../views/allTasksView.js';
import { getAllTasks, getCompletedTasks, getUnassignedTasks } from '../api/tasks.js';
import { getAllUsers } from '../api/crud.js';

/*
    Status: 
     - In progress
     - Pending
     - Cancelled
     - Unassigned
     - Competed
*/

export function onTaskChoice(ev) {
    const content = ev.target.textContent;
    Array.from(ev.target.parentElement.children).forEach(el => el.style.backgroundColor = 'rgb(189, 229, 255)')

    if (content == 'My tasks') {
        ev.target.style.backgroundColor = 'rgb(10, 120, 223)';
        onMyTask();
    } else if (content == 'All tasks') {
        ev.target.style.backgroundColor = 'rgb(10, 120, 223)';
        onAllTasks();
    } else if (content == 'Create task') {
        ev.target.style.backgroundColor = 'rgb(10, 120, 223)';
        onCreateTask();
    } else if (content == 'Assign task') {
        ev.target.style.backgroundColor = 'rgb(10, 120, 223)';
        onAssignTask();
    } else if (content == 'Completed tasks') {
        ev.target.style.backgroundColor = 'rgb(10, 120, 223)';
        onCompletedTasks();
    }

}

export function onMyTask() {
    render(showMyTasks(), document.getElementById('container'));
}

export async function onAllTasks() {
    const allTasks = await getAllTasks();
    render(showAllTasks(allTasks.results), document.getElementById('container'));
}

export function onCreateTask() {
    render(showCreateTask(), document.getElementById('container'));
}
export async function onAssignTask() {
    if (sessionStorage.organization) {
        const teamMembers = await getAllUsers();
        const unassignedTasks = await getUnassignedTasks();
        render(showAssignTask(unassignedTasks.results, teamMembers.results), document.getElementById('container'));
    }
}
export async function onCompletedTasks() {
    const completedTasks = await getCompletedTasks();
    render(showCompletedTasks(completedTasks.results), document.getElementById('container'));
}