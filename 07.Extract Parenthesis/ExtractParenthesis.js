function extract(content) {
    let pattern = /(\([A-z ]+\))/g
    let text = document.getElementById(content);
    let word = text.textContent.match(pattern);

    return word.join('').split('(').join('').split(')').join('; ').trim();
}