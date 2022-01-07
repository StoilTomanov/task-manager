export function onPassCheck(ev) {
    const ignoreKeys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Insert', 'Delete', 'Escape', 'Tab', 'CapsLock', 'Shift', 'Control', 'OS', 'Alt', 'AltGraph', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Dead', 'Enter'];
    let input = ev.target;
    let pattern = /^(?=.*[a-z])(?=.*[0-9])(?=.*\W).+$/;

    /*
    for strong password
        - at least 8 char long
        - at least 1 special char
        - at least 1 digit
    */
    const teamCheckLevel = document.getElementById('team-check');
    const indCheckLevel = document.getElementById('ind-check');
    const parent = ev.target.parentElement;

    if (parent.id == 'ind-form') {
        teamCheckLevel.style.display = 'none';
        if (input.value != '') {
            indCheckLevel.style.display = 'block';
        } else {
            indCheckLevel.style.display = 'none';
        }
    } else if (parent.id == 'team-form') {
        indCheckLevel.style.display = 'none';
        if (input.value != '') {
            teamCheckLevel.style.display = 'block';
        } else {
            teamCheckLevel.style.display = 'none';
        }
    }


    if (!ignoreKeys.includes(ev.key)) {
        const children = parent.children[4].children
        Array.from(children).forEach(ch => ch.style.backgroundColor = '');

        if (pattern.test(input.value)) {
            if (input.value.length < 4) {
                children[0].style.backgroundColor = 'rgb(243, 1, 1)';
            } else if (input.value.length >= 4 && input.value.length < 5) {
                children[0].style.backgroundColor = 'rgb(243, 1, 1)';
                children[1].style.backgroundColor = 'rgb(240, 126, 81)';
            } else if (input.value.length >= 5 && input.value.length < 6) {
                children[0].style.backgroundColor = 'rgb(243, 1, 1)';
                children[1].style.backgroundColor = 'rgb(240, 126, 81)';
                children[2].style.backgroundColor = 'rgb(226, 167, 5)';
            } else if (input.value.length >= 6 && input.value.length < 7) {
                children[0].style.backgroundColor = 'rgb(243, 1, 1)';
                children[1].style.backgroundColor = 'rgb(240, 126, 81)';
                children[2].style.backgroundColor = 'rgb(226, 167, 5)';
                children[3].style.backgroundColor = 'rgb(231, 216, 3)';
            } else if (input.value.length >= 7 && input.value.length < 8) {
                children[0].style.backgroundColor = 'rgb(243, 1, 1)';
                children[1].style.backgroundColor = 'rgb(240, 126, 81)';
                children[2].style.backgroundColor = 'rgb(226, 167, 5)';
                children[3].style.backgroundColor = 'rgb(231, 216, 3)';
                children[4].style.backgroundColor = 'rgb(158, 223, 54)';
            } else if (input.value.length >= 8) {
                children[0].style.backgroundColor = 'rgb(243, 1, 1)';
                children[1].style.backgroundColor = 'rgb(240, 126, 81)';
                children[2].style.backgroundColor = 'rgb(226, 167, 5)';
                children[3].style.backgroundColor = 'rgb(231, 216, 3)';
                children[4].style.backgroundColor = 'rgb(158, 223, 54)';
                children[5].style.backgroundColor = 'rgb(1, 240, 13)';
            }
        } else {
            if (input.value.length <= 2) {
                children[0].style.backgroundColor = 'rgb(243, 1, 1)';
            } else if (input.value.length >= 3 && input.value.length < 4) {
                children[0].style.backgroundColor = 'rgb(243, 1, 1)';
                children[1].style.backgroundColor = 'rgb(240, 126, 81)';
            } else if (input.value.length >= 4 && input.value.length < 6) {
                children[0].style.backgroundColor = 'rgb(243, 1, 1)';
                children[1].style.backgroundColor = 'rgb(240, 126, 81)';
                children[2].style.backgroundColor = 'rgb(226, 167, 5)';
            } else if (input.value.length >= 6) {
                children[0].style.backgroundColor = 'rgb(243, 1, 1)';
                children[1].style.backgroundColor = 'rgb(240, 126, 81)';
                children[2].style.backgroundColor = 'rgb(226, 167, 5)';
                children[3].style.backgroundColor = 'rgb(231, 216, 3)';
            }
        }
    }
}