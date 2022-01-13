import { createTask } from "../api/tasks.js";

export async function onCreateTask(ev) {
    ev.preventDefault();
    const description = document.getElementById('description');
    const expectedDate = document.getElementById('calendar')
    expectedDate.value.split('-');
    const currentDate = new Date().toDateString().split(' '); // use in the assing function

    const months = {
        [1]: 'January',
        [2]: 'February',
        [3]: 'March',
        [4]: 'April',
        [5]: 'May',
        [6]: 'June',
        [7]: 'July',
        [8]: 'August',
        [9]: 'September',
        [10]: 'October',
        [11]: 'November',
        [12]: 'December',
    }

    if (expectedDate[0] != '' && description.value != '') {
        await createTask({ description: description.value, expectedOn: `${months[Number(expectedDate.value.split('-')[1])]}-${expectedDate.value.split('-')[2]}-${expectedDate.value.split('-')[0]}`, assignedOn: 'Not assigned', assignor: sessionStorage.username, status: 'Unassigned', createdOn: `${currentDate[1]}-${currentDate[2]}-${currentDate[3]}`, taskIdentifier: sessionStorage.teamId, })
        const msg = document.getElementById('message');
        msg.style.display = 'block';
        setTimeout(() => {
            msg.style.display = 'none';
        }, 3000);
        description.value = '';
        expectedDate.value = '';
    } else {
        alert('Please enter description and expected date.')
    }

}