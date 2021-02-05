function solve() {
    const inputText = document.getElementById('input').value;
    const output = document.getElementById('output');

    const curP = [];
    let txt = inputText.split('.');
    txt.length = txt.length - 1;
    let len = txt.length;
    for (let a = 0; a < len; a++) {

        let line = txt.shift();
        curP.push(line);
        if (curP.length === 3) {
            const p = document.createElement('p');
            p.textContent = curP.join('.');
            p.textContent += '.';
            curP.length = 0;
            output.appendChild(p);
        } else if (txt.length === 0) {
            const p = document.createElement('p');
            p.textContent = curP.join('.');
            p.textContent += '.';
            curP.length = 0;
            output.appendChild(p);
        }

    }
}