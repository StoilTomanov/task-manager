import { deleteTask } from "../api/tasks.js";
import { onAllTasks, onAssignTask } from "./dashboard.js";

export async function onDeleteTask(ev) {
    document.getElementById(ev.target.dataset.modaltype).style.display = 'none';
    await deleteTask(ev.target.dataset.taskid);

    if (ev.target.dataset.modaltype == 'deleteModal') {
        onAssignTask();
    } else if (ev.target.dataset.modaltype == 'cancelModal') {
        onAllTasks();
    }
}