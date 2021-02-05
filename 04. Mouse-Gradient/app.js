function attachGradientEvents() {
    const item = document.getElementById('gradient');
    const result = document.getElementById('result');
    item.addEventListener('mousemove', move);
    item.addEventListener('mouseout', exitItem);


    function move(event) {
        let x = event.offsetX;
        x /= event.target.clientWidth - 1;
        x = Math.trunc(x * 100);
        result.textContent = `${x}%`;
    }
    function exitItem(event){
        result.textContent = '';
    }
}