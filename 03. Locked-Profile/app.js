function lockedProfile() {
    const btns = Array.from(document.querySelectorAll('button'));
    for (let btn of btns) {
        btn.addEventListener('click', showMore);
    }

    function showMore(e) {
        let tar = e.target
        let child = tar.parentNode;
        let toShow = child.querySelector('div');

        let isLocked = child.querySelector('input').checked;

        if(isLocked) return;
        if(toShow.style.display === undefined || toShow.style.display === ''){
            toShow.style.display = 'block';
            tar.textContent = 'Hide it';
        } else {
            toShow.style.display = '';
            tar.textContent = 'Show more';
        }

    }
}