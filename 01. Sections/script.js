function create(words) {
    let divContent = document.getElementById('content');
    divContent.addEventListener('click', reveal);

    for (let word of words) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.style.display = 'none';
        p.textContent = word;
        div.appendChild(p);
        divContent.appendChild(div);
    }

    function reveal(e) {
        let tar = e.target;
        let child;
        if (tar.tagName === 'DIV') {
            child = tar.firstChild;
        } else if (tar.tagName === 'P') {
            child = tar;
        }
        // child.style.display = '';
        // console.log(child[0])
        if (child.style.display === 'none') {
            child.style.display = '';
        } else {
            child.style.display = 'none';
        }
    }
}