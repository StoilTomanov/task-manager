import { render } from '../lib/lit-html.js'
import { showAssignTask } from '../views/assignTaskView.js';
import { showCompletedTasks } from '../views/completedTasksView.js';
import { showCreateTask } from '../views/createTaskView.js';
import { showMyTasks } from '../views/myTasksView.js'

export function onTaskChoice(ev) {
    const content = ev.target.textContent;

    if (content == 'My tasks') {
        onMyTask();
    } else if (content == 'Create task') {
        onCreateTask();
    } else if (content == 'Assign task') {
        onAssignTask();
    } else if (content == 'Completed tasks') {
        onCompletedTasks();
    }

}

function onMyTask() {
    render(showMyTasks(), document.getElementById('container'));
}
export function onCreateTask() {
    render(showCreateTask(), document.getElementById('container'));
}
export function onAssignTask() {
    render(showAssignTask(), document.getElementById('container'));
}
export function onCompletedTasks() {
    render(showCompletedTasks(), document.getElementById('container'));
}