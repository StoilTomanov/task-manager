import { deleteTask } from "../api/tasks.js";
import { onAssignTask } from "./dashboard.js";

export async function onDeleteTask(ev) {
    document.getElementById('deleteModal').style.display = 'none';
    await deleteTask(ev.target.dataset.taskid);
    onAssignTask();
}