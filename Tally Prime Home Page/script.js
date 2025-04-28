const divs = document.querySelectorAll('.selectable');

    divs.forEach(div => {
        div.addEventListener('click', () => {
            divs.forEach(d => d.classList.remove('selected')); // remove highlight from all
            div.classList.add('selected'); // add to the clicked one
        });
    });