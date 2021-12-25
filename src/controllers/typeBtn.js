export function onTypeChoice(ev) {
    const target = ev.target;
    const teamForm = document.getElementById('team-form');
    const individualForm = document.getElementById('ind-form');

    if (target.tagName == 'BUTTON') {
        if (target.id == 'team') {
            target.style.backgroundColor = 'rgb(180, 220, 255)';
            target.parentElement.children[1].style.backgroundColor = 'rgb(255, 255, 255)';
            target.parentElement.children[1].style.fontWeight = 'normal';
            target.parentElement.children[0].style.fontWeight = 'bold';
            teamForm.style.display = 'inline-block';
            individualForm.style.display = 'none';
        } else if (target.id == 'individual') {
            target.style.backgroundColor = 'rgb(180, 220, 255)';
            target.parentElement.children[0].style.backgroundColor = 'rgb(255, 255, 255)';
            target.parentElement.children[0].style.fontWeight = 'normal';
            target.parentElement.children[1].style.fontWeight = 'bold';
            teamForm.style.display = 'none';
            individualForm.style.display = 'inline-block';
        }
    }
}