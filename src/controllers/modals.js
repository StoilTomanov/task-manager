import { updateTask } from "../api/tasks.js";
let taskIdentifier;

export function loadModal(ev) {
    taskIdentifier = ev.target.dataset.id
    const assignModal = document.getElementById(ev.target.dataset.modaltype);
    assignModal.style.display = 'block';
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

export async function onAssignTask(ev) {
    ev.preventDefault();
    const selectedMember = document.getElementById('emp-username').value;
    const currentDate = new Date().toDateString().split(' ');
    await updateTask({ assignedTo: selectedMember, status: 'Assigned', assignedOn: `${currentDate[1]}-${currentDate[2]}-${currentDate[3]}` }, taskIdentifier)
    closeModal();
    //TODO: make the taskCount work
}