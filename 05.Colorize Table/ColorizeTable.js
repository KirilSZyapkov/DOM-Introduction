function colorize() {
    let tr = document.querySelectorAll('tr');
    console.log(tr);
    for (let a = 1; a < tr.length; a+=2) {
       tr[a].style.backgroundColor = 'teal';
    }
}