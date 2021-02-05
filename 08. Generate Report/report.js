function generateReport() {
    const headerData = document.querySelectorAll("table tr");
    const tableData = document.querySelectorAll('tbody tr');
    const report = document.getElementById('output');
    let result = []
    for (let a = 0; a < headerData.length - 1; a++) {
        let cols = headerData[0].children;
        let staff = {};

        for (let b = 0; b < cols.length; b++) {
            let cell = cols[b].children;
            let isChecked = cell[0].checked;

            if (isChecked) {
                let innerCell = tableData[a].children;
                for (let c = a; c < a + 1; c++) {
                    let name = cols[b].textContent.toLocaleLowerCase().trim();
                    let txt = innerCell[b].textContent;
                    staff[name] = txt;
                }
            }
        }
        let entries = Object.entries(staff);
        if (entries.length > 0) {
            result.push(staff);
        }

    }
    if (result.length > 0) {
        let toPrint = JSON.stringify(result);
        report.textContent = toPrint;
    }

}