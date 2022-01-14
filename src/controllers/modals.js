import { updateTask } from "../api/tasks.js";
import { onAssignTask } from './dashboard.js'
let taskIdentifier;

export function loadModal(ev) {
    taskIdentifier = ev.target.dataset.id;
    const modalType = document.getElementById(ev.target.dataset.modaltype);
    modalType.style.display = 'block';

    if (ev.target.dataset.modaltype == 'deleteModal') {
        document.getElementById('deleteConfirm').setAttribute('data-taskId', taskIdentifier);
    } else if (ev.target.dataset.modaltype == 'cancelModal') {
        document.getElementById('cancelConfirm').setAttribute('data-taskId', taskIdentifier);
    }
}

export function closeModal(ev) {
    if (ev != undefined && ev.target != undefined) {
        if (ev.target.dataset.modaltype) {
            const assignModal = document.getElementById(ev.target.dataset.modaltype);
            assignModal.style.display = 'none';
        }
    } else {
        const assignModal = document.getElementById('assignModal');
        assignModal.style.display = 'none';
    }
}

export async function onAssignTaskForm(ev) {
    ev.preventDefault();
    const selectedMember = document.getElementById('emp-username').value;
    const currentDate = new Date().toDateString().split(' ');
    await updateTask({ assignedTo: selectedMember, status: 'Assigned', assignedOn: `${currentDate[1]}-${currentDate[2]}-${currentDate[3]}` }, taskIdentifier)
    onAssignTask();
    closeModal();
    //TODO: consider adding a task counter in the dropdown menu in the assignModal
    //TODO: load tasks only for the current team/company (filter by org. id)
}