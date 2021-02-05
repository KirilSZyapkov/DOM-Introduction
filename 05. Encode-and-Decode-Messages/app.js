function encodeAndDecodeMessages() {
    let field = document.querySelectorAll('textarea');
    let btns = document.querySelectorAll('button');


    btns[0].addEventListener('click', () => {
        let message = Array.from(field[0].value);
        let codeMessage = [];
        for (let el of message) {
            el = el.charCodeAt();
            el++;
            el = String.fromCharCode(el);
            codeMessage.push(el);
            field[1].value = codeMessage.join('');
            field[0].value = '';
        }
    });

    btns[1].addEventListener('click', () => {
        let toDecode = Array.from(field[1].value);
        let toPrint = [];
        for (let letr of toDecode) {
            letr = letr.charCodeAt();
            letr--;
            letr = String.fromCharCode(letr);
            toPrint.push(letr);
        }
        field[1].value = '';
        field[1].value = toPrint.join('');

    });
}