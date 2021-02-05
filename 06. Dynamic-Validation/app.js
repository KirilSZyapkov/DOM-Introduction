function validate() {
    document.getElementById('email').addEventListener('change', onChange);
    const patern = /(^[a-z]+)@([a-z]+).[a-z]+$/g;

    function onChange(e) {
        let txt = e.target.value;
        if (txt.match(patern)) {
            e.target.className = '';
        } else {
            e.target.className = 'error';
        }
    }
}