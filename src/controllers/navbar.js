import { main } from "../app.js";

export function toggleNav(ev) {
    const li = document.querySelectorAll('[class="navLi"]');
    const toggleOpen = document.getElementById('toggleOpen');
    const toggleClose = document.getElementById('toggleClose');
    const navigation = document.querySelector('[id="navbar"]');
    navigation.style.transition = '0.3s';
    main.style.transition = '0.3s';

    if (ev.target.id == 'toggleOpen') {
        toggleOpen.style.display = 'none';
        toggleClose.style.display = 'inline-block';

        li.forEach(item => item.style.display = 'inline-block');
        if (window.screen.width < 600) {
            navigation.style.width = '35%';
            main.style.marginLeft = "0%";
        } else if (window.screen.width > 600) {
            navigation.style.width = '12%';
            main.style.marginLeft = "0%";
        }
    } else if (ev.target.id == 'toggleClose') {
        toggleOpen.style.display = 'inline-block';
        toggleClose.style.display = 'none';

        li.forEach(item => item.style.display = 'none');
        if (window.screen.width < 600) {
            navigation.style.width = '8%';
            main.style.marginLeft = "-42%";
        } else if (window.screen.width > 600) {
            navigation.style.width = '3.3%';
            main.style.marginLeft = "-10%";
        }
    }
}