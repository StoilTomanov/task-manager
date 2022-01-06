export function onPassCheck(ev) {
    const ignoreKeys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Insert', 'Delete', 'Escape', 'Tab', 'CapsLock', 'Shift', 'Control', 'OS', 'Alt', 'AltGraph', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace', 'Dead', 'Enter'];
    let input = ev.target;
    let pattern = /^(?=.*[a-z])(?=.*[0-9])(?=.*\W).+$/;

    /*
    for strong password
        - at least 8 char long
        - at least 1 special char
        - at least 1 digit
    */

    // check input pattern attribute

    if (!ignoreKeys.includes(ev.key)) {
        if (pattern.test(input.value)) {
            if (input.value.length < 4) {
                console.log('1 poor');
            } else if (input.value.length == 4) {
                console.log('2 poor');
            } else if (input.value.length == 5) {
                console.log('3 fair');
            } else if (input.value.length == 6) {
                console.log('4 good');
            } else if (input.value.length == 7) {
                console.log('5 good');
            } else if (input.value.length > 7) {
                console.log('6 strong');
            }
        } else {
            console.log('invalid');
        }
    }
}