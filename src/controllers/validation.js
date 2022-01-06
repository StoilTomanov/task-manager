export function onPassCheck(ev) {
    const ignoreKeys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Insert', 'Delete', 'Escape', 'Tab', 'CapsLock', 'Shift', 'Control', 'OS', 'Alt', 'AltGraph', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace', 'Dead', 'Enter'];
    let poor;
    let good;
    let strong;
    /*
        - at least 6 char long
        - at least 1 special char
        - at least 1 digit
    */
    if (!ignoreKeys.includes(ev.key)) {
        console.log(ev.target.value);

    }
}