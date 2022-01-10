import { render } from '../lib/lit-html.js'
import { showAssignTask } from '../views/assignTaskView.js';
import { showCompletedTasks } from '../views/completedTasksView.js';
import { showCreateTask } from '../views/createTaskView.js';
import { showMyTasks } from '../views/myTasksView.js';
import { showAllTasks } from '../views/allTasksView.js';
import { getAllTasks, getCompletedTasks, getUnassignedTasks } from '../api/tasks.js';

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

    if (content == 'My tasks') {
        onMyTask();
    } else if (content == 'All tasks') {
        onAllTasks();
    } else if (content == 'Create task') {
        onCreateTask();
    } else if (content == 'Assign task') {
        onAssignTask();
    } else if (content == 'Completed tasks') {
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
    const unassignedTasks = await getUnassignedTasks();
    render(showAssignTask(unassignedTasks.results), document.getElementById('container'));
}
export async function onCompletedTasks() {
    const completedTasks = await getCompletedTasks();
    render(showCompletedTasks(completedTasks.results), document.getElementById('container'));
}