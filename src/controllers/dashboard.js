import { render } from '../lib/lit-html.js'
import { showCreateTask } from '../views/createTaskView.js';
import { showMyTasks } from '../views/myTasksView.js'

export function onTaskChoice(ev) {
    const content = ev.target.textContent;

    if (content == 'My tasks') {
        onMyTask();
    } else if (content == 'Create task') {
        onCreateTask();
    } else if (content == 'Assign task') {

    } else if (content == 'Completed tasks') {

    }

}

function onMyTask() {
    render(showMyTasks(), document.getElementById('container'));
}
export function onCreateTask() {
    render(showCreateTask(), document.getElementById('container'));

}
// export function onAssignTask() {}
// export function onCompletedTasks() {}