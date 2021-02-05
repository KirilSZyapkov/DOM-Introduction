function deleteByEmail() {
    const inputText = document.getElementsByName('email')[0].value;
    const tableData = document.querySelectorAll('tbody tr');
    const resultText = document.getElementById('result');
    let isNotFound = true;

    for (let row of tableData) {
        let cell = row.children;
        let cellContent = cell[1].textContent;

        if (cellContent === inputText) {
            row.remove();
            resultText.textContent = 'Deleted.';
            isNotFound = false;
        }
    }
    if(isNotFound){
        resultText.textContent = 'Not found.';
    }
}