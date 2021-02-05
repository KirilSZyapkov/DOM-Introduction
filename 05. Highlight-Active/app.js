function focus() {
    let input =document.querySelectorAll('input');
    for(let a =0; a<input.length;a++){
        input[a].addEventListener('focus', focusEvent);
        input[a].addEventListener('blur', blurTarget);
    }


    function focusEvent(e) {
        let parent = e.target.parentNode;
        parent.className = 'focused';
    }

    function blurTarget(e) {
        let parent = e.target.parentNode;
        parent.className = '';
    }
}