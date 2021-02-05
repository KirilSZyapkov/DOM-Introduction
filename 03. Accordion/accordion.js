function toggle() {
    let btn = document.querySelector('.button');
    let text = document.getElementById('extra');
    if (text.style.display === '' || text.style.display === 'none') {
        text.style.display = 'block';
        btn.textContent = 'Less';
    } else if (text.style.display === 'block' || text.style.display === 'inline') {
        text.style.display = 'none';
        btn.textContent = 'More';
    }
}