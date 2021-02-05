function sumTable() {
    let tbody = document.querySelectorAll('table td');

    let arr = tbody;
    let sum = 0;

    for (let a = 1; a < arr.length - 1; a += 2) {
        sum += Number(arr[a].textContent);

    }
    document.getElementById('sum').textContent = sum;
}