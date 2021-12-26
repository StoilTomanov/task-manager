import { main } from "../app.js";

export function toggleNav(ev) {
    const li = document.querySelectorAll('[class="navLi"]');
    const toggleOpen = document.getElementById('toggleOpen');
    const toggleClose = document.getElementById('toggleClose');
    const navigation = document.querySelector('[id="navbar"]');

    if (ev.target.id == 'toggleOpen') {
        toggleOpen.style.display = 'none';
        toggleClose.style.display = 'inline-block';

        li.forEach(item => item.style.display = 'inline-block');
        navigation.style.width = '16%';
        main.style.marginLeft = "18%";

    } else if (ev.target.id == 'toggleClose') {
        toggleOpen.style.display = 'inline-block';
        toggleClose.style.display = 'none';

        li.forEach(item => item.style.display = 'none');
        navigation.style.width = '5%';
        main.style.marginLeft = "7%";

    }
    //TODO: fix the show / hide nav for phone resolution

}