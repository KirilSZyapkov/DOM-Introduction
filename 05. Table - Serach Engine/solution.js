function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    const elements = Array.from(document.querySelectorAll('tbody>tr'));
    const input = document.getElementById('searchField');

    function onClick() {
        let txt = input.value.toLocaleLowerCase();
        for (let element of elements) {
            let tr = element;
            let line = Array.from(element.children);
            if (line[0].textContent.toLocaleLowerCase().includes(txt) || line[1].textContent.toLocaleLowerCase().includes(txt) || line[2].textContent.toLocaleLowerCase().includes(txt)) {
                tr.classList.add('select');

            } else {
                tr.classList.remove('select');

            }

        }
        input.value = '';
    }
}